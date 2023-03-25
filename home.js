function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
  function imagechange1(){
     if (document.getElementById('image1').src=="https://businessreportnow.com/wp-content/uploads/2020/06/BPO-Services.jpg") {
        document.getElementById('image1').src="https://www.syberscribe.com.au/blog/wp-content/uploads/2018/04/Syberscribe-Facts-About-Medical-Transcription.jpg";
        document.getElementById('second').style.textDecoration='underline';
        document.getElementById('second').style.textDecorationColor="blue";
     }else{document.getElementById('second').style.textDecoration='none';}
  }
  function imagechange(){
    if (document.getElementById('image1').src=="https://www.syberscribe.com.au/blog/wp-content/uploads/2018/04/Syberscribe-Facts-About-Medical-Transcription.jpg") {
       document.getElementById('image1').src="https://businessreportnow.com/wp-content/uploads/2020/06/BPO-Services.jpg";
       document.getElementById('first').style.textDecoration='underline';
        document.getElementById('first').style.textDecorationColor="blue";
    }else{
      document.getElementById('first').style.textDecoration='none';
    }
    
 }
 function totop(){
   document.documentElement.scrollTop=0;
 }