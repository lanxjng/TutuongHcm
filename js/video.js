function batvideo() {
    var phim = document.getElementById('phimls');
    var btntat = document.getElementById('btntat');
    var btnbat = document.getElementById('btnbat');
    if (phim.style.display = 'none') {
        phim.style.display = 'block';
        btntat.style.display = 'block';
        btnbat.style.display = 'none';
        phim.play();
        phim.requestFullscreen();
    }
}

function tatvideo() {
    var phim = document.getElementById('phimls');
    var btntat = document.getElementById('btntat');
    var btnbat = document.getElementById('btnbat');
    if (phim.style.display = 'block') {
        phim.style.display = 'none';
        btntat.style.display = 'none';
        btnbat.style.display = 'block';
        phim.pause();
    }
}