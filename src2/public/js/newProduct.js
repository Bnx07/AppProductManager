let form = document.getElementById("form");
form.addEventListener('submit', (event) => {
    event.preventDefault();
    
    const data = new FormData(form);
    const object = {};

    data.forEach((value, key) => {
        object[key] = value;
    })
    
    fetch('/api/products/', {
        method: 'POST',
        body: JSON.stringify(object),
        headers: {
            'Content-type': 'application/json'
        }
    }).then(result => result.json()).then(json => {
        if (json.status == "Ok") {
            alert("Producto añadido");
        } else if (json.status == "error") {
            alert(json.message);
        }
    });
})