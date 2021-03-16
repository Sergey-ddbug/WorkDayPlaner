$(document).ready(function () {
  // Current date and time
  $("#currentDay").html(moment().format("MMMM Do YYYY, h:mm:ss a"));

  function update() {
    $("#currentDay").html(moment().format("MMMM Do YYYY, h:mm:ss a"));
  }

  setInterval(update, 1000);

  //onClick function saving to local storage
  $(".saveBtn").on("click", function () {
    var storeTime = $(this).siblings(".hour").text();
    var storeValue = $(this).siblings(".description").val();
    console.log(storeValue, storeTime);
    localStorage.setItem(storeTime, storeValue);
  });

  $("#9AM").val(localStorage.getItem("9 AM"));
  $("#10AM").val(localStorage.getItem("10 AM"));
  $("#11AM").val(localStorage.getItem("11 AM"));
  $("#12PM").val(localStorage.getItem("12 PM"));
  $("#1PM").val(localStorage.getItem("1 PM"));
  $("#2PM").val(localStorage.getItem("2 PM"));
  $("#3PM").val(localStorage.getItem("3 PM"));
  $("#4PM").val(localStorage.getItem("4 PM"));
  $("#5PM").val(localStorage.getItem("5 PM"));

  var time = moment().format("kk");

  // variables
  var txt = [
    document.getElementById("9AM"),
    document.getElementById("10AM"),
    document.getElementById("11AM"),
    document.getElementById("12PM"),
    document.getElementById("1PM"),
    document.getElementById("2PM"),
    document.getElementById("3PM"),
    document.getElementById("4PM"),
    document.getElementById("5PM"),
  ];
  var timeVal = [
    moment("9", "kk").format("kk"),
    moment("10", "kk").format("kk"),
    moment("11", "kk").format("kk"),
    moment("12", "kk").format("kk"),
    moment("13", "kk").format("kk"),
    moment("14", "kk").format("kk"),
    moment("15", "kk").format("kk"),
    moment("16", "kk").format("kk"),
    moment("17", "kk").format("kk"),
  ];

  for (var i = 0; i < timeVal.length; i++) {
    if (timeVal[i] === time) {
      txt[i].classList.add("present");
    } else if (timeVal[i] < time) {
      txt[i].classList.add("past");
    } else {
      txt[i].classList.add("future");
    }
  }
  //reseting a local storage after click
  $("#clear").on("click", function () {
    localStorage.clear();
  });
});
