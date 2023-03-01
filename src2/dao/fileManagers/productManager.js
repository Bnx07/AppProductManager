import fs from 'fs';

export default class productManager {
    constructor() {
        console.log("ProductManager initialized");
        this.path = "./";
        
        if (!fs.existsSync(`${this.path}products.json`)) {
            fs.writeFileSync(`${this.path}products.json`, "[]");
        }
    }

    getAll = async() => {
        let products = await JSON.parse(fs.readFileSync(`${this.path}products.json`, "utf-8"));
        return products
    }

    getOne = async(type, param) => {
        let products = await JSON.parse(fs.readFileSync(`${this.path}products.json`, "utf-8"));
        let found = [];

        let toSearch = (element) => element.id === param;

        switch (type) {
            case "title":
                toSearch = (element) => element.title === param;
                break;

            case "id":
                param = parseInt(param);
                toSearch = (element) => element.id === param;
                break;

            case "category":
                toSearch = (element) => {
                    if (element.category == param) {
                        found.push(element);
                    }}
                break;
        }

        if (type != "category") {
            let position = await products.findIndex(toSearch);
            if (position == -1) {
                return false;
            }
            return [products[position]];
        }

        products.forEach(toSearch);
        if (found.length == 0) {
            return false;
        }
        return found;
    }

    createOne = async(product) => {
        let objects = await JSON.parse(fs.readFileSync(`${this.path}products.json`, "utf-8"));
        let lastProduct = await objects.pop()

        objects.push(lastProduct);
        product.id = await lastProduct.id+1;

        objects.push(product);

        objects = JSON.stringify(objects);
        fs.writeFileSync(`${this.path}products.json`, objects);
        return "Product added";
    }

    editOne = async(product) => {
        let objects = await JSON.parse(fs.readFileSync(`${this.path}products.json`));

        let idToSearch = (element) => element.id === product.id;
        let position = await objects.findIndex(idToSearch);
        
        if (position === -1) {
            return 'Product not found';
        }

        let oldProduct = objects[position];

        if (product.title) {
            console.log("Modified title")
            oldProduct.title = product.title;
        }
        if (product.price) {
            console.log("Modified price")
            oldProduct.price = product.price;
        }
        if (product.stock) {
            console.log("Modified stock")
            oldProduct.stock = product.stock;
        }
        if (product.category) {
            console.log("Modified category")
            oldProduct.category = product.category;
        }
        if (product.thumbnail) {
            console.log("Modified thumbnail")
            oldProduct.thumbnail = product.thumbnail;
        }

        objects.splice(position, 1, oldProduct);

        objects = JSON.stringify(objects);
        fs.writeFileSync(`${this.path}products.json`, objects);

        return product;
    }
}