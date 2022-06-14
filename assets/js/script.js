var m = moment().format('dddd, MMMM Do');

var todaysDate = document.getElementById("currentDay").innerHTML = m.toString();

// text box needs to change color to match past current or future tense
function textColor() {
    var timeColor = moment().hours();
    $('.time-block').each(function () {
        var now = parseInt($(this).attr("id"));
        if (now < timeColor) {
            $(this).addClass("past");
        }
        else if (now === timeColor) {
            $(this).addClass("present");
        }
        else {
            $(this).addClass("future");
        }
    })
};

function clickHandler() {
    var data = $(this).siblings("textarea");
    var userInput = data.val();
    var id = data.attr("id");
    localStorage.setItem(id, userInput);
  };
  
  $(".saveBtn").click(clickHandler)
// when reloading the page content and info is pulled from storage
function clickHandler() {
    var data = $(this).siblings("textarea");
    var userInput = data.val();
    var id = data.attr("id");
    localStorage.setItem(id, userInput);
};
$(".saveBtn").click(clickHandler)



textColor();