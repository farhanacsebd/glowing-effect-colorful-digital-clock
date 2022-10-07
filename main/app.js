function digitalClock(){
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let timeFormet = "AM"; 

    let finalTime = `${hours} :${minutes} :${seconds} ${timeFormet} `;
    document.getElementById('time').innerText = finalTime;
    // document.getElementById('span').innerText = timeFormet;
}

setInterval(digitalClock,1000)