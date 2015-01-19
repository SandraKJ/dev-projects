$(document).ready(function($) {    
  console.log('hello')
  
  $('.lightbox_trig').click(function(e) {
    e.preventDefault();

    var image_href = $(this).attr("href");
    
    if ($('#thelightbox').length > 0) { 
        $('#content').html('<img src="' + image_href + '" />');
        $('#thelightbox').show();
    } else { 
      var lightbox =
      '<div id="thelightbox">' +
                  '<p>Click to Close</p>' +
          '<div id="content">' + 
              '<img src="' + image_href +'" />' +
          '</div>' +
      '</div>';
      $('body').append(lightbox);
    }
  }); 

  $('#thelightbox').live('click', function() {
      $('#thelightbox').hide();
  });
});

// jQuery(document).ready(function($) {    
//     $('.lightbox_trig').click(function(e) {
//         e.preventDefault();
//         var image_href = $(this).attr("href");

//   if ($('#thelightbox').length > 0) { 
//     $('#content').html('<img src="' + image_href + '" />');
//     $('#thelightbox').show();
//   } else { 
//     var lightbox =
//       '<div id="thelightbox">' +
//                   '<p>Click to Close</p>' +
//           '<div id="content">' + 
//               '<img src="' + image_href +'" />' +
//           '</div>' +
//       '</div>';
//     $('body').append(lightbox);
//   }
// });

$('#thelightbox').live('click', function() {
  $('#thelightbox').hide();
});