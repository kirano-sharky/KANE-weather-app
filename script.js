const api = {
    鍵: "46a437715100d9c915e7a19e646488f8",
    ベース: "https://api.openweathermap.org/data/2.5/"
}

const 探す = document.querySelector('.探す');
const 参加する = document.querySelector('.参加する');
参加する.addEventListener('click', 拿Input);

function 拿Input (event) {
    event.preventDefault();
    if (event.type == 'click') {
        getData(探す.value);
        console.log(探す.value);
    }
}

function getData () {
    fetch(`${api.ベース}weather?q=${探す.value}&units=metric&appid=${api.鍵}`)
        .then(応答 => {
            return 応答.json();
        }).then(displayData);
}

function displayData (応答) {
    if (応答.cod === '404') {
        const エラー = document.querySelector('.エラー');
        エラー.textContent = '請記得準確表達哦!';
        探す.value = '';
    } 
    else {
        /*用於地點*/ 
        const 街 = document.querySelector('.街');
        街.innerText = `${応答.name}, ${応答.sys.country}`;
        /*用於日期*/
        /*const today = new Date();
        const date = document.querySelector('.date');
        date.innerText = dateFunction(today);*/
        /*用於溫度*/
        /*const temp = document.querySelector('.temp');
        temp.innerHTML = `Temp: ${Math.round(response.main.temp)} <span>°C</span>`;*/
        /*用於天氣*/
        /*const weather = document.querySelector('.weather');
        weather.innerText = `Weather: ${response.weather[0].main}`;*/
        /*用於周圍溫度*/
        /*const tempRange = document.querySelector('.temp-range');
        tempRange.innerText = `Temp Range: ${Math.round(response.main.temp_min)}°C / ${Math.round(response.main.temp_max)}°C`;*/
        /*用於天氣icon*/
        /*const weatherIcon = document.querySelector('.weather-icon');
        const iconURL = 'http://openweathermap.org/img/w/';
        weatherIcon.src = iconURL + response.weather[0].icon + '.png';

        search.value = '';*/
    }
}

setInterval(()=>{
    const 日 = document.querySelector(".時間 .日");
    let 日期 = new Date();
    let 小時 = 日期.getHours();
    let 分鐘 = 日期.getMinutes();
    let 秒 = 日期.getSeconds();
    let 時段 = "AM";
    if(小時 > 12){
      時段 = "PM";
      小時 = 小時 - 12;
    }
    if(秒 < 10){
      秒 = "0" + 秒;
    }
    if(分鐘 < 10){
      分鐘 = "0" + 分鐘;
    }
    if(小時 < 10){
      小時 = "0" + 小時;
    }
    日.textContent = 小時 + ":" + 分鐘 + ":" + 秒 + " "+ 時段;
  });