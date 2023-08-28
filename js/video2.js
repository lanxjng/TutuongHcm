function batvideo() {
    var phim = document.getElementById('phimls2');
    var btntat = document.getElementById('btntat2');
    var btnbat = document.getElementById('btnbat2');
    if (phim.style.display = 'none') {
        phim.style.display = 'block';
        btntat.style.display = 'block';
        btnbat.style.display = 'none';
        phim.play();
        phim.requestFullscreen();
    }
}

function tatvideo() {
    var phim = document.getElementById('phimls2');
    var btntat = document.getElementById('btntat2');
    var btnbat = document.getElementById('btnbat2');
    if (phim.style.display = 'block') {
        phim.style.display = 'none';
        btntat.style.display = 'none';
        btnbat.style.display = 'block';
        phim.pause();
    }
}