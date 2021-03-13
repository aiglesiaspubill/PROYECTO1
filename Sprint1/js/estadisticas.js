console.log(clasificacion);

function topFiveGoleadores()
{
    //AÑADIR UN TITULO
    let cabecera = document.getElementById("cabecera");
    let titulo = document.createElement("h1");
    titulo.innerHTML = ("ESTADISTICAS DE LA LIGA");
    cabecera.append(titulo);

    let cabeceraTabla = document.getElementById("cabeceraTabla");
    let contenidoTabla = document.getElementById("contenidoTabla");

    //CODIGO PARA CREAR CABECERA DE TABLA
    //Creo la fila
    let filaInitial = document.createElement("tr");

    //Columna escudo
    let titulo1 = document.createElement("th");
    titulo1.innerHTML = "ESCUDO";
     //Columna equipo
     let titulo2 = document.createElement("th");
     titulo2.innerHTML = "EQUIPO";
     //Columna goles
     let titulo3 = document.createElement("th");
     titulo3.innerHTML = "GOLES TOTALES";

    filaInitial.append(titulo1, titulo2, titulo3);
    cabeceraTabla.append(filaInitial);


    let indices = [];
    //CODIGO PARA ENCONTRAR LOS 5 MENOS GOLEADOS
    for(let i=0; i<20;i++){
        let golesPrimerEquipo = `${clasificacion.standings[0].table[i].goalsAgainst}`;
        let contadorPositivo = 0
        for(let j=1; j<20; j++){
            let equipoComparado = `${clasificacion.standings[0].table[j].goalsAgainst}`;
            
            if(golesPrimerEquipo <= equipoComparado && j!=i){
                contadorPositivo++;
            }
        }
        if (contadorPositivo >=15){
            indices.push(i);
        }
    }

    console.log(indices);
    

    for(let i=0; i<5;i++){

        //Creo primer elemento fila
        let fila = document.createElement("tr");


        //CELDA ESCUDO
        let escudo = document.createElement("td");
        let img = document.createElement("img");
        img.setAttribute("src", `https://crests.football-data.org/${clasificacion.standings[0].table[indices[i]].team.id}.svg`);
        img.classList.add("imagenEscudo");
        escudo.append(img);
        //CELDA EQUIPO
        let equipo = document.createElement("td");
        equipo.innerHTML = `${clasificacion.standings[0].table[indices[i]].team.name}`;
        //CELDA GOLES A FAVOR
        let golesFavor = document.createElement("td");
        golesFavor.innerHTML = `${clasificacion.standings[0].table[indices[i]].goalsAgainst}`;

        fila.append(escudo);
        fila.append(equipo);
        fila.append(golesFavor);
        contenidoTabla.append(fila);
    


    }
}

topFiveGoleadores();