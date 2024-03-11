function updateContent() {
  let laElement = document.querySelector("#los-angeles");
  let laDateElement = laElement.querySelector(".date");
  let laTimeElement = laElement.querySelector(".time");
  laDateElement.innerHTML = moment()
    .tz("America/Los_Angeles")
    .format("MMMM, Do");

  let laHours = moment().tz("America/Los_Angeles").format("h[h]mm:ss");
  let laAm = moment().tz("America/Los_Angeles").format("A");
  laTimeElement.innerHTML = `${laHours} <span>${laAm}</span>`;

  //paris

  let barElement = document.querySelector("#barcelona");
  let barDateElement = barElement.querySelector(".date");
  let barTimeElement = barElement.querySelector(".time");
  barDateElement.innerHTML = moment().tz("Europe/Madrid").format("MMMM, Do");

  let bHours = moment().tz("Europe/Madrid").format("h[h]mm:ss");
  let bAm = moment().tz("Europe/Madrid").format("A");
  barTimeElement.innerHTML = `${bHours} <span>${bAm}</span>`;
}
updateContent();
setInterval(updateContent, 1000);
