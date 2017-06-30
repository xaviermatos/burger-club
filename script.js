$(document).ready(function() {

$(".btn").click(function(){
    var name = $(".form").val();
    var email = $(".form2").val();
    $('.modal-content').on('shown.bs.modal', function () {
   var modal = $(this)
   modal.find('.modal').text("thank you " + name + " for signing up! We will send an email to " + email +" shortly");
})
    //alert("thank you " + name + " for signing up! We will send an email to " + email +" shortly");
});

$('#f').mouseenter(function() {
    $( this ).css("opacity" , 0.5)
  });

$('#f').mouseleave(function() {
    $(this).css("opacity",1);
  });
  
  $('#t').mouseenter(function() {
    $(this).css("opacity",0.5);
  });

$('#t').mouseleave(function() {
    $(this).css("opacity",1);
  });
  
  $('#i').mouseenter(function() {
    $(this).css("opacity",0.5);
  });

$('#i').mouseleave(function() {
    $(this).css("opacity",1);
  });
  
  $('#l').mouseenter(function() {
    $(this).css("opacity",0.5);
  });

$('#l').mouseleave(function() {
    $(this).css("opacity",1);
  });
});

    