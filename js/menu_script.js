function addWork(){
  $('#work_list').append("<li class='li_works'><textarea id='getName_text' onkeyup='getName(this.value)'>new project</textarea></li>");
  $('#getName_text').focus();
  $('#getName_text').select();
  $('#getName_text').blur(function(){$('#getName_text').parent().remove()});
}
function getName(val){
  if (event.keyCode == 13){
    $('#getName_text').replaceWith("<a class='menu_element'>"+val+"</a>");
  }
}


function imgActivate(obj){
  $("#"+obj).html("<img src='img/plusActive.png'>");
}