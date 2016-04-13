function getData() {
  var divEmployees = document.getElementById("employees");
  divEmployees.innerHTML = "Loading...";

  fetch('https://data.cityofchicago.org/resource/xzkq-xp2w.json')
    .then(function(response) {
      return response.json();
    }).then(function(data) {
      var htmlString = '';
      for (var i = 0; i < data.length; i++) {
        var employee = data[i];
        htmlString += '<div onclick="changeEmployee(this)">';
        htmlString += '<h2>' + employee.name + '</h2>';
        htmlString += '<p>Title: ' + employee.job_titles + '</p>';
        htmlString += '<p>Department: ' + employee.department + '</p>';
        htmlString += '<p>Salary: ' + employee.employee_annual_salary + '</p>';
        htmlString += '</div>';
      }
      divEmployees.innerHTML = htmlString;
    });
}

function changeEmployee(divEmployee) {
  divEmployee.style.color = 'lightgray';
}