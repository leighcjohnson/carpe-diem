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
    $("#13").val(localStorage.getItem("thirteen"));
    $("#14").val(localStorage.getItem("fourteen"));
    $("#15").val(localStorage.getItem("fifteen"));
    $("#16").val(localStorage.getItem("sixteen"));
    $("#17").val(localStorage.getItem("seventeen"));
    
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

    if ((moment().format("H")) > 13) {
        $(thirteen).css("background-color", "gray");
    } else if ((moment().format("H")) < 13) {
        $(thirteen).css("background-color", "rgb(146, 180, 245)");
    } else if ((moment().format("H")) == 13) {
        $(thirteen).css("background-color", "red");
    } else {
        alert('Error');
    }

    if ((moment().format("H")) > 14) {
        $(fourteen).css("background-color", "gray");
    } else if ((moment().format("H")) < 14) {
        $(fourteen).css("background-color", "rgb(146, 180, 245)");
    } else if ((moment().format("H")) == 14) {
        $(fourteen).css("background-color", "red");
    } else {
        alert('Error');
    }

    if ((moment().format("H")) > 15) {
        $(fifteen).css("background-color", "gray");
    } else if ((moment().format("H")) < 15) {
        $(fifteen).css("background-color", "rgb(146, 180, 245)");
    } else if ((moment().format("H")) == 15) {
        $(fifteen).css("background-color", "red");
    } else {
        alert('Error');
    }

    if ((moment().format("H")) > 16) {
        $(sixteen).css("background-color", "gray");
    } else if ((moment().format("H")) < 16) {
        $(sixteen).css("background-color", "rgb(146, 180, 245)");
    } else if ((moment().format("H")) == 16) {
        $(sixteen).css("background-color", "red");
    } else {
        alert('Error');
    }

    if ((moment().format("H")) > 17) {
        $(seventeen).css("background-color", "gray");
    } else if ((moment().format("H")) < 17) {
        $(seventeen).css("background-color", "rgb(146, 180, 245)");
    } else if ((moment().format("H")) == 17) {
        $(seventeen).css("background-color", "red");
    } else {
        alert('Error');
    } 
})