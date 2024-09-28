let year = document.querySelector("#year");

let month = document.querySelector("#month");

let week = document.querySelector("#week");

let day = document.querySelector("#day");

let hour = document.querySelector("#hour");

let minute = document.querySelector("#minute");

let second = document.querySelector("#second");

let milisecond = document.querySelector("#milisecond");

let date_day = "30";

let date_month = "09";

let date_year = "2008";

let date_hms = "00:00:00";

let date = `${date_month}, ${date_day}, ${date_year}, ${date_hms}`;

setInterval(() => {

    let born = new Date(date);

    let now = new Date();

    let distance = now.getTime() - born.getTime();

    let zero = distance.toString().length;

    year.innerText = `${Math.floor(distance / (1000 * 60 * 60 * 24 * 7 * 4.35 * 12)).toString().padStart(zero, "0")}`;

    month.innerText = `${Math.floor(distance / (1000 * 60 * 60 * 24 * 7 * 4.35)).toString().padStart(zero, "0")}`;

    week.innerText = `${Math.floor(distance / (1000 * 60 * 60 * 24 * 7)).toString().padStart(zero, "0")}`;

    day.innerText = `${Math.floor(distance / (1000 * 60 * 60 * 24)).toString().padStart(zero, "0")}`;

    hour.innerText = `${Math.floor(distance / (1000 * 60 * 60)).toString().padStart(zero, "0")}`;

    minute.innerText = `${Math.floor(distance / (1000 * 60)).toString().padStart(zero, "0")}`;

    second.innerText = `${Math.floor(distance / (1000)).toString().padStart(zero, "0")}`;

    milisecond.innerText = `${Math.floor(distance).toString().padStart(zero, "0")}`

}, 1);