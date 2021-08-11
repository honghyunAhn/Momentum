# Momentum
Javascript를 사용하여 Chrome Extention Momentum 클론코딩
<br>
<br>

# Motivation
제가 필요한 기능들이 있는 홈화면과 새탭화면이 필요해서 만들게 되었습니다.
<br>
<br>

# Tech/framework used
- Languages : JavaScript
- Web Developement : HTML、CSS
- API : openweathermap
- Frameworks & Tools : Visual Studio Code
- Operating Systems : Windows 10
- Development period : 2021.3.20~2021.7.31
<br>

# Explanation
background.js + quotes.js
 - 행렬을 형성하여 랜덤 백그라운드, 송출 문구 지정
 - Math.random, Math.floor 기능을 사용한 행렬 순번 randomize

clock.js
 - Date 객체를 사용하여 날짜, 시간 관련 정보 표현
 - setInterval, setTimeout: 일정주기, 일정 시간 이후로 실행되는 타이머 설정

login.js
 - submit event가 발생할 시, localstorage에 유저 정보 저장
 - 유저 정보 저장 유무에 따라 기존의 form을 hidden, 이후 greeting message를 보이게 함

todo.js
 - 유저로부터 submit된 value를 localstorage에 string화한 객체(id와 todo)배열로 저장
 - localstorage에 저장된 정보의 유무로 li 표현 
 - li태그의 추가 및 삭제 기능

weather.js
 - openweathermap의 API를 사용하여 실시간 위치, 날씨, 기온 정보를 표현

bookmark.js
 - 유저로부터 submit된 value를 localstorage에 string화한 객체(id와 todo)배열로 저장
 - localstorage에 저장된 정보의 유무로 a태그 표현 
 - a태그의 추가 및 삭제 기능
<br>

# Screenshots
![Momentum](https://user-images.githubusercontent.com/54131117/128968882-28c1bb18-9e49-42dd-9371-113510191792.jpg)
