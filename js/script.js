$(document).ready(function() {
    $(".desc_prev").mouseover(function(){
      showPreview();
    }).mouseout(function(){
      hidePreview();
    });
    $(".add_submenu").click(function(){
      addSubmenu();
    });
});

function showPreview(){
  
  var bodyGer = $("#desc_body_ger").val().replace(/\n/g,"<br>");
  var bodyEng = $("#desc_body_eng").val().replace(/\n/g,"<br>");
//  var subContentGer = $("#sub_body_ger").val().replace(/  /g,"<br>");
//  var subContentEng = $("#sub_body_eng").val().replace(/  /g,"<br>");

  $("#header_ger").html($("#desc_head_ger").val());
  $("#header_eng").html($("#desc_head_eng").val());
  $("#body_ger").html(bodyGer);
  $("#body_eng").html(bodyEng);   
  /*
  $("#sub_ger1").html($("#sub_head_ger").val());
  $("#sub_eng1").html($("#sub_head_eng").val());
  $("#sub_content_ger1").html(subContentGer);
  $("#sub_content_eng1").html(subContentEng);
*/
  $("#div_preview").show();
  
}

function hidePreview(){
  if ($(".desc_prev").is(":checked")==false){
    $("#div_preview").hide();
  }
}

function showSubmenu(){
  
  $(".psubmenu").toggle();
}