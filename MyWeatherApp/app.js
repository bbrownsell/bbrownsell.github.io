const searchBtn = document.getElementById('searchBtn');
const input = document.getElementById('input');
const city = document.getElementById('city');
const description = document.querySelector('.weather-description');
const temp = document.querySelector('.temp');
const icon = document.querySelector('.icon');

function weatherBalloon(e) {
    let inputVal = input.value;
    const apiKey = 'e6b9b998b2255b5a9803b5dc3fa7e273';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputVal}&appid=${apiKey}`;

    e.preventDefault();

    
    fetch(url)
    .then(function(resp) { 
        if (resp.status === 400) {
            alert("Please enter a City");
        } else if (resp.status === 404) {
            alert("City not found");
        }
        return resp.json() // Convert data to json
    }) 
    .then(function(data) {
        // console.log(data);
        drawWeather(data);
    })
    .catch(function() {
        // catch any errors
    });
    
    if (e.target == searchBtn) {
        input.value = "";
    }
}

let pTemp = document.createElement('p');
let pDesc = document.createElement('p');


function drawWeather(d) {
    let celcius = Math.round(parseFloat(d.main.temp)-273.15);

    pTemp.innerHTML = celcius + '&deg;';
    temp.appendChild(pTemp);

    pDesc.textContent = d.weather[0].description;
    description.appendChild(pDesc);
    
    const iconCode = d.weather[0].icon;
    const iconUrl = `https://openweathermap.org/img/w/${iconCode}.png`;
    const image = `<img class="icon-img" src="${iconUrl}" alt="weather icon">`;
    icon.innerHTML = image;

    let cityName = d.name;
    city.innerHTML = cityName;
    city.parentElement.appendChild(cityName);
}

searchBtn.addEventListener('click', weatherBalloon);