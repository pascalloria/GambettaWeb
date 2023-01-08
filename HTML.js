let header = `
<div class="container">
    <div class="row align-items-center">
        <h1 class="col-md-8"> La Résidence GAMBETTA </h1>
        <div class="col-md-4"><img  src="images/Photo1.jpg" alt="Photo de la résidence" ></div>            
    </div>
</div>`

let nav = `
<div class="container ">      
    <button class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbar">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbar">
        <ul class="navbar-nav ">
            <li class="nav-item"><a class="nav-link" href="index.html">Accueil</a></li>
            <li class="nav-item"><a class="nav-link" href="gazette.html">La gazette</a></li>
            <li class="nav-item"><a class="nav-link" href="conseil.html">Le Conseil au travail</a></li>
            <li class="nav-item"><a class="nav-link" href="photos.html">Photos</a></li>           
            <li class="nav-item"><a class="nav-link" href="contact.html">Contact</a></li>                
        </ul>   
    </div> 
</div>
`

let footer = `

<div class="container p-3"> 
    <p> <i>Réalisé par Pascal LORIA</i> </p>
</div>
`

document.querySelector("header").innerHTML=header
document.querySelector("nav").innerHTML=nav
document.querySelector("footer").innerHTML=footer