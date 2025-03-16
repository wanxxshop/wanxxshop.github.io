const urlParams = new URLSearchParams(window.location.search);
const produkId = urlParams.get("id");

const produkData = {
    1: { nama: "Akun Game A", harga: "Rp150.000", img: "images/produk1.jpg", stok: 3, wa: "https://wa.me/6281234567890" },
    2: { nama: "Akun Game B", harga: "Rp200.000", img: "images/produk2.jpg", stok: 1, wa: "https://wa.me/6281234567890" }
};

document.addEventListener("DOMContentLoaded", () => {
    let data = produkData[produkId];
    document.getElementById("produk-detail").innerHTML = `<img src='${data.img}'><h3>${data.nama}</h3>
    <p>${data.harga}</p><a href="checkout.html">Beli Sekarang</a>`;

    if (data.stok <= 2) {
        let stokEl = document.getElementById("stok-notifikasi");
        stokEl.textContent = "⚠️ Stok hampir habis!";
        stokEl.style.color = "red";
        stokEl.style.animation = "kedip 1s infinite";
    }
});

function tambahUlasan() {
    let id = urlParams.get("id");
    let ulasan = JSON.parse(localStorage.getItem("ulasan-" + id)) || [];
    let rating = document.getElementById("rating").value;
    let text = document.getElementById("review-text").value;
    if (text) {
        ulasan.push({ rating, text });
        localStorage.setItem("ulasan-" + id, JSON.stringify(ulasan));
        tampilkanUlasan();
    }
}

function tampilkanUlasan() {
    let id = urlParams.get("id");
    let ulasan = JSON.parse(localStorage.getItem("ulasan-" + id)) || [];
    let container = document.getElementById("review-list");
    container.innerHTML = "";
    ulasan.forEach(u => { container.innerHTML += `<div>${"⭐".repeat(u.rating)} - ${u.text}</div>`; });
}
tampilkanUlasan();
