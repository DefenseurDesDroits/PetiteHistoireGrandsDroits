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

  let elem = e.target
  while (elem.tagName !== 'BUTTON') {
    elem = elem.parentNode
  }

  elem.classList.add('selected')

  if(document.querySelector('.stories__story.active')) {
    document.querySelector('.stories__story.active').classList.remove('active')
    document.querySelector('.stories__story.active').classList.add('hidden')
  }
  
  document.querySelector('#'+elem.parentNode.id+'-story').classList.remove('hidden')
  document.querySelector('#'+elem.parentNode.id+'-story').classList.add('active')
  updateSize()
}

function updateSize() {
  window.parent.postMessage({height: parseInt(document.querySelector('body').clientHeight) + 80} , "*")
}

function releaseStory(element) {
  let releaseDate = element.getAttribute('data-release')
  if (releaseDate <= timestamp) {
    element.disabled = false
  }
}

updateSize()