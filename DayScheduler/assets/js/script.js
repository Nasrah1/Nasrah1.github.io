//Here is current dates using Moment.js
$("#currentDay").html(moment().format("dddd, MMMM Do"));

for (var i = 9; i < 18; i++) {
  if (i < moment().hour()) {
    $("#" + i).addClass("past");
  } else if (i === moment().hour()) {
    $("#" + i).addClass("current");
  } else {
    $("#" + i).addClass("future");
  }
}

//Eventlistener will save infomation to the local storage
$("button").on("click", function (event) {
  event.preventDefault();
  var textEvent = $("textarea#" + this.id).val();
  localStorage.setItem("calendarItem" + this.id, textEvent);
});
//Add text values
$(document).ready(function () {
  for (i = 9; i < 18; i++) {
    var savedText = localStorage.getItem("calendarItem" + i);
    $("textarea#" + i).html(savedText);
  }
});
