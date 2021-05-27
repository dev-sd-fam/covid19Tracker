var country = document.getElementById("country")
var date = document.getElementById("date")
var newConfirmed = document.getElementById("NewConfirmed")
var newDeaths = document.getElementById("NewDeaths")
var newRecovered = document.getElementById("NewRecovered")
var totalConfirmed = document.getElementById("TotalConfirmed")
var totalDeaths = document.getElementById("TotalDeaths")
var totalRecovered = document.getElementById("TotalRecovered")


// fetch covid api
fetch('https://api.covid19api.com/summary').then((data) => {
    return data.json()
}).then((apiData) => {
    // display perticular data
    country.innerHTML = apiData.Countries[76].Country;
    time();
    newConfirmed.innerHTML = apiData.Countries[76].NewConfirmed;
    newDeaths.innerHTML = apiData.Countries[76].NewDeaths;
    newRecovered.innerHTML = apiData.Countries[76].NewRecovered;
    totalConfirmed.innerHTML = apiData.Countries[76].TotalConfirmed;
    totalDeaths.innerHTML = apiData.Countries[76].TotalDeaths;
    totalRecovered.innerHTML = apiData.Countries[76].TotalRecovered;

}).catch((err) =>{
    // if something wrong then shows error
    console.log(err)
})


// date function
var time = () => {
    var time = new Date();
                
    var currDate = time.getUTCDate();
    var currMonth = time.getUTCMonth();
    var currYear = time.getUTCFullYear();
    
    
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var month;
    month = months[currMonth];
    // console.log(month);
    
    date.innerHTML = `${currDate} ${month} ${currYear}`
 }