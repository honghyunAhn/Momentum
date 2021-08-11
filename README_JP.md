# Momentum
Javascriptを使用してChrome Extention Momentumクローンコーディング


# Motivation
私が必要な機能があるホーム画面と新しいタブ画面が必要なので作りました。


# Tech/framework used
- Languages : JavaScript
- Web Developement : HTML、CSS
- API : openweathermap
- Frameworks & Tools : Visual Studio Code
- Operating Systems : Windows 10
- Development period : 2021.3.20~2021.7.31


# Explanation
background.js + quotes.js
 - ランダムバックグラウンド、送出文句を指定
 - Math.random, Math.floor機能を使用した行列の順番randomize

clock.js
 - Dateオブジェクトを使用して時間に関する情報を表現
 - set Interval、set Timeout:一定周期、一定時間以降に実行されるタイマー設定

login.js
 - submit eventが発生する場合、ローカルストレージにユーザー情報を保存
 - ユーザー情報保存の有無によって既存のformをhidden、以後greeting messageを見せる

todo.js
 - ユーザーからsubmitされたvalueをlocalstorageにstring化したオブジェクト(idとtodo)で保存
 - local storageに保存された情報の有無でliタグ表現 
 - liタグの追加及び削除機能

weather.js
 - openweathermapのAPIを使用してリアルタイムの位置、天気、気温情報を表現

bookmark.js
 - ユーザーからsubmitされたvalueをlocalstorageにstring化したオブジェクト(idとbookmark)で保存
 - local storageに保存された情報の有無でaタグを表現 
 - aタグの追加及び削除機能


# Screenshots
![Momentum](https://user-images.githubusercontent.com/54131117/128968882-28c1bb18-9e49-42dd-9371-113510191792.jpg)
