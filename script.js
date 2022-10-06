const api = {
    key: '46a437715100d9c915e7a19e646488f8',
    base: 'https://api.openweathermap.org/data/3.0/'
}

const 探す = document.querySelector('.探す');
const 参加する = document.querySelector('.参加する');
参加する.addEventListener('click', 去input);

function 去input (event) {
    event.preventDefault();
    if (event.type == 'click') {
        getData(探す.value);
        console.log(探す.value);
    }
}

function getData () {
    fetch(`${api.base}weather?q=${探す.value}&units=metric&appid=${api.key}`)
        .then(response => {
            return response.json();
        }).then(displayData);
        
}

function displayData (response) {
    console.log(response)
}