function time() {
    now = new Date();
    var hour = document.getElementById("hour");
    var minute = document.getElementById("minute");
    var second = document.getElementById("second");
    hour.innerHTML = now.getHours();
    minute.innerHTML = now.getMinutes();
    second.innerHTML = now.getSeconds();
}
setInterval(() => {
    time();
}, 1000);