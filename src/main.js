// home page vars and buttons
var homeButton = document.querySelector('.home-button')
var randomButton = document.querySelector('.random-cover-button')
var homeMainCover = document.querySelector('.main-cover')
var homeImage = document.querySelector('.cover-image')
var homeTitle = document.querySelector('.cover-title')
var homeTagline1 = document.querySelector('.tagline-1')
var homeTagline2 = document.querySelector('.tagline-2')
var currentCover = new Cover(homeImage.src, homeTitle.innerText, homeTagline1.innerText, homeTagline2.innerText) 


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

savedCoversSection.addEventListener('dblclick', dblClickPoster)


// Create your event handlers and other functions here------------- 👇
function generateNewCover() {
  homeImage.src = covers[getRandomIndex(covers)]
  homeTitle.innerText = titles[getRandomIndex(titles)]
  homeTagline1.innerText = descriptors[getRandomIndex(descriptors)]
  homeTagline2.innerText = descriptors[getRandomIndex(descriptors)]
  currentCover = new Cover(homeImage.src, homeTitle.innerText, homeTagline1.innerText, homeTagline2.innerText)
}

function activateSaveButton() {
  if (!savedCovers.includes(currentCover)) {
    savedCovers.push(currentCover)
  }
}

function dblClickPoster(event) {
  var poster = event.target.id
  console.log(poster)
  var posterHTML = document.querySelector(`#parent${poster}`)
  console.log(posterHTML.querySelector('.cover-title'))
  savedCovers.splice(poster, 1)
  posterHTML.outerHTML = ''
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
  currentCover = new Cover(covers[0], titles[0], descriptors[0], descriptors[1])
  homeImage.src = currentCover.cover
  homeTitle.innerText = currentCover.title
  homeTagline1.innerText = currentCover.tagline1
  homeTagline2.innerText = currentCover.tagline2
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
    `<section class="mini-cover" id="parent${i}">
    <img class="cover-image" id="${i}" src=${savedCovers[i].cover}>
    <h2 class="cover-title" id="${i}">${savedCovers[i].title}</h2>
    <h3 class="tagline" id="${i}">A tale of <span class="tagline-1" id="${i}">${savedCovers[i].tagline1}</span> and <span class="tagline-2" id="${i}">${savedCovers[i].tagline2}</span></h3>
    <img class="price-tag" id="${i}" src="./assets/price.png">
    <img class="overlay" id="${i}" src="./assets/overlay.png">
    </section>`
    // We need to move this eventListener assignment into a loop that can store the i value and is connected to the deletion function
    // document.querySelector(`#DOMisstupid${i}`).addEventListener('dblclick', dblClickPoster)
  }
}

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length)
}