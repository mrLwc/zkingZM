$("#fixWX").click(function() {
    $("#model_one").slideDown(500).show();
    $("#model_two").slideUp(50).hide();
})
$("#fixWW").click(function() {
    $("#model_two").slideDown(500).show();
    $("#model_one").slideUp(50).hide();
})
$('.model>.model-header>span').click(function() {
    $("#model_one").fadeOut(300);
    $("#model_two").fadeOut(300);
})