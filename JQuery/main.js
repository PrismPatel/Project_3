//Execute JS code when my project page DOM is ready
$(document).ready(function()
                  {
    //execute it in script mode
    //no undeclared var can be used or removal of any object is not possible
    "use strict";
    /*$("p").click(function(){
        // all p's will be hidden
        // $("p").hide();
        //hide any p which is currently(this-current object pointer) clicked
        $(this).hide();
        console.log("hidden");
    });*/

    /*$("p").click(function(e){
        alert("you double clicked");
        $("p").css({color:"red",backgroundColor:"green"});
    });*/

    /*$("p").mouseenter(function(e)
                       {
          alert("you enterd using mouse");
           $("p").css("color","red");
       });*/

    /*$("p").mousedown(function(e)
                       {
          alert("you clicked us");
           $("p").css("color","red");
       });*/
    
    /*$(document).ready(function(){
       "use strict";
        $("p,#fname").on({
           mouseenter:function() 
            {
                alert("mouse entered");
            },
            mouseleave:function()
            {
                alert("mouse left");
            }
        });
    });*/
    
    $("#showHide").click(function(){
       $("p").hide(1000,function(){
          console.log("hiding done"); 
       });
        $("p").show(1000,function(){
          console.log("show successful"); 
       });
    });
});