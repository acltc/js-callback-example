function getData() {
  var divEmployees = document.getElementById("employees");

  fetch('https://data.cityofchicago.org/resource/xzkq-xp2w.json')
    .then(function(response) {
      return response.json();
    }).then(function(data) {
      var htmlString = '';
      for (var i = 0; i < data.length; i++) {
        var employee = data[i];
        htmlString += '<h2>' + employee.name + '</h2>';
      }
      divEmployees.innerHTML = htmlString;
    });
}
