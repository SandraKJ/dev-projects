var fetchPeople = function() {
  $.get('http://json.ph/json/15.json', function(people) {
    populatePeople(people);
  });
};

var populatePeople = function(peopleArray) {  
  peopleArray.forEach(function(person) {
    var content = "<tr class='person'><td>" + person.name 
                + "</td><td>" 
                + person.age
                + "</td><td>"
                + person.dob
                + "</td><td>"
                + person.description
                + "</td></tr>"

    $("#people-table").append(content);
  });
}; 

var filterList = function() {
  var query = $("#search-field").val().toLowerCase();
  
  $("#people-table").children(".person").each(function() {
    var content = $(this).text().toLowerCase();

    if (content.match(query)) {
      $(this).show();
    } else {
      $(this).hide();
    }

  });

};

fetchPeople();

$("#search-field").keyup(function() {
  filterList();  
});