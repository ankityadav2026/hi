/* -------------------------
   SCREEN NAVIGATION
------------------------- */

function nextScreen(number) {

    const current =
        document.querySelector(".screen.active");

    const next =
        document.getElementById("screen" + number);

    if (!next) return;

    current.classList.remove("active");

    setTimeout(() => {
        next.classList.add("active");
    }, 300);

}


/* -------------------------
   SURPRISE BUTTONS
------------------------- */

function surprise(type) {

    const text =
        document.getElementById("surpriseText");

    const finalButton =
        document.getElementById("finalButton");

    if (type === 1) {

        text.innerHTML =
            "If I could give you one thing right now, it would be a reminder of how special you are. ❤️";

    }

    if (type === 2) {

        text.innerHTML =
            "Secret: I probably spent way too much time making this... but honestly, it was worth it. 🥺";

    }

    if (type === 3) {

        text.innerHTML =
            "You deserve more than just a website... but for now, this little piece of my heart will have to do. 💌";

    }

    finalButton.classList.remove("hidden");

    createHeartBurst();

}


/* -------------------------
   FLOATING HEARTS
------------------------- */

function createHeart() {

    const container =
        document.querySelector(".hearts");

    const heart =
        document.createElement("div");

    heart.className = "heart";

    heart.innerHTML =
        Math.random() > .5 ? "❤️" : "♡";

    heart.style.left =
        Math.random() * 100 + "%";

    heart.style.fontSize =
        (12 + Math.random() * 25) + "px";

    heart.style.animationDuration =
        (5 + Math.random() * 6) + "s";

    container.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 12000);

}


/* -------------------------
   HEART BURST
------------------------- */

function createHeartBurst() {

    for (let i = 0; i < 15; i++) {

        setTimeout(() => {
            createHeart();
        }, i * 100);

    }

}


/* -------------------------
   CONTINUOUS HEARTS
------------------------- */

setInterval(createHeart, 700);


/* -------------------------
   INITIAL HEART BURST
------------------------- */

setTimeout(() => {
    createHeartBurst();
}, 1000);