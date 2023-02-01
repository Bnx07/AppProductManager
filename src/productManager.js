// import fs from 'fs';
const fs = require('fs');

class ProductManager {
    constructor(path) {
        this.path = path;
    }

    addProduct = async(product) => { // FUNCIONA ADAPTADA
        if (fs.existsSync(`${this.path}productos.json`)) { // Si el archivo existe, se lee y añade el dato
            let objects = await JSON.parse(fs.readFileSync(`${this.path}productos.json`, "utf-8"));
            let lastProduct = await objects.pop()
            objects.push(lastProduct);
            product.id = await lastProduct.id+1;
    
            objects.push(product);
    
            objects = JSON.stringify(objects);
            fs.writeFileSync(`${this.path}productos.json`, objects);
            return 'Product added';
        } else { // Si no existe, se crea con el producto directamente
            product.id = 0;
            let objects = [product];
    
            objects = JSON.stringify(objects);
            fs.writeFileSync(`${this.path}productos.json`, objects);
            return 'Product added';
        }
    }

    getProducts = async() => { // FUNCIONA ADAPTADA
        if (fs.existsSync(`${this.path}productos.json`)) { // Si el archivo existe, se lee y añade el dato
            const objects = await JSON.parse(fs.readFileSync(`${this.path}productos.json`, "utf-8"));
            return objects;

        } else { // Si no existe, se crea el archivo con el producto directamente
            return false;
        }
    }

    getProductByParam = async(type, param) => { // FUNCIONA ADAPTADA
        if (fs.existsSync(`${this.path}productos.json`)) {
            const objects = await JSON.parse(fs.readFileSync(`${this.path}productos.json`));
            let toSearch;
            try {
                if (type != 'id') param = param.trim();
            } catch(error) {
                console.log(error);
            }

            if (type == 'name') {
                toSearch = (element) => element.name === param;
            } else if (type == 'category') {
                toSearch = (element) => element.category === param;
            } else if (type == 'tag') {
                toSearch = (element) => element.tag === param;
            } else if (type == 'id') {
                toSearch = (element) => element.id == param;
            }

            // CAMBIAR ESTA PARTE, solo valido si es name o ID
            if (type == 'name' || 'id') {
                let position = await objects.findIndex(toSearch);
                if (position == -1) {
                    return 'Product not found';
                } else {
                    return objects[position];
                }
            } else {
                let returns = objects.filter(toSearch);
                return returns
            }
        } else {
            return false;
        }
    }

    updateProduct = async(id, upProduct) => { // FUNCIONA ADAPTADO
        if (fs.existsSync(`${this.path}productos.json`)) {
            let objects = await JSON.parse(fs.readFileSync(`${this.path}productos.json`));

            let idToSearch = (element) => element.id === id;
            let position = await objects.findIndex(idToSearch);
            
            if (position === -1) {
                return 'Product not found';
            } else {
                let product = objects[position];

                if (upProduct.title) product.name = upProduct.name;
                if (upProduct.price) product.price = upProduct.price;
                if (upProduct.stock) product.stock = upProduct.stock;
                if (upProduct.category) product.category = upProduct.category;
                if (upProduct.thumbnail) product.thumbnail = upProduct.thumbnail;
                if (upProduct.tags) product.tags = upProduct.tags;

                objects.splice(position, 1, product);
    
                objects = JSON.stringify(objects);
                fs.writeFileSync(`${this.path}productos.json`, objects);

                return product;
            }
        } else {
            return false;
        }
    }
}

// export default ProductManager;
module.exports = ProductManager;
