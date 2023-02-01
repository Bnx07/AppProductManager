// import ProductManager from "../productManager"; // NECESITO USAR REQUIRE
const productManager = require('../productManager');

const pm = new productManager('./');

console.log("ENtre")

const addProduct = () => {
    let values = [];
    let tagsList = [];

    const tags = document.getElementsByClassName("tagInput");
    const inputs = document.getElementsByClassName("formInput");

    for (var i = 0; i < inputs.length; i ++) {
        var value = inputs[i].value
        values.push(value);
    }

    for (var i = 0; i < tags.length; i ++) {
        var tag = tags[i].value
        tagsList.push(tag);
    }

    const newProduct = {
        name: values[0],
        category: values[1],
        price: values[2],
        stock: values[3],
        tags: tagsList
    }

    pm.addProduct(newProduct);
}