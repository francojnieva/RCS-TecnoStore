const sliderConteiner= document.getElementById("carouselExampleAutoplaying")

const imagenSlider = [
    {
        images1: "./img/slider1.jpg",
        images2: "./img/slider2.jpg",
        images3: "./img/slider1-mobile.jpg",
        images4: "./img/slider2-mobile.jpg"
    }
]


const renderSlider = (images) => {
    images.forEach(images => {
        const elementSlider = document.createElement("div")
        elementSlider.innerHTML =  `
        <div class="carousel-inner">
            <div class="carousel-item active">
                <img class="w-100 slider1-desktop" src=${images.images1} alt="Banner de celular">
                <img class="w-100 slider1-mobile" src=${images.images3} alt="Banner de celular">
            </div>
            <div class="carousel-item">
                <img class="w-100 slider2-desktop" src=${images.images2} alt="Banner de reloj">
                <img class="w-100 slider2-mobile" src=${images.images4} alt="Banner de reloj">
            </div> 
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
        </button> 
        
        ` 
    sliderConteiner.appendChild(elementSlider)
    
    });
}

renderSlider(imagenSlider)