const addTag = () => {
    document.getElementById("tags").innerHTML += '<input type="text" class="tagInput" placeholder="Etiqueta">';
}

const addProductSpace = () => {
    document.getElementById("products").innerHTML += '<div class="product"><p class="productTitle">ID</p><input type="number" class="productInput" placeholder="ID"><p class="productTitle">Cant</p><input type="number" class="productInput" placeholder="Cant"><p class="productTitle">Dto</p><input type="number" class="productInput" placeholder="10%"></div>';
}