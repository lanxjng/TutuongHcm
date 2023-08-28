var index = 0;
var img = ['images/toi.png',
    'images/huy.png', 'images/truong.png',
    'images/tung.png', 'images/thanh.png',
    'images/hoang.png', 'images/sang.png',
    'images/hung.png', 'images/an.png',
    'images/tuan.png', 'images/binh.PNG', 'images/hao.PNG'
];
var listmp3 = ['mp3/toi.mp3',
    'mp3/huy.mp3', 'mp3/truong.mp3', 'mp3/tung.mp3',
    'mp3/thanh.mp3', 'mp3/hoang.mp3', 'mp3/sang.mp3',
    'mp3/hung.mp3', 'mp3/an.mp3'
];
var listtext = ['Trùm Lươn', 'Trùm Tia Gái',
    'Trùm Cơm Tróoo', 'Trùm XiaoLon',
    'Trùm Dẹo', 'Trùm Đũy Đựk',
    'Trùm Đi Muộn', 'Trùm Póng',
    'Trùm VinCom', 'Trùm ĐB', 'Trùm Thang Máy', 'Trùm Ăn Hại'
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