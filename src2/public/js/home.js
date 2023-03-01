const input = document.getElementById("searchInput");

const searchProductsBy = (type) => {
    let param = document.getElementById("searchInput").value;
    window.location.replace(`/?type=${type}&param=${param}`);
}