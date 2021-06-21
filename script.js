$(document).ready(function() {
    var update = function() {
        document.getElementById("currentDay")
        .innerHTML = moment().format('dddd, MMMM Do YYYY, h:mm:ss a');
    }
    setInterval(update, 1000);

    $(".btn").on("click", function () {
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
    
    if ((moment().format("H")) > 9) {
        $(nine).css("background-color", "gray");
    } else if ((moment().format("H")) < 9) {
        $(nine).css("background-color", "rgb(146, 180, 245)");
    } else if ((moment().format("H")) == 9) {
        $(nine).css("background-color", "red");
    } else {
        alert('Error');
    }

    if ((moment().format("H")) > 10) {
        $(ten).css("background-color", "gray");
    } else if ((moment().format("H")) < 10) {
        $(ten).css("background-color", "rgb(146, 180, 245)");
    } else if ((moment().format("H")) == 10) {
        $(ten).css("background-color", "red");
    } else {
        alert('Error');
    }

    if ((moment().format("H")) > 11) {
        $(eleven).css("background-color", "gray");
    } else if ((moment().format("H")) < 11) {
        $(eleven).css("background-color", "rgb(146, 180, 245)");
    } else if ((moment().format("H")) == 11) {
        $(eleven).css("background-color", "red");
    } else {
        alert('Error');
    }

    if ((moment().format("H")) > 12) {
        $(twelve).css("background-color", "gray");
    } else if ((moment().format("H")) < 12) {
        $(twelve).css("background-color", "rgb(146, 180, 245)");
    } else if ((moment().format("H")) == 12) {
        $(twelve).css("background-color", "red");
    } else {
        alert('Error');
    } 

    if ((moment().format("H")) > 1) {
        $(one).css("background-color", "gray");
    } else if ((moment().format("H")) < 1) {
        $(one).css("background-color", "rgb(146, 180, 245)");
    } else if ((moment().format("H")) == 1) {
        $(one).css("background-color", "red");
    } else {
        alert('Error');
    }

    if ((moment().format("H")) > 2) {
        $(two).css("background-color", "gray");
    } else if ((moment().format("H")) < 2) {
        $(two).css("background-color", "rgb(146, 180, 245)");
    } else if ((moment().format("H")) == 2) {
        $(two).css("background-color", "red");
    } else {
        alert('Error');
    }

    if ((moment().format("H")) > 3) {
        $(three).css("background-color", "gray");
    } else if ((moment().format("H")) < 3) {
        $(three).css("background-color", "rgb(146, 180, 245)");
    } else if ((moment().format("H")) == 3) {
        $(three).css("background-color", "red");
    } else {
        alert('Error');
    }

    if ((moment().format("H")) > 4) {
        $(four).css("background-color", "gray");
    } else if ((moment().format("H")) < 4) {
        $(four).css("background-color", "rgb(146, 180, 245)");
    } else if ((moment().format("H")) == 4) {
        $(four).css("background-color", "red");
    } else {
        alert('Error');
    }

    if ((moment().format("H")) > 5) {
        $(five).css("background-color", "gray");
    } else if ((moment().format("H")) < 5) {
        $(five).css("background-color", "rgb(146, 180, 245)");
    } else if ((moment().format("H")) == 5) {
        $(five).css("background-color", "red");
    } else {
        alert('Error');
    } 
})