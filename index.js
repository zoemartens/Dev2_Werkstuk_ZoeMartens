"use strict";
//FIREBASE CODE
firebase.initializeApp({
  apiKey: 'AIzaSyDIjwkCBF5lBORnYBJmzXp1BmV2gCSOy-A',
  projectId: 'werkstuk-zoemartens-4ba50'
});

const database = firebase.firestore();
const placeCollection = database.collection("place");

const convertQuerySnapshotToRegularArray = (querySnapshot) => querySnapshot.docs.map((item) => ({ id: item.id, ...item.data() }));

async function renderPlace(){
  placeCollection.onSnapshot((querySnapshot) => {

    const place = convertQuerySnapshotToRegularArray(querySnapshot);
    console.log(place);

    //START CODE
let form = document.getElementById('form');
form.addEventListener('submit', getWeather);

async function getWeather(event){
    event.preventDefault();
    console.log('Form submit');

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
    

    let htmlString1 = 
    `<ul>
     <h3>Place: ${data.name}</h3>
      <li>Temperature: ${data.main.temp}</li>
      <li>Description: ${data.weather[0].description}</li>
    </ul>
    `;

//GEPROBEERD MAAR WERKT NIET
    /*let celsius = `${data.main.temp}`;

    function convertToF(celsius){
      if(document.getElementsByClassName("slider")=true){
        return celsius * 9/5 + 32
      }else{
        return celcius;
      }
    }
    convertToF();*/


  //Inject into HTML
  console.log('htmlString1', htmlString1);
        let listHtml = document.getElementById('weatherResult');
        listHtml.innerHTML= htmlString1;

let formFavorites = document.getElementById('savedList');
savedList.addEventListener('submit', makeFavorite);

function makeFavorite(event){
  event.preventDefault();
  console.log('make favorite begins');
  let htmlString2 = document.getElementById('favoritesResult').innerHTML += htmlString1;


      }
      
    }
    
  });
}

renderPlace();