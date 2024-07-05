namespace Soundliste {
    // IONIQ 6 Var
    let ioniq6_FZ_ein: HTMLElement = document.getElementById("FZ_einschalten_IONIQ6") as HTMLElement;
    let ioniq6_FZ_aus: HTMLElement = document.getElementById("FZ_ausschalten_IONIQ6") as HTMLElement;
    let ioniq6_tippen: HTMLElement = document.getElementById("tippen_IONIQ6") as HTMLElement;
    let ioniq6_beschleunigung_bremsung: HTMLElement = document.getElementById("beschleunigung_bremsung_IONIQ6") as HTMLElement;
    let ioniq6_blinker: HTMLElement = document.getElementById("blinker_IONIQ6") as HTMLElement;
    let ioniq6_sprachassistent: HTMLElement = document.getElementById("sprachassistent_IONIQ6") as HTMLElement;
    let ioniq6_sprachassistent_aus: HTMLElement = document.getElementById("sprachassistent_aus_IONIQ6") as HTMLElement;
    let ioniq6_anschnallen: HTMLElement = document.getElementById("anschnallen_IONIQ6") as HTMLElement;
    let ioniq6_parksensorV: HTMLElement = document.getElementById("parksensorV_IONIQ6") as HTMLElement;
    let ioniq6_parksensorH: HTMLElement = document.getElementById("parksensorH_IONIQ6") as HTMLElement;
    let ioniq6_RWG: HTMLElement = document.getElementById("RWG_IONIQ6") as HTMLElement;
    let ioniq6_P_einlegen: HTMLElement = document.getElementById("P_einlegen_IONIQ6") as HTMLElement;
    let ioniq6_offeneTuere: HTMLElement = document.getElementById("offeneTuere_IONIQ6") as HTMLElement;
    let ioniq6_benachrichtigung: HTMLElement = document.getElementById("benachrichtigung_IONIQ6") as HTMLElement;
    let ioniq6_anruf: HTMLElement = document.getElementById("anruf_IONIQ6") as HTMLElement;
    let ioniq6_tempolimit: HTMLElement = document.getElementById("tempolimit_ueberschritten_IONIQ6") as HTMLElement;
    let ioniq6_aussteigen: HTMLElement = document.getElementById("aussteigen_IONIQ6") as HTMLElement;
    let ioniq6_kofferraum: HTMLElement = document.getElementById("kofferraum_schliessen_IONIQ6") as HTMLElement;
    // Polestar 2 Var
    let polestar2_FZ_ein: HTMLElement = document.getElementById("FZ_einschalten_Polestar2") as HTMLElement;
    let polestar2_tippen: HTMLElement = document.getElementById("tippen_Polestar2") as HTMLElement;
    let polestar2_beschleunigung_bremsung: HTMLElement = document.getElementById("beschleunigung_bremsung_Polestar2") as HTMLElement;
    let polestar2_blinker: HTMLElement = document.getElementById("blinker_Polestar2") as HTMLElement;
    let polestar2_sprachassistent: HTMLElement = document.getElementById("sprachassistent_Polestar2") as HTMLElement;
    let polestar2_sprachassistent_aus: HTMLElement = document.getElementById("sprachassistent_aus_Polestar2") as HTMLElement;
    let polestar2_anschnallen: HTMLElement = document.getElementById("anschnallen_Polestar2") as HTMLElement;
    let polestar2_parksensorV: HTMLElement = document.getElementById("parksensorV_Polestar2") as HTMLElement;
    let polestar2_parksensorH: HTMLElement = document.getElementById("parksensorH_Polestar2") as HTMLElement;
    let polestar2_benachrichtigung: HTMLElement = document.getElementById("benachrichtigung_Polestar2") as HTMLElement;
    let polestar2_anruf: HTMLElement = document.getElementById("anruf_Polestar2") as HTMLElement;
    // EQE Var
    let EQE_FZ_ein: HTMLElement = document.getElementById("FZ_einschalten_EQE") as HTMLElement;
    let EQE_FZ_aus: HTMLElement = document.getElementById("FZ_ausschalten_EQE") as HTMLElement;
    let EQE_tippen: HTMLElement = document.getElementById("tippen_EQE") as HTMLElement;
    let EQE_scrollen: HTMLElement = document.getElementById("scrollen_EQE") as HTMLElement;
    let EQE_scrollen_unternav: HTMLElement = document.getElementById("scrollen_Unternavigation_EQE") as HTMLElement;
    let EQE_toggle: HTMLElement = document.getElementById("toggle_EQE") as HTMLElement;
    let EQE_beschleunigung_bremsung: HTMLElement = document.getElementById("beschleunigung_bremsung_EQE") as HTMLElement;
    let EQE_blinker: HTMLElement = document.getElementById("blinker_EQE") as HTMLElement;
    let EQE_sprachassistent: HTMLElement = document.getElementById("sprachassistent_EQE") as HTMLElement;
    let EQE_sprachassistent_aus: HTMLElement = document.getElementById("sprachassistent_aus_EQE") as HTMLElement;
    let EQE_anschnallen: HTMLElement = document.getElementById("anschnallen_EQE") as HTMLElement;
    let EQE_parksensorV: HTMLElement = document.getElementById("parksensorV_EQE") as HTMLElement;
    let EQE_parksensorH: HTMLElement = document.getElementById("parksensorH_EQE") as HTMLElement;
    let EQE_offeneTuere: HTMLElement = document.getElementById("offeneTuere_EQE") as HTMLElement;
    let EQE_benachrichtigung: HTMLElement = document.getElementById("benachrichtigung_EQE") as HTMLElement;
    let EQE_meldung: HTMLElement = document.getElementById("meldung_EQE") as HTMLElement;
    let EQE_anruf: HTMLElement = document.getElementById("anruf_EQE") as HTMLElement;
    let EQE_tempolimit: HTMLElement = document.getElementById("tempolimit_ueberschritten_EQE") as HTMLElement;
    let EQE_einsteigen: HTMLElement = document.getElementById("einsteigen_EQE") as HTMLElement;
    let EQE_aussteigen: HTMLElement = document.getElementById("aussteigen_EQE") as HTMLElement;
    // Model 3 Var
    let Model3_tempolimit: HTMLElement = document.getElementById("tempolimit_ueberschritten_Model3") as HTMLElement;
    let Model3_anschnallen: HTMLElement = document.getElementById("anschnallen_Model3") as HTMLElement;
    let Model3_beschleunigung: HTMLElement = document.getElementById("beschleunigung_bremsung_Model3") as HTMLElement;



    //IONIQ 6 Func
    ioniq6_FZ_ein.addEventListener("click", ioniq1);
    
    function ioniq1(): void {
        let ioniq1: HTMLAudioElement = new Audio ("IONIQ6/Fahrzeug_einschalten.wav");
        ioniq1.play();
    }


    ioniq6_FZ_aus.addEventListener("click", ioniq2);

    function ioniq2(): void {
        let ioniq2: HTMLAudioElement = new Audio ("IONIQ6/Fahrzeug_ausschalten.wav");
        ioniq2.play();
    }


    ioniq6_tippen.addEventListener("click", ioniq3);

    function ioniq3(): void {
        let ioniq3: HTMLAudioElement = new Audio ("IONIQ6/Tippen.wav");
        ioniq3.play();
    }


    ioniq6_beschleunigung_bremsung.addEventListener("click", ioniq4);

    function ioniq4(): void {
        let ioniq4: HTMLAudioElement = new Audio ("IONIQ6/Beschleunigung_Abbremsung.wav");
        ioniq4.play();
    }


    ioniq6_blinker.addEventListener("click", ioniq5);

    function ioniq5(): void {
        let ioniq5: HTMLAudioElement = new Audio ("IONIQ6/Blinker.wav");
        ioniq5.play();
    }


    ioniq6_sprachassistent.addEventListener("click", ioniq6);

    function ioniq6(): void {
        let ioniq6: HTMLAudioElement = new Audio ("IONIQ6/Sprachassistent.wav");
        ioniq6.play();
    }


    ioniq6_sprachassistent_aus.addEventListener("click", ioniq6_1);

    function ioniq6_1(): void {
        let ioniq6_1: HTMLAudioElement = new Audio ("IONIQ6/Sprachassistent_aus.wav");
        ioniq6_1.play();
    }


    ioniq6_anschnallen.addEventListener("click", ioniq7);

    function ioniq7(): void {
        let ioniq7: HTMLAudioElement = new Audio ("IONIQ6/Anschnallen.wav");
        ioniq7.play();
    }


    ioniq6_parksensorV.addEventListener("click", ioniq8);

    function ioniq8(): void {
        let ioniq8: HTMLAudioElement = new Audio ("IONIQ6/Parksensor.wav");
        ioniq8.play();
    }


    ioniq6_parksensorH.addEventListener("click", ioniq8) 
    //IONIQ 6 hat keine unterchiedlichen Parksensor-Töne, deshalb selbe Funktion für vorne und hinten


    ioniq6_RWG.addEventListener("click", ioniq9);

    function ioniq9(): void {
        let ioniq9: HTMLAudioElement = new Audio ("IONIQ6/RW_Gang.wav");
        ioniq9.play();
    }


    ioniq6_P_einlegen.addEventListener("click", ioniq10);

    function ioniq10(): void {
        let ioniq10: HTMLAudioElement = new Audio ("IONIQ6/P_Gang.wav");
        ioniq10.play();
    }

    
    ioniq6_offeneTuere.addEventListener("click", ioniq11);

    function ioniq11(): void {
        let ioniq11: HTMLAudioElement = new Audio ("IONIQ6/Offene_Tuere.wav");
        ioniq11.play();
    }


    ioniq6_benachrichtigung.addEventListener("click", ioniq12);

    function ioniq12(): void {
        let ioniq12: HTMLAudioElement = new Audio ("IONIQ6/Benachrichtigung.wav");
        ioniq12.play();
    }


    ioniq6_anruf.addEventListener("click", ioniq13);

    function ioniq13(): void {
        let ioniq13: HTMLAudioElement = new Audio ("IONIQ6/Anruf.wav");
        ioniq13.play();
    }


    ioniq6_tempolimit.addEventListener("click", ioniq14);

    function ioniq14(): void {
        let ioniq14: HTMLAudioElement = new Audio ("IONIQ6/Tempolimit_ueberschritten.wav");
        ioniq14.play();
    }


    ioniq6_aussteigen.addEventListener("click", ioniq15);

    function ioniq15(): void {
        let ioniq15: HTMLAudioElement = new Audio ("IONIQ6/Aussteigen.wav");
        ioniq15.play();
    }


    ioniq6_kofferraum.addEventListener("click", ioniq16);

    function ioniq16(): void {
        let ioniq16: HTMLAudioElement = new Audio ("IONIQ6/Kofferraum_schliessen.wav");
        ioniq16.play();
    }


    // Polestar 2 Func    
    polestar2_FZ_ein.addEventListener("click", polestar1);
    
    function polestar1(): void {
        let polestar1: HTMLAudioElement = new Audio ("Polestar/Fahrzeug_starten.wav");
        polestar1.play();
    }


    polestar2_tippen.addEventListener("click", polestar2);
    
    function polestar2(): void {
        let polestar2: HTMLAudioElement = new Audio ("Polestar/Tippen.wav");
        polestar2.play();
    }


    polestar2_beschleunigung_bremsung.addEventListener("click", polestar3);
    
    function polestar3(): void {
        let polestar3: HTMLAudioElement = new Audio ("Polestar/Beschleinigung_Abremsung_ohne_NC.wav");
        polestar3.play();
    }


    polestar2_blinker.addEventListener("click", polestar4);
    
    function polestar4(): void {
        let polestar4: HTMLAudioElement = new Audio ("Polestar/Blinker.wav");
        polestar4.play();
    }


    polestar2_sprachassistent.addEventListener("click", polestar5);
    
    function polestar5(): void {
        let polestar5: HTMLAudioElement = new Audio ("Polestar/Sprachassistent_google.wav");
        polestar5.play();
    }


    polestar2_sprachassistent_aus.addEventListener("click", polestar5_1);
    
    function polestar5_1(): void {
        let polestar5_1: HTMLAudioElement = new Audio ("Polestar/Sprachassistent_google_aus.wav");
        polestar5_1.play();
    }


    polestar2_anschnallen.addEventListener("click", polestar6);
    
    function polestar6(): void {
        let polestar6: HTMLAudioElement = new Audio ("Polestar/Anschnallen.wav");
        polestar6.play();
    }


    polestar2_parksensorV.addEventListener("click", polestar7);
    
    function polestar7(): void {
        let polestar7: HTMLAudioElement = new Audio ("Polestar/Parksensor_vorne.wav");
        polestar7.play();
    }


    polestar2_parksensorH.addEventListener("click", polestar8);
    
    function polestar8(): void {
        let polestar8: HTMLAudioElement = new Audio ("Polestar/Parksensor_hinten.wav");
        polestar8.play();
    }


    polestar2_benachrichtigung.addEventListener("click", polestar9);
    
    function polestar9(): void {
        let polestar9: HTMLAudioElement = new Audio ("Polestar/Benachrichtigung.wav");
        polestar9.play();
    }


    polestar2_anruf.addEventListener("click", polestar10);
    
    function polestar10(): void {
        let polestar10: HTMLAudioElement = new Audio ("Polestar/Anruf.wav");
        polestar10.play();
    }
    

    // EQE Funcs
    EQE_FZ_ein.addEventListener("click", EQE1);
    
    function EQE1(): void {
        let EQE1: HTMLAudioElement = new Audio ("EQE/Startsound.wav");
        EQE1.play();
    }


    EQE_FZ_aus.addEventListener("click", EQE2);
    
    function EQE2(): void {
        let EQE2: HTMLAudioElement = new Audio ("EQE/Aus_Sound.wav");
        EQE2.play();
    }
    

    EQE_tippen.addEventListener("click", EQE3);
    
    function EQE3(): void {
        let EQE3: HTMLAudioElement = new Audio ("EQE/Tippen.wav");
        EQE3.play();
    }    


    EQE_scrollen.addEventListener("click", EQE4);
    
    function EQE4(): void {
        let EQE4: HTMLAudioElement = new Audio ("EQE/Scrollen.wav");
        EQE4.play();
    }


    EQE_scrollen_unternav.addEventListener("click", EQE5);
    
    function EQE5(): void {
        let EQE5: HTMLAudioElement = new Audio ("EQE/Scrollen_Unterkategorie.wav");
        EQE5.play();
    }


    EQE_toggle.addEventListener("click", EQE6);
    
    function EQE6(): void {
        let EQE6: HTMLAudioElement = new Audio ("EQE/Toggle.wav");
        EQE6.play();
    }


    EQE_beschleunigung_bremsung.addEventListener("click", EQE7);
    
    function EQE7(): void {
        let EQE7: HTMLAudioElement = new Audio ("EQE/Beschleunigung_Abremsung.wav");
        EQE7.play();
    }


    EQE_blinker.addEventListener("click", EQE8);
    
    function EQE8(): void {
        let EQE8: HTMLAudioElement = new Audio ("EQE/Blinker.wav");
        EQE8.play();
    }


    EQE_sprachassistent.addEventListener("click", EQE9);
    
    function EQE9(): void {
        let EQE9: HTMLAudioElement = new Audio ("EQE/Sprachassistent_an.wav");
        EQE9.play();
    }


    EQE_sprachassistent_aus.addEventListener("click", EQE10);
    
    function EQE10(): void {
        let EQE10: HTMLAudioElement = new Audio ("EQE/Sprachassistent_aus.wav");
        EQE10.play();
    }


    EQE_anschnallen.addEventListener("click", EQE11);
    
    function EQE11(): void {
        let EQE11: HTMLAudioElement = new Audio ("EQE/Anschnallen.wav");
        EQE11.play();
    }


    EQE_parksensorV.addEventListener("click", EQE12);
    
    function EQE12(): void {
        let EQE12: HTMLAudioElement = new Audio ("EQE/Parksensor_V.wav");
        EQE12.play();
    }


    EQE_parksensorH.addEventListener("click", EQE13);
    
    function EQE13(): void {
        let EQE13: HTMLAudioElement = new Audio ("EQE/Parksensor_H.wav");
        EQE13.play();
    }


    EQE_offeneTuere.addEventListener("click", EQE14);
    
    function EQE14(): void {
        let EQE14: HTMLAudioElement = new Audio ("EQE/Offene_Tuere.wav");
        EQE14.play();
    }


    EQE_benachrichtigung.addEventListener("click", EQE15);
    
    function EQE15(): void {
        let EQE15: HTMLAudioElement = new Audio ("EQE/Benachrichtigung.wav");
        EQE15.play();
    }


    EQE_meldung.addEventListener("click", EQE16);
    
    function EQE16(): void {
        let EQE16: HTMLAudioElement = new Audio ("EQE/Meldung_BatterieFastLeer.wav");
        EQE16.play();
    }


    EQE_anruf.addEventListener("click", EQE17);
    
    function EQE17(): void {
        let EQE17: HTMLAudioElement = new Audio ("EQE/Anruf.wav");
        EQE17.play();
    }


    EQE_tempolimit.addEventListener("click", EQE18);
    
    function EQE18(): void {
        let EQE18: HTMLAudioElement = new Audio ("EQE/Geschwindigkeit_Hinweis.wav");
        EQE18.play();
    }


    EQE_einsteigen.addEventListener("click", EQE19);
    
    function EQE19(): void {
        let EQE19: HTMLAudioElement = new Audio ("EQE/Earcon_Einsteigen.wav");
        EQE19.play();
    }


    EQE_aussteigen.addEventListener("click", EQE20);
    
    function EQE20(): void {
        let EQE20: HTMLAudioElement = new Audio ("EQE/Earcon_Aussteigen.wav");
        EQE20.play();
    }


    //Model 3 Func
    Model3_anschnallen.addEventListener("click", Model3_1);
    
    function Model3_1(): void {
        let Model3_1: HTMLAudioElement = new Audio ("Tesla Model 3/seatbelt_front_chime.mp3");
        Model3_1.play();
    }


    Model3_tempolimit.addEventListener("click", Model3_2);

    function Model3_2(): void {
        let Model3_2: HTMLAudioElement = new Audio ("Tesla Model 3/speed_assist_warning.mp3");
        Model3_2.play();
    }


    Model3_beschleunigung.addEventListener("click", Model3_3);
    
    function Model3_3(): void {
        let Model3_3: HTMLAudioElement = new Audio ("Tesla Model 3/high_pitched_noise_when_accelerating.mp4");
        Model3_3.play();
    }

}
