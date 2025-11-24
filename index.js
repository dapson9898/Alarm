let setAlarmTime = [];
let repeat;
let time;
// alert((new Date).getHours() +":"+ (new Date).getMinutes())
let hoursInput = new Date().getHours() + 1;
hoursInput = hoursInput > 24 ? hoursInput - 24 : hoursInput;
const formattedHours = hoursInput < 10 ? "0" + hoursInput : hoursInput;
const formattedMinutes = new Date().getMinutes() < 10 ? "0" + new Date().getMinutes() : new Date().getMinutes();
const currentTime = `${formattedHours}:${formattedMinutes}`;
// console.log(currentTime);
alarmTime.value = currentTime;

function alarmSystem() {
    if (alarmTime.length != 0) {
        time = new Date();
        let currentTime = time.toTimeString().slice(0, 5);
        setAlarmTime.map((time, index) => {
            if (setAlarmTime[index] == currentTime) {
                console.log("Wake up");
                document.getElementById("ringing").play();
                setAlarmTime.splice(index, 1);
                console.log(setAlarmTime);
                displayAllAlarm();

                if (setAlarmTime.length == "") {
                    clearTimeout(repeat);
                }
            }
        });
    }
}

function displayAllAlarm() {
    displayAlarms.innerHTML = "";
    if (setAlarmTime.length == 0) {
        displayAlarms.innerHTML = `<h1>No Alarm!</h1>`;
    } else {
        setAlarmTime.map((alarm, index) => {
            displayAlarms.innerHTML += `<h1>(${index + 1}) ${alarm}</h1>`;
            console.log("alarm +", alarm)
        });
    }
}

let myalarmTime = document.getElementById("alarmTime").value
console.log(myalarmTime)
function setAlarm() {
    if ((alarmTime.value == "")) {
        alert("Set alarm time");
        return;
    }
    setAlarmTime.push(alarmTime.value);
    console.log(setAlarmTime);
    repeat = setInterval(alarmSystem, 1000);
    displayAllAlarm();
    alarmTime.value = currentTime;
}
