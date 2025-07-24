$(function () {
    /*Agregamos la funcion de quitar la outline de los formularios*/
    
    /*No olvidar agregar .on ya que es la forma moderna de hacerlo en Visual Studio Code,
    sin embargo podemos usarlo de la forma tradicional y la que enseñaron en el curso:

    $(".info__form-input").focus(function () {
        $(this).toggleClass("select")
    });


    Tenemos diferentes eventos vistos en clase:
        -blur
        -focus
        -keydown
        -keyopen
    */

    $(".info__checkbox-button").on("mouseover", function () {
        $(this).toggleClass("select");
    })
});