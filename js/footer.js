const containerFooter = document.getElementById("footer-container")

const itemFooter = [

    {
        name: "Franco Nieva",
        profileLinkedin: "https://www.linkedin.com/in/francojnieva",
        profileGithub: "https://github.com/francojnieva",
    },

    {
        name: "Belén Gómez",
        profileLinkedin: "https://www.linkedin.com/in/beléngómez",
        profileGithub: "https://github.com/belugomez",
    },

    {
        name: "Santiago González",
        profileLinkedin: "https://www.linkedin.com/in/santiago-gonzalez-95bb14243",
        profileGithub: "https://github.com/Sxntiago01",
    },
 
]
const renderFooter = (item) => {
    // containerFooter.innerHTML = ""
    item.forEach(item => {
        const elementitem = document.createElement("div"); 

        elementitem.innerHTML = `

                <p class= "members text-center mt-2">${item.name}</p>
                <a class="text-decoration-none" href="${item.profileLinkedin}" target="_blank">
                 <img class="linkedin" src="./img/linkedin_logo.svg" alt="Linkedin" >
                </a>
                <a class="text-decoration-none" href="${item.profileGithub}" target="_blank">
                <img class="github" src="./img/github_logo.svg" alt="Github">
                </a>
        `
        containerFooter.appendChild(elementitem)
    });
}

renderFooter(itemFooter)