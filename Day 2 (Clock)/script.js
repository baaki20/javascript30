const secondHand = document.querySelector('.sec-hand');
const minuteHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setTime(){
    const now = new Date();

    //Gets the angle of rotation for the second hand
    const seconds = now.getSeconds();
    const secondDegree = ((seconds / 60) * 360) - 90;
    secondHand.style.transform = `rotate(${secondDegree}deg)`;

    //Gets the angle of rotation for the minute hand
    /*const minutes = now.getMinutes();
    const minuteDegree = ((minutes / 60) * 360) - 90;
    minuteHand.style.transform = `rotate(${minuteDegree}deg)`;
    */
    const minuteDegree = now.getMinutes() * 6; //The minute hand rotates by 6 degrees every minute
    const minuteHandSecondDegree = seconds * 0.1; // The minute hand rotates by 0.1 degress every second
    const finalMinuteDegree = (minuteDegree + minuteHandSecondDegree) - 95;
    minuteHand.style.transform = `rotate(${finalMinuteDegree}deg)`;

    //Gets the angle of rotation for the hour hand
    const hourDegree = now.getHours() * 30; //The hour hand rotates 30 degrees every hour
    const hourHandMinuteDegree = now.getMinutes() * 0.5; // The hour hand rotates 0.5 degree every minute
    const finalHourDegree = (hourDegree + hourHandMinuteDegree) -90;
    hourHand.style.transform = `rotate(${finalHourDegree}deg)`;

}   

setInterval(setTime, 1000);
