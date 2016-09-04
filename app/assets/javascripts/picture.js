// Add your JavaScript here
// $(document).ready(function(){
//   window.alert("STOP! in the name of Love!")
// })


$(function(){
  addbuttonEventListener();
});



function addbuttonEventListener(){

  $('.like_button').on('ajax:complete', function(e, request, status){

     $(this).find('span').toggleClass('red-heart grey-heart');
     this.nextElementSibling.innerHTML = request.responseJSON.message;


  });
}
