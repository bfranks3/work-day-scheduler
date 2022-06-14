var dateTime = function() {
    var currentDay = document.getElementById("currentDay");
    var time = moment(); 
    currentDay.textContent = time.format("dddd, MMMM Do YYYY, h:mm:ss a");
    setInterval(function() {dateTime(); }, 1000);
}