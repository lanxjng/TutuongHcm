var ilm = ["fb", "twitter", "tele", "linkedin"];

function rand() {
    var randilm = ilm[Math.floor(Math.random() * ilm.length)];
    var i = document.getElementById(randilm);
    i.style.marginTop = '-15px';
    i.style.transition = '0.25s';
    // var j = document.getElementById(randilm);
    // j.style.marginTop = '0px';
}

function rand2() {
    var randilm = ilm[Math.floor(Math.random() * ilm.length)];
    var i = document.getElementById(randilm);
    i.style.marginTop = '0px';
}

setInterval(() => {
    rand(), rand2()
}, 10);