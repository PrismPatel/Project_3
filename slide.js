var i=1;
function change(num)
{
    i=num;
    var main = document.getElementById("main");
    if(i==1)
    {
        var img1 = document.getElementById("img1");
        main.src="Images/1.jpg";
    }
    else if(i==2)
    {
        var img2 = document.getElementById("img2");
        main.src="Images/2.jpg";
    }
    else if(i==3)
    {
        var img3 = document.getElementById("img3");
        main.src="Images/3.jpg";
    }
    else if(i==4)
    {
        var img4 = document.getElementById("img4");
        main.src="Images/4.jpg";
    }  
    else if(i==5)
    {
        var img5 = document.getElementById("img5");
        main.src="Images/5.jpg";
    }  
    else if(i==6)
    {
        var img6 = document.getElementById("img6");
        main.src="Images/6.jpg";
    }  
    else if(i==7)
    {
        var img7 = document.getElementById("img7");
        main.src="Images/7.jpg";
    }  
    else if(i==8)
    {
        var img8 = document.getElementById("img8");
        main.src="Images/8.jpg";
    }  
    else if(i==9)
    {
        var img9 = document.getElementById("img9");
        main.src="Images/9.jpg";
    }  
    else if(i==10)
    {
        var img10 = document.getElementById("img10");
        main.src="Images/10.jpg";
    }  
}
function right()
{
    i++;
    if(i>10)
    {
        i=1;
    }
    change(i);
}
function left()
{
    i--;
    if(i<1)
    {
        i=10;
    }
    change(i);
}