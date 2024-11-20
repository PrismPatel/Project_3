$(document).ready(function(){
    $("a[href='#top']").click(function() {
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
    });
    $("#other").mouseover(function(){
        $("#menu").fadeIn("slow");
    });
    $("#other").mouseout(function(){
        $("#menu").hide();
    });
    $("#menu").mouseover(function(){
        $("#menu").css("display","inline-block");
        $("#other").css({color:"beige",backgroundColor:"#F12B01"});
    });
    $("#menu").mouseout(function(){
        $("#menu").css("display","none");
        $("#other").css({color:"#F12B01",backgroundColor:"beige"});
    });
    $("#l1").mouseover(function(){
        $("#l1").css("font-size","22px");
    });
    $("#l2").mouseover(function(){
        $("#l2").css("font-size","22px");
    });
    $("#l3").mouseover(function(){
        $("#l3").css("font-size","22px");
    });
    $("#l4").mouseover(function(){
        $("#l4").css("font-size","22px");
    });
    $("#l1").mouseout(function(){
        $("#l1").css("font-size","20px");
    });
    $("#l2").mouseout(function(){
        $("#l2").css("font-size","20px");
    });
    $("#l3").mouseout(function(){
        $("#l3").css("font-size","20px");
    });
    $("#l4").mouseout(function(){
        $("#l4").css("font-size","20px");
    });
    $("#flip1").click(function(){
        $("#panel1").slideToggle("slow");
    });
    $("#flip2").click(function(){
        $("#panel2").slideToggle("slow");
    });
    $("#txtName").keypress(function (e) {
        var keyCode = e.keyCode || e.which;
        $("#txtName").next().text("");
        var regex = /^[A-Za-z ]+$/;
        var isValid = regex.test(String.fromCharCode(keyCode));
        if (!isValid) {
            $("#txtName").next().text("Only Alphabets allowed.");
        }
        return isValid;
    });
    
    $("#sub").click(function(){
        const user=$("#txtUser").val();  
        const pass=$("#txtPass").val();
        const pass2=$("#txtPass2").val();
        if(user=="")
        {
            $("#txtUser").next().text("Username is required");
        }
        else if(pass=="")
        {
            $("#txtUser").next().text("");
            $("#txtPass").next().text("Password is required");
        }
        else if(pass2=="")
        {
            $("#txtPass").next().text("");
            $("#txtPass2").next().text("Confirm Password is required");
        }
        else if(pass!=pass2)
        {
            $("#txtPass2").next().text("Password and Confirm Password should be same");
        }
        else if(pass.length<8)
        {
            $("#txtPass2").next().text("");
            $("#txtPass").next().text("Password should be min of 8 chars");   
        }
        else
        {
            $("#txtPass").next().text("");
            $("#signup").submit();
        }
    });
});