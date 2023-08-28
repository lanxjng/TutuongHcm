    /*SCROLL TO TOP*/
    //Get the button
    var mybutton = document.getElementById("scrTop");
    var content = document.getElementById("link");
    var chuong = document.getElementById("chuong");
    var chuongbell = document.getElementById("chuongbell");
    var chuongstatus = document.getElementById("chuongstatus");
    // When the user scrolls down 20px from the top of the document, show the button
    window.onscroll = function() { scrollFunction() };

    function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            mybutton.style.display = "block";
            content.style.position = 'fixed';
            content.style.marginTop = "-3.5%";
            content.style.zIndex = 5;
            content.style.backgroundImage = "linear-gradient( to right, #5dcff1, #6b12df)";
            chuong.style.right = "2%";
            chuongbell.style.color = "rgb(84, 84, 84)";
            chuongstatus.style.backgroundColor = "#7873f5";

            //  content.style.backgroundColor = "rgb(229, 245, 187)";
            content.style.backgroundImage = "linear-gradient( to right, #6b12df,#5dcff1)";
        } else {
            mybutton.style.display = "none";
            content.style.position = "relative";
            content.style.marginTop = "0px";
            content.style.marginLeft = "0px";
            content.style.background = "none";
            content.style.zIndex = 0;
            chuongbell.style.color = "#ccc";
            chuongstatus.style.backgroundColor = "#13D2B8";
            chuong.style.right = "3%";
        }
    }
    // When the user clicks on the button, scroll to the top of the document
    function topFunction() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }