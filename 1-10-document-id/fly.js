 window.onload = function() {
     var DOG = document.getElementById("myDog"); //抓一次ID就好

     function AAA() {
         this.src = "003.jpg";
     }

     function BBB() {
         this.src = "001.jpg";

     }

     function DoCCC() {
         this.src = "007.jpg";
     }
     DOG.onmouseover = AAA;
     DOG.onmouseout = BBB;
     DOG.onclick = DoCCC;
 }