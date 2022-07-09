$(document).ready(function()
{  
    $("#boton").click(function()
    {
        $("div:hidden").css("background", "#9cf").show();
    });

    $("#boton1").click(function()
    {
        console.log("boton1")
        $("div:visible").css("background", "#9cf").show();
    });

    $("#boton2").click(function()
    {
         $('.hidden').hide(); // únicamente lo oculta.
    });
   

 });