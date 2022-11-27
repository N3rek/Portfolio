const texte = document.getElementById('texte');
const submit = document.getElementById('submit');
const display_image = document.getElementById('image');
const display_texte = document.getElementById('display_texte');
const new_image = document.getElementById('new_image');
const display_compteur = document.getElementById("compteurs");

let nb_nom = 0;
let nom = "";
let compteur = 0;
let serie_vict = 0;
let gagne = false;

var url = "https://hp-api.herokuapp.com/api/characters";   // url
$.get(url, succes = function(data){      // On recup tous les noms
    image(data);

    submit.addEventListener('click',function(){
        saisie = texte.value.toLowerCase();
    if(reponse.includes(saisie) == false && texte.value.toLowerCase() != data[alea].name.toLowerCase()){ // On vérifie si la saisie est correcte, soit le nom ou prénom soit le name complet
        if(data[alea].name.length < nb_nom + 1){    // Si tout le nom est affiché
            display_texte.innerText = "Vous êtes vraiment nul";
            serie_vict = -100;
            compteur = - 100;
            alert("Pas très joueur...")
            image(data);
            return;
        }
        else{   // Sinon on affiche une lettre supp
        nom += data[alea].name[nb_nom];
        nb_nom ++;
        console.log(nom);
        display_texte.innerText = `Pas grave ! Voici une aide : ${nom}`;}
    }
    else{ // Si le nom saisi est correct
            display_texte.innerText = `gagné ! avec ${nb_nom} erreurs !`
            gagne = true;
            compteur++;
            serie_vict++;
            display_compteur.innerHTML = `${compteur} victoire<br> série de victoire : ${serie_vict}`

        }
    })
    new_image.addEventListener('click', function(){ // Nouvelle image 
        if(gagne == false && serie_vict !=0 && serie_vict > 0){   // Si le joueur n'a pas trouvé l'image et a une série
            continuer = confirm("Vous allez perdre votre série ! ")
            if(continuer == true){  // Il peut choisir de continuer ou pas
                serie_vict = 0;
                image(data);}
            else{
            return;}
        }
        image(data);
})})


function image(data){
    texte.value = "";
    gagne = false;
    display_texte.innerText="";
    alea = 1 + Math.floor((data.length-1) * Math.random()); // On choisit un perso alea
    if(data[alea].image == ""){ // Si le perso n'a pas d'image on en choisit un autre
        while(data[alea].image == ""){
            alea = Math.floor((data.length-1) * Math.random());
     }
    }

    console.log(data[alea].name)
    reponse = data[alea].name.toLowerCase().split(" ");
    console.log(reponse);
    display_image.innerHTML = `<img src=${data[alea].image} alt=''>`;   // On affiche l'image
    display_compteur.innerHTML = `${compteur} victoire<br> série de victoire : ${serie_vict}`
}