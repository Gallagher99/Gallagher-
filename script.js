const datiGallagher = {
    'bambino': ["Il Bambino", `Storia: Le radici? Le mie sono marcite molto prima che io nascessi. Vengo da terre lontane da Aengard, posti dove il sole non sembra mai scaldare davvero. Mio padre... era un uomo con troppa onore e poca testa. È bastata una lettera firmata da un nobile in una terra remota per portarselo via. È andato a combattere una guerra che non era la sua, ed è tornato sotto forma di un pezzo di carta stropicciato che annunciava la sua morte. Mia madre? Il dolore l'ha trasformata in un guscio vuoto. Mi ha guardato e ha visto solo il fantasma di un uomo morto. Mi ha lasciato al mio destino, Mi ha scaricato sulla strada come si fa con i rifiuti.`, "https://res.cloudinary.com/dqoncufhc/image/upload/v1768446389/giovane_fw2eih.png"],
    'ragazzo': ["Il Ragazzo", `Storia: Ho imparato a camminare tra i lupi. Se vuoi sopravvivere alla fame, impari a non sorridere mai. La gente diceva che ero freddo, distaccato... io lo chiamavo non voler morire. Mi sono addestrato finché le mani non hanno smesso di sanguinare. e sono diventato una Lama d'Argento mercenari dell ovest.`, "https://res.cloudinary.com/dqoncufhc/image/upload/v1768446404/ragazzo_faq665.png"],
    'mercenario': ["Il Mercenario", `Storia: Credevo che servire le casate nobili ci desse una dignità. Mi sbagliavo. Eravamo solo cani da guardia con lo stemma lucido. A trent'anni, il mondo mi ha ricordato chi ero davvero. Un'imboscata di quelle sporche. Eravamo circondati, il metallo strideva ovunque. Ho guardato i miei compagni, quelli con cui avevo giurato di morire... e ho visto solo le loro schiene mentre scappavano. Mi hanno venduto per cinque minuti di vita in più. Mi hanno lasciato lì a farmi catturare come un animale. Ma non sapevano che un animale messo all'angolo morde più forte. Sono scappato usando la loro stessa sporca furbizia e ho voltato le spalle a quel passato. Ho tenuto il nome delle Lame d'Argento solo per sputarci sopra ogni volta che lo sento.`, "https://res.cloudinary.com/dqoncufhc/image/upload/v1768535131/mercenario_hskhtq.png"],
    'anziano': ["L'Anziano", `La Ragazza e il Simbolo: Un Momento di Respiro. Poi sono arrivato nelle foreste di Namsarek. Un posto che sembra fatto apposta per dimenticare chi sei. Ero lì, a scaldarmi le ossa davanti a un fuoco che non faceva luce, quando è apparsa lei. Una pellegrina dal volto pallido, fragile all'apparenza, ma con occhi che avevano visto più del mio peggior incubo. Non ci siamo scambiati cortesie, ci siamo scambiati silenzi. Mi ha raccontato della sua missione per la milizia, dei boschi, della sua famiglia... e mi ha parlato di quel segno sulla spalla. Non era solo inchiostro; era una storia di appartenenza, di sangue e di promesse. Per la prima volta, la solitudine non mi sembrava una condanna. Per un istante, tra un autunno e l'altro, sono tornato a essere umano. Ma il destino è un baro, uomo. Una mattina mi sono svegliato e il suo posto era freddo. Scomparsa, proprio come un sogno che svanisce quando apri gli occhi. Mi è rimasta dentro una nostalgia che bruciava più di una ferita da spada. Così, mi sono inciso quel simbolo sulla pelle. Vedi? È qui, sulla spalla destra. È il mio altare privato. Un modo per dirle ti ho ascoltata. Il Vuoto di Dalsida: L'ho cercata ovunque. Sono finito a Dalsida, nella terra del Triplice. Ho provato a pregare i loro dèi, a seguire i loro principi, a diventare un uomo devoto... volevo solo che il rumore nella mia testa si fermasse. Ma la fede non riempie lo stomaco e non cura la solitudine. Un giorno mi sono svegliato, ho guardato quegli altari e ho sentito solo l'amarezza di essere ancora vivo e ancora solo. Ho preso la mia roba e me ne sono andato. Non so dove sto andando, e onestamente... non me ne frega niente. La strada è l'unica cosa che non mi ha mai mentito.`, "https://res.cloudinary.com/dqoncufhc/image/upload/v1768535131/anziano_eipip6.png"],
    'tatuaggio': ["Segni e Tatuaggi", `Porta un tatuaggio sulla spalla destra, che rappresenta la maschera dei cacciatori eterni.`, "https://res.cloudinary.com/dqoncufhc/image/upload/v1768446411/tatuaggio_vspdxd.jpg"],
    'aspetto': ["Aspetto Fisico", `È un uomo dall'ossatura robusta e dalla presenza imponente. Il volto è segnato e stanco.`, "https://res.cloudinary.com/dqoncufhc/image/upload/v1768446404/ricordo_znoads.png"],
    'carattere': ["Il Carattere", `Gallagher è intrinsecamente un bugiardo, ma non per malvagità. È un uomo profondamente solo.`, "https://res.cloudinary.com/dqoncufhc/image/upload/v1768446404/ricordo2_ysvgil.png"]
};

function apri(chiave) {
    const d = datiGallagher[chiave];
    if (!d) return;

    document.getElementById('titolo-storia').innerText = d[0];
    document.getElementById('testo-storia').innerText = d[1];
    
    const imgModale = document.getElementById('img-modale');
    if (d[2]) {
        imgModale.src = d[2];
        imgModale.style.display = "block";
    }
    
    document.getElementById('miuModal').style.display = "block";
}

function chiudi() {
    document.getElementById('miuModal').style.display = "none";
}

// Suoni
const audioClick = new Audio('https://res.cloudinary.com/dqoncufhc/video/upload/v1768446386/click_vtol4d.wav');
const audioBottiglie = new Audio('https://res.cloudinary.com/dqoncufhc/video/upload/v1768446386/bottiglie_yxfq8d.wav');

// Funzione per collegare gli eventi dopo il caricamento
window.onload = function() {
    document.querySelectorAll('.ritratto-box').forEach(el => {
        el.onclick = function() { audioClick.play(); };
    });
    document.querySelectorAll('.bottone-bottiglia').forEach(el => {
        el.onclick = function() { audioBottiglie.play(); };
    });
};
