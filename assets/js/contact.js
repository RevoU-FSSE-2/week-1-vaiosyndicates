function alerts() {
  let name = document.getElementById('nama').value
  let email = document.getElementById('email').value
  let messages = document.getElementById('message').value
  
  if(name == "" && email == "" && messages == "") {
    alert(`Field name, email and messages are empty`)
  } else {
    alert(`Your name : ${name}, Your email : ${email}, Message: ${messages}`)
  }
}