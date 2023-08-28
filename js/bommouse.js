document.getElementById('html').style.cursor = "url('images/bommouse.png'),auto";

function mouseDown() {
    document.getElementById('html').style.cursor = "url('images/nobom.png'),auto";
    var mp3 = document.getElementById('bommp3');
    mp3.play();
}

function mouseUp() {
    document.getElementById('html').style.cursor = "url('images/bommouse.png'),auto";
}