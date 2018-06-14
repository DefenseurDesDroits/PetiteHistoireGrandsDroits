import matchGame from '../lib/matchgame/src/matchgame.js'
import wordPuzzle from '../lib/wordpuzzle/src/wordpuzzle.js'

console.warn("I am self aware")

// GAME 1
var matchImgElem = document.querySelector('#matchImg')

var matcheesList = {
  "Le droit à une vie familiale":"img/match-A.png",
  "Le droit de s'exprimer":"img/match-B.png",
  "Le droit à l'égalité":"img/match-C.png",
  "Le droit à la santé":"img/match-D.png",
  "Le droit à l'éducation":"img/match-E.png",
  "Le droit à la protection":"img/match-F.png",
  "Le droit à la justice":"img/match-G.png"
}

var matchImg = new matchGame(matcheesList, matchImgElem)

// GAME 2
var matchSentenceElem = document.querySelector('#matchSentence')

var matchSentence = new matchGame()

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