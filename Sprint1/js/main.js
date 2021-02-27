console.log(data);



function test(){
    let contenido = document.getElementById("contenido");
    let continente = document.createElement("div");
    continente.innerHTML = `${data.matches[0].homeTeam.name}`;

    contenido.append(continente);
}



function sacarPartido(){

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

    fila.append(local);
    fila.append(golesLocal);
    fila.append(visitante);
    fila.append(golesVisitante);
    contenido.append(fila);
   

}



function sacarSeriePartidos(partidos){

    let contenido = document.getElementById("contenido");
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
        fila.append(visitante);
        fila.append(golesVisitante);
        contenido.append(fila);
    }


}

sacarSeriePartidos(50);
