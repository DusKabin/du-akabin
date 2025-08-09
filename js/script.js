const urunler = [
    {
        id: 1,
        ad: "Premium Cam Duşakabin",
        aciklama: "Şık ve dayanıklı cam duşakabin.",
        fiyat: "₺4.999",
        resim: "images/urun1.jpg",
        whatsapp: "https://wa.me/905551234567?text=Premium%20Cam%20Duşakabin%20alıyorum"
    },
    {
        id: 2,
        ad: "Standart Duşakabin",
        aciklama: "Ekonomik ve kullanışlı.",
        fiyat: "₺2.499",
        resim: "images/urun2.jpg",
        whatsapp: "https://wa.me/905551234567?text=Standart%20Duşakabin%20alıyorum"
    }
];

function urunleriGoster() {
    const urunlerDiv = document.getElementById("urunler");
    urunlerDiv.innerHTML = "";

    urunler.forEach(urun => {
        urunlerDiv.innerHTML += `
            <div class="urun-karti">
                <img src="${urun.resim}" alt="${urun.ad}">
                <div class="urun-bilgi">
                    <h3>${urun.ad}</h3>
                    <p>${urun.aciklama}</p>
                    <p><strong>${urun.fiyat}</strong></p>
                    <a href="${urun.whatsapp}" class="satin-al">SATIN AL</a>
                </div>
            </div>
        `;
    });
}

urunleriGoster();
