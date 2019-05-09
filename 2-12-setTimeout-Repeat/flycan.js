window.onload = function() {
    var N = 1;

    function GOGO() {
        document.getElementById("POSTER").src = "images/poster" + N + ".jpg";
        if (N < 12) { //小於12張
            N += 1; //繼續 N +=1

        } else { //否則
            N = 1; //N回到1
        }

        setTimeout(GOGO, 500); //設定計時器 連續播放 0.5秒做一次
    }
    GOGO(); //呼叫起動上面的function 函式
}