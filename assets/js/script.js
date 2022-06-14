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

var saveBtn = document.querySelector(".saveBtn")

function saveText() {
    var timeTask = $(this).siblings(".hour").text();
    var tasks = $(this).siblings(".tasks").val();
    console.log($(this));

    localStorage.setItem(timeTask, tasks);
};

// when reloading the page content and info is pulled from storage
function clickHandler() {
    var data = $(this).siblings("textarea");
    var userInput = data.val();
    var id = data.attr("id");
    localStorage.setItem(id, userInput);
};
$(".saveBtn").click(clickHandler)

// event listeners
saveBtn.addEventListener("click", saveText)

textColor();