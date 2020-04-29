<?php
//ボタンを押下した時の動作を種類ごと行う
//各テキストファイルに追記モードで日付を記載していく
if($_POST['attendanceInfo']=="出勤"){
$fp = fopen("/attendance/attendance.txt", "a");
fwrite($fp, .date("Y/m/d H:i:s")."¥n");
fclose($fp);
}elseif($_POST['attendanceInfo']=="退勤"){
$fp = fopen("/attendance/leaving.txt", "a");
fwrite($fp, .date("Y/m/d H:i:s")."¥n");
fclose($fp);
}else{
//特に何もしない
}
?>
