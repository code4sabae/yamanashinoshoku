# 特選やまなしの食オープンデータの加工＆再配布

## 元オープンデータ
https://www.pref.yamanashi.jp/shokuhin-st/shokuiku/yamanashinoshoku_tokusen47_od.html  
CC BY 山梨県

## 加工CSVオープンデータ
https://code4sabae.github.io/yamanashinoshoku/yamanashinoshoku3.csv  
UTF-8化、写真URL追加、写真ダウンロード、GitHub Pages対応

## 変換プログラムと変換手順
```
$ deno run -A download.js
$ deno run -A parse_make.js
$ deno run -A download_images.js
```

## サンプルアプリ
https://code4sabae.github.io/yamanashinoshoku/  
CC BY 福野泰介の一日一創  
