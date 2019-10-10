let email = ""
let password = ""

function sendButton() {
  //  email = document.getElementById('email').value 
  //  password = document.getElementById('password').value 
  //  console.log(email, password)
   fetch('http://example.com/movies.json')
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    console.log(myJson);
  });
}

console.log(email, password)
// window.onload = init