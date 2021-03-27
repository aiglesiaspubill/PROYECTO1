console.log(clasificacion);

function getDataMatches() {
    const url = "https://api.football-data.org/v2/competitions/2014/matches";
    fetch(url, {
        method: "GET",
        headers:{
            "X-Auth-Token":"ba887c48aa70430ab464256c42ff3bac"
        }

    }).then(response => {
        if(response.ok) return response.json();
    }).then(data => {
        console.log(data);

        tablaClasificacion(clasificacion.standings[0].table);
    })
    
};


getDataMatches();


//FUNCION GENERAR TABLA DEL TOTAL DE PARTIDOS
function tablaClasificacion(ligaPartidos){

    //SELECCIONA EL CUERPO DE LA TABLA
    let cuerpoTabla = document.getElementById("cuerpoTabla");
    for(let i=0; i<ligaPartidos.length;i++){

        //CREO EL PRIMER ELEMENTO FILA
        let fila = document.createElement("tr");

        //POSICION DEL EQUIPO
        let position = document.createElement("td");
        position.innerHTML = `${ligaPartidos[i].position}`;
        fila.append(position);

        //ESCUDO EQUIPO
        let escudo = document.createElement("td");
        let imagen = document.createElement("img");
        imagen.setAttribute("src", `https://crests.football-data.org/${ligaPartidos[i].team.id}.svg`);
        imagen.classList.add("imagenEscudo");
        escudo.append(imagen);
        fila.append(escudo);


        //NOMBRE EQUIPO
        let equipo = document.createElement("td");
        equipo.innerHTML = `${ligaPartidos[i].team.name}`;
        fila.append(equipo);

        //PUNTOS TOTALES
        let puntosTotales = document.createElement("td");
        puntosTotales.innerHTML = `${ligaPartidos[i].points}`;
        fila.append(puntosTotales);

        //PARTIDOS JUGADOS
        let partidosJugados = document.createElement("td");
        partidosJugados.innerHTML = `${ligaPartidos[i].playedGames}`;
        fila.append(partidosJugados);

        //PARTIDOS GANADOS
        let ganados = document.createElement("td");
        ganados.innerHTML = `${ligaPartidos[i].won}`;
        fila.append(ganados);

        //PARTIDOS EMPATADOS
        let empatados = document.createElement("td");
        empatados.innerHTML = `${ligaPartidos[i].draw}`;
        fila.append(empatados);

        //PARTIDOS PERDIDOS
        let perdidos = document.createElement("td");
        perdidos.innerHTML = `${ligaPartidos[i].lost}`;
        fila.append(perdidos);

        //GOLES A FAVOR
        let golesFavor = document.createElement("td");
        golesFavor.innerHTML = `${ligaPartidos[i].goalsFor}`;
        fila.append(golesFavor);

        //GOLES EN CONTRA
        let golesContra = document.createElement("td");
        golesContra.innerHTML = `${ligaPartidos[i].goalsAgainst}`;
        fila.append(golesContra);

        //DIFERENCIA DE GOLES
        let diferenciaGoles = document.createElement("td");
        diferenciaGoles.innerHTML = `${ligaPartidos[i].goalDifference}`;
        fila.append(diferenciaGoles);

        //AÑADO FILA AL CUERPO DE LA TABLA
        cuerpoTabla.append(fila);
    }
    
}






