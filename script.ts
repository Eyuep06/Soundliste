namespace Soundliste {
    let ioniq6_FZ_ein: HTMLElement = document.getElementById("FZ_einschalten_IONIQ6") as HTMLElement;
    let ioniq6_FZ_aus: HTMLElement = document.getElementById("FZ_ausschalten_IONIQ6") as HTMLElement;
    let ioniq6_tippen: HTMLElement = document.getElementById("tippen_IONIQ6") as HTMLElement;
    let ioniq6_beschleunigung_bremsung: HTMLElement = document.getElementById("beschleunigung_bremsung_IONIQ6") as HTMLElement;
    let ioniq6_blinker: HTMLElement = document.getElementById("blinker_IONIQ6") as HTMLElement;
    let ioniq6_sprachassistent: HTMLElement = document.getElementById("sprachassistent_IONIQ6") as HTMLElement;
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

    let polestar2_FZ_ein: HTMLElement = document.getElementById("FZ_einschalten_Polestar2") as HTMLElement;
    let polestar2_tippen: HTMLElement = document.getElementById("tippen_Polestar2") as HTMLElement;
    let polestar2_beschleunigung_bremsung: HTMLElement = document.getElementById("beschleunigung_bremsung_Polestar2") as HTMLElement;
    let polestar2_blinker: HTMLElement = document.getElementById("blinker_Polestar2") as HTMLElement;
    let polestar2_sprachassistent: HTMLElement = document.getElementById("sprachassistent_Polestar2") as HTMLElement;
    let polestar2_anschnallen: HTMLElement = document.getElementById("anschnallen_Polestar2") as HTMLElement;
    let polestar2_parksensorV: HTMLElement = document.getElementById("parksensorV_Polestar2") as HTMLElement;
    let polestar2_parksensorH: HTMLElement = document.getElementById("parksensorH_Polestar2") as HTMLElement;
    let polestar2_benachrichtigung: HTMLElement = document.getElementById("benachrichtigung_Polestar2") as HTMLElement;
    let polestar2_anruf: HTMLElement = document.getElementById("anruf_Polestar2") as HTMLElement;









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


// Ab hier Polestar 2    
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
    















}
