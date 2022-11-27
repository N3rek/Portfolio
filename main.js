// DOM
const submit_convertisseur = document.getElementById('submit_convertisseur'); 
const submit_calculateur = document.getElementById('submit_calculateur');
const submit_divers = document.getElementById('submit_divers');
const submit_jeu = document.getElementById('submit_jeu');
const convertisseur = document.getElementById('convertisseur');
const calculateur = document.getElementById('calculateur');
const divers = document.getElementById('divers')
const menu = document.getElementById('menu');
const jeu = document.getElementById('jeu');

// Tous les boutons dans une liste
const boutons = [calculateur, convertisseur, divers, jeu];

function AfficherMenu(){    // On affiche le menu
    menu.style.display = "block";
}


function affichage(submit){
    menu.style.display = "none";
    for (let e = 0; e < boutons.length; e++){
        if (boutons[e] !== submit){         // On met tous les div en none sauf celui concerné
            boutons[e].style.display = "none";
        }
    }
    if(submit.style.display === "none"){        // Affichage / Désaffichage
        submit.style.display = "flex";
    }
    else{
        submit.style.display = "none";
        AfficherMenu();         // Si tous les div sont none on affiche le menu
    }
};

submit_calculateur.addEventListener('click', function(){    // click du bouton calculateur
    affichage(calculateur)});

submit_convertisseur.addEventListener('click', function(){  // click du bouton convertisseur
    affichage(convertisseur)});

submit_divers.addEventListener('click', function(){  // click du bouton divers
    affichage(divers)});

submit_jeu.addEventListener('click', function(){  // click du bouton jeu
    affichage(jeu);})


