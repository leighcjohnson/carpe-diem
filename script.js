$(document).ready(function() {
    var update = function() {
        document.getElementById("currentDay")
        .innerHTML = moment().format('dddd, MMMM Do YYYY, h:mm:ss a');
    }
    setInterval(update, 1000);

    $(".savebtn").on("click", function () {
        var input = $(this).siblings(".form").val();
        var hour = $(this).siblings().attr("id");
        localStorage.setItem(hour, input);
    });
    console.log(localStorage.getItem("9"));
    var test = localStorage.getItem("9");
    $("#nine .form").text($(test));

    $("#9").val(localStorage.getItem("nine"));
    $("#10").val(localStorage.getItem("ten"));
    $("#11").val(localStorage.getItem("eleven"));
    $("#12").val(localStorage.getItem("twelve"));
    $("#1").val(localStorage.getItem("one"));
    $("#2").val(localStorage.getItem("two"));
    $("#3").val(localStorage.getItem("three"));
    $("#4").val(localStorage.getItem("four"));
    $("#5").val(localStorage.getItem("five"));
    
})