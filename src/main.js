var homeImage = document.querySelector('.cover-image')
var homeTitle = document.querySelector('.cover-title')
var homeTagline1 = document.querySelector('.tagline-1')
var homeTagline2 = document.querySelector('.tagline-2')
var homeMainCover = document.querySelector('.main-cover')
var homeCover = new Cover(homeImage.src, homeTitle.innerText, homeTagline1.innerText, homeTagline2.innerText) 


var homeButton = document.querySelector('.home-button')
var randomButton = document.querySelector('.random-cover-button')

var saveCoverButton = document.querySelector('.save-cover-button')
var viewSavedButton = document.querySelector('.view-saved-button')

// User form buttons 1.to get there 2.submit
var formViewButton = document.querySelector('.make-new-button')
var makeMyBookButton = document.querySelector('.create-new-book-button')


var savedView = document.querySelector('.saved-view')
var savedCoversSection = document.querySelector('.saved-covers-section')


var userForm = document.querySelector('.form-view')


var makeUserFormElements = [homeButton, userForm]
var homePageElements = [homeMainCover, randomButton, saveCoverButton]

// var savedCoverPageElements = [homeButton, savedCovers]
var savedCoverPageElements = [homeButton, savedView]
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];


// Add your event listeners here -----------------------------------👇
window.addEventListener('load', generateNewCover)
randomButton.addEventListener("click", generateNewCover)

// --------------- Make new cover Button------------------------- 
// for make your own
formViewButton.addEventListener("click", activateFormViewButton)
makeMyBookButton.addEventListener("click", activateMakeMyBookButton)


homeButton.addEventListener("click", activateHomeButton)


// for saved cover
viewSavedButton.addEventListener("click", activateViewSavedButton)


// Create your event handlers and other functions here------------- 👇
function generateNewCover() {
  homeImage.src = covers[getRandomIndex(covers)]
  homeTitle.innerText = titles[getRandomIndex(titles)]
  homeTagline1.innerText = descriptors[getRandomIndex(descriptors)]
  homeTagline2.innerText = descriptors[getRandomIndex(descriptors)]
  homeCover = new Cover(homeImage.src, homeTitle.innerText, homeTagline1.innerText, homeTagline2.innerText)
}

function activateHomeButton() {
  homeMainCover.classList.remove('hidden')
  saveCoverButton.classList.remove('hidden')
  randomButton.classList.remove('hidden')
  userForm.classList.add('hidden')
  homeButton.classList.add('hidden')
  // savedCoverPageElements.classList.add('hidden')
}

function activateFormViewButton() {
  homeButton.classList.remove('hidden')
  userForm.classList.remove('hidden')
  homeMainCover.classList.add('hidden')
  randomButton.classList.add('hidden')
  saveCoverButton.classList.add('hidden')
  // savedCoverPageElements.classList.add('hidden')
}
var formCover = document.querySelector('#cover')
var formTitle = document.querySelector('#title')
var formDescriptor1 = document.querySelector('#descriptor1')
var formDescriptor2 = document.querySelector('#descriptor2')

// Play around with order cannot press button now
// Do a reaactivate button to undo default??
function activateMakeMyBookButton(form) {
  form.preventDefault()
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
  
  // createUserBook()
  // event.preventDefault()
}

// function createUserBook() {
  // use form variables stored in the arrays to update HTML elements
  // remove hidden class on book elements
  // add hidden class on form elements
  
// }

function activateViewSavedButton() {
  homeButton.classList.remove('hidden')
  userForm.classList.add('hidden')
  homeMainCover.classList.add('hidden')
  randomButton.classList.add('hidden')
  saveCoverButton.classList.add('hidden')
  // savedCoverPageElements.classList.remove('hidden')
  // savedCoversSection.innerHTML = 
  //   `<img class="mini-cover" src="./assets/prairie.jpg">
  //   <h2 class="mini-cover cover-title">Windswept Hearts</h2>
  //   <h3 class="tagline">A tale of <span class="tagline-1">passion</span> and <span class="tagline-2">woe</span></h3>
  //   <img class="price-tag" src="./assets/price.png">
  //   <img class="overlay" src="./assets/overlay.png">`
}


// OLD HIDE/SHOW FUNCTIONS -----------------------------------------
// function hideElements(elementsToHide) {
//   for (var i = 0; i < elementsToHide.length; i++) {
//     elementsToHide[i].classList.add('hidden')
//   }
// }
// function showElements(elementsToShow) {
//   for (var i = 0; i < elementsToShow.length; i++) {
//     elementsToShow[i].classList.remove('hidden')
//   }
// }

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function test() {
  console.log('Is this working?')
}