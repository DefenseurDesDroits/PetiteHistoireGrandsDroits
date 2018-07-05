console.warn("I am self aware")
let timestamp = Math.floor((new Date()).getTime() / 1000)

let storiesButtons = document.querySelectorAll('.stories__stories-button');
[].forEach.call(storiesButtons, (button) => {
  button.addEventListener('click', selectStory)
  releaseStory(button)
})

function selectStory(e) {
  if (document.querySelector('.stories__stories-button.selected')) {
    document.querySelector('.stories__stories-button.selected').classList.remove('selected')
  }
  e.target.classList.add('selected')

  if(document.querySelector('.stories__story.active')) {
    document.querySelector('.stories__story.active').classList.replace('active', 'hidden')
  }
  document.querySelector('#'+e.target.parentNode.id+'-story').classList.replace('hidden', 'active')
  updateSize()
}

function updateSize() {
  window.parent.postMessage({height: document.querySelector('body').clientHeight}, "*")
}

function releaseStory(element) {
  let releaseDate = element.getAttribute('data-release')
  if (releaseDate <= timestamp) {
    element.disabled = false
  }
}

updateSize()