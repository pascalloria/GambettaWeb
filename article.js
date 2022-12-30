
class article  {
    constructor( titre, contenu , auteur , date,visible = true){
        this.titre = titre;
        this.contenu = contenu;
        this.auteur = auteur
        this.date = date
        this.visible = visible
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
    `Karine GUERRIN`,`12/12/2022`],

  


]

let actualite = document.querySelector("#actualite") 

 
articles.forEach(element => {     
    let p = new article(...element)
    if (p.visible) {
        let art=document.createElement("article")
        art.classList.add("mt-4")
        actualite.appendChild(art)
        art.innerHTML = "<h3>" + p.titre + "</h3> <div class='mt-3 fs-4'>" + p.contenu + "</div> <span class='fst-italic fw-light'> écrit le " + p.date + " par " + p.auteur +"</span> <hr>"
    }   
});