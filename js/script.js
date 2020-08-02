let hour1 = document.getElementsByTagName('h1')[1];
let hour2 = document.getElementsByTagName('h1')[2];

let minute1 = document.getElementsByTagName('h1')[3];
let minute2 = document.getElementsByTagName('h1')[4];

let seconds1 = document.getElementsByTagName('h1')[5];
let seconds2 = document.getElementsByTagName('h1')[6];

let clockBody = document.getElementsByClassName('clock-body')[0];

let period = document.getElementsByTagName('h2')[3];
let period2 = document.getElementsByTagName('h2')[4];

let heading = document.getElementsByTagName('h1')[0];

let btn = document.getElementById('button');

function timer() {

    let time = new Date();

    let hour = time.getHours();
    let minute = time.getMinutes();
    let second = time.getSeconds();

    let hourArray = hour.toString().split('');
    let minuteArray = minute.toString().split('');
    let secondArray = second.toString().split('');

    if (second == 0) {
        seconds1.innerText = "0";
        seconds2.innerText = "0"
        clockBody.style.backgroundColor = "greenyellow";
    } else if (secondArray.length == 1) {
        //console.log("yes its one");
        seconds1.innerText = "0"
        seconds2.innerText = secondArray[0];
        clockBody.style.backgroundColor = "black";
    } else if (secondArray.length == 2) {
        //console.log("yes its two");
        seconds1.innerText = secondArray[0];
        seconds2.innerText = secondArray[1];
    };

    if (minute == 0) {
        minute1.innerText = "0";
        minute2.innerText = "0"
    } else if (minuteArray.length == 1) {
        minute1.innerText = "0"
        minute2.innerText = minuteArray[0];
    } else if (minuteArray.length == 2) {
        minute1.innerText = minuteArray[0];
        minute2.innerText = minuteArray[1];
    };

    if (hour == 0) {
        hour1.innerText = "0";
        hour2.innerText = "0"
    } else if (hourArray.length == 1) {
        hour1.innerText = "0"
        hour2.innerText = hourArray[0];
    } else if (hourArray.length == 2) {
        hour1.innerText = hourArray[0];
        hour2.innerText = hourArray[1];
    };

    if (hour <= 11) {
        period.innerText = "A"
        period.style.color = "blue";
        period2.style.color = "blue";
    } else if (hour >= 12) {
        period.innerText = "P"
        period.style.color = "red";
        period2.style.color = "red";
    }
    

    //console.log(hour)
    // console.log(hourArray);
    //console.log(minuteArray);
    // console.log(secondArray);
}

let counter = 0;

function headingColors() {

    let colors = ["yellow","red","orange","blue"];
    let borderColors = ["5px solid yellow","5px solid red","5px solid orange","5px solid blue"];

    if (counter >= colors.length) {
        counter = 0;
    }

    heading.style.color = colors[counter];
    

    clockBody.style.borderTop = borderColors[counter];
    clockBody.style.borderBottom = borderColors[counter];
    clockBody.style.borderLeft = borderColors[counter];
    clockBody.style.borderRight = borderColors[counter];

    counter++;
    
}


let interval = '';
let borderInterval = '';
btn.addEventListener('click', function(){

    if (btn.innerText == "Start") {
        interval = setInterval(timer, 1000);
        borderInterval = setInterval(headingColors, 2000);
        btn.innerText = "Stop";
        btn.setAttribute('class','btn-tweet')
    } else if (btn.innerText == "Stop") {
        clearInterval(interval);
        clearInterval(borderInterval);
        btn.innerText = "Start";
        btn.setAttribute('class','btn-accept')
    }
    
});

