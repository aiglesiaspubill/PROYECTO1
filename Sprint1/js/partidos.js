console.log(data);
console.log(data.matches);

function tablaPartidosTotales(){

    for(let i = 0; i<data.matches.length; i++){

        //EQUIPO LOCAL
        let local = `${data.matches[i].homeTeam.name}`;
        //EQUIPO VISITANTE
        let visitante= `${data.matches[i].awayTeam.name}`;
        //GOLES LOCAL
        let golesLocal= `${data.matches[i].score.fullTime.homeTeam}`;
        if (golesLocal == "null") golesLocal = "-";
        //GOLES VISITANTE
        let golesVisitante= `${data.matches[i].score.fullTime.awayTeam}`;
        if (golesVisitante == "null") golesVisitante = "-";

        //ARRAY DE DATOS OBTENIDOS
        let datos = [local, visitante, golesLocal, golesVisitante];

        //GENERO FILA A FILA CADA TABLA
        generarFilaConHTML(datos);
    }


}

tablaPartidosTotales();
