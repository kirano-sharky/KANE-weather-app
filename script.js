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
        const 街 = document.querySelector('.街');
        街.innerText = `${応答.name}, ${応答.sys.country}`;
        /*const 成功 = document.querySelector('.成功')
        成功.textContent = '做的好';*/

        /*const today = new Date();
        const date = document.querySelector('.date');
        date.innerText = dateFunction(today);

        const temp = document.querySelector('.temp');
        temp.innerHTML = `Temp: ${Math.round(response.main.temp)} <span>°C</span>`;

        const weather = document.querySelector('.weather');
        weather.innerText = `Weather: ${response.weather[0].main}`;

        const tempRange = document.querySelector('.temp-range');
        tempRange.innerText = `Temp Range: ${Math.round(response.main.temp_min)}°C / ${Math.round(response.main.temp_max)}°C`;

        const weatherIcon = document.querySelector('.weather-icon');
        const iconURL = 'http://openweathermap.org/img/w/';
        weatherIcon.src = iconURL + response.weather[0].icon + '.png';

        search.value = '';*/
    }
}

