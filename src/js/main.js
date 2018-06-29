import matchGame from '../lib/matchgame/src/matchgame.js'
import multiChoice from '../lib/multichoicetest/src/multichoicetest.js'
import wordPuzzle from '../lib/wordpuzzle/src/wordpuzzle.js'

console.warn("I am self aware")
// GAME 1
var matchImgElem = document.querySelector('#matchImg')

var matcheesImgList = [
  [
    "Le droit à une vie familiale",
    "Le droit de s'exprimer",
    "Le droit à l'égalité",
    "Le droit à la santé",
    "Le droit à l'éducation",
    "Le droit à la protection",
    "Le droit à la justice"
  ],
  [
    "img/famille.svg",
    "img/expression.svg",
    "img/egalite.svg",
    "img/sante.svg",
    "img/education.svg",
    "img/protection.svg",
    "img/justice.svg"
  ]
]

matcheesImgList[1] = matcheesImgList[1].map((img) => {
  let elem = document.createElement('img')
  elem.setAttribute('src', img)
  return elem
})

var matchImg = new matchGame(matcheesImgList, matchImgElem)

// GAME 2
var matchSentenceElem = document.querySelector('#matchSentence')

var matcheesSentenceList = [
  [
    "Tu as le droit d'avoir une justice adaptée à ton âge : tout enfant a droit à un avocat spécialisé pour le conseiller et le défendre, et le droit d'être jugé par un juge des enfants s'il n'a pas respecté la loi.",
    "Tu as le droit d'aller voir un médecin, une infirmière, de te soigner lorsque tu es malade, d'être bien nourri.",
    "Tu as le droit d'etre protégé contre toute forme de violence, d'atteinte ou de brutalités physiques ou mentales, d'abandon ou de négligence.",
    "Tu as le droit d'aller à l'école gratuitement, d'apprendre, d'avoir accès aux journaux et aux sources d'information pour te cultiver.",
    "Tu as le droit d'exprimer librement ton opinion, tout en respectant celle des autres, de rechercher, de recevoir et de répandre des informations.",
    "Tu dois être traité à égalité avec les autres enfants, partout dans le mondre, quels que soient ton origine, ton sexe, ta religion, tes opinions, ton handicap, tes croyances ou ta couleur de peau. Vous avez tous les mêmes droits.",
    "Tu as le droit d'être bien entouré, aimé et de grandir dans un environnement sain et bienveillant."
  ],
  [
    "Droit à la justice",
    "Droit à la santé",
    "Droit à la protection",
    "Droit à l'éducation",
    "Droit à la liberté d'expression",
    "Droit à l'égalité",
    "Droit à une vie familiale"
  ]
]

var matchSentence = new matchGame(matcheesSentenceList, matchSentenceElem)
let matchSentenceElemSizes = []
let matchSentenceElemLi = matchSentenceElem.querySelectorAll('li');
[].forEach.call(matchSentenceElemLi, (li) => {
  matchSentenceElemSizes.push(li.clientHeight)
})
matchSentenceElemSizes.sort((a, b) => b - a);
[].forEach.call(matchSentenceElemLi, (li) => {
  li.style.height = matchSentenceElemSizes[0] + 'px'
})

// GAME 3
var multipleChoiceElem = document.querySelector('#multipleChoice')
var questions = [
  {
    question: "Lequel de ces droits est un droit fondamental pour les enfants ?",
    answers: [
      {
        answer: "Le droit d'avoir internet"
      },
      {
        answer: "Le droit d'avoir un prénom et une identité",
        valid: true
      },
      {
        answer: "Le droit d'avoir de l'argent de poche"
      }
    ]
  },
  {
    question: "Pour que les enfants aient tous droit à l'éducation, les États doivent rendre l'enseignement primaire obligatoire et ... ?",
    answers: [
      {
        answer: "Payant"
      },
      {
        answer: "Gratuit",
        valid: true
      },
      {
        answer: "Facultatif (optionnel, au choix)"
      }
    ]
  },
  {
    question: "Tu es dans la cour de ton école, tout le monde joue. C'est super de pouvoir se défouler à la récré ! Un petit groupe d'enfants commence une partie de football... Clémence, une copine de ta classe, veut y jouer aussi. Mais Thomas, Capitaine de l'équipe, lui interdit d'y participer parce que c'est une fille... Quel droit n'est pas respecté ici ?",
    answers: [
      {
        answer: "Le droit à l'égalité",
        valid: true
      },
      {
        answer: "Le droit à la liberté d'expression"
      },
      {
        answer: "Le droit à l'éducation"
      }
    ]
  },
  {
    question: "À l'occasion des vacances scolaires, tu proposes à des amis de vous rassembler pour nettoyer les plages et donc participer à la préservation de l'environnemment. À quel droit ton initiative fait-elle référence ?",
    answers: [
      {
        answer: "Le droit à la participation",
        valid: true
      },
      {
        answer: "Le droit à l'information"
      },
      {
        answer: "Le droit aux loisirs"
      }
    ]
  },
  {
    question: "Qu'est-ce que le droit à la santé",
    answers: [
      {
        answer: "Pouvoir manger de la viande tous les jours"
      },
      {
        answer: "Avoir de bonnes baskets pour faire du sport"
      },
      {
        answer: "Être soigné, bien nourri et avoir accès à l'eau potable",
        valid: true
      }
    ]
  },
  {
    question: "Dans laquelle de ces 3 situations un pays ne respecte-t-il pas la Convention internationale des droits de l'enfant ?",
    answers: [
      {
        answer: "Si des écoliers n'ont pas de goûter"
      },
      {
        answer: "Si toutes les écoles n'ont pas d'ordinateur"
      },
      {
        answer: "Si les enfants n'accèdent pas à l'école",
        valid: true
      }
    ]
  },
  {
    question: "A-t-on le droit de tout dire ?",
    answers: [
      {
        answer: "Oui, sans limite"
      },
      {
        answer: "Oui, dans le respect des autres",
        valid: true
      },
      {
        answer: "Non, on ne droit rien dire"
      }
    ]
  },
  {
    question: "Au collège, le professeur de français organise un débat en classe. D'habitude, tu es toujours d'accord sur tout avec tes amis. Mais cette fois, chacun donne son avis et tu as l'impression de na penser comme les autres. Au moment de t'exprimer, impossible de parler. Le soir après les cours, tu en parles avec Yorick, ton cousin. Il te dit que tu aurais pu enrichir le débat, que tu as le droit de donner ton avis. À quel droit fait-il référence ?",
    answers: [
      {
        answer: "Le droit à la protection"
      },
      {
        answer: "Le droit à la liberté d'expression",
        valid: true
      },
      {
        answer: "Le droit au repos et aux loisirs"
      }
    ]
  }
]

var scoreMsgs = [
  {
    title: "L'expert",
    message: "Tu connais parfaitement les droits de l'enfant et tu sais reconnaître une situation qui va à l'envontre de ces droits. Les droits de l'enfant sont fondamentaux alors n'hésite pas à les partager avec tes amis et ton entourage pour qu'ils deviennent des experts comme toi !",
    scoreThresold: 6
  },
  {
    title: "Le bon connaisseur",
    message: "Tu as de bonnes conaissances mais il te reste quelques petites choses à savoir. N'hésite pas à partager tes interrogations avec ton entourage car tu as toutes les clés en main pour devenir un expert !",
    scoreThresold: 3
  },
  {
    title: "Le jeune padawan",
    message: "Tu es sur la bonne voie et en plein apprentissage des droits de l'enfant. Il t'en reste à découvrir et cela tombe bien, nous sommes là pour t'en parler ! Tous ces petits exercices te permettront d'en savoir plus et d'en parler avec ton entourage !",
    scoreThresold: 0
  }
]

var multiChoiceTest = new multiChoice(questions, scoreMsgs,multipleChoiceElem)

// GAME 4
var puzzleElem = document.querySelector('#wordsgame')
var wordListElem = document.querySelector('#wordslist ul')
var words = [
  'amour',
  'avis',
  'bien-être',
  'bonheur',
  'club',
  'connaissance',
  'convention',
  'culture',
  'développement',
  'écrire',
  'éducation',
  'égalité',
  'enfant',
  'épanouissement',
  'états',
  'expression',
  'famille',
  'femme',
  'harmonie',
  'homme',
  'humanité',
  'idéaux',
  'justice',
  'liberté',
  'loisirs',
  'manifester',
  'mineur',
  'opinion',
  'paix',
  'parent',
  'presse',
  'principe',
  'protection',
  'religion',
  'respect',
  'santé',
  'universel',
  'vie'
]

function initWordGame() {
  if (window.innerWidth <= 650) {
    var wordGame = new wordPuzzle(words, puzzleElem, wordListElem, {
      lang: 'FR',
      orientations: ['horizontal', 'vertical'],
      height: 30,
      width: 15,
      maxAttempts: 100,
      preferOverlap: false
    })
  } else {
    var wordGame = new wordPuzzle(words, puzzleElem, wordListElem, {
      lang: 'FR',
      orientations: ['horizontal', 'vertical'],
      height: 20,
      width: 25,
      maxAttempts: 100,
      preferOverlap: false
    })
  }
}

initWordGame()

// CHECKBOXES AND RADIOS
let checkboxes = document.querySelectorAll('input[type="checkbox"]');
[].forEach.call(checkboxes, (checkbox) => {
  let id = checkbox.id
  let label = document.createElement('label')
  label.setAttribute('for', id)
  checkbox.parentNode.insertBefore(label, checkbox.nextSibling)
})

let radios = document.querySelectorAll('input[type="radio"]');
[].forEach.call(radios, (radio) => {
  let id = radio.id
  let label = document.createElement('label')
  label.setAttribute('for', id)
  radio.parentNode.insertBefore(label, radio.nextSibling)
})

// INCOWEB
document.querySelector('#incoweb .flow').addEventListener('click', () => {
  window.open('http://incoweb.playbac.fr/indexhtml.php5?livret=74', 'EVENTAIL_PLAYBAC', 'height=700, width=900, toolbar=no, menubar=no, scrollbars=yes, resizable=no, location=no, directories=no, status=no')
})

// SCROLL LEAVES
var last_known_scroll_position = window.scrollY
var bodyHeigth = document.querySelector('body').clientHeight
var leavesHeigth = document.querySelector('#leavesLeft').clientHeight
var ticking = false

function topLeaves(scroll_pos) {
  let topOffset = leavesHeigth * scroll_pos / bodyHeigth
  let leaves = document.querySelectorAll('.leaves');
  [].forEach.call(leaves, (leaf) => {
    leaf.style.top = - topOffset + 'px'
  })
}
topLeaves(last_known_scroll_position)

window.addEventListener('scroll', () => {
  last_known_scroll_position = window.scrollY

  if (!ticking) {
    window.requestAnimationFrame(function() {
      topLeaves(last_known_scroll_position)
      ticking = false
    })
    ticking = true
  }
})

window.addEventListener('resize', () => {
  bodyHeigth = document.querySelector('body').clientHeight
  leavesHeigth = document.querySelector('#leavesLeft').clientHeight
})

// CONTEST

let contestForm = document.querySelector('#contestForm')
contestForm.addEventListener('submit', (e) => {
  e.preventDefault()
  e.stopPropagation()
  let xhr = new XMLHttpRequest()
  xhr.onload = () => { console.log(xhr.responseText) } // success case
  xhr.onerror = () => { console.warn(xhr.responseText) } // failure case
  xhr.open ('POST', 'https://localhost:3000', true)
  xhr.send (new FormData (contestForm))
  return false
})