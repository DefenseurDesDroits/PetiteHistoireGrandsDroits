import matchGame from '../lib/matchgame/src/matchgame.js'
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
    "https://via.placeholder.com/150x50?text=FAMILLE",
    "https://via.placeholder.com/150x50?text=EXPRESSION",
    "https://via.placeholder.com/150x50?text=EGALITE",
    "https://via.placeholder.com/150x50?text=SANTE",
    "https://via.placeholder.com/150x50?text=EDUC",
    "https://via.placeholder.com/150x50?text=PROTEC",
    "https://via.placeholder.com/150x50?text=JUSTICE"
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

// GAME 3
var multipleChoiceElem = document.querySelector('#multipleChoice')

// GAME 4
var puzzleElem = document.querySelector('#wordsgame')
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

var wordGame = new wordPuzzle(words, puzzleElem, {
  lang: 'FR',
  orientations: ['horizontal', 'vertical'],
  height: 20,
  width: 25,
  maxAttempts: 100,
  preferOverlap: false
})

// INCOWEB
document.querySelector('#incoweb').addEventListener('click', () => {
  window.open('http://incoweb.playbac.fr/indexhtml.php5?livret=74', 'EVENTAIL_PLAYBAC', 'height=700, width=900, toolbar=no, menubar=no, scrollbars=yes, resizable=no, location=no, directories=no, status=no')
})