const fs = require('fs');

const attendanceButtonId = document.getElementById("attendance");
const leavingButtonId = document.getElementById("leaving");

// キャッシュファイルの指定
// 出勤キャッシュ
var CACHE_ATTENDANCE = 'attendance-cache';
// 退勤キャッシュ
var CACHE_LEAVING = 'leaving-cache';
var urlsToCache = [
    '/daikuru.github.io/attendance/',
    '/daikuru.github.io/attendance/attendance.txt/',
    '/daikuru.github.io/attendance/leaving.txt/',
];

// インストール処理
self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open(CACHE_ATTENDANCE)
          .then(
          function(cache){
              return cache.addAll(urlsToCache); // 指定したリソースをキャッシュへ追加
              // 1つでも失敗したらService Workerのインストールはスキップされる
          })
        caches.open(CACHE_LEAVING)
          .then(
          function(cache){
              return cache.addAll(urlsToCache); // 指定したリソースをキャッシュへ追加
              // 1つでも失敗したらService Workerのインストールはスキップされる
          })
    );
});

attendanceButtonId.addEventListener("click", function() {
    var now = new Date();
    var Year = now.getFullYear();
    var Month = now.getMonth()+1;
    var Date = now.getDate();
    var Hour = now.getHours();
    var Min = now.getMinutes();
    fs.appendFileSync('attendance.txt', Year + "/" + Month + "/" + Date + "日" + Hour + ":" + Min + ":" );
});

/*
self.addEventListener('fetch', event => {
  event.respondWith(new Response('Hello World!'));
});
*/

// リソースフェッチ時のキャッシュロード処理
self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches
            .match(event.request)
            .then(function(response) {
                return response ? response : fetch(event.request);
            })
    );
});