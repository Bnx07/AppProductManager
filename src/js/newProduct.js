import ProductManager from "../productManager"; // NECESITO USAR REQUIRE

const inputs = document.getElementsByClassName("formInput");

const pm = new ProductManager('./');

const agregarProducto = () => {
    const tags = document.getElementsByClassName("tagInput");

    const tagsList = [];
    tags.forEach(element => {
        tagsList.push(element);
    });
    const newProduct = {
        name: inputs[0],
        category: inputs[1],
        price: inputs[2],
        stock: inputs[3],
        tags: tagsList
    }

    pm.addProduct(newProduct);
}