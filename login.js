function login() {
    let username = document.getElementById("username").value;
    if (username) {
        localStorage.setItem("member", username);
        document.getElementById("status").textContent = "Login berhasil!";
        setTimeout(() => window.location.href = "index.html", 1000);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    if (localStorage.getItem("member")) {
        document.getElementById("status").textContent = "Sudah login sebagai " + localStorage.getItem("member");
    }
});
