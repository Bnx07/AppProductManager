import fs from 'fs';

export default class productManager {
    constructor() {
        console.log("ProductManager initialized");
        this.path = "../../";
        
        if (!fs.existsSync(`${this.path}products.json`)) {
            let objects = [{id: 0, category: "none", title: "none", price: 0, stock: 0}];
    
            objects = JSON.stringify(objects);
            fs.writeFileSync(`${this.path}products.json`, objects);
        }
    }

    getAll = async() => {
        return objects = await JSON.parse(fs.readFileSync(`${this.path}productos.json`, "utf-8"));
    }

    getOne = async(type, param) => {
        let objects = await JSON.parse(fs.readFileSync(`${this.path}productos.json`, "utf-8"));

        let idToSearch = (element) => element.id === param;

        switch (type) {
            case "title":
                idToSearch = (element) => element.title === param;
                break;

            case "id":
                idToSearch = (element) => element.id === param;
                break;

            case "category":
                idToSearch = (element) => {
                    if (element.category == param) {
                        products.push(element);
                    }}
        }

        if (type != "category") {
            let position = await objects.findIndex(idToSearch);
            if (position == -1) {
                return 'Product not found';
            }
            return objects[position];
        }
    
        let products = [];
        objects.forEach(idToSearch);
    }

    createOne = async(object) => {
        let objects = await JSON.parse(fs.readFileSync(`${this.path}productos.json`, "utf-8"));
        let lastProduct = await objects.pop()

        objects.push(lastProduct);
        product.id = await lastProduct.id+1;

        objects.push(product);

        objects = JSON.stringify(objects);
        fs.writeFileSync(`${this.path}productos.json`, objects);
        return "Product added";
    }

    editOne = async(product) => {
        let objects = await JSON.parse(fs.readFileSync(`${this.path}productos.json`));

        let idToSearch = (element) => element.id === id;
        let position = await objects.findIndex(idToSearch);
        
        if (position === -1) {
            return 'Product not found';
        } else {
            let oldProduct = objects[position];

            if (product.title) oldProduct.title = product.title;
            if (product.price) oldProduct.price = product.price;
            if (product.stock) oldProduct.stock = product.stock;
            if (product.category) oldProduct.category = product.category;
            if (product.thumbnail) oldProduct.thumbnail = product.thumbnail;

            objects.splice(position, 1, product);

            objects = JSON.stringify(objects);
            fs.writeFileSync(`${this.path}productos.json`, objects);

            return product;
        }
    }
}