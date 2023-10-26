<!DOCTYPE html>
<html lang="en">
<head>
   <title>countDownTimer</title>
   <style>
      h3 {
         text-align: center;
         margin-top: 0px;
      }
   </style>
</head>
<body>
   <h3 id="time"></h3>
   <script>
      var countDown = new Date("jan 1, 2027 12:12:50").getTime();
     
      var update = setInterval(function () {
     
         var now = new Date().getTime();
       
        
         var diff = countDown - now;
       
        
         var days = Math.floor(diff / (1000 * 60 * 60 * 24));
         var hrs = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
         var minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
         var seconds = Math.floor((diff % (1000 * 60)) / 1000);
       
    
         document.getElementById("time").innerHTML =
         days + "-D: " + hrs + "-H: " + minutes + "-M: " + seconds + "-S ";
         if (diff < 0) {
            clearInterval(update);
            document.getElementById("time").innerHTML = "Expired";
         }
      }, 1000);
   </script>
</body>
</html>
