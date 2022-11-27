// DOM
const nom1 = document.getElementById('nom1');
const nom2 = document.getElementById('nom2');
const submit = document.getElementById('submit');
const display = document.getElementById('display');
const resultat = document.getElementById('resultat');
const infos = document.getElementById('infos');

// Listes
const bad = ['pas fameux...', '-20% pour tout abonnement tinder premium, profitez en, croyez moi...','presque la moyenne, presque...']
const good = ['Je suis jaloux de vous', 'Je peux vous prendre en photo ?', 'Il reste une place pour moi ?', 'impressionant...',"Vous êtes formidables"]
const excellent = ['Qui est surpris ?']

// Event
infos.addEventListener('click', function(){
    alert("Nous ne sommes pas responsables des éventuels problèmes engendrés par ce calculateur");
    alert("C'est votre problème");
})
// Pour mettre en pause la fonction
function pause(ms) 
{
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Click submit
submit.addEventListener('click', function(){
    if (nom1.value== "" || nom2.value == ""){
        alert("si tu rentres pas les noms ça risque pas de marcher");
        return;
    }
    let done = false;           // Quand on lance le programme 2 fois de suite
    resultat.innerText = "";    // On efface tout le contenu à chaque clic
    display.innerText = "...";
    async function main(){  // fonction async pour le await
        for (let i = 0; i < 5; i++) // On affiche le chargement
        {
          await pause(1000);
          display.innerText = ('Connexion avec le serveur très sécurisé'+ (".".repeat(i)));
        }
        done = true;    // condition pour lancer la suite, car fonction async
    if (done === true){     // programme principal
    const perc = 1 + Math.floor(100 * Math.random()); // Nombre alea entre 0 et 100
    resultat.innerText = `${perc}% ! `; // Nn affiche le pourcentage
    let min_nom1 = nom1.value.toLowerCase(); // en minuscule
    let min_nom2 = nom2.value.toLowerCase();
    if ((min_nom1 === "kerrian"|| min_nom1 === "sarah")&& (min_nom2=== "kerrian"|| min_nom2 === "sarah")){
        resultat.innerText = `100% ! `;
        display.innerText = good[1 + Math.floor((good.length-1) * Math.random())]; 
        return;
    }
    else if (perc < 60){
        display.innerText = bad[1 + Math.floor((bad.length-1) * Math.random())]; // On affiche une valeur alea depuis la liste
    }
    else if(perc < 99){
        display.innerText = good[1 + Math.floor((good.length-1) * Math.random())];   
    }
    else{
        display.innerText = excellent[1 + Math.floor((excellent.length-1) * Math.random())];
    }}}
    main()  // on lance la fonction
})





