window.onload = function() {
    var N = 1; //宣告變數 記錄一開始在第一張
    var TT; //等一下用來放計時器 ，也可以 var TT =0 做空變數
    //----------------------------------設定圖片自動播放---------------------------------
    function GOGO() {
        if (N < 17) {
            N += 1;
        } else {
            N = 1;
        }
        document.getElementById("PIC").src = "images/pic" + N + ".jpg";

    }
    TT = setInterval(GOGO, 100); //設定計時器 0.1秒放一次
    //---------------------------stop or play------------------------------------------
    document.getElementById("PLAY").onclick = doPLAY;
    document.getElementById("STOP").onclick = doSTOP;

    function doPLAY() {
        clearInterval(TT); //是先清除一次 可以避免重複啟動問題
        TT = setInterval(GOGO, 1000);
    }

    function doSTOP() {
        clearInterval(TT); //清除計時器 停下來 clearInterval 只針對變數
    }
}