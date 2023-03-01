/* Cerrar ventana onclick a un elemento */

// onclick="window.close()"
// Reemplazar en Electron por 
// const { remote } = require('electron');
// document.getElementById('cerrar-btn').addEventListener('click', () => {
//   let ventanaActual = remote.getCurrentWindow();
//   ventanaActual.close();
// });

// Tratar de hacer que si es click en un elemento con URL, que redirija ahi, tal vez algo como remote.getAllWindows() y hacer que cierre todas menos actual

/* Cargar productos tras busqueda */

//fetch api

/* Agregar productos en nueva transacción */

const addProductSpace = () => {
    document.getElementById("products").innerHTML += '<div class="product"><p class="productTitle">ID</p><input type="number" class="productInput" placeholder="ID"><p class="productTitle">Cant</p><input type="number" class="productInput" placeholder="Cant"><p class="productTitle">Dto</p><input type="number" class="productInput" placeholder="10%"></div>';
}

/* Estaba antes, ni idea */

// const addTag = () => {
//     document.getElementById("tags").innerHTML += '<input type="text" class="tagInput" placeholder="Etiqueta">';
// }

