const addTransaction = () => {
    let inputs = document.getElementsByClassName("productInput");
    let values = [];

    for (var i = 0; i < inputs.length; i ++) {
        var value = inputs[i].value
        values.push(value);
    }
    let products = [];

    while (values.length >= 1) {
        let object = {
            discount: values.pop(),
            quantity: values.pop(),
            id: values.pop()
        }
        if (object.discount < 100 && (object.quantity && object.id && object.discount) >= 0) {
            if (object.quantity != 0 && object.id != 0) {
                products.push(object);
            }
        }
    }
    console.log(products);
}