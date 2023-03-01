let form = document.getElementById("dataZone");
let id = parseInt(document.getElementById("pid").innerHTML);

form.addEventListener('submit', (event) => {
    event.preventDefault();
    
    const data = new FormData(form);
    const object = {};

    data.forEach((value, key) => {
        object[key] = value;
    })
    object.id = id;
    
    if (object.title.trim().length == 0) delete object.title;
    if (object.stock.length == 0) delete object.stock;
    if (object.price.length == 0) delete object.price;
    if (object.category.trim().length == 0) delete object.category;

    console.log(object)
        
    fetch('/api/products/', {
        method: 'PUT',
        body: JSON.stringify(object),
        headers: {
            'Content-type': 'application/json'
        }
    }).then(result => result.json()).then(json => {
        if (json.status == "Ok") {
            alert("Producto modificado");
        } else if (json.status == "error") {
            alert(json.message);
        }
    });
})