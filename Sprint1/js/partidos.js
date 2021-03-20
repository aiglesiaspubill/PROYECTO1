console.log(data);
console.log(data.matches);

let cabecera = ["LOCAL", "VISITANTE", "GOLES LOCAL", "GOLES VISITANTE"];


function tablaPartidosTotales(){

    añadirCabeceraTabla(cabecera);

    for(let i = 0; i<data.matches.length; i++){
        let local = `${data.matches[i].homeTeam.name}`;
        let visitante= `${data.matches[i].awayTeam.name}`;
        let golesLocal= `${data.matches[i].score.fullTime.homeTeam}`;
        if (golesLocal == "null") golesLocal = "-";
        let golesVisitante= `${data.matches[i].score.fullTime.awayTeam}`;
        if (golesVisitante == "null") golesVisitante = "-";
        let filaTabla = cuerpoTabla.insertRow(i);
        let datos = [local, visitante, golesLocal, golesVisitante];

        generarTabla(cabecera, filaTabla, datos);
    }


}

tablaPartidosTotales();
