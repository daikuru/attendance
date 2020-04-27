<?php
if($_POST['attendanceInfo']=="出勤"){
$fp = fopen("/attendance/attendance.txt", "a");
fwrite($fp, .date("Y/m/d H:i:s")."¥n");
fclose($fp);
}elseif($_POST['attendanceInfo']=="退勤"){
$fp = fopen("/attendance/leaving.txt", "a");
fwrite($fp, .date("Y/m/d H:i:s")."¥n");
fclose($fp);
}else{

}
?>
