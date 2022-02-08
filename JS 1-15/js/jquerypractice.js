// A $( document ).ready() block.
$( document ).ready(function() {
    console.log( "ready!" );
});

// Shorthand for $( document ).ready()
$(function() {
    $("#isi").html("<h1>Belajar JQuery</h1>");
    
    $("button").click(function (e) { 
        e.preventDefault();
        alert("Ngopskuy");
    });

    $("#isi").mouseleave(function () { 
        alert("NO FORNO")
    });
});