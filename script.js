"use strict";
var Soundliste;
(function (Soundliste) {
    // IONIQ 6 Var
    let ioniq6_FZ_ein = document.getElementById("FZ_einschalten_IONIQ6");
    let ioniq6_FZ_aus = document.getElementById("FZ_ausschalten_IONIQ6");
    let ioniq6_tippen = document.getElementById("tippen_IONIQ6");
    let ioniq6_beschleunigung_bremsung = document.getElementById("beschleunigung_bremsung_IONIQ6");
    let ioniq6_blinker = document.getElementById("blinker_IONIQ6");
    let ioniq6_sprachassistent = document.getElementById("sprachassistent_IONIQ6");
    let ioniq6_sprachassistent_aus = document.getElementById("sprachassistent_aus_IONIQ6");
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
    // Polestar 2 Var
    let polestar2_FZ_ein = document.getElementById("FZ_einschalten_Polestar2");
    let polestar2_tippen = document.getElementById("tippen_Polestar2");
    let polestar2_beschleunigung_bremsung = document.getElementById("beschleunigung_bremsung_Polestar2");
    let polestar2_blinker = document.getElementById("blinker_Polestar2");
    let polestar2_sprachassistent = document.getElementById("sprachassistent_Polestar2");
    let polestar2_sprachassistent_aus = document.getElementById("sprachassistent_aus_Polestar2");
    let polestar2_anschnallen = document.getElementById("anschnallen_Polestar2");
    let polestar2_parksensorV = document.getElementById("parksensorV_Polestar2");
    let polestar2_parksensorH = document.getElementById("parksensorH_Polestar2");
    let polestar2_benachrichtigung = document.getElementById("benachrichtigung_Polestar2");
    let polestar2_anruf = document.getElementById("anruf_Polestar2");
    // EQE Var
    let EQE_FZ_ein = document.getElementById("FZ_einschalten_EQE");
    let EQE_FZ_aus = document.getElementById("FZ_ausschalten_EQE");
    let EQE_tippen = document.getElementById("tippen_EQE");
    let EQE_scrollen = document.getElementById("scrollen_EQE");
    let EQE_scrollen_unternav = document.getElementById("scrollen_Unternavigation_EQE");
    let EQE_toggle = document.getElementById("toggle_EQE");
    let EQE_beschleunigung_bremsung = document.getElementById("beschleunigung_bremsung_EQE");
    let EQE_blinker = document.getElementById("blinker_EQE");
    let EQE_sprachassistent = document.getElementById("sprachassistent_EQE");
    let EQE_sprachassistent_aus = document.getElementById("sprachassistent_aus_EQE");
    let EQE_anschnallen = document.getElementById("anschnallen_EQE");
    let EQE_parksensorV = document.getElementById("parksensorV_EQE");
    let EQE_parksensorH = document.getElementById("parksensorH_EQE");
    let EQE_offeneTuere = document.getElementById("offeneTuere_EQE");
    let EQE_benachrichtigung = document.getElementById("benachrichtigung_EQE");
    let EQE_anruf = document.getElementById("anruf_EQE");
    let EQE_tempolimit = document.getElementById("tempolimit_ueberschritten_EQE");
    let EQE_einsteigen = document.getElementById("einsteigen_EQE");
    let EQE_aussteigen = document.getElementById("aussteigen_EQE");
    //IONIQ 6 Func
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
    ioniq6_sprachassistent_aus.addEventListener("click", ioniq6_1);
    function ioniq6_1() {
        let ioniq6_1 = new Audio("IONIQ6/Sprachassistent_aus.wav");
        ioniq6_1.play();
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
    // Polestar 2 Func    
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
    polestar2_sprachassistent_aus.addEventListener("click", polestar5_1);
    function polestar5_1() {
        let polestar5_1 = new Audio("Polestar/Sprachassistent_google_aus.wav");
        polestar5_1.play();
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
    // EQE Funcs
    EQE_FZ_ein.addEventListener("click", EQE1);
    function EQE1() {
        let EQE1 = new Audio("EQE/Startsound.wav");
        EQE1.play();
    }
    EQE_FZ_aus.addEventListener("click", EQE2);
    function EQE2() {
        let EQE2 = new Audio("EQE/Aus_Sound.wav");
        EQE2.play();
    }
    EQE_tippen.addEventListener("click", EQE3);
    function EQE3() {
        let EQE3 = new Audio("EQE/Tippen.wav");
        EQE3.play();
    }
    EQE_scrollen.addEventListener("click", EQE4);
    function EQE4() {
        let EQE4 = new Audio("EQE/Scrollen.wav");
        EQE4.play();
    }
    EQE_scrollen_unternav.addEventListener("click", EQE5);
    function EQE5() {
        let EQE5 = new Audio("EQE/Scrollen_Unterkategorie.wav");
        EQE5.play();
    }
    EQE_toggle.addEventListener("click", EQE6);
    function EQE6() {
        let EQE6 = new Audio("EQE/Toggle.wav");
        EQE6.play();
    }
    EQE_beschleunigung_bremsung.addEventListener("click", EQE7);
    function EQE7() {
        let EQE7 = new Audio("EQE/Beschleunigung_Abremsung.wav");
        EQE7.play();
    }
    EQE_blinker.addEventListener("click", EQE8);
    function EQE8() {
        let EQE8 = new Audio("EQE/Blinker.wav");
        EQE8.play();
    }
    EQE_sprachassistent.addEventListener("click", EQE9);
    function EQE9() {
        let EQE9 = new Audio("EQE/Sprachassistent_an.wav");
        EQE9.play();
    }
    EQE_sprachassistent_aus.addEventListener("click", EQE10);
    function EQE10() {
        let EQE10 = new Audio("EQE/Sprachassistent_aus.wav");
        EQE10.play();
    }
    EQE_anschnallen.addEventListener("click", EQE11);
    function EQE11() {
        let EQE11 = new Audio("EQE/Anschnallen.wav");
        EQE11.play();
    }
    EQE_parksensorV.addEventListener("click", EQE12);
    function EQE12() {
        let EQE12 = new Audio("EQE/Parksensor_V.wav");
        EQE12.play();
    }
    EQE_parksensorH.addEventListener("click", EQE13);
    function EQE13() {
        let EQE13 = new Audio("EQE/Parksensor_H.wav");
        EQE13.play();
    }
    EQE_offeneTuere.addEventListener("click", EQE14);
    function EQE14() {
        let EQE14 = new Audio("EQE/Offene_Tuere.wav");
        EQE14.play();
    }
    EQE_benachrichtigung.addEventListener("click", EQE15);
    function EQE15() {
        let EQE15 = new Audio("EQE/Benachrichtigung.wav");
        EQE15.play();
    }
    EQE_anruf.addEventListener("click", EQE17);
    function EQE17() {
        let EQE17 = new Audio("EQE/Anruf.wav");
        EQE17.play();
    }
    EQE_tempolimit.addEventListener("click", EQE18);
    function EQE18() {
        let EQE18 = new Audio("EQE/Geschwindigkeit_Hinweis.wav");
        EQE18.play();
    }
    EQE_einsteigen.addEventListener("click", EQE19);
    function EQE19() {
        let EQE19 = new Audio("EQE/Earcon_Einsteigen.wav");
        EQE19.play();
    }
    EQE_aussteigen.addEventListener("click", EQE20);
    function EQE20() {
        let EQE20 = new Audio("EQE/Earcon_Aussteigen.wav");
        EQE20.play();
    }
})(Soundliste || (Soundliste = {}));
//# sourceMappingURL=script.js.map