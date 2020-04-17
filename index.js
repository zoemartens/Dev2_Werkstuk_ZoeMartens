"use strict";

let form = document.getElementById('form');
form.addEventListener('submit', getWeather);

async function getWeather(event){
    event.preventDefault();
    console.log('Form submit event');

    //Get input value
    let search = document.getElementById('search');
    console.log(search.value);    

    //Do API call
    const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${search.value}&APPID=d7b955c4c268fe54649d6f0d702b39d1&units=metric`);
    console.log(response);
    const data = await response.json();
    console.log('Data', data);
    console.log('Place', data.name);
    console.log(data.main.temp);
    console.log(data.weather[0].description);

    let htmlString1 = `<h2>Weather:</h2>
    <ul>
     <h3>Place: ${data.name}</h3>
      <li>Temperature: ${data.main.temp}</li>
      <li>Description: ${data.weather[0].description}</li>
    </ul>
    `;


  //Inject into HTML
  console.log('htmlString1', htmlString1);
        let listHtml = document.getElementById('weatherResult');
        listHtml.innerHTML= htmlString1;
}

let formFavorites = document.getElementById('savedList');
savedList.addEventListener('submit', makeFavorite);

function makeFavorite(){
  console.log('make favorite begins');
  let empty = document.getElementById('favorites').innerHTML;
  let change = str.replace("no favorites yet", "htmlString1");
  document.getElementById('favorites').innerHTML = change;
  
}