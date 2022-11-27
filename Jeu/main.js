// DOM
const clic = document.getElementById('clic');
const CommentJouer = document.getElementById('CommentJouer');
const but_afficher = document.getElementById('but_afficher');
const butt_damage = document.getElementById('damage');
const display_pv = document.getElementById('pv');
const display_level = document.getElementById('level');
const display_money = document.getElementById('money');
const display_taux = document.getElementById('taux');
const display_kill = document.getElementById('kill');
const display_degats = document.getElementById('degats')
const display_afficher = document.getElementById('afficher');
const display_JSafficher = document.getElementById('JSafficher')
const RetourJeu = document.getElementsByClassName('RetourJeu');
const InfosJeu = document.getElementById('InfosJeu')

// Variables
let damage = 1;
let lvl = 1;
let pv = 10;
let money_per_kill = 50;
let money = 1000;
let taux_dmg = 1.0;
let prix_dmg = 100; // prix du prochain niveau de degats 
let compteur = 0; // Compteur de kill
let auto_damage = 1;


var Perso = function(pv, lvl){      // Création du premier objet
    this.pv = pv;
    this.lvl = lvl;
}
perso = new Perso(pv, lvl);


function affichage(){           // Afficher toutes les stats
    display_taux.innerText =  "cout amélioration dégats: " + Math.floor(prix_dmg);
    display_degats.innerText = "dégats actuels : " + damage + " par clic";
    display_level.innerText = "niveau actuel  = " + lvl ;
    display_money.innerText = "argent = "+ Math.floor(money) ;
    display_pv.innerText = Math.floor(perso.pv) + " pv";
    display_kill.innerText = `compteur de frags ${compteur}`;
}

affichage();

function time_damage() {            // Not working
    perso.pv = perso.pv - auto_damage;
    console.log('work');
  }
  
document.getElementById('inputFile').addEventListener('change', function() {        // Fichier de sauvegarde
    let n = 0;
    var file = new FileReader();    // Nouveau FileReader, pour lire le fichier txt
    file.onload = () => {       // Quand le fichier est chargé
      const Array = file.result.split("|"); // On découpe les données
      damage = Array[0];        // Puis on met à jour les variables
      lvl = Array[1];
      perso.pv = Array[2];
      compteur = Array[3];
      prix_dmg = Array[4];
      money = Array[5];
      taux_dmg = Array[6];
      affichage();
    }
    file.readAsText(this.files[0]);
    ;})


but_afficher.addEventListener('click', function(){          // Pour afficher les données de sauvegarde
    InfosJeu.style.display = "none"
    display_afficher.style.display = "block";
    display_JSafficher.innerHTML = "<p>Voici vos données de sauvegarde : <br> <br> Copiez le dans un fichier txt et enregistrez le pour conserver vos données de partie.</p>" + `${damage}|${lvl}|${perso.pv}|${compteur}|${prix_dmg}|${money}|${taux_dmg}`;
})

RetourJeu[0].addEventListener('click', function(){      // Désaficher les div sauvegarde et infos
    display_afficher.style.display = "none";
    InfosJeu.style.display = "none"})
RetourJeu[1].addEventListener('click', function(){
    display_afficher.style.display = "none";
    InfosJeu.style.display = "none"})

document.getElementById('CommentJouer').addEventListener('click', function(){   // Afficher div Comment Jouer
    display_afficher.style.display = "none";
    InfosJeu.style.display = "block";
})

butt_damage.addEventListener('click', function(){   // Augmente les dommages 
    if (prix_dmg < money){      // On vérifie que le joueur a assez d'argent
        money = money - prix_dmg;
        damage ++;
        taux_dmg = taux_dmg + 0.1;
        prix_dmg = prix_dmg * taux_dmg;         // On augmente le taux pour que la prochaine augmentation soit plus cher
    }
    else{       // Sinon alert
        alert("Pas assez d'argent !");
        return 0;
    };
    affichage();
})


clic.addEventListener('click', function(){
    if (perso.pv <= 0){         // Quand kill   
        pv = (pv * 1.5) * lvl;       // Le suivant a + de pv
        compteur ++;        // Augmente le compteur de kill
        money = money + (money_per_kill * lvl);     // Argent gagné en fonction du niveau
        perso = new Perso (pv, lvl);        // On crée l'objet
    }
    if (compteur === 10){       // Tous les 10 kill on augmente de niveau
        compteur = 0;
        lvl ++;
        damage = damage *0.5;
    }
    perso.pv = perso.pv - damage;
    affichage();
    console.log(perso.pv); })


