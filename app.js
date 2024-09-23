const API_KEY = "AIzaSyAujRd62kDheKBWAGbydc1YglJE6KDD8v8";
var divTag = document.getElementById("counts");

const SHEET_ID = "1BWkz0USGAIGnO0A65DGQqS2vf4nRbY2YPOhwmhPOH2o";
var api = `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/A2:C22?key=${API_KEY}`;

fetch(api)
    .then((res) => res.json())
    .then((data) => {
        let ads = data.values;
        for (let i = 0; i < ads.length; i++) {
            let item = ads[i];
            console.log("item:", item);
            divTag.innerHTML += `
        <div class='card'>
          <img src = ${item[2]}/>
          <p>${item[0]}</p>
          <span>${item[1]}</span>
          <br>
          <button>BUY NOW </button>
        </div>`;
        }
    });




