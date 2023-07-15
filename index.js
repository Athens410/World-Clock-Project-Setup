function updateTime (){
// los angeles
let losAngelesElement = document.querySelector("#los-angeles");
let losAngelesDateElement = losAngelesElement.querySelector(".date");
let losAngelesTimeElement = losAngelesElement.querySelector(".time");
let losAngelesTime = moment().tz("America/Los_Angeles");



losAngelesDateElement.innerHTML =  losAngelesTime.format("MMMM Do YYYY");
losAngelesTimeElement.innerHTML = losAngelesTime.format("h:mm:ss:SSS [<small>]A[</small>]  ") ;


// sydney
let sydneyElement = document.querySelector("#sydney");
let sydneyDateElement = sydneyElement.querySelector(".date");
let sydneyTimeElement = sydneyElement.querySelector(".time");
let sydneyTime = moment().tz("Australia/Sydney");



sydneyDateElement.innerHTML =  sydneyTime.format("MMMM Do YYYY");
sydneyTimeElement.innerHTML = sydneyTime.format("h:mm:ss:SSS [<small>]A[</small>]  ") ;
// tokyo
let tokyoElement = document.querySelector("#tokyo");
let tokyoDateElement = tokyoElement.querySelector(".date");
let tokyoTimeElement = tokyoElement.querySelector(".time");
let tokyoTime = moment().tz("Asia/Tokyo");



tokyoDateElement.innerHTML =  tokyoTime.format("MMMM Do YYYY");
tokyoTimeElement.innerHTML = tokyoTime.format("h:mm:ss:SSS [<small>]A[</small>]  ") ;




 }
 updateTime();
 setInterval(updateTime , 1000);




 function updateCity(event){

let cityTimeZone = event.target.value;

let cityName =cityTimeZone.replace("_", "").split("/")[1];
let cityTime = moment().tz(cityTimeZone);

let citiesElement = document.querySelector("#cities");
citiesElement.innerHTML = `


<div class="city" >

<h2>${cityName}</h2>
<div class="date">
    ${cityTime.format("MMMM Do YYYY")}
</div>
<div class="time">
   ${cityTime.format("h:mm:ss:SSS")}<small>${cityTime.format("A")}</small>
</div>

</div>




`;

 }

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity)