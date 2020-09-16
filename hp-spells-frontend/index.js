const form = document.querySelector('form')


form.addEventListener('submit', createUser)


function createUser(event){
  event.preventDefault()
  const formData = new FormData(form)
  const username = formData.get('username')
  const password = formData.get('password')

fetch('http://localhost:3000/users', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-type': 'application/json'
    },
    body: JSON.stringify({
      username: username,
      password: password
    })
  }).then(response => response.json())
  .then(console.log)
}