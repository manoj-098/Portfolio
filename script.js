function visible1()
{
    if(document.getElementById("pre1").style.display=="block")
    {
        document.getElementById("pre1").style.display="none";
        document.getElementById("btn_1").innerHTML="v";


    }
    else
    {
        document.getElementById("pre1").style.display="block";
        document.getElementById("pre2").style.display="none";
        document.getElementById("pre3").style.display="none";
        document.getElementById("btn_1").innerHTML="-";
        document.getElementById("btn_2").innerHTML="v";
        document.getElementById("btn_3").innerHTML="v";
    }
}
function visible2()
{
    if(document.getElementById("pre2").style.display=="block")
    {
        document.getElementById("pre2").style.display="none";
        document.getElementById("btn_2").innerHTML="v";


    }
    else
    {
        document.getElementById("pre2").style.display="block";
        document.getElementById("pre1").style.display="none";
        document.getElementById("pre3").style.display="none";
        document.getElementById("btn_2").innerHTML="-";
        document.getElementById("btn_1").innerHTML="v";
        document.getElementById("btn_3").innerHTML="v";
    }
}
function visible3()
{
    if(document.getElementById("pre3").style.display=="block")
    {
        document.getElementById("pre3").style.display="none";
        document.getElementById("btn_3").innerHTML="v";


    }
    else
    {
        document.getElementById("pre3").style.display="block";
        document.getElementById("pre1").style.display="none";
        document.getElementById("pre2").style.display="none";
        document.getElementById("btn_3").innerHTML="-";
        document.getElementById("btn_1").innerHTML="v";
        document.getElementById("btn_2").innerHTML="v";

    }
}