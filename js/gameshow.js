var dialog = document.getElementById("dialog");
var cauhoi = document.getElementById("cauhoi");
var luachona = document.getElementById("luachona");
var luachonb = document.getElementById("luachonb");
var luachonc = document.getElementById("luachonc");
var luachond = document.getElementById("luachond");
var a = document.getElementById("a");
var b = document.getElementById("b");
var c = document.getElementById("c");
var d = document.getElementById("d");
var btna = document.getElementById("btna");
var btnb = document.getElementById("btnb");
var btnc = document.getElementById("btnc");
var btnd = document.getElementById("btnd");
var check = 0;
var dung = document.getElementById("dung");
var sai = document.getElementById("sai");
var dungmp3 = document.getElementById("dungmp3");
var saimp3 = document.getElementById("saimp3");

function closetab() {
    dialog.style.display = "none";
    btnc.style.display = "inline-block";
    btnd.style.display = "inline-block";
}

function A1() {
    cauhoi.innerHTML = "Theo Hồ Chí Minh, chủ nghĩa xã hội ở Việt Nam có mấy đặc trưng ?";
    luachona.innerHTML = "3"
    luachonb.innerHTML = "4";
    luachonc.innerHTML = "5";
    luachond.innerHTML = "6";
    dialog.style.display = "block";
    check = 1;


}

function A2() {
    cauhoi.innerHTML = "Hồ Chí Minh tiếp cận chủ nghĩa xã hội từ các phương diện sau, trừ:";
    luachona.innerHTML = "Từ phương diện kinh tế"
    luachonb.innerHTML = "Từ phương diện đạo đức";
    luachonc.innerHTML = "Từ phương diện văn hóa";
    luachond.innerHTML = "Từ phương diện chính trị";
    dialog.style.display = "block";
    check = 2;

}

function A3() {
    cauhoi.innerHTML = "Hồ Chí Minh quan niệm mục tiêu cao nhất của chủ nghĩa xã hội là:";
    luachona.innerHTML = "Nâng cao đời sống nhân dân"
    luachonb.innerHTML = "Đáp ứng nhu cầu của nhân dân";
    luachonc.innerHTML = "Đáp ứng được mọi lợi ích của nhân dân";
    luachond.innerHTML = "Nâng cao đời sống tinh thần của nhân dân";
    dialog.style.display = "block";
    check = 3;

}

function B1() {
    cauhoi.innerHTML = "Theo Hồ Chí Minh, động lực quan trọng nhất của chủ nghĩa xã hội là:";
    luachona.innerHTML = "Động lực vật chất"
    luachonb.innerHTML = "Động lực tinh thần";
    luachonc.innerHTML = "Động lực con người";
    luachond.innerHTML = "Sự lãnh đạo của Đảng";
    dialog.style.display = "block";
    check = 4;

}

function B2() {
    cauhoi.innerHTML = "Theo Hồ Chí Minh: lực lượng xây dựng chủ nghĩa xã hội là:";
    luachona.innerHTML = "Công nhân"
    luachonb.innerHTML = "Nông dân";
    luachonc.innerHTML = "Trí thức";
    luachond.innerHTML = "Nhân dân";
    dialog.style.display = "block";
    check = 5;

}

function B3() {
    cauhoi.innerHTML = "Theo Hồ Chí Minh, những trở lực kìm hãm sự phát triển của CNXH bao gồm những yếu tố sau, trừ:";
    luachona.innerHTML = "Chủ nghĩa cá nhân"
    luachonb.innerHTML = "Bệnh tham ô, lãng phí, quan liêu";
    luachonc.innerHTML = "Sự chia rẽ, bè phái, mất đoàn kết";
    luachond.innerHTML = "Sự chủ quan, giáo điều";
    dialog.style.display = "block";
    check = 6;

}

function C1() {
    cauhoi.innerHTML = "Theo Hồ Chí Minh, biện pháp cơ bản, quyết định, lâu dài trong xây dựng chủ nghĩa xã hội là:";
    luachona.innerHTML = "Tuyệt đối tuân theo sự lãnh đạo của Đảng"
    luachonb.innerHTML = "Khai thác triệt để các nguồn lực trong dân";
    luachonc.innerHTML = "Đem của dân, tài dân, sức dân để làm lợi cho dân";
    luachond.innerHTML = "Đem sức dân mà làm giàu cho nhân dân";
    dialog.style.display = "block";
    check = 7;

}

function C2() {
    cauhoi.innerHTML = "Hồ Chí Minh đã tiếp cận chủ nghĩa xã hội từ phương diện đạo đức, nhằm hướng tới giải phóng con người:";
    luachona.innerHTML = "Đúng"
    luachonb.innerHTML = "Sai";
    luachonc.innerHTML = "";
    luachond.innerHTML = "";
    btnc.style.display = "none";
    btnd.style.display = "none";
    dialog.style.display = "block";
    check = 8;

}

function C3() {
    cauhoi.innerHTML = "Hồ Chí Minh bày tỏ quan điểm của mình về chủ nghĩa xã hội chủ yếu trong các bài nói, bài viết:";
    luachona.innerHTML = "Đúng"
    luachonb.innerHTML = "Sai";
    luachonc.innerHTML = "";
    luachond.innerHTML = "";
    btnc.style.display = "none";
    btnd.style.display = "none";
    dialog.style.display = "block";
    check = 9;

}


function dapanA() {
    // btna.style.backgroundColor = "black";
    if (check == 3) {
        dung.style.display = "block";
        sai.style.display = "none";
        dungmp3.play();
    } else {
        sai.style.display = "block";
        dung.style.display = "none";
        saimp3.play();
    }
    btna.style.backgroundColor = 'red';
    btnb.style.backgroundColor = 'white';
    btnc.style.backgroundColor = 'white';
    btnd.style.backgroundColor = 'white';
}

function dapanB() {
    if (check == 1 || check == 8 || check == 9) {
        dung.style.display = "block";
        sai.style.display = "none";
        dungmp3.play();
    } else {
        sai.style.display = "block";
        dung.style.display = "none";
        saimp3.play();
    }
    btna.style.backgroundColor = 'white';
    btnb.style.backgroundColor = 'red';
    btnc.style.backgroundColor = 'white';
    btnd.style.backgroundColor = 'white';
}

function dapanC() {
    if (check == 7 || check == 4) {
        dung.style.display = "block";
        sai.style.display = "none";
        dungmp3.play();
    } else {
        sai.style.display = "block";
        dung.style.display = "none";
        saimp3.play();
    }
    btna.style.backgroundColor = 'white';
    btnb.style.backgroundColor = 'white';
    btnc.style.backgroundColor = 'red';
    btnd.style.backgroundColor = 'white';
}

function dapanD() {

    if (check == 2 || check == 5 || check == 6) {
        dung.style.display = "block";
        sai.style.display = "none";
        dungmp3.play();
    } else {
        sai.style.display = "block";
        dung.style.display = "none";
        saimp3.play();
    }
    btna.style.backgroundColor = 'white';
    btnb.style.backgroundColor = 'white';
    btnc.style.backgroundColor = 'white';
    btnd.style.backgroundColor = 'red';
}

function nhandung() {
    dung.style.display = "none";
    btna.style.backgroundColor = 'white';
    btnb.style.backgroundColor = 'white';
    btnc.style.backgroundColor = 'white';
    btnd.style.backgroundColor = 'white';
}

function nhansai() {
    sai.style.display = "none";
    btna.style.backgroundColor = 'white';
    btnb.style.backgroundColor = 'white';
    btnc.style.backgroundColor = 'white';
    btnd.style.backgroundColor = 'white';
}