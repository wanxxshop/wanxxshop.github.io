const produk = [
    { id: 1, nama: "Akun Game A", harga: "Rp150.000", img: "images/produk1.jpg" },
    { id: 2, nama: "Akun Game B", harga: "Rp200.000", img: "images/produk2.jpg" }
];

document.addEventListener("DOMContentLoaded", () => {
    let container = document.getElementById("produk-container");
    if (container) {
        produk.forEach(p => {
            container.innerHTML += `<div class='produk'><img src='${p.img}'><h3>${p.nama}</h3><p>${p.harga}</p>
            <a href="detail.html?id=${p.id}">Lihat Detail</a></div>`;
        });
    }

    // Timer Flash Sale
    function mulaiCountdown(durasi) {
        let countdownElement = document.getElementById("countdown");
        let waktu = durasi;

        function updateCountdown() {
            let jam = Math.floor(waktu / 3600);
            let menit = Math.floor((waktu % 3600) / 60);
            let detik = waktu % 60;

            countdownElement.textContent = 
                `${jam.toString().padStart(2, '0')}:` + 
                `${menit.toString().padStart(2, '0')}:` + 
                `${detik.toString().padStart(2, '0')}`;

            if (waktu > 0) {
                waktu--;
                setTimeout(updateCountdown, 1000);
            }
        }
        updateCountdown();
    }

    mulaiCountdown(3600); // Timer mulai dari 1 jam
});
