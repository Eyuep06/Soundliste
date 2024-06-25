"use strict";
var Soundliste;
(function (Soundliste) {
    let ioniq6_FZ_ein = document.getElementById("FZ_einschalten_IONIQ6");
    let ioniq6_FZ_aus = document.getElementById("FZ_ausschalten_IONIQ6");
    let ioniq6_tippen = document.getElementById("tippen_IONIQ6");
    let ioniq6_beschleunigung_bremsung = document.getElementById("beschleunigung_bremsung_IONIQ6");
    let ioniq6_blinker = document.getElementById("blinker_IONIQ6");
    let ioniq6_sprachassistent = document.getElementById("sprachassistent_IONIQ6");
    let ioniq6_anschnallen = document.getElementById("anschnallen_IONIQ6");
    let ioniq6_parksensorV = document.getElementById("parksensorV_IONIQ6");
    let ioniq6_parksensorH = document.getElementById("parksensorH_IONIQ6");
    let ioniq6_RWG = document.getElementById("RWG_IONIQ6");
    let ioniq6_P_einlegen = document.getElementById("P_einlegen_IONIQ6");
    let ioniq6_offeneTuere = document.getElementById("offeneTuere_IONIQ6");
    let ioniq6_benachrichtigung = document.getElementById("benachrichtigung_IONIQ6");
    let ioniq6_anruf = document.getElementById("anruf_IONIQ6");
    let ioniq6_tempolimit = document.getElementById("tempolimit_ueberschritten_IONIQ6");
    let ioniq6_aussteigen = document.getElementById("aussteigen_IONIQ6");
    let ioniq6_kofferraum = document.getElementById("kofferraum_schliessen_IONIQ6");
    let polestar2_FZ_ein = document.getElementById("FZ_einschalten_Polestar2");
    let polestar2_tippen = document.getElementById("tippen_Polestar2");
    let polestar2_beschleunigung_bremsung = document.getElementById("beschleunigung_bremsung_Polestar2");
    let polestar2_blinker = document.getElementById("blinker_Polestar2");
    let polestar2_sprachassistent = document.getElementById("sprachassistent_Polestar2");
    let polestar2_anschnallen = document.getElementById("anschnallen_Polestar2");
    let polestar2_parksensorV = document.getElementById("parksensorV_Polestar2");
    let polestar2_parksensorH = document.getElementById("parksensorH_Polestar2");
    let polestar2_benachrichtigung = document.getElementById("benachrichtigung_Polestar2");
    let polestar2_anruf = document.getElementById("anruf_Polestar2");
    ioniq6_FZ_ein.addEventListener("click", ioniq1);
    function ioniq1() {
        let ioniq1 = new Audio("IONIQ6/Fahrzeug_einschalten.wav");
        ioniq1.play();
    }
    ioniq6_FZ_aus.addEventListener("click", ioniq2);
    function ioniq2() {
        let ioniq2 = new Audio("IONIQ6/Fahrzeug_ausschalten.wav");
        ioniq2.play();
    }
    ioniq6_tippen.addEventListener("click", ioniq3);
    function ioniq3() {
        let ioniq3 = new Audio("IONIQ6/Tippen.wav");
        ioniq3.play();
    }
    ioniq6_beschleunigung_bremsung.addEventListener("click", ioniq4);
    function ioniq4() {
        let ioniq4 = new Audio("IONIQ6/Beschleunigung_Abbremsung.wav");
        ioniq4.play();
    }
    ioniq6_blinker.addEventListener("click", ioniq5);
    function ioniq5() {
        let ioniq5 = new Audio("IONIQ6/Blinker.wav");
        ioniq5.play();
    }
    ioniq6_sprachassistent.addEventListener("click", ioniq6);
    function ioniq6() {
        let ioniq6 = new Audio("IONIQ6/Sprachassistent.wav");
        ioniq6.play();
    }
    ioniq6_anschnallen.addEventListener("click", ioniq7);
    function ioniq7() {
        let ioniq7 = new Audio("IONIQ6/Anschnallen.wav");
        ioniq7.play();
    }
    ioniq6_parksensorV.addEventListener("click", ioniq8);
    function ioniq8() {
        let ioniq8 = new Audio("IONIQ6/Parksensor.wav");
        ioniq8.play();
    }
    ioniq6_parksensorH.addEventListener("click", ioniq8);
    //IONIQ 6 hat keine unterchiedlichen Parksensor-Töne, deshalb selbe Funktion für vorne und hinten
    ioniq6_RWG.addEventListener("click", ioniq9);
    function ioniq9() {
        let ioniq9 = new Audio("IONIQ6/RW_Gang.wav");
        ioniq9.play();
    }
    ioniq6_P_einlegen.addEventListener("click", ioniq10);
    function ioniq10() {
        let ioniq10 = new Audio("IONIQ6/P_Gang.wav");
        ioniq10.play();
    }
    ioniq6_offeneTuere.addEventListener("click", ioniq11);
    function ioniq11() {
        let ioniq11 = new Audio("IONIQ6/Offene_Tuere.wav");
        ioniq11.play();
    }
    ioniq6_benachrichtigung.addEventListener("click", ioniq12);
    function ioniq12() {
        let ioniq12 = new Audio("IONIQ6/Benachrichtigung.wav");
        ioniq12.play();
    }
    ioniq6_anruf.addEventListener("click", ioniq13);
    function ioniq13() {
        let ioniq13 = new Audio("IONIQ6/Anruf.wav");
        ioniq13.play();
    }
    ioniq6_tempolimit.addEventListener("click", ioniq14);
    function ioniq14() {
        let ioniq14 = new Audio("IONIQ6/Tempolimit_ueberschritten.wav");
        ioniq14.play();
    }
    ioniq6_aussteigen.addEventListener("click", ioniq15);
    function ioniq15() {
        let ioniq15 = new Audio("IONIQ6/Aussteigen.wav");
        ioniq15.play();
    }
    ioniq6_kofferraum.addEventListener("click", ioniq16);
    function ioniq16() {
        let ioniq16 = new Audio("IONIQ6/Kofferraum_schliessen.wav");
        ioniq16.play();
    }
    // Ab hier Polestar 2    
    polestar2_FZ_ein.addEventListener("click", polestar1);
    function polestar1() {
        let polestar1 = new Audio("Polestar/Fahrzeug_starten.wav");
        polestar1.play();
    }
    polestar2_tippen.addEventListener("click", polestar2);
    function polestar2() {
        let polestar2 = new Audio("Polestar/Tippen.wav");
        polestar2.play();
    }
    polestar2_beschleunigung_bremsung.addEventListener("click", polestar3);
    function polestar3() {
        let polestar3 = new Audio("Polestar/Beschleinigung_Abremsung_ohne_NC.wav");
        polestar3.play();
    }
    polestar2_blinker.addEventListener("click", polestar4);
    function polestar4() {
        let polestar4 = new Audio("Polestar/Blinker.wav");
        polestar4.play();
    }
    polestar2_sprachassistent.addEventListener("click", polestar5);
    function polestar5() {
        let polestar5 = new Audio("Polestar/Sprachassistent_google.wav");
        polestar5.play();
    }
    polestar2_anschnallen.addEventListener("click", polestar6);
    function polestar6() {
        let polestar6 = new Audio("Polestar/Anschnallen.wav");
        polestar6.play();
    }
    polestar2_parksensorV.addEventListener("click", polestar7);
    function polestar7() {
        let polestar7 = new Audio("Polestar/Parksensor_vorne.wav");
        polestar7.play();
    }
    polestar2_parksensorH.addEventListener("click", polestar8);
    function polestar8() {
        let polestar8 = new Audio("Polestar/Parksensor_hinten.wav");
        polestar8.play();
    }
    polestar2_benachrichtigung.addEventListener("click", polestar9);
    function polestar9() {
        let polestar9 = new Audio("Polestar/Benachrichtigung.wav");
        polestar9.play();
    }
    polestar2_anruf.addEventListener("click", polestar10);
    function polestar10() {
        let polestar10 = new Audio("Polestar/Anruf.wav");
        polestar10.play();
    }
})(Soundliste || (Soundliste = {}));
//# sourceMappingURL=script.js.map