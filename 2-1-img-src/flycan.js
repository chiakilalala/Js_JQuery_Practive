//等待html順序 從html來的藥雙引號
window.onload = function() {
    document.getElementById("SS1").onclick = SHOWSHOW;
    document.getElementById("SS2").onclick = SHOWSHOW;
    document.getElementById("SS3").onclick = SHOWSHOW;
    document.getElementById("SS4").onclick = SHOWSHOW;
    document.getElementById("SS5").onclick = SHOWSHOW;
    document.getElementById("SS6").onclick = SHOWSHOW;

    var BIG = document.getElementById("BIG"); //宣告變數只抓一次重複使用 要放在上面
    //function 之外宣告變數 達到共用 
    function SHOWSHOW() {
        if (this.id == "SS1") {
            BIG.src = "images/001.jpg";
        } else if (this.id == "SS2") {
            console.log("SS1");
            BIG.src = "images/002.jpg";
        } else if (this.id == "SS3") {
            BIG.src = "images/003.jpg";
        } else if (this.id == "SS4") {
            BIG.src = "images/004.jpg";
        } else if (this.id == "SS5") {
            BIG.src = "images/005.jpg";
        } else if (this.id == "SS6") {
            BIG.src = "images/006.jpg";
        }

    }




}