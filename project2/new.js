var score=0;
 var valueOfName=""; 
var arrImage=[

{Question:"Who is the man who discovered how to see?",aChId:"a1ChId",a:"Ibn Al-Haytham", bChId:"b1ChId",b:"Abbas Ibn Farnas ", c:" Al-Jazari ",cChId:"c1ChId",d:"Al-Zahrawi",dChId:"dChId",id:"im1",idOfQuestion:"q1",image:"https://www.chronicle.com/blogs/tweed/files/2011/08/question-mark.jpg"},
{Question:"These numbers ( 1-2-3-4 ..... 9) in ?",aChId:"a2ChId", a:"English language", bChId:"b2ChId", b:" Indian language",cChId:"c2ChId", c:"Arabic language",d:"Spanish language",dChId:"d2ChId",id:"im2",idOfQuestion:"q2",image:"https://vox.publika.md/wp-content/uploads/2013/02/Question-Mark1.jpg"},
{Question:"Who is the first to try to fly?", a:" Al-Jazari",aChId:"a3ChId", bChId:"b3ChId", b:"Abbas Ibn Farnas",cChId:"c3ChId", c:"Al-Zahrawi",d:"Ibn Al-Haytham",dChId:"d3ChId",id:"im3",idOfQuestion:"q3",image:"https://www.chronicle.com/blogs/tweed/files/2011/08/question-mark.jpg"},
{Question:"What is the meaning of the word philosophy?", a:"love of wisdom",aChId:"a4ChId", bChId:"b4ChId", b:"talk increase",cChId:"c4ChId", c:"speak without his place",d:"For the words formulated ",dChId:"d4ChId",id:"im4",idOfQuestion:"q4",image:"https://vox.publika.md/wp-content/uploads/2013/02/Question-Mark1.jpg"},
{Question:"What is the thing that you always have and do not see?", a:"nose",aChId:"a5ChId", bChId:"b5ChId", b:"Future",cChId:"c5ChId", c:"Shadow",d:"Air",dChId:"d5ChId",id:"im5",idOfQuestion:"q5",image:"https://www.chronicle.com/blogs/tweed/files/2011/08/question-mark.jpg"},
];

 


$("#in1").change(function(){


$(".btn2").click(function(){
    valueOfName = $("#in1").val();
    $("#userName").hide();
    $(".btn1").hide();
    $(".btn2").hide();
    
  	    // $('body').css({backgroundColor:'white')}; to change the img
 
    $("#div1").fadeIn();
    $("#div2").fadeIn();
    $("#div3").fadeIn();
    $("#div1").click(function(){
  		  $("#div1").hide();
  		  $("#div2").hide();
  	     $("#div3").hide();
  	   // for (var j = 0; j < arrImage.length; j++) {
  	   	var j = 0;
  	   	// 
        
  	     $(".firstPage").append("<div id="+arrImage[j]["idOfQuestion"]+" class="+" qq"+">"+arrImage[j]["Question"]+"</div>");
  	     $(".firstPage").append("<button id="+arrImage[j]["aChId"]+" class="+" answerQ1"+">"+arrImage[j]["a"]+"</button>");
         $(".firstPage").append("<button id="+arrImage[j]["bChId"]+" class="+" answerQ1"+">"+arrImage[j]["b"]+"</button>");
         $(".firstPage").append("<button id="+arrImage[j]["cChId"]+" class="+" answerQ1"+">"+arrImage[j]["c"]+"</button>");
         $(".firstPage").append("<button id="+arrImage[j]["dChId"]+" class="+" answerQ1"+">"+arrImage[j]["d"]+"</button>");
         $(".buttonSubmit").append("<button  class="+"submite"+" >submite</button>");
         // $(".btn2").append(<"button  class="+"submite"+" >submite</button>");
        
         $(".answerQ1").click(function(){
        
               var a= (this).getAttribute('id');
                  $(".answerQ1").css("background-color","gray");
                  $("#"+a).css("background-color","orange");
                  $(".submite").one( "click", function() {
                  
                         if (a == arrImage[j]["aChId"]) {
          	             $("#"+a).css("background-color","green");
          	             score++;
          	             }
          	             else{
          	             $("#"+a).css("background-color","red");
          	             }
          	             $(".buttonSubmit").hide();
          	             $(".buttonNext").append("<button  class="+"next"+" >next</button>");  

                         
          	  });
                  // 
         $(".buttonNext").click(function(){
          $(".answerQ1 ").hide();
           $(".qq").hide();
           j=1;
              $(".firstPage").append("<div id="+arrImage[j]["idOfQuestion"]+" class="+" qq"+">"+arrImage[j]["Question"]+"</div>");
                $(".firstPage").append("<button id="+arrImage[j]["aChId"]+" class="+" answerQ1"+">"+arrImage[j]["a"]+"</button>");
                   $(".firstPage").append("<button id="+arrImage[j]["bChId"]+" class="+" answerQ1"+">"+arrImage[j]["b"]+"</button>");
                   $(".firstPage").append("<button id="+arrImage[j]["cChId"]+" class="+" answerQ1"+">"+arrImage[j]["c"]+"</button>");
                  $(".firstPage").append("<button id="+arrImage[j]["dChId"]+" class="+" answerQ1"+">"+arrImage[j]["d"]+"</button>");
                    $(".buttonSubmit2").append("<button  class="+"submite1"+" >submite</button>");
                    $(".buttonNext ").hide();

                    // 
$(".answerQ1").click(function(){
        
               var a= (this).getAttribute('id');
                  $(".answerQ1").css("background-color","gray");
                  $("#"+a).css("background-color","orange");
                  $(".submite1").one( "click", function() {
                  
                         if (a == arrImage[j]["cChId"]) {
          	             $("#"+a).css("background-color","green");
          	             score++;
          	             }
          	             else{
          	             $("#"+a).css("background-color","red");
          	             }
          	             $(".buttonSubmit2").hide();
          	             $(".buttonNext2").append("<button  class="+"next2"+" >next</button>");  

                         
          	  });
                   });
                    // 
                    //
                      $(".buttonNext2").click(function(){
          $(".answerQ1 ").hide();
           $(".qq").hide();
           j=2; 
           $(".firstPage").append("<div id="+arrImage[j]["idOfQuestion"]+" class="+" qq"+">"+arrImage[j]["Question"]+"</div>");
                $(".firstPage").append("<button id="+arrImage[j]["aChId"]+" class="+" answerQ1"+">"+arrImage[j]["a"]+"</button>");
                   $(".firstPage").append("<button id="+arrImage[j]["bChId"]+" class="+" answerQ1"+">"+arrImage[j]["b"]+"</button>");
                   $(".firstPage").append("<button id="+arrImage[j]["cChId"]+" class="+" answerQ1"+">"+arrImage[j]["c"]+"</button>");
                  $(".firstPage").append("<button id="+arrImage[j]["dChId"]+" class="+" answerQ1"+">"+arrImage[j]["d"]+"</button>");
                    $(".buttonSubmit3").append("<button  class="+"submite2"+" >submite</button>");
                    $(".buttonNext2 ").hide();

                    // 

$(".answerQ1").click(function(){
        
               var a= (this).getAttribute('id');
                  $(".answerQ1").css("background-color","gray");
                  $("#"+a).css("background-color","orange");
                  $(".submite2").one( "click", function() {
                  
                         if (a == arrImage[j]["bChId"]) {
          	             $("#"+a).css("background-color","green");
          	             score++;
          	             }
          	             else{
          	             $("#"+a).css("background-color","red");
          	             }
          	             $(".buttonSubmit3").hide();
          	             $(".buttonNext3").append("<button  class="+"next3"+" >next</button>");  

                         
          	  });
                   });

                    // 
 $(".buttonNext3").click(function(){
          $(".answerQ1 ").hide();
           $(".qq").hide();
           $(".buttonNext3").hide();
           $("#userName").show();
            $(".btn1").show();

       });
                    //

       });

                         });
        });
  	 
});


});
});

$(".btn1").click(function(){
$(".aa").append("<p>"+  "userName: "+"  "+valueOfName +"</p>");
$(".aa").append("<p>"+  "userName: "+"  "+score +"</p>");

});