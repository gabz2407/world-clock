function updateCityTZ(selector, timezone) {
  let element = document.querySelector(selector);
  if (element) {
    let dateElement = element.querySelector(".date");
    let timeElement = element.querySelector(".time");
    dateElement.innerHTML = moment().tz(timezone).format("Do, MMMM");

    let hours = moment().tz(timezone).format("h[h]mm:ss");
    let am = moment().tz(timezone).format("A");
    timeElement.innerHTML = `${hours} <span>${am}</span>`;
  }
}

function updateContent() {
  updateCityTZ("#singapore", "Asia/Singapore");
  updateCityTZ("#lisbon", "Europe/Lisbon");
}

function changeCity(event) {
  let citySelected = event.target.value;
  if (citySelected) {
    if (citySelected === "current") {
      citySelected = moment.tz.guess();
    }

    let date = moment().tz(`${citySelected}`).format("Do, MMMM");

    let time = moment()
      .tz(`${citySelected}`)
      .format("h[h]mm:ss [<span>] A[</span>]");

    let cityName = citySelected.replace("_", " ").split("/")[1];

    let cityTimezone = document.querySelector("#data");
    cityTimezone.innerHTML = `
      <div class="cities" id="selected-element">
        <div>
          <h2 class="city-selected">${cityName}</h2>
          <div class="date">${date}</div>
        </div>
        <div class="time">${time}</div>
      </div>`;

    clearInterval(intervalId);

    intervalId = setInterval(function () {
      updateCityTZ("#selected-element", citySelected);
    }, 1000);
  }
}

let selectListElement = document.querySelector("#select-city");
selectListElement.addEventListener("change", changeCity);

updateContent();
let intervalId = setInterval(updateContent, 1000);
