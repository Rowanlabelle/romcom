// home page vars and buttons
var homeButton = document.querySelector('.home-button')
var randomButton = document.querySelector('.random-cover-button')
var homeMainCover = document.querySelector('.main-cover')
var homeImage = document.querySelector('.cover-image')
var homeTitle = document.querySelector('.cover-title')
var homeTagline1 = document.querySelector('.tagline-1')
var homeTagline2 = document.querySelector('.tagline-2')
var homeCover = new Cover(homeImage.src, homeTitle.innerText, homeTagline1.innerText, homeTagline2.innerText) 


// user form buttons and vars
var formViewButton = document.querySelector('.make-new-button')
var makeMyBookButton = document.querySelector('.create-new-book-button')
var userForm = document.querySelector('.form-view')
var formCover = document.querySelector('#cover')
var formTitle = document.querySelector('#title')
var formDescriptor1 = document.querySelector('#descriptor1')
var formDescriptor2 = document.querySelector('#descriptor2')


// Save cover and view saved buttons and vars
var saveCoverButton = document.querySelector('.save-cover-button')
var viewSavedButton = document.querySelector('.view-saved-button')
var savedView = document.querySelector('.saved-view')
var savedCoversSection = document.querySelector('.saved-covers-section')
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
]
var miniPosters = document.getElementsByClassName('mini-cover')


window.addEventListener('load', generateNewCover)
randomButton.addEventListener('click', generateNewCover)
formViewButton.addEventListener('click', activateFormViewButton)
makeMyBookButton.addEventListener('click', activateMakeMyBookButton)
homeButton.addEventListener('click', activateHomeButton)
viewSavedButton.addEventListener('click', activateViewSavedButton)
saveCoverButton.addEventListener('click', activateSaveButton)




// Create your event handlers and other functions here------------- 👇
function generateNewCover() {
  homeImage.src = covers[getRandomIndex(covers)]
  homeTitle.innerText = titles[getRandomIndex(titles)]
  homeTagline1.innerText = descriptors[getRandomIndex(descriptors)]
  homeTagline2.innerText = descriptors[getRandomIndex(descriptors)]
  homeCover = new Cover(homeImage.src, homeTitle.innerText, homeTagline1.innerText, homeTagline2.innerText)
}

function activateSaveButton() {
  if (!savedCovers.includes(homeCover)) {
    savedCovers.push(homeCover)
  }
  // if (!savedCovers.includes(userCover)) {
  //   savedCovers.push(userCover)
  // }
}

function dblClickPoster() {
  // This is not pulling the i value that's being assigned in the creator for loop. Maybe try moving event listener assignment into this function and tie this functions activation to the clicking of the view saved covers button.
  console.log("test")
  console.log(i)
  // If the event listener assigner assigns listeners in the same order as the section IDs, we can pass the i value from this function to our delete function.
  deletePoster(i) 
}
// We need to create a separate array or reference the saved covers array to access these values.
function deletePoster(i) {
  // This theorectically will work but we need a functioning i value.
  console.log("inner function")
  document.querySelector(`#DOMisstupid${i}`).outerHTML = ''
}

function activateHomeButton() {
  homeMainCover.classList.remove('hidden')
  saveCoverButton.classList.remove('hidden')
  randomButton.classList.remove('hidden')
  userForm.classList.add('hidden')
  homeButton.classList.add('hidden')
  savedView.classList.add('hidden')
}

function activateFormViewButton() {
  homeButton.classList.remove('hidden')
  userForm.classList.remove('hidden')
  homeMainCover.classList.add('hidden')
  randomButton.classList.add('hidden')
  saveCoverButton.classList.add('hidden')
  savedView.classList.add('hidden')
}

function activateMakeMyBookButton(event) {
  event.preventDefault()
  covers.unshift(formCover.value)
  titles.unshift(formTitle.value)
  descriptors.unshift(formDescriptor2.value)
  descriptors.unshift(formDescriptor1.value)
  userCover = new Cover(covers[0], titles[0], descriptors[0], descriptors[1])
  homeImage.src = userCover.cover
  homeTitle.innerText = userCover.title
  homeTagline1.innerText = userCover.tagline1
  homeTagline2.innerText = userCover.tagline2
  userForm.classList.add('hidden')
  saveCoverButton.classList.remove('hidden')
  homeMainCover.classList.remove('hidden')
  savedView.classList.add('hidden')
}

function activateViewSavedButton() {
  homeButton.classList.remove('hidden')
  savedView.classList.remove('hidden')
  userForm.classList.add('hidden')
  homeMainCover.classList.add('hidden')
  randomButton.classList.add('hidden')
  saveCoverButton.classList.add('hidden')
  savedCoversSection.innerHTML = ''
  for (var i = 0; i < savedCovers.length; i ++) {
    savedCoversSection.innerHTML += 
    `<section class="mini-cover" id="DOMisstupid${i}">
    <img class="cover-image" src=${savedCovers[i].cover}>
    <h2 class="cover-title">${savedCovers[i].title}</h2>
    <h3 class="tagline">A tale of <span class="tagline-1">${savedCovers[i].tagline1}</span> and <span class="tagline-2">${savedCovers[i].tagline2}</span></h3>
    <img class="price-tag" src="./assets/price.png">
    <img class="overlay" src="./assets/overlay.png">
    </section>`
    // We need to move this eventListener assignment into a loop that can store the i value and is connected to the deletion function
    document.querySelector(`#DOMisstupid${i}`).addEventListener('dblclick', dblClickPoster)
  }
}

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length)
}