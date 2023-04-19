
const containerTelevision = document.getElementById("television-container")

const productTelevision = [
    {
        marca: "Samsung",
        title: "65 QLED 4K Q65B",
        price: 419.999,
        id: "CODT01",
        image: "./img/tv-samsung1.png"
    },
    {
        marca: "Samsung",
        title: "55 QLED 4K Q65B",
        price: 254.999,
        id: "CODT02",
        image: "./img/tv-samsung2.png"
    },
    {
        marca: "Samsung",
        title: "50 UHD 4K Smart TV AU7000",
        price: 143.999,
        id: "CODT03",
        image: "./img/tv-samsung3.png"
    },
    {
        marca: "Samsung",
        title: "55 UHD 4K Smart TV AU7000",
        price: 175.499,
        id: "CODT04",
        image: "./img/tv-samsung4.png"
    }
   
]

const renderTelevision = (product) => {
    // containerMobile.innerHTML = ""
    product.forEach(product => {
        const elementProduct = document.createElement("div"); // crea un nodo con un elemento HTML de tipo div

        elementProduct.classList.add("product") // agrega una clase llamada "product" al div 

        elementProduct.innerHTML = `
                <div class="card card-mobile">
                    <img src=${product.image} class="card-img-top" alt="Televisor de la marca Samsung">
                    <div class="card-body">
                        <h5 class="card-title">${product.marca}</h5>
                        <p class="card-text">${product.title}</p>
                        <p class="price price-mobile">$ ${product.price}</p>
                        <p class="keys">${product.id}</p>
                        <a href="#" class="btn btn-primary">Ver producto</a>
                    </div>
                </div>
        `
        containerTelevision.appendChild(elementProduct)
    });
}

renderTelevision(productTelevision)