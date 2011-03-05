$(document).ready(function() {
    $.getJSON("/scripts/quotes.json", function (data) {
        var option = Math.floor(Math.random()*data.quotes.length);
        var quote = data.quotes[option];
        $(".quote h1").text(quote.quote);
        $(".source").html("&#151; " + quote.author);
    });
});
