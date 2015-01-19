//Create a select and append to menu
//Create options in select cycle over menu links
//Create an option
//Append option to select
//Create button to click - select location
//Modify css - hide links smalll/large(media query)
//Deal with selected options depending on current page

var $select=$("<select></select>");
$('#menu').append($select);

$('#menu a').each(function() {
  var $anchor=$(this);
  var $option=$("<option></option>");

if($anchor.parent().hasClass("selected")) {
  $option.prop("selected", true);
}

  $option.val($anchor.attr("href"));
  $option.text($anchor.text());
  $select.append($option);
});

  var $button=$("<button>GO</button>");
  $("#menu").append($button);

  $button.click(function() {
   window.location=$select.val();
  });