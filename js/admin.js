let urunler = JSON.parse(localStorage.getItem("urunler")) || [];

function urunEkle() {
    const ad = document.getElementById("urunAd").value;
    const aciklama = document.getElementById("urunAciklama").value;
    const fiyat = document.getElementById("urunFiyat").value;
    const resim = document.getElementById("urunResim").value;

    const yeniUrun = {
        id: Date.now(),
        ad,
        aciklama,
        fiyat,
        resim,
        whatsapp: `https://wa.me/905551234567?text=${encodeURIComponent(ad)}%20alıyorum`
    };

    urunler.push(yeniUrun);
    localStorage.setItem("urunler", JSON.stringify(urunler));
    adminUrunleriGoster();
}

function adminUrunleriGoster() {
    const urunListesi = document.getElementById("adminUrunler");
    urunListesi.innerHTML = "";

    urunler.forEach(urun => {
        urunListesi.innerHTML += `
            <div class="urun-karti">
                <img src="${urun.resim}" alt="${urun.ad}">
                <div class="urun-bilgi">
                    <h3>${urun.ad}</h3>
                    <p>${urun.aciklama}</p>
                    <p><strong>${urun.fiyat}</strong></p>
                    <button onclick="urunSil(${urun.id})">Sil</button>
                </div>
            </div>
        `;
    });
}

function urunSil(id) {
    urunler = urunler.filter(urun => urun.id !== id);
    localStorage.setItem("urunler", JSON.stringify(urunler));
    adminUrunleriGoster();
}

adminUrunleriGoster();
