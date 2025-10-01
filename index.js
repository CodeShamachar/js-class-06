let hour = document.querySelector('.hr');
let minute = document.querySelector('.min');
let second = document.querySelector('.sec');

setInterval(() => {
    // Selection
    let date = new Date();
    let hr = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();

    // Calculation
    let hourClac = hr*30 + min/2;
    let minuteCalc = min*6;
    let secondCalc = sec*6;

    // Rotetion

     hour.style.transform = `rotate(${hourClac}deg)`;
     minute.style.transform = `rotate(${minuteCalc}deg)`;
     second.style.transform = `rotate(${secondCalc}deg)`;




    
}, 1000);