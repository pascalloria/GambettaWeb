
class article  {
    constructor( titre, contenu, auteur, date, resume, link, img="Photo1.jpg", visible = true){
        this.titre = titre;
        this.contenu = contenu;
        this.auteur = auteur;
        this.date = date;
        this.resume = resume;
        this.img = img;
        this.link = link;
        this.visible = visible;
    }  
}


let articles = [    
    [`Le goûter des artistes`,
    `<p class="ql-align-justify">Samedi 10 décembre, 15h30, dans la petite salle de Gambetta…</p>
    <p class="ql-align-justify">Le sapin éclairé de mille feux trône fièrement au milieu des paquets,
    le buffet aux mille couleurs est recouvert de gâteaux, de pâtisseries faites maison, de chocolats et autres friandises,
    les œuvres des petits artistes en herbe sont exposées ! Notre député, et quelques élus de la ville sont venus saluer l’initiative.
    Et les conseillers syndicaux piaffent d’impatience&nbsp;! Vont-ils venir&nbsp;? Oui, ça y est ils arrivent&nbsp;! 
    Les bambins commencent enfin à remplir l’espace avec leurs parents. La petite Ines montre son dessin sur le mur,
    ses joues rosies par le froid et la fierté. Hugo, Léa, Dorian et Chloé se délectent des chocolats offerts par le Carré Chocolathé.
    Wassim et Tiago observent les paquets. Mais où est donc le mien&nbsp;? </p><p class="ql-align-justify">Aurélie et Pascal servent des boissons fraiches,
    Bruno les boissons chaudes&nbsp;! Mélanie et Camille papotent avec les parents. Maribel, qui est une jeune mamie, pouponne avec le petit Léo,
    tandis que sa grande sœur Lucie admire le sapin.</p><p class="ql-align-justify">Emma , la présidente, lance la remise des prix.
    Les enfants sont applaudis pour leurs magnifiques dessins. Pascaline et Pascale immortalisent l’évènement.
        Christelle distribue les ballotins de bonbons préparés par Marie.</p>
    <p class="ql-align-justify">Les étoiles dans les yeux des petits sont aussi brillantes que les sourires sur les visages des conseillers sont éclatants.
     Nous voulions une fête pour les petits et les grands, elle est réussie.</p><p class="ql-align-justify">Quelle joie pour nous d’avoir fait participer les enfants,
      de s’être retrouvés autour d’un moment de gaieté et de convivialité. Notre résidence, c’est ça&nbsp;! Des familles, des jeunes, des moins jeunes, comme Josée, venue pour siroter un café et papoter avec tous, des gens heureux de vivre dans ce beau village qu’est Gambetta.</p><p class="ql-align-justify">Du fond du cœur merci à tous. Merci à tous les commerçants qui ont participé à l’évènement, merci aux bénévoles, merci à tous ceux qui ont œuvré pour que ce moment soit aussi agréable. Et merci à vous, gambétiens, petits et grands qui avez fait de cet après-midi du 10 décembre, un moment magique&nbsp;! Vivement les prochains&nbsp;😉</p><p class="ql-align-justify">Les sponsors&nbsp;: Yerres Loisirs, Le bazar du ptit gris, Tabac presse Gambetta, Carré Chocolathé, La Chocolat’Yerres, Le Pain de 4 livres, Cinéma Paradiso, le manège du centre-ville, la crêperie LL’As</p><p class="ql-align-justify">Les élus&nbsp;: Nicolas Dupont-Aignan, Bernadette Beck, Jean-Claude Leroux, Dominique Renonciat et Alexandre Dumont.</p>`,
    `Karine GUERRIN`,`12/12/2022`,"Café, chocolat chaud, sucreries, patisseries, décoration, sapin et cadeaux,tous les ingrédients pour un goûter de Noël réussi en l'honneur des jeunes artistes de Gambetta",
    "article1","noel/image3.jpg"],
    [`Les barrières - où en sommes nous ?`,
    `<p>Bonjour à toutes et tous.</p><h2>Où en sommes-nous des barrières ? </h2><br><h3>Plusieurs choses ont été faites ces derniers mois...</h3><ul><li>il y a eu une reprise des ouvrages : certains poteaux étaient mal fixés, penchaient, etc...cela venait des socles
     en béton qui n'étaient pas assez solides</li><li>sur certaines barrières, les câbles étaient mal enterrés, et ont fini par être sectionnés... c'était tellement prévisible! Ils ont également
      été réparés et enterrés comme il se doit....</li><li>les panneaux indiquant les entrées et sorties ont été mis en place. Les sorties sont automatiques : il suffit d'être devant la barrière
       (dans son véhicule) pour qu'elle s'ouvre</li><li>le sens de circulation a été adapté rue du Jura afin de permettre une circulation cohérente : c'est là que se situe l'entrée principale de 
       la résidence avec la platine d'appel.</li><li>des protections en acier (jaune) ont été installées afin que les barrières ne soient plus endommagées. Attention à vos véhicules en tournant...
        <img src="https://static.xx.fbcdn.net/images/emoji.php/v9/t57/1/16/1f609.png" style="width:28px" alt="😉"></li></ul><p><br></p>
        <h3> Mais il y a encore des actions à réaliser avant la mise en service...</h3>
        <ul><li>redresser le poteau à côté de l'école</li><li>poser les barrières fixes en face du bâtiment
         K pour éviter que les gens ne contournent les barrières mobiles</li><li>supprimer une place visiteur sur le parking en face du D2, pour permettre aux camions poubelle de tourner 
         avec les nouveaux sens de circulation</li><li>faire des tests!! on croise les doigts pour que ça fonctionne au premier coup!!!</li><li>Faire une communication pour annoncer la mise en
          service : certains ne sont pas encore allés chercher leur badge....</li></ul><p>Pour information, le nouveau CS bloque le paiement des factures restantes sur ce dossier. </p><p>Une barrière est cassée au sol sur le parking visiteur à côté du petit supermarché. Cette barrière fait l'objet d'une prise en charge par l'assureur.</p>`,
          `P; Drigou`,`13/1/2023`,`Il reste encore quelques petites choses à régler avant de pouvoir passer au test de bon fonctionnement des barrières. 
          Pour ceux qui ne l'auraient pas encore fait, il est temps d'aller chercher vos badges chez le gardien. Nous bloquons le paiement des factures pour le moment.
           La barrière au sol à côté du petit supermarché fait l'objet d'une prise en charge par l'assureur, et sera réparée dans un second temps. `,`af0d`,"barriere.jpg"]
]

let actualite = document.querySelector("#actualite") 
let rootArticle = document.querySelector("#rootArticle")



articles.forEach(element => {     
    let p = new article(...element)    
    if (p.visible) {
        if (window.location.pathname =="/index.html" || window.location.pathname =="/"  ) {
            let art=document.createElement("article")
            art.classList.add("mt-4")
            actualite.appendChild(art)
            let src = "images/" + p.img        
            art.innerHTML = 
            '<div class="card p-3">'+
                '<img src=' + src + '  class="card-img-top"  style="height:400px; width:auto;object-fit: cover;"/>'+
                '<div class="card-header h3">'+ p.titre + '</div>'+
                '<div class="card-body">' +
                '<p class="card-text"> '  + p.resume +' </p>'  +         
                '</div>'+
                '<div class="card-footer text-end">'+
                    '<a href="'+p.link+'.html" class="btn btn-primary ">Lire l\'article</a>'+
                '</div>'+
            '</div>' } 
        else if (window.location.pathname =="/"+p.link+".html"){
            let article=document.createElement("article")
            article.classList.add("mt-4")
            rootArticle.appendChild(article)
            let src = "images/" + p.img        
            article.innerHTML = "<h3>" + p.titre + "</h3> <div class='mt-3 fs-4'>" + p.contenu + "</div> <span class='fst-italic fw-light'> écrit le " + p.date + " par " + p.auteur +"</span> <hr>"
        }
    }  
});
