document.addEventListener("DOMContentLoaded", function () {
    const footerSpan = document.querySelector(".footerspan");

    if (footerSpan) {
        footerSpan.textContent = new Date().getFullYear();
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const date = document.querySelector("#date");

    if (date) {
        date.textContent = new Date().getFullYear();
    }
});

const loader = document.getElementById("loader");

const progressBar = document.querySelector(".progress-bar");

const progressText = document.getElementById("progress");

let progress = 0;

const loading = setInterval(() => {

    progress += 1;

    // Update progress bar
    progressBar.style.width = `${progress}%`;

    // Update percentage
    progressText.textContent = `${progress}%`;

    // Finish loading
    if (progress >= 100) {

        clearInterval(loading);

        setTimeout(() => {

            loader.classList.add("hide");

            setTimeout(() => {

                loader.remove();

                document.body.style.overflow = "auto";

            }, 700);

        }, 400);

    }

}, 20);

const bar = document.getElementById("bar");
const navLinks = document.getElementById("nav-links");

bar.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});