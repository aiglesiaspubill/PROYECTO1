console.log(data);

/* function sacarPartido(){

    let contenido = document.getElementById("contenido");

    let fila = document.createElement("tr");

    let local = document.createElement("td");
    local.innerHTML = `${data.matches[0].homeTeam.name}`;

    let visitante = document.createElement("td");
    visitante.innerHTML = `${data.matches[0].awayTeam.name}`;

    let golesLocal = document.createElement("td");
    golesLocal.innerHTML = `${data.matches[0].score.fullTime.homeTeam}`;

    let golesVisitante = document.createElement("td");
    golesVisitante.innerHTML = `${data.matches[0].score.fullTime.awayTeam}`;

    fila.append(local, golesLocal);
    fila.append(visitante);
    fila.append(golesVisitante);
    contenido.append(fila);
   

} */



 function sacarSeriePartidos(partidos){

    let cabeceraTabla = document.getElementById("cabeceraTabla");
    let contenidoTabla = document.getElementById("contenidoTabla")

    //AÑADIR UN TITULO
    let cabecera = document.getElementById("cabecera");
    let titulo = document.createElement("h1");
    titulo.innerHTML = ("TODOS LOS PARTIDOS DE LA LIGA");
    cabecera.append(titulo);

    let filaInitial = document.createElement("tr");

    let titulo1 = document.createElement("th");
    titulo1.innerHTML = "EQUIPO LOCAL";

    let titulo2 = document.createElement("th");
    titulo2.innerHTML = "GOLES LOCAL";

    let titulo4 = document.createElement("th");
    titulo4.innerHTML = "EQUIPO VISITANTE";

    let titulo3 = document.createElement("th");
    titulo3.innerHTML = "GOLES VISITANTE";

    filaInitial.append(titulo1, titulo2, titulo3, titulo4);
    cabeceraTabla.append(filaInitial);



    for(i=0; i<partidos;i++){
        let fila = document.createElement("tr");

        let local = document.createElement("td");
        local.innerHTML = `${data.matches[i].homeTeam.name}`;

        let visitante = document.createElement("td");
        visitante.innerHTML = `${data.matches[i].awayTeam.name}`;

        let golesLocal = document.createElement("td");
        golesLocal.innerHTML = `${data.matches[i].score.fullTime.homeTeam}`;

        let golesVisitante = document.createElement("td");
        golesVisitante.innerHTML = `${data.matches[i].score.fullTime.awayTeam}`;

        fila.append(local);
        fila.append(golesLocal);
        fila.append(golesVisitante);
        fila.append(visitante);
        contenidoTabla.append(fila);
    }


} 

//FUNCION QUE SE LE PASA PARAMETRO DE JORNADA Y TE SACA LOS PARTIDOS DE ESA JORNADA
function sacarPartidosJornada(){
    let jornada = prompt("INTRODUCE UNA JORNADA DE LA 1 A LA 38");

    //AÑADIR UN TITULO
    let cabecera = document.getElementById("cabecera");
    let titulo = document.createElement("h1");
    titulo.innerHTML = ("ESTAMOS EN LA JORNADA " +jornada);
    cabecera.append(titulo);


    //AÑADIR CABECERA DE TABLA
    //Selecciono mi tabla
    let cabeceraTabla = document.getElementById("cabeceraTabla");


    //Creo elemento fila
    let filaCabecera = document.createElement("tr");
    //Creo primer elemento columna
    let titulo1 = document.createElement("th");
    titulo1.innerHTML = "EQUIPO LOCAL";

    //Creo segundo elemento columna
    let titulo2 = document.createElement("th");
    titulo2.innerHTML = "GOLES LOCAL";

    //Creo tercer elemento columna
    let titulo4 = document.createElement("th");
    titulo4.innerHTML = "EQUIPO VISITANTE";

    //Creo cuarto elemento columna
    let titulo3 = document.createElement("th");
    titulo3.innerHTML = "GOLES VISITANTE";

    //Añado el contenido obtenido en la fila y despues en la tabla
    filaCabecera.append(titulo1, titulo2, titulo3, titulo4);
    cabeceraTabla.append(filaCabecera);


    //INICIO FOR PARA RECORRER API Y SACAR LOS NOMBRES DE EQUIPOS LOCAL Y VISITANTE Y LOS GOLES DE CADA PARTIDO
    for(i=0; i<380;i++){

        //OBTENGO VALOR DE JORNADA Y COMPARO CON JORNADA PEDIDA
        let jornadaX = `${data.matches[i].matchday}`;
        if(jornadaX == jornada){

            let fila = document.createElement("tr");

            let local = document.createElement("td");
            local.innerHTML = `${data.matches[i].homeTeam.name}`;

            
    
            let visitante = document.createElement("td");
            visitante.innerHTML = `${data.matches[i].awayTeam.name}`;
    
            let marcadorLocal = document.createElement("td");
            let golesLocal = `${data.matches[i].score.fullTime.homeTeam}`;
            if(golesLocal == "null"){
                marcadorLocal.innerHTML = "-";
            }
            else{
                
                marcadorLocal.innerHTML = golesLocal;
            }
            
            
    
            let marcadorVisitante = document.createElement("td");
            let golesVisitante = `${data.matches[i].score.fullTime.awayTeam}`;
            if(golesVisitante == "null"){
                marcadorVisitante.innerHTML = "-";
            }
            else{
                marcadorVisitante.innerHTML = golesVisitante;
            }
             
    
            fila.append(local);
            fila.append(marcadorLocal);
            fila.append(marcadorVisitante);
            fila.append(visitante);
            let contenidoTabla = document.getElementById("contenidoTabla");
            contenidoTabla.append(fila);
        
       
    }







        }

        
            


}


let totalPartidos = `${data.matches}`;
sacarSeriePartidos(380);
