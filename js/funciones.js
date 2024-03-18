/* Para cargar los archivos js, debo ir a la página jquery, descargar el archivo y lo guardo como en la carpeta de JS del proyecto, el archivo se llama jquery*/
/*$*/
jQuery(document).ready(listo);

function listo(){
    jQuery(".hamb").click(function(e){
        e.preventDefault("header .container nav").toggleClass(open);
    });
}



