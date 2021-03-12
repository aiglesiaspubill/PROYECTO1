console.log(clasificacion);


function sacarClasificacion(){

    //AÑADIR UN TITULO
    let cabecera = document.getElementById("cabecera");
    let titulo = document.createElement("h1");
    titulo.innerHTML = ("CLASIFICACION DE LA LIGA");
    cabecera.append(titulo);

    let cabeceraTabla = document.getElementById("cabeceraTabla");
    let contenidoTabla = document.getElementById("contenidoTabla");


    //CODIGO PARA CREAR CABECERA DE TABLA
    //Creo la fila
    let filaInitial = document.createElement("tr");

    //Columna posicion
    let titulo1 = document.createElement("th");
    titulo1.innerHTML = "POS";
    //Columna equipo
    let titulo2 = document.createElement("th");
    titulo2.innerHTML = "EQUIPO";
    //Columna escudo
    let titulo11 = document.createElement("th");
    titulo11.innerHTML = "ESCUDO";
    //Columna puntos
    let titulo3 = document.createElement("th");
    titulo3.innerHTML = "PUNTOS";
    //Columna Jugados
    let titulo4 = document.createElement("th");
    titulo4.innerHTML = "PJ";
    //Columna Ganados
    let titulo5 = document.createElement("th");
    titulo5.innerHTML = "G";
    //Columna Empatados
    let titulo6 = document.createElement("th");
    titulo6.innerHTML = "E";
    //Columna Perdidos
    let titulo7 = document.createElement("th");
    titulo7.innerHTML = "P";
    //Columna Goles a favor
    let titulo8 = document.createElement("th");
    titulo8.innerHTML = "GF";
    //Columna Goles en contra
    let titulo9 = document.createElement("th");
    titulo9.innerHTML = "GC";
    //Columna Diferencia de Goles
    let titulo10 = document.createElement("th");
    titulo10.innerHTML = "DIFERENCIA DE GOLES";
    //ADJUNTO LOS DATOS OBTENIDOS. PRIMERO EN LA FILA Y DESPUES EN LA CABECERA
    filaInitial.append(titulo1, titulo2, titulo11, titulo3, titulo4, titulo5, titulo6, titulo7, titulo8, titulo9, titulo10);
    cabeceraTabla.append(filaInitial);


    //CODIGO PARA CREAR CONTENIDO DE TABLA
    for(i=0; i<20;i++){

        //Creo primer elemento fila
        let fila = document.createElement("tr");

        //Creo una celda y añado el dato obtenido
        //CELDA POSICION
        let posicion = document.createElement("td");
        posicion.innerHTML = `${clasificacion.standings[0].table[i].position}`;
        //CELDA ESCUDO
        let escudo = document.createElement("td");
        let img = document.createElement("img");
        let imagen = new Image();
        imagen.src = "https://crests.football-data.org/${classificacion.standings[0].table[i].team.id}.svg";
        img.append(imagen);
        escudo.innerHTML = img;
        //CELDA EQUIPO
        let equipo = document.createElement("td");
        equipo.innerHTML = `${clasificacion.standings[0].table[i].team.name}`;
        //CELDA PUNTOS TOTALES
        let puntosTotales = document.createElement("td");
        puntosTotales.innerHTML = `${clasificacion.standings[0].table[i].points}`;
        //CELDA PARTIDOS JUGADOS
        let partidosJugados = document.createElement("td");
        partidosJugados.innerHTML = `${clasificacion.standings[0].table[i].playedGames}`;
        //CELDA GANADOS
        let ganados = document.createElement("td");
        ganados.innerHTML = `${clasificacion.standings[0].table[i].won}`;
        //CELDA EMPATADOS
        let empatados = document.createElement("td");
        empatados.innerHTML = `${clasificacion.standings[0].table[i].draw}`;
         //CELDA PERDIDOS
         let perdidos = document.createElement("td");
         perdidos.innerHTML = `${clasificacion.standings[0].table[i].lost}`;
        //CELDA GOLES A FAVOR
        let golesFavor = document.createElement("td");
        golesFavor.innerHTML = `${clasificacion.standings[0].table[i].goalsFor}`;
        //CELDA GOLES EN CONTRA
        let golesContra = document.createElement("td");
        golesContra.innerHTML = `${clasificacion.standings[0].table[i].goalsAgainst}`;
        //CELDA DIFERENCIA DE GOLES
        let diferenciaGoles = document.createElement("td");
        diferenciaGoles.innerHTML = `${clasificacion.standings[0].table[i].goalDifference}`;


        fila.append(posicion);
        fila.append(escudo);
        fila.append(equipo);
        fila.append(puntosTotales);
        fila.append(partidosJugados);
        fila.append(ganados);
        fila.append(empatados);
        fila.append(perdidos);
        fila.append(golesFavor);
        fila.append(golesContra);
        fila.append(diferenciaGoles);
        contenidoTabla.append(fila);
    }



}

sacarClasificacion();