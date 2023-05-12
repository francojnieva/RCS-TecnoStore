const containerProductMobile = document.getElementById("mobile-container")
const containerProductWatch = document.getElementById("watch-container")
const containerProductTelevision = document.getElementById("television-container")
const iconCart = document.getElementById("iconCart")

const product = [
    // MÓVILES
    {
        id: "mobile1",
        marca: "Samsung",
        description: "A53 SM-A536E BLANCO",
        price: 163999,
        code: "CODM01",
        image: "./img/samsung2-removebg-preview.png",
        category: {
            id:"mobile"
        }
    },
    {
        id: "mobile2",
        marca: "Samsung",
        description: "SM-G990E S21 GRAFITO",
        price: 249999,
        code: "CODM02",
        image: "./img/samsung3-removebg-preview.png",
        category: {
            id:"mobile"
        }
    },
    {
        id: "mobile3",
        marca: "Samsung",
        description: "GALAXY A13 SM-A135M",
        price: 82999,
        code: "CODM03",
        image: "./img/samsung4-removebg-preview.png",
        category: {
            id:"mobile"
        }
    },
    {
        id: "mobile4",
        marca: "Apple",
        description: "IPHONE 13 MINI MLK13",
        price: 562899,
        code: "CODM04",
        image: "./img/iphone1-removebg-preview.png",
        category: {
            id:"mobile"
        }
    },
    {
        id: "mobile5",
        marca: "Apple",
        description: "IPHONE 13 256GB PINK",
        price: 789999,
        code: "CODM05",
        image: "./img/iphone3-removebg-preview.png",
        category: {
            id:"mobile"
        }
    },
    {
        id: "mobile6",
        marca: "Xiaomi",
        description: "REDMI NOTE 11 K7TL",
        price: 97999,
        code: "CODM06",
        image: "./img/xiaomi1-removebg-preview.png",
        category: {
            id:"mobile"
        }
    },
    {
        id: "mobile7",
        marca: "Xiaomi",
        description: "REDMI NOTE 11 K7TL",
        price: 97999,
        code: "CODM07",
        image: "./img/xiaomi2-removebg-preview.png",
        category: {
            id:"mobile"
        }
    },
    // RELOJES
    {
        id: "watch1",
        marca: "Xiaomi",
        description: "AMAZFIT GTS 4 MINI",
        price: 60399,
        code: "CODW01",
        image: "./img/xiaomi-watch1.png",
        category: {
            id:"watch"
        }
    },
    {
        id: "watch2",
        marca: "Xiaomi",
        description: "WATCH S1 ACTIVE GL",
        price: 59999,
        code: "CODW02",
        image: "./img/xiaomi-watch2.png",
        category: {
            id:"watch"
        }
    },
    {
        id: "watch3",
        marca: "Xiaomi",
        description: "KIESLECT L11 PRO",
        price: 26599,
        code: "CODW03",
        image: "./img/xiaomi-watch3.png",
        category: {
            id:"watch"
        }
    },
    // TELEVISORES
    {
        id: "tv1",
        marca: "Samsung",
        description: "65 QLED 4K Q65B",
        price: 419999,
        code: "CODT01",
        image: "./img/tv-samsung1.png",
        category: {
            id:"tv"
        }
    },
    {
        id: "tv2",
        marca: "Samsung",
        description: "55 QLED 4K Q65B",
        price: 254999,
        code: "CODT02",
        image: "./img/tv-samsung2.png",
        category: {
            id:"tv"
        }
    },
    {
        id: "tv3",
        marca: "Samsung",
        description: "50 UHD 4K Smart TV AU7000",
        price: 143999,
        code: "CODT03",
        image: "./img/tv-samsung3.png",
        category: {
            id:"tv"
        }
    },
    {
        id: "tv4",
        marca: "Samsung",
        description: "55 UHD 4K Smart TV AU7000",
        price: 175499,
        code: "CODT04",
        image: "./img/tv-samsung4.png",
        category: {
            id:"tv"
        }
    }
]

const productsMobile = product.slice(0, 7)
const productsWatch = product.slice(7, 10)
const productsTelevision = product.slice(10)


function renderProducts(product, section) {
    product.forEach((product) => {
      const productElement = document.createElement("div")
    //   productElement.classList.add("product")
      productElement.innerHTML = `
        <div class="card card-mobile" data-aos="fade-up">
            <img src=${product.image} class="card-img-top" alt="Celular de la marca Samsung">
            <div class="card-body">
                <h5 class="card-title" id="${product.marca}">${product.marca}</h5>
                <p class="card-text">${product.description}</p>
                <p class="price price-mobile">$${product.price}</p>
                <p class="keys">${product.code}</p>
                <button class="btn btn-primary" id="${product.id}" onclick="addToCart('${product.id}')">Agregar al carrito</button>
            </div>
        </div>
      `
      section.appendChild(productElement)

    })
}

renderProducts(productsMobile, containerProductMobile)
renderProducts(productsWatch, containerProductWatch)
renderProducts(productsTelevision, containerProductTelevision)

let cart = [] 

function addToCart(productId) {
    const productToAdd = product.find((product) => product.id === productId) // Busco el producto en el array

    cart.push(productToAdd)  // Agrego el producto al carrito

    localStorage.setItem("cart", JSON.stringify(cart)) // seteo con clave "cart" los productos
}

function cartView() {
    const cartQuantity = document.getElementById("cart-quantity")
    const cartList = document.getElementById("cart-list")

    
    cartQuantity.innerText = ""
    cartList.innerHTML = ""

    cartQuantity.innerText = cart.length; // Según la longitud del array, es la cantidad que hay

    cart.forEach((item) => { // Lista de productos en el carrito en el modal
        const cartItem = document.createElement("li")
        cartItem.innerText = `${item.marca} - ${item.description} - $${item.price}` 

    
        const deleteButton = document.createElement("button") // Botón "Eliminar" para cada producto
        deleteButton.innerText = "Borrar"

        deleteButton.addEventListener("click", () => {
            removeFromCart(item.id)
        })

        cartItem.appendChild(deleteButton)

        cartList.appendChild(cartItem)
    })

    const cartTotalElement = document.getElementById("cart-total")
  
    let cartTotal = cart.reduce((acc, item) => acc + item.price, 0) // Calcula el total de precios

    cartTotal = cartTotal.toFixed(3) // Fijo el valor con tres decimales. Esto es un string, NO un número.

    cartTotalElement.innerText = `Total: $ ${cartTotal}`
}

function removeFromCart(productId) {
    const productIndex = cart.findIndex((product) => product.id === productId) // Busca el índice del producto 

    if (productIndex !== -1) {  // Si se encontró el producto, elimino del array
        cart.splice(productIndex, 1)

        localStorage.setItem("cart", JSON.stringify(cart)) // seteo con clave "cart" los productos
      
        cartView() 
    }
}

iconCart.addEventListener("click", () => {
    const cartModal = new bootstrap.Modal(document.getElementById("cart-modal"), {
        backdrop: "static",
        keyboard: false
    });
    
    cartModal.show()
    
    loadCart()
})

function loadCart() {
    const storedCart = localStorage.getItem("cart")
    if (storedCart) {
      cart = JSON.parse(storedCart);
      cartView() 
    }
}