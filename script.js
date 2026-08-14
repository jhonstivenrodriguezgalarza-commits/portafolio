let menuvisible = false;
function mostrarOcultarMenu(){
    if(menuvisible){
        document.getElementById("nav").classList="";
        menuvisible=false;
    }else{
        document.getElementById("nav").classList="responsive";
        menuvisible=true
    }
}

function seleccionar(){
    document.getElementById("nav").classList="";
    menuvisible=false
}
