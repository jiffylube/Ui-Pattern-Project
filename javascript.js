let message = document.querySelectorAll('.message');
let randomPic = document.querySelectorAll('.randomPic')

let modal = document.querySelector('.modal')
let closeModal = document.querySelector('.close')
let modalPic = document.querySelector('.modalPic')

let chuck = document.querySelector('.chuck');
// console.log(message)

// ------- Fetch animal Pictures ---------- //
let pullAnimals = function () {
  fetch('https://random.dog/woof.json')
    .then(response => response.json())
    .then(results => {
      // console.log(results);
      randomPic[0].src = results.url
    })
  fetch('https://randomfox.ca/floof/')
    .then(response2 => response2.json())
    .then(results2 => {
      // console.log(results2);
      randomPic[1].src = results2.image
  })
  fetch('https://random.dog/woof.json')
    .then(response3 => response3.json())
    .then(results3 => {
      // console.log(results);
      randomPic[2].src = results3.url
    })
  fetch('https://randomfox.ca/floof/')
    .then(response4 => response4.json())
    .then(results4 => {
      // console.log(results2);
      randomPic[3].src = results4.image
  })
}

pullAnimals();

// ------- Modal Stuff ---------- //

for (let i = 0; i < message.length; i++) {
  message[i].addEventListener("click", function () {
    // modal.style.display = "block";
    modal.style.visibility = "visible";
    fetch('https://foodish-api.herokuapp.com/api')
    .then(response => response.json())
    .then(results => {
      // console.log(results3);
      modalPic.src = results.image
    })  
    fetch('https://api.chucknorris.io/jokes/random')
    .then(response => response.json())
    .then(results => {
      // console.log(results.value)
      chuck.innerHTML = results.value
    })
})
}

modal.onclick = function(e) {
  if (e.target == modal) {
    // modal.style.display = "none";
    modal.style.visibility = "hidden";
  }
}
