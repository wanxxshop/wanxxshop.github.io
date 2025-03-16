const produk = [
    { id: 1, nama: "Akun Game A", harga: "Rp150.000", img: "images/produk1.jpg" },
    { id: 2, nama: "Akun Game B", harga: "Rp200.000", img: "images/produk2.jpg" }
];

document.addEventListener("DOMContentLoaded", () => {
    let container = document.getElementById("produk-container");
    produk.forEach(p => {
        container.innerHTML += `<div class='produk'><img src='${p.img}'><h3>${p.nama}</h3><p>${p.harga}</p>
        <a href="detail.html?id=${p.id}">Lihat Detail</a></div>`;
    });
    
    setInterval(() => {
        let sekarang = new Date().getTime();
        let akhir = new Date("2025-03-31 23:59:59").getTime();
        let sisa = akhir - sekarang;
        let jam = Math.floor((sisa / (1000 * 60 * 60)) % 24);
        let menit = Math.floor((sisa / (1000 * 60)) % 60);
        let detik = Math.floor((sisa / 1000) % 60);
        document.getElementById("countdown").textContent = `${jam}:${menit}:${detik}`;
    }, 1000);
});
