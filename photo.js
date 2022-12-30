function afficherImg (cat) {
    photos.forEach( (p) => {
        let photoElement = new photo(...p)
        if (photoElement.categorie == cat) {
            let photoDiv = document.createElement("div")
            photoDiv.classList.add("col-lg-4","col-md-6")
            gridPhoto.append(photoDiv)
            let src = "images/" + photoElement.chemin 
            photoDiv.innerHTML =  
            '<a href="images/'+ photoElement.chemin +'">' +                   
                '<figure>' +
                    '<img src=' + src +' width="300px" alt="'+photoElement.titre+'">'
                    +
                    '<figcaption> '+ photoElement.titre + ' </figcaption>'+
                '</figure>'+
        ' </a>'
        }            
    })

}

function clean () {
    gridPhoto.innerHTML= ""
}

class photo {
    constructor (chemin,titre,categorie) {
     this.chemin = chemin
     this.titre = titre
     this.categorie = categorie
    }
}

let photos  = [     
    ["residence/Photo2.jpg","Petit bois sous la neige","residence"],
    ["residence/Photo3.jpg","Soleil tapant sur une facade","residence"],
    ["residence/Photo4.jpeg","Résidence en Automne","residence"],
    ["residence/Photo5.jpeg","Résidence en Automne","residence"],
    ["residence/Photo6.jpeg","Résidence en Automne","residence"],
    ["residence/Photo7.jpeg","Résidence en Automne","residence"],
    ["residence/Photo8.jpeg","Résidence en Automne","residence"],
    ["residence/Photo9.jpeg","Résidence en Automne","residence"],
    ["noel/image1.webp","Sapin et enfants","noel"],
    ["noel/image2.jpg","Dessins des enfants","noel"],
    ["noel/image3.jpg","Table des délices","noel"],
    ["noel/image4.jpg","Sapin et cadeaux","noel"]
]

let gridPhoto = document.querySelector(".grid_photo")
let btnResidence = document.querySelector("#residence")
let btnNoel = document.querySelector("#noel")

btnResidence.addEventListener("click", ()=> {  
    clean()
    afficherImg("residence")
})

btnNoel.addEventListener("click", ()=> {    
    clean()
    afficherImg("noel")
})



photos.forEach( (p) => {
    let photoElement = new photo(...p)    
    let photoDiv = document.createElement("div")
    photoDiv.classList.add("col-lg-4","col-md-6")
    gridPhoto.append(photoDiv)
    let src = "images/" + photoElement.chemin 
    photoDiv.innerHTML =  
    '<a href="images/'+ photoElement.chemin +'">' +                   
        '<figure>' +
            '<img src=' + src +' width="300px" alt="'+photoElement.titre+'">'
            +
            '<figcaption> '+ photoElement.titre + ' </figcaption>'+
        '</figure>'+
' </a>'             
})





