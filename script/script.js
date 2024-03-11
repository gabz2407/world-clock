function updateCityTZ(selector, timezone) {
  let element = document.querySelector(selector);
  let dateElement = element.querySelector(".date");
  let timeElement = element.querySelector(".time");
  dateElement.innerHTML = moment().tz(timezone).format("MMMM, Do");

  let hours = moment().tz(timezone).format("h[h]mm:ss");
  let am = moment().tz(timezone).format("A");
  timeElement.innerHTML = `${hours} <span>${am}</span>`;
}

function updateContent() {
  updateCityTZ("#london", "Europe/London");
  updateCityTZ("#lisbon", "Europe/Lisbon");
}

function changeCity(event) {
  let citySelected = event.target.value;
  if (citySelected === "current") {
    citySelected = moment.tz.guess();
  }
  if (event.target.value.length > 0) {
    let date = moment().tz(`${event.target.value}`).format("Do, MMMM");
    let time = moment()
      .tz(`${event.target.value}`)
      .format("h[h]mm:ss [<span>] A[</span>]");

    let cityName = citySelected.replace("_", " ").split("/")[1];

    let cityTimezone = document.querySelector("#data");
    cityTimezone.innerHTML = `
      <div class="cities">
        <div>
          <h2 class="city-selected">${cityName}</h2>
          <div class="date">${date}</div>
        </div>
        <div class="time">${time}</div>
      </div>`;
  }
}

let selectListElement = document.querySelector("#select-city");
selectListElement.addEventListener("change", changeCity);

updateContent();
