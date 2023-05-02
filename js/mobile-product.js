
const containerMobile = document.getElementById("mobile-container")

const productMobile = [
    {
        marca: "Samsung",
        title: "A53 SM-A536E BLANCO",
        price: 163.999,
        id: "CODM01",
        image: "./img/samsung2-removebg-preview.png"
    },
    {
        marca: "Samsung",
        title: "S21 SM-G990E GRAFITO",
        price: 249.999,
        id: "CODM02",
        image: "./img/samsung3-removebg-preview.png"
    },
    {
        marca: "Samsung",
        title: "GALAXY A13 SM-A135M",
        price: 82.999,
        id: "CODM03",
        image: "./img/samsung4-removebg-preview.png"
    },
    {
        marca: "Apple",
        title: "IPHONE 13 MINI MLK13",
        price: 562.899,
        id: "CODM04",
        image: "./img/iphone1-removebg-preview.png"
    },
    {
        marca: "Apple",
        title: "IPHONE 13 256GB PINK",
        price: 789.999,
        id: "CODM05",
        image: "./img/iphone3-removebg-preview.png"
    },
    {
        marca: "Xiaomi",
        title: "REDMI NOTE 11 K7TL",
        price: 97.999,
        id: "CODM06",
        image: "./img/xiaomi1-removebg-preview.png"
    },
    {
        marca: "Xiaomi",
        title: "REDMI NOTE 11 K7TL",
        price: 97.999,
        id: "CODM07",
        image: "./img/xiaomi2-removebg-preview.png"
    }

]

const renderMobile = (product) => {
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
        containerMobile.appendChild(elementProduct)
    });
}

renderMobile(productMobile)