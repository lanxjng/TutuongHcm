var ilm = ["fb", "twitter", "tele", "linkedin", "gg", "instagram", "yt"];
var tg = 0;
var dem = 0;

function tgian() {
    tg++;
}

function rand() {
    var randilm = ilm[Math.floor(Math.random() * ilm.length)];
    var i = document.getElementById(randilm);
    var size = Math.floor(Math.random() * 100).toString();
    i.style.marginTop = "-" + size + "px";
    i.style.transition = '0.2s';
}

function rand2() {
    var randilm = ilm[Math.floor(Math.random() * ilm.length)];
    var i = document.getElementById(randilm);
    i.style.marginTop = '0px';
}

function mouseDownBody(nameid, sizemusic) {
    dem++;
    if (dem <= 1) {
        var mp3 = document.getElementById(nameid).play();
        var autoplay = setInterval(() => {
            rand(), rand2()
        }, 10);
        var tongtime = setInterval(() => {
            tgian()
        }, 1000);

        setTimeout(function stopmp3() {
            var ilm = ["fb", "twitter", "tele", "linkedin", "gg", "instagram", "yt"];
            for (var i = 0; i < ilm.length; i++) {
                document.getElementById(ilm[i]).style.marginTop = '0px';
            }
            clearInterval(tongtime);
            clearInterval(autoplay);
            tg = 0;
            dem = 0;
        }, sizemusic - tg * 1000);
    }
}