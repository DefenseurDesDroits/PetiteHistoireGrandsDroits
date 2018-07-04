console.warn("I am self aware")

let storiesButtons = document.querySelectorAll('.stories__stories-button');
[].forEach.call(storiesButtons, (button) => {
  button.addEventListener('click', selectStory)
})

function selectStory(e) {
  if (document.querySelector('.stories__stories-button.selected')) {
    document.querySelector('.stories__stories-button.selected').classList.remove('selected')
  }
  e.target.classList.add('selected')
}

setInterval(function() {
  window.parent.postMessage({height: document.clientHeigth}, "*");
},1000);