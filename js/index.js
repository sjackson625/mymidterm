var mainNav = document.querySelectorAll("nav a");
    document.addEventListener("click", showActive);

    function showActive(event) {
      event.preventDefault();
      if (event.target.matches("nav a")) {
        for (let navItem of mainNav) {
          navItem.classList.remove("active");
        }
        event.target.classList.add("active");
      }
    }

 // end of nav

const API = 'https://ron-swanson-quotes.herokuapp.com/v2/quotes'

fetch(API)
.then(function (response) {
    return response.json()
  })
  .then(function (data) {
    document.querySelector('.quote').innerText = data[0]
  })

//   end of dynamic data

const el = document.querySelector('article h2')

const basilChefs = ['Chef', 'Grandpa', 'Grandma']
const basilTexture = ['Yummy', 'Spicy', 'Tasty']

function random(array) {
  const max = array.length
  const randomIndex = Math.floor(Math.random() * max)
  return array[randomIndex]
}

var recipeName = `${random(basilChefs)}'s ${random(basilTexture)} pesto`

el.innerHTML = recipeName
    