// Toggle class active
const navbarNav = document.querySelector(".navbar-nav");

// ketika choose di klik
document.querySelector("#choose").onclick = () => {
    navbarNav.classList.toggle("active")
};

// Klik di luar slidebar untuk menghilangkan nav
const choose = document.querySelector("#choose");

document.addEventListener("click", function (e) {
    if (!choose.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove("active");
    }
})

// Form Jawaban Tantangan
