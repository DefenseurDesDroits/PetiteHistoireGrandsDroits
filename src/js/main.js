import wordFind from '../../wordfind/src/wordfind.js'

console.warn("I am self aware")

function linkGame() {
  return 0
}

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

var puzzleElem = document.querySelector('#wordsgame')

var wordGame = new wordFind(words, puzzleElem, {
  lang: 'FR',
  orientations: ['horizontal', 'vertical'],
  height: 20,
  width: 25,
  maxAttempts: 100,
  preferOverlap: false
})

document.querySelector('#incoweb').addEventListener('click', () => {
  window.open('http://incoweb.playbac.fr/indexhtml.php5?livret=74', 'EVENTAIL_PLAYBAC', 'height=700, width=900, toolbar=no, menubar=no, scrollbars=yes, resizable=no, location=no, directories=no, status=no')
})