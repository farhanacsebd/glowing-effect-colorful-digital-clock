function digitalClock(){
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let timeFormet = "AM"; 

    let finalTime = `${hours} :${minutes} :${seconds} `;
    document.getElementById('time').innerText = finalTime;
}