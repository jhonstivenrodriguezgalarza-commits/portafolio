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





.portafolio{
    background-color: #252a2e;
    color: #fff;
    padding: 50px 20px;
}

.portafolio .container-section{
    max-width: 1100px;
    margin: auto;
}

.portafolio h2{
    font-size: 48px;
    font-family: 'Righteous';
    text-align: center;
    padding: 20px 0;
}

.portafolio .galeria{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
}

.portafolio .galeria .proyecto{
    position: relative;
    width: 340px;
    height: 250px;
    margin: 10px;
    cursor: pointer;
    overflow: hidden;
}

.portafolio .galeria .proyecto img{
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
}

.portafolio .galeria .proyecto .overlay{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    text-align: center;
    background: linear-gradient(rgba(142,68,173,.8), rgba(231,76,60,.8));
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition: 1s;
    font-size: 18px;
    opacity: 0;
}

.portafolio .galeria .proyecto:hover .overlay{
    opacity: 1;
}

.portafolio .galeria .proyecto .overlay h3{
    margin-bottom: 20px;
    transition: 1s;
}

.portafolio .galeria .proyecto:hover .overlay h3{
    margin-bottom: 0;
}
