const axios = require("axios"); // legacy way

// Make a request for a user with a given ID
axios
  .get("https://jsonplaceholder.typicode.com/users")
  .then(function (response) {
    // handle success
    console.log(response.data);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
  });
