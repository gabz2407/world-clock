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
  updateCityTZ("#los-angeles", "America/Los_Angeles");
  updateCityTZ("#barcelona", "Europe/Madrid");
}

updateContent();
setInterval(updateContent, 1000);

//

function changeCity(event) {
  if (event.target.value.length > 0) {
    let selectedCityElement = document.querySelector("#selected-city");
    let selectedCity = selectedCityElement.querySelector(".city-selected");
    let selectedDate = selectedCityElement.querySelector(".date-selected");
    let selectedTime = selectedCityElement.querySelector(".time-selected");
    selectedCity.innerHTML = event.target.value;
    selectedDate.innerHTML = moment()
      .tz(`${event.target.value}`)
      .format("Do, MMMM");
    selectedTime.innerHTML = moment()
      .tz(`${event.target.value}`)
      .format("h[h]mm:ss[<span>]A[</span>]");
  }
}

let selectListElement = document.querySelector("#select-city");
selectListElement.addEventListener("change", changeCity);
