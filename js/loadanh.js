var index = 0;
var img = ['images/khuong.png',
    'images/ky.png', 'images/dat.png',
    'images/nguyen.png', 'images/lan.png',
    'images/chien.png', 'images/namhai.png',
    'images/dangnam.png', 'images/mua.png'
];
// var listmp3 = ['mp3/toi.mp3',
//     'mp3/huy.mp3', 'mp3/truong.mp3', 'mp3/tung.mp3',
//     'mp3/thanh.mp3', 'mp3/hoang.mp3', 'mp3/sang.mp3',
//     'mp3/hung.mp3', 'mp3/an.mp3'
//];
var listtext = ['Trong vai: Đường Tam Tạng', 'Trong vai: Tôn Ngộ Không',
    'Trong vai: Trư Bát Giới', 'Trong vai: Sa Ngộ Tĩnh',
    'Trong vai: Nhện Tinh', 'Trong vai: Bạch Long Mã',
    'Trong vai: Bồ Đề Tổ Sư', 'Trong vai: Ngưu Ma Vương', 'Trong vai: Bàn Cổ'
];
var textshow = document.getElementById("textshow");
//var binh = new Audio('mp3/binh.mp3').play();
var dem = 0;

function next() {
    dem++;
    var i = document.getElementById("bg");
    i.style.backgroundSize = "cover";
    i.style.backgroundImage = "url('" + img[index] + "')";
    textshow.innerHTML = listtext[index];
    //new Audio(listmp3[index]).play();
    if (index < img.length - 1) {
        index++;
    } else {
        index = 0;
    }
}


function prev() {
    if (index === 0) {
        index = img.length - 1;
    } else {
        index--;
    }
    var i = document.getElementById("bg");
    i.style.backgroundSize = "cover";
    i.style.backgroundImage = "url('" + img[index] + "')";
    textshow.innerHTML = listtext[index];
    new Audio(listmp3[index]).play();
}
setInterval(() => {
    next();
}, 3000);