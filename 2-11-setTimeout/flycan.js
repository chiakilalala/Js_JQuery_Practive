window.onload = function() {
    var N = 1;

    function GOGO() {
        if (N < 12) { //小於12張
            N += 1; //繼續 N +=1

        } else { //否則
            N = 1; //N回到1
        }
        document.getElementById("POSTER").src = "images/poster" + N + ".jpg";
    }
    setTimeout(GOGO, 500); //設定計時器 只播放一次 就暫停
}