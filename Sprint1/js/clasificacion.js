console.log(clasificacion);

let cabecera = ["POS","ESCUDO","EQUIPO","PUNTOS", "PJ", "G", "E", "P", "GF", "GC","DIFERENCIA DE GOLES"];


function tablaClasificacion(){

    añadirCabeceraTabla(cabecera);

    for(let i=0; i<clasificacion.standings[0].table.length;i++){
        let position = `${clasificacion.standings[0].table[i].position}`;
        let escudo = document.createElement("td");
        let imagen = new Image(50.50);
        imagen.setAttribute("src" , `https://crests.football-data.org/${clasificacion.standings[0].table[i].team.id}.svg`);
        escudo.append(imagen);
        let equipo = `${clasificacion.standings[0].table[i].team.name}`;
        let puntosTotales = `${clasificacion.standings[0].table[i].points}`;
        let partidosJugados = `${clasificacion.standings[0].table[i].playedGames}`;
        let ganados = `${clasificacion.standings[0].table[i].won}`;
        let empatados = `${clasificacion.standings[0].table[i].draw}`;
         let perdidos = `${clasificacion.standings[0].table[i].lost}`;
        let golesFavor = `${clasificacion.standings[0].table[i].goalsFor}`;
        let golesContra = `${clasificacion.standings[0].table[i].goalsAgainst}`;
        let diferenciaGoles = `${clasificacion.standings[0].table[i].goalDifference}`;

        let datos = [position, imagen, equipo, puntosTotales, partidosJugados, ganados, empatados, perdidos, golesFavor, golesContra, diferenciaGoles];

        let filaTabla = cuerpoTabla.insertRow(i);
        generarTabla(cabecera, filaTabla, datos);
    }
}


tablaClasificacion();

function sacarClasificacion(){


    
    let contenidoTabla = document.getElementById("contenidoTabla");

      //CODIGO PARA CREAR CONTENIDO DE TABLA
    for(i=0; i<20;i++){

        
        //CELDA ESCUDO
        let escudo = document.createElement("td");
        let img = document.createElement("img");
        img.setAttribute("src", `https://crests.football-data.org/${clasificacion.standings[0].table[i].team.id}.svg`);
        img.classList.add("imagenEscudo");
        escudo.append(img);

        
        //CELDA GANADOS
        
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
