const containerSearch = document.getElementById("search-container")

const itemSearch = [

    {
        marca: "Samsung",
        title: "A53 SM-A536E BLANCO",
        price: 163.999,
        id: "CODM01",
        image: "../img/samsung2-removebg-preview.png"
    },
    {
        marca: "Samsung",
        title: "S21 SM-G990E GRAFITO",
        price: 249.999,
        id: "CODM02",
        image: "../img/samsung3-removebg-preview.png"
    },
    {
        marca: "Samsung",
        title: "GALAXY A13 SM-A135M",
        price: 82.999,
        id: "CODM03",
        image: "../img/samsung4-removebg-preview.png"
    },
    {
        marca: "Apple",
        title: "IPHONE 13 MINI MLK13",
        price: 562.899,
        id: "CODM04",
        image: "../img/iphone1-removebg-preview.png"
    },
    {
        marca: "Apple",
        title: "IPHONE 13 256GB PINK",
        price: 789.999,
        id: "CODM05",
        image: "../img/iphone3-removebg-preview.png"
    },
    {
        marca: "Xiaomi",
        title: "REDMI NOTE 11 K7TL",
        price: 97.999,
        id: "CODM06",
        image: "../img/xiaomi1-removebg-preview.png"
    },
    {
        marca: "Xiaomi",
        title: "REDMI NOTE 11 K7TL",
        price: 97.999,
        id: "CODM07",
        image: "../img/xiaomi2-removebg-preview.png"
    },
    {
        marca: "Samsung",
        title: "65 QLED 4K Q65B",
        price: 419.999,
        id: "CODT01",
        image: "../img/tv-samsung1.png"
    },
    {
        marca: "Samsung",
        title: "55 QLED 4K Q65B",
        price: 254.999,
        id: "CODT02",
        image: "../img/tv-samsung2.png"
    },
    {
        marca: "Samsung",
        title: "50 UHD 4K Smart TV AU7000",
        price: 143.999,
        id: "CODT03",
        image: "../img/tv-samsung3.png"
    },
    {
        marca: "Samsung",
        title: "55 UHD 4K Smart TV AU7000",
        price: 175.499,
        id: "CODT04",
        image: "../img/tv-samsung4.png"
    },
    {
        marca: "Xiaomi",
        title: "AMAZFIT GTS 4 MINI",
        price: 60.399,
        id: "CODW01",
        image: "../img/xiaomi-watch1.png"
    },
    {
        marca: "Xiaomi",
        title: "WATCH S1 ACTIVE GL",
        price: 59.999,
        id: "CODW02",
        image: "../img/xiaomi-watch2.png"
    },
    {
        marca: "Xiaomi",
        title: "KIESLECT L11 PRO",
        price: 26.599,
        id: "CODW03",
        image: "../img/xiaomi-watch3.png"
    }
 
]
const renderSearch = (item) => {
    // containerSearch.innerHTML = ""
    item.forEach(item => {
        const elementitem = document.createElement("li"); 

        elementitem.innerHTML = `

                    <a href="./html/product.html">
                        <img src="${item.image}" height="80px">
                        </img>
                        <div>
                            <p>${item.marca} ${item.title}</p>
                            <p>$${item.price}</p>
                        </div>
                    </a>
        `
        containerSearch.appendChild(elementitem)
    });
}

renderSearch(itemSearch)


document.getElementById("input-search").addEventListener("keyup", search);

const input_search = document.getElementById("input-search");

function search(){
    filter = input_search.value.toUpperCase();
    li = containerSearch.getElementsByTagName("li");

    if(input_search.value === ""){

        containerSearch.style.display = "none";

    }else{

        containerSearch.style.display = "flex";
        for(i = 0; i < li.length; i++){

            a = li[i].getElementsByTagName("a")[0];
            textValue = a.textContent || a.innerText;
    
            if(textValue.toUpperCase().indexOf(filter) > -1){
    
                li[i].style.display = "";
    
            }else{
    
                li[i].style.display = "none";
    
            }
    
        }

    }
    
}
