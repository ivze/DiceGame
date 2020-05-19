
// based on Czechitas course

let body;
let bodyVKole;
let aktivniHrac;
let kostka;
let koncoveBody;
let hraProbiha;



init ();

document.querySelector(".tlacitko-hod").addEventListener("click", function() {
    if (hraProbiha) {
         // ziskat nahodne cislo
    
    kostka = Math.floor(Math.random()*6) +1;

    // vysledek zobrazit
    
    let kostkaDOM = document.querySelector(".kostka");
    kostkaDOM.style.display = "block";
    kostkaDOM.textContent = kostka;
    

// aktualizovat body kola, pokud padla/nepadla 1

if (kostka !== 1) {
    // pricti body

    bodyVKole += kostka;
    document.querySelector("#soucasne-"+ aktivniHrac).textContent = bodyVKole;

} else {

    // prepni hrace

    /* if (aktivniHrac ==0) {
        aktivniHrac = 1

    } else {
        aktivniHrac = 0;

    } 

    */

    dalsiHrac ()
    } 

}

});

document.querySelector(".tlacitko-dost").addEventListener ("click", function () { 
    if (hraProbiha) {



// pridat soucasne body k celkovym bodum
body [aktivniHrac] +=bodyVKole;
    
// aktualizovat UI

document.querySelector ("#body-" + aktivniHrac).textContent = body [aktivniHrac];

// zkontrolovat, zda hraci jiz vyhral

if (body [aktivniHrac] >= koncoveBody) {

    // prepsat hrac na vitez

        document.querySelector ("#jmeno-" + aktivniHrac).textContent = "Winner!";
        document.querySelector (".hrac-" + aktivniHrac + "-panel").classList.remove ("aktivni");

        // pridat tridu vitez

        document.querySelector (".hrac-" + aktivniHrac + "-panel").classList.add ("vitez");
        document.querySelector (".kostka").style.display = "none";
        
        hraProbiha = false;

} else {

    // prepnout hrace

    dalsiHrac ()
}

    }




});

function dalsiHrac () { 
 aktivniHrac == 0 ? aktivniHrac = 1 : aktivniHrac = 0;
    bodyVKole = 0;
    
    document.getElementById("soucasne-0").textContent = "0";
    document.getElementById("soucasne-1").textContent = "0";
    
    document.querySelector (".hrac-0-panel").classList.toggle ("aktivni");
    document.querySelector (".hrac-1-panel").classList.toggle ("aktivni");

};


document.querySelector (".tlacitko-novy").addEventListener ("click", init);


function init () {

    body = [0,0];
    aktivniHrac = 0;
    bodyVKole = 0;
    koncoveBody = 25;
    hraProbiha = true;

    
    document.querySelector(".kostka").style.display = "none";
    
    document.getElementById("body-0").textContent = "0";
    document.getElementById("body-1").textContent = "0";
    document.getElementById("soucasne-0").textContent = "0";
    document.getElementById("soucasne-1").textContent = "0";

    document.querySelector ("#jmeno-0").textContent = "Player 1";
    document.querySelector ("#jmeno-1").textContent = "Player 2";

    document.querySelector (".hrac-0-panel").classList.remove ("aktivni");
    document.querySelector (".hrac-1-panel").classList.remove ("aktivni");
    document.querySelector (".hrac-0-panel").classList.remove ("vitez");
    document.querySelector (".hrac-1-panel").classList.remove ("vitez");
    document.querySelector (".hrac-0-panel").classList.add ("aktivni");


};