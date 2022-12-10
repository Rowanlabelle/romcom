// Home Page buttons and vars here------------- 👇
var homeButton = document.querySelector('.home-button')
var randomButton = document.querySelector('.random-cover-button')
var homeMainCover = document.querySelector('.main-cover')
var homeImage = document.querySelector('.cover-image')
var homeTitle = document.querySelector('.cover-title')
var homeTagline1 = document.querySelector('.tagline-1')
var homeTagline2 = document.querySelector('.tagline-2')
var currentCover = new Cover(homeImage.src, homeTitle.innerText, homeTagline1.innerText, homeTagline2.innerText) 

// User Form buttons and vars here------------- 👇
var formViewButton = document.querySelector('.make-new-button')
var makeMyBookButton = document.querySelector('.create-new-book-button')
var userForm = document.querySelector('.form-view')
var formCover = document.querySelector('#cover')
var formTitle = document.querySelector('#title')
var formDescriptor1 = document.querySelector('#descriptor1')
var formDescriptor2 = document.querySelector('#descriptor2')

// Save Cover/View Saved buttons and vars here------------- 👇
var saveCoverButton = document.querySelector('.save-cover-button')
var viewSavedButton = document.querySelector('.view-saved-button')
var savedView = document.querySelector('.saved-view')
var savedCoversSection = document.querySelector('.saved-covers-section')
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
]

// Event listeners here------------- 👇
window.addEventListener('load', generateNewCover)
randomButton.addEventListener('click', generateNewCover)
formViewButton.addEventListener('click', activateFormViewButton)
makeMyBookButton.addEventListener('click', activateMakeMyBookButton)
homeButton.addEventListener('click', activateHomeButton)
viewSavedButton.addEventListener('click', activateViewSavedButton)
saveCoverButton.addEventListener('click', activateSaveButton)
savedCoversSection.addEventListener('dblclick', dblClickPoster)

// Event handlers and other functions here------------- 👇
function generateNewCover() {
  homeImage.src = covers[getRandomIndex(covers)]
  homeTitle.innerText = titles[getRandomIndex(titles)]
  homeTagline1.innerText = descriptors[getRandomIndex(descriptors)]
  homeTagline2.innerText = descriptors[getRandomIndex(descriptors)]
  currentCover = new Cover(homeImage.src, homeTitle.innerText, homeTagline1.innerText, homeTagline2.innerText)
}

function activateHomeButton() {
  show[homeMainCover, saveCoverButton, randomButton]
  hide[userForm, homeButton, savedView]
}

function activateSaveButton() {
  if (!savedCovers.includes(currentCover)) {
    savedCovers.push(currentCover)
  }
}

function activateFormViewButton() {
  show[homeButton, userForm]
  hide[homeMainCover, randomButton, saveCoverButton, savedView]
}

function activateMakeMyBookButton(event) {
  event.preventDefault()
  show[saveCoverButton, homeMainCover]
  hide[userForm, savedView]
  covers.unshift(formCover.value)
  titles.unshift(formTitle.value)
  descriptors.unshift(formDescriptor2.value)
  descriptors.unshift(formDescriptor1.value)
  currentCover = new Cover(covers[0], titles[0], descriptors[0], descriptors[1])
  homeImage.src = currentCover.cover
  homeTitle.innerText = currentCover.title
  homeTagline1.innerText = currentCover.tagline1
  homeTagline2.innerText = currentCover.tagline2
}

function activateViewSavedButton() {
  show[homeButton, savedView]
  hide[userForm, homeMainCover, randomButton, saveCoverButton]
  // savedCoversSection.innerHTML = ''
    for (var i = 0; i < savedCovers.length; i ++) {
      savedCoversSection.innerHTML += 
      `<section class="mini-cover" id="${savedCovers[i].id}">
          <img class="cover-image" src=${savedCovers[i].cover}>
          <h2 class="cover-title">${savedCovers[i].title}</h2>
          <h3 class="tagline">A tale of ${savedCovers[i].tagline1} and ${savedCovers[i].tagline2}</h3>
          <img class="price-tag" src="./assets/price.png">
          <img class="overlay" src="./assets/overlay.png">
      </section>`
    }
}

function dblClickPoster(event) {
  var parentId = event.target.parentElement.id
  var parent = document.getElementById(`${parentId}`)
  parent.outerHTML = ''
  for (var i = 0; i < savedCovers.length; i++) {
    if (savedCovers[i].id == parentId) {
      savedCovers.splice(i, 1)
    }
  }
}

function show(elements) {
  for (var i = 0; i < elements.length; i++) {
    elements[i].classList.remove('hidden')
  }
}

function hide(elements) {
  for (var i = 0; i < elements.length; i++) {
    elements[i].classList.add('hidden')
  }
}

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length)
}