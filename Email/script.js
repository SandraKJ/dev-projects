//Start the document by puttin in the ready function//

$(document).ready(function()) {
});

$('<span class="suggestion"></span>').insertAfter('input[type=email]')

$("input[type=email]").keyup(function()) {
  var parent=$(this).parent();
  var value=$(this).val();
  var a_pos=value.indexOf('@');
}


if(a_pos != -1) {
  //@ has been entered
} else {
  $('.suggestion',parent).hide();
}

if(value[a_pos+1]=='a') {
  $('.suggestion', parent).text('aol.com').show();
}

else if(value[a_pos+1]== 'c') {
  $('.suggestion',parent).text('comcast.net').show();
}

else if(value[a_pos+1]== 'g') {
  $('.suggestion',parent).text('gmail.com').show();
}

else if(value[a_pos+1]== 'h') {
  $('.suggestion',parent).text('hotmail.com').show();
}

else if(value[a_pos+1]== 'm') {
  if(value[a_pos+2]== 'e') {
    $('.suggestion',parent).text('me.com').show();
  }else {
    $('.suggestion',parent).text('msn.com').show();
  }
}

else if(value[a_pos+1]== 'l') {
  $('.suggestion', parent).text('live.com').show();
}

else if(value[a_pos+1]== 'y') {
  $('.suggestion',parent).text('yahoo.com').show();
}

else {
  $('.suggestion',parent).hide();
}
}else{
  $('.suggestion',parent).hide();
}
});

 //ADD DOMAIN TO VALUE!!!!!!

$('.suggestion').click(function()) {
  //
var parent=$(this).text();
var suggested_var=$(this).text();
var input_val=$('input[type=email]',parent).val();
var a_pos=input_val.indexOf('@');
var before a=input_val.substr(0,a_pos); 

$('input[type=email]',parent).val(before_a+'@'+suggested_val);
$(this).hide();
});





