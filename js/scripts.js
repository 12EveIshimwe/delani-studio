$(document).ready(function() {
    $("#design").hide();
    $("#development").hide();
    $("#product").hide();
    $("#despar").hide();
    $("#devpar").hide();
    $("#propar").hide();

    $("#ign.label").click(function() {
        $("#ign").hide();
        $("label").hide();
        $("#design").show();
        $("#despar").show();
    });

    $("despar").click(function() {
        $("#design").hide();
        $("#despar").hide();
        $("#ign").show();
        $("#label").show();
    });

    $("#dev").click(function() {
        $("#dev").hide();
        $("#label").hide();
        $("#development").show();
        $("#devpar").show();
    });
    $("#devpar").click(function() {
        $("#devpar").hide();
        $("#development").hide();
        $("#dev").show();
        $("#label").show();
    });
    $("#")

}
