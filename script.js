$(document).ready(function () {
    //.button Clickable Button
    $(".button").hover(function() {
        $(this).css("background-color","#34495e")
    }, function () {
        $(this).css("background-color", "#2c3e50")
    }).click(function () {
        $(this).css("background-color","#2980b9")
    });
});