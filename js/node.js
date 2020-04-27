const fs = require('./fs');

const attendanceButtonId = document.getElementById("attendance");
const leavingButtonId = document.getElementById("leaving");

attendanceButtonId.addEventListener("click", function() {
    var now = new Date();
    var Year = now.getFullYear();
    var Month = now.getMonth()+1;
    var Date = now.getDate();
    var Hour = now.getHours();
    var Min = now.getMinutes();
    fs.appendFileSync('/daikuru.github.io/attendance/attendance.txt', Year + "/" + Month + "/" + Date + "日" + Hour + ":" + Min + ":" );
    console.log('attendance.txtに追記されました');
});
