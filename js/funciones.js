/* Para cargar los archivos js, debo ir a la página jquery, descargar el archivo y lo guardo como en la carpeta de JS del proyecto, el archivo se llama jquery*/
/*$*/
jQuery(document).ready(listo);

function listo(){
    jQuery(".hamb").click(function(e){
        e.preventDefault();
        jQuery("header .container nav").toggleClass(open);
        jQuery(".hamb i").toggleClass(fa-x);
    });

    jQuery ("header .container nav a").click (function(){
        jQuery("header .container nav").removeClass(open);
        jQuery(".hamb i").removeClass(fa-x);
        var dev =jQuery(this).attr(href);
        jQuery("html,body").animate({
            "scrollTop" : jQuery(dev).offset().top -76
        })
        // alert(dev);
    })

    


}



