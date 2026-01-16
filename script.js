const datiGallagher = {
    'bambino': ["Il Bambino", "Storia: Le radici? Le mie sono marcite molto prima che io nascessi...", "https://res.cloudinary.com/dqoncufhc/image/upload/v1768575882/giovane_exh64m.png"],
    'ragazzo': ["Il Ragazzo", "Storia: Ho imparato a camminare tra i lupi...", "https://res.cloudinary.com/dqoncufhc/image/upload/v1768446404/ragazzo_faq665.png"],
    'mercenario': ["Il Mercenario", "Storia: Credevo che servire le casate nobili ci desse una dignità...", "https://res.cloudinary.com/dqoncufhc/image/upload/v1768535131/mercenario_hskhtq.png"],
    'anziano': ["L'Anziano", "La Ragazza e il Simbolo...", "https://res.cloudinary.com/dqoncufhc/image/upload/v1768535131/anziano_eipip6.png"],
    'tatuaggio': ["Segni e Tatuaggi", "Porta un tatuaggio sulla spalla destra...", "https://res.cloudinary.com/dqoncufhc/image/upload/v1768446411/tatuaggio_vspdxd.jpg"],
    'aspetto': ["Aspetto Fisico", "Corporatura: È un uomo dall'ossatura robusta...", "https://res.cloudinary.com/dqoncufhc/image/upload/v1768446404/ricordo_znoads.png"],
    'carattere': ["Il Carattere", "Gallagher è intrinsecamente un bugiardo...", "https://res.cloudinary.com/dqoncufhc/image/upload/v1768446404/ricordo2_ysvgil.png"]
};

function apri(chiave) {
    var d = datiGallagher[chiave];
    if (!d) return;

    var titolo = d[0];
    var testo = d[1];
    var immagine = d[2];

    document.getElementById('titolo-storia').innerText = titolo;
    document.getElementById('testo-storia').innerText = testo;
    var f = document.getElementById('img-modale');
    if(immagine) { f.src = immagine; f.style.display = "block"; } else { f.style.display = "none"; }
    
    var tris = document.getElementById('contenitore-tris');
    var controllo = document.getElementById('controllo-tris');
    
    if(titolo === 'Il Bambino') {
        tris.style.display = "flex"; controllo.style.display = "none";
        tris.innerHTML = `
            <img src="https://res.cloudinary.com/dqoncufhc/image/upload/v1768446390/madre_pz7exh.jpg" class="foto-tris" style="width:90px; height:130px; object-fit:cover; margin: 0 2px;">
            <img src="https://res.cloudinary.com/dqoncufhc/image/upload/v1768575858/bambino_gjx98z.png" class="foto-tris" style="width:90px; height:130px; object-fit:cover; margin: 0 2px;">
            <img src="https://res.cloudinary.com/dqoncufhc/image/upload/v1768446403/padre_ebpoxy.jpg" class="foto-tris" style="width:90px; height:130px; object-fit:cover; margin: 0 2px;">`;
    } 
    else if(titolo === "L'Anziano") {
        tris.style.display = "flex"; controllo.style.display = "none";
        tris.innerHTML = `
            <img src="https://res.cloudinary.com/dqoncufhc/image/upload/v1768535131/incontro_wplvdz.png" class="foto-tris" style="width:140px; height:180px; object-fit:cover; margin-right: 5px;">
            <img src="https://res.cloudinary.com/dqoncufhc/image/upload/v1768446390/candela_ahabqh.gif" class="foto-tris" style="width:140px; height:180px; object-fit:cover; margin-left: 5px;">`;
    }
    else if(titolo === "Il Ragazzo" || titolo === "Il Mercenario") {
        tris.style.display = "flex"; controllo.style.display = "none";
        var fotoSrc = (titolo === "Il Ragazzo") ? "https://res.cloudinary.com/dqoncufhc/image/upload/v1768446403/orfano_yd4ved.png" : "https://res.cloudinary.com/dqoncufhc/image/upload/v1768535131/soldato_ctg4bz.png";
        tris.innerHTML = `<img src="${fotoSrc}" class="foto-tris" style="width:200px; height:auto; margin-top: 10px;">`;
    }
    else { tris.style.display = "none"; controllo.style.display = "none"; }
    
    document.getElementById('miuModal').style.display = "block";
}

function regolaTris(valore) { var foto = document.querySelectorAll('.foto-tris'); foto.forEach(img => { img.style.width = valore + "px"; }); }
function chiudi() { document.getElementById('miuModal').style.display = "none"; }
window.onclick = function(event) { if (event.target == document.getElementById('miuModal')) { chiudi(); } }

const audioClick = new Audio('https://res.cloudinary.com/dqoncufhc/video/upload/v1768446386/click_vtol4d.wav');
document.querySelectorAll('.ritratto-box').forEach(v => { 
    v.addEventListener('click', () => { audioClick.currentTime = 0; audioClick.play(); }); 
});

const audioBottiglie = new Audio('https://res.cloudinary.com/dqoncufhc/video/upload/v1768446386/bottiglie_yxfq8d.wav');
document.querySelectorAll('.bottone-bottiglia').forEach(b => { 
    b.addEventListener('click', () => { audioBottiglie.currentTime = 0; audioBottiglie.play(); }); 
});
