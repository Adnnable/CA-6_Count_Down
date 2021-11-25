setInterval(() => {
    let timer = new Date("Sep 25, 2025 16:30:00").getTime();
    let now = new Date().getTime();

    let diff = timer - now;

    let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((diff % (1000 * 60)) / 1000);

    document.querySelector('.showBox').innerHTML = `${hours} hrs | ${minutes} mins | ${seconds} sec`

    if (distance < 0) {
        clearInterval(x);
        document.querySelector(".showBox").innerHTML = "EXPIRED";
    }
}, 1000);