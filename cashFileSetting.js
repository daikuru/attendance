// キャッシュファイルの指定
// 出勤キャッシュ
var CACHE_ATTENDANCE = 'attendance-cache';
// 退勤キャッシュ
var CACHE_LEAVING = 'leaving-cache';
var urlsToCache = [
    '/daikuru.github.io/attendance/',
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
