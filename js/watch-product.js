
const containerWatch = document.getElementById("watch-container")

const productWatch = [
    {
        marca: "Xiaomi",
        title: "AMAZFIT GTS 4 MINI",
        price: 60.399,
        id: "CODW01",
        image: "./img/xiaomi-watch1.png"
    },
    {
        marca: "Xiaomi",
        title: "WATCH S1 ACTIVE GL",
        price: 59.999,
        id: "CODW02",
        image: "./img/xiaomi-watch2.png"
    },
    {
        marca: "Xiaomi",
        title: "KIESLECT L11 PRO",
        price: 26.599,
        id: "CODW03",
        image: "./img/xiaomi-watch3.png"
    }
]

const renderWatch = (product) => {
    // containerMobile.innerHTML = ""
    product.forEach(product => {
        const elementProduct = document.createElement("div"); // crea un nodo con un elemento HTML de tipo div

        elementProduct.classList.add("product") // agrega una clase llamada "product" al div 

        elementProduct.innerHTML = `
                <div class="card card-mobile">
                    <img src=${product.image} class="card-img-top" alt="Celular de la marca Samsung">
                    <div class="card-body">
                        <h5 class="card-title">${product.marca}</h5>
                        <p class="card-text">${product.title}</p>
                        <p class="price price-mobile">$ ${product.price}</p>
                        <p class="keys">${product.id}</p>
                        <a href="#" class="btn btn-primary">Ver producto</a>
                    </div>
                </div>
        `
        containerWatch.appendChild(elementProduct)
    });
}

renderWatch(productWatch)