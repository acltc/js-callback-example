fetch('https://data.cityofchicago.org/resource/xzkq-xp2w.json')
  .then(function(response) {
    return response.json();
  }).then(function(body) {
    console.log(body);
  });
