window.onload = function(){

    let appendSeconds =  document.getElementById("seconds");
    let appendMilliS =  document.getElementById("milliseconds");
    let btnStart =   document.getElementById("btn-start");
    let btnStop =   document.getElementById("btn-stop");
    let btnReset =  document.getElementById("btn-reset");

    let Interval;
    let milisegundos = 0;
    let segundos = 0;

    btnStart.onclick = function(){
        clearInterval(Interval);
        Interval = setInterval(startTimer, 10);
    }
    btnStop.onclick = function(){
        clearInterval(Interval)
    }

    btnReset.onclick = function(){
        clearInterval(Interval);
        milisegundos = "00";
        segundos = "00";
        appendMilliS.innerHTML = milisegundos;
        appendSeconds.innerHTML = segundos;
    }


    function startTimer(){
        milisegundos++;

        if(milisegundos <= 9){
            appendMilliS.innerHTML = "0"+ milisegundos;
        }if(milisegundos > 9){
            appendMilliS.innerHTML = milisegundos;
        }if (milisegundos > 99){
            console.log("segundos")
            segundos++;
            appendSeconds.innerHTML = "0"+segundos;
            milisegundos = 0;
            appendMilliS.innerHTML = "0"+0;
        }
        if(segundos > 9){
            appendSeconds.innerHTML = segundos;
        }
    }
}


