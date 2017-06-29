$(document).ready(function() {

$(".btn").click(function(){
    var name = $(".form-control").val();
    var email = $(".form-controle").val();
    alert("thank you " + name + " for signing up! We will send an email to " + email +" shortly");
});

$("#f").hover(function() {
    $("#f").toggle( "bounce", { times: 3 }, "slow" ); 
  });

});

    