function obtenerHora() {
    let fecha = new Date();

    //declarar variables
    let pDiaSemana = document.getElementById("diasemana");
    let pDia = document.getElementById("dia");
    let pYear = document.getElementById("year");
    let pMes = document.getElementById("mes");
    let pHoras = document.getElementById("horas");
    let pMinutos = document.getElementById("minutos");
    let pSegundos = document.getElementById("segundos");
    let pAmPm = document.getElementById("ampm");

    let dias = ["domingo", "lunes", "martes", "miercoles", "jueves", "viernes", "sabado"];
    let meses = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];

    pDiaSemana.innerText = dias[fecha.getDay()];
    pMes.innerText = meses[fecha.getMonth()];
    pDia.innerText = fecha.getDate();
    pYear.innerText = fecha.getFullYear();

   //HORAS
    if (fecha.getHours() < 10) {
        pHoras.innerText = "0" + fecha.getHours();
        pAmPm.innerText = "AM"
    }
    else if(fecha.getHours() >12){
        if(fecha.getHours() <22){
        pHoras.innerText = "0" + (fecha.getHours() - 12);
        pAmPm.innerText = "PM"
    }
    else{ if(fecha.getHours() <22){}
    pHoras.innerText = fecha.getHours() - 12;
    pAmPm.innerText = "PM"}
    }
    else {
        pHoras.innerText = fecha.getHours();
        pAmPm.innerText = "AM"
    }

    //MINUTOS
    if (fecha.getMinutes() < 10) {
        pMinutos.innerText = "0"+ fecha.getMinutes();
    }
    else {
        pMinutos.innerText = fecha.getMinutes();
    }

    //SEGUNDOS
    if (fecha.getSeconds() < 10) {
        pSegundos.innerText = "0" + fecha.getSeconds();
    }
    else {
        pSegundos.innerText = fecha.getSeconds();
    }

}


window.setInterval(obtenerHora,1000)