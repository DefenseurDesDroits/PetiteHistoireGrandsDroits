!function(e){var t={};function r(n){if(t[n])return t[n].exports;var i=t[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)r.d(n,i,function(t){return e[t]}.bind(null,i));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=2)}([function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),i=a(r(5)),o=a(r(3));function a(e){return e&&e.__esModule?e:{default:e}}var s=["aged","ancient","autumn","billowing","bitter","black","blue","bold","broad","broken","calm","cold","cool","crimson","curly","damp","dark","dawn","delicate","divine","dry","empty","falling","fancy","flat","floral","fragrant","frosty","gentle","green","hidden","holy","icy","jolly","late","lingering","little","lively","long","lucky","misty","morning","muddy","mute","nameless","noisy","odd","old","orange","patient","plain","polished","proud","purple","quiet","rapid","raspy","red","restless","rough","round","royal","shiny","shrill","shy","silent","small","snowy","soft","solitary","sparkling","spring","square","steep","still","summer","super","sweet","throbbing","tight","tiny","twilight","wandering","weathered","white","wild","winter","wispy","withered","yellow","young"],l=["art","band","bar","base","bird","block","boat","bonus","bread","breeze","brook","bush","butterfly","cake","cell","cherry","cloud","credit","darkness","dawn","dew","disk","dream","dust","feather","field","fire","firefly","flower","fog","forest","frog","frost","glade","glitter","grass","hall","hat","haze","heart","hill","king","lab","lake","leaf","limit","math","meadow","mode","moon","morning","mountain","mouse","mud","night","paper","pine","poetry","pond","queen","rain","recipe","resonance","rice","river","salad","scene","sea","shadow","shape","silence","sky","smoke","snow","snowflake","sound","star","sun","sun","sunset","surf","term","thunder","tooth","tree","truth","union","unit","violet","voice","water","waterfall","wave","wildflower","wind","wood"],u={delimiter:"-",tokenLength:4,tokenHex:!1,tokenChars:"0123456789"},c=function(){function e(){var t=arguments.length<=0||void 0===arguments[0]?{}:arguments[0],r=t.defaults,n=void 0===r?{}:r,a=t.adjectives,c=void 0===a?s:a,d=t.nouns,h=void 0===d?l:d,f=t.seed;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.adjectives=c,this.nouns=h,this.random=new i.default(f),this.config=(0,o.default)(n,u)}return n(e,[{key:"haikunate",value:function(){var e=arguments.length<=0||void 0===arguments[0]?{}:arguments[0],t=(0,o.default)(e,this.config);!0===t.tokenHex&&(t.tokenChars="0123456789abcdef");for(var r=this._randomElement(this.adjectives),n=this._randomElement(this.nouns),i="",a=0;a<t.tokenLength;a++)i+=this._randomElement(t.tokenChars);return[r,n,i].filter(function(e){return 0===e||e}).join(t.delimiter)}},{key:"_randomElement",value:function(e){return e[this.random(e.length)]}}]),e}();t.default=c,e.exports=t.default},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),i=a(r(8)),o=a(r(6));function a(e){return e&&e.__esModule?e:{default:e}}var s=["aged","ancient","autumn","billowing","bitter","black","blue","bold","broad","broken","calm","cold","cool","crimson","curly","damp","dark","dawn","delicate","divine","dry","empty","falling","fancy","flat","floral","fragrant","frosty","gentle","green","hidden","holy","icy","jolly","late","lingering","little","lively","long","lucky","misty","morning","muddy","mute","nameless","noisy","odd","old","orange","patient","plain","polished","proud","purple","quiet","rapid","raspy","red","restless","rough","round","royal","shiny","shrill","shy","silent","small","snowy","soft","solitary","sparkling","spring","square","steep","still","summer","super","sweet","throbbing","tight","tiny","twilight","wandering","weathered","white","wild","winter","wispy","withered","yellow","young"],l=["art","band","bar","base","bird","block","boat","bonus","bread","breeze","brook","bush","butterfly","cake","cell","cherry","cloud","credit","darkness","dawn","dew","disk","dream","dust","feather","field","fire","firefly","flower","fog","forest","frog","frost","glade","glitter","grass","hall","hat","haze","heart","hill","king","lab","lake","leaf","limit","math","meadow","mode","moon","morning","mountain","mouse","mud","night","paper","pine","poetry","pond","queen","rain","recipe","resonance","rice","river","salad","scene","sea","shadow","shape","silence","sky","smoke","snow","snowflake","sound","star","sun","sun","sunset","surf","term","thunder","tooth","tree","truth","union","unit","violet","voice","water","waterfall","wave","wildflower","wind","wood"],u={delimiter:"-",tokenLength:4,tokenHex:!1,tokenChars:"0123456789"},c=function(){function e(){var t=arguments.length<=0||void 0===arguments[0]?{}:arguments[0],r=t.defaults,n=void 0===r?{}:r,a=t.adjectives,c=void 0===a?s:a,d=t.nouns,h=void 0===d?l:d,f=t.seed;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.adjectives=c,this.nouns=h,this.random=new i.default(f),this.config=(0,o.default)(n,u)}return n(e,[{key:"haikunate",value:function(){var e=arguments.length<=0||void 0===arguments[0]?{}:arguments[0],t=(0,o.default)(e,this.config);!0===t.tokenHex&&(t.tokenChars="0123456789abcdef");for(var r=this._randomElement(this.adjectives),n=this._randomElement(this.nouns),i="",a=0;a<t.tokenLength;a++)i+=this._randomElement(t.tokenChars);return[r,n,i].filter(function(e){return 0===e||e}).join(t.delimiter)}},{key:"_randomElement",value:function(e){return e[this.random(e.length)]}}]),e}();t.default=c,e.exports=t.default},function(e,t,r){"use strict";r.r(t);var n=r(1),i=new(r.n(n).a);function o(e){return"object"==typeof HTMLElement?e instanceof HTMLElement:e&&"object"==typeof e&&null!==e&&1===e.nodeType&&"string"==typeof e.nodeName}var a=class{constructor(e,t){this.elements=e,this.domElem=t,this.itemsToMatch=this.elements.length,this.curMatched=0,this.curMatchID="",this.matchedElems=[],this.placeMatchees(this.elements),this.setEventListeners()}verifyLists(e=this.elements){if(void 0!==e){let t=e[0].length,r=0;return e.map(e=>{r+=e.length}),r/e.length==t}}placeMatchees(e=this.elements){if(!this.verifyLists(e))return console.warn("The lists don't contain the same number of elements"),!1;{let r=[];e.map(e=>{r.push([])});for(let n=0;n<e[0].length;n++){let a=i.haikunate();for(let i=0;i<e.length;i++){let s=document.createElement("li");if(s.setAttribute("data-matchID",a),s.classList.add("matchItem"),"string"==typeof e[i][n]){let t=document.createTextNode(e[i][n]);s.appendChild(t)}else t=e[i][n],("object"==typeof Node?t instanceof Node:t&&"object"==typeof t&&"number"==typeof t.nodeType&&"string"==typeof t.nodeName)||o(e[i][n])?s.appendChild(e[i][n]):console.warn(typeof e[i][n],"not handled");r[i].push(s)}}r.map(e=>{let t=document.createElement("ul");t.classList.add("matchItems"),this.shuffleMatchees(e).map(e=>{t.appendChild(e)}),this.domElem.appendChild(t)})}var t}shuffleMatchees(e){let t,r,n=e.length;for(;0!==n;)r=Math.floor(Math.random()*n),t=e[n-=1],e[n]=e[r],e[r]=t;return e}wasMatched(e,t){return e.map(e=>e==t).includes(!0)}checkMatch(e){let t=e.target.classList.contains("matchItem")?e.target:function(e,t){for(;e.parentNode;)if((e=e.parentNode).classList.contains(t))return e;return null}(e.target,"matchItem"),r=t.getAttribute("data-matchID");this.curMatched>0&&this.curMatched<this.itemsToMatch?this.curMatchID!=r||this.wasMatched(this.matchedElems,t)?this.clearMatchees():(t.classList.add("selected"),this.matchedElems.push(t),this.foundMatch()):0==this.curMatched&&(this.curMatchID=r,t.classList.add("selected"),this.matchedElems.push(t),this.foundMatch())}foundMatch(){if(this.curMatched++,this.curMatched==this.itemsToMatch){let e=this.domElem.querySelectorAll(".selected");[].forEach.call(e,e=>{e.classList.replace("selected","found");let t=e.parentNode;t.removeChild(e),t.insertBefore(e,t.firstChild)}),this.clearMatchees()}}clearMatchees(){this.curMatched=0,this.curMatchID="",this.matchedElems=[];let e=this.domElem.querySelectorAll(".selected");[].forEach.call(e,e=>{e.classList.remove("selected")})}setEventListeners(){let e=this.domElem.querySelectorAll(".matchItem");[].forEach.call(e,e=>{e.addEventListener("click",this.checkMatch.bind(this))})}},s=r(0),l=new(r.n(s).a);var u=class{constructor(e,t,r){this.questions=e,this.messages=t,this.domElem=r,this.validAnswers={},this.totalQuestions=0,this.createForm(),this.setEventListeners()}createForm(e=this.questions,t=this.domElem){let r=document.createElement("form");r.classList.add("multiChoiceTest"),e.map(e=>{let t=l.haikunate(),n=document.createElement("fieldset");n.id=t;let i=document.createElement("label"),o=document.createTextNode(e.question);i.appendChild(o),n.appendChild(i),this.shuffleAnswers(e.answers).map(e=>{let r=l.haikunate();e.valid&&(this.validAnswers[t]=r);let i=document.createElement("div");i.classList.add("multiChoiceAnswer");let o=document.createElement("input");o.setAttribute("type","radio"),o.id=r,o.setAttribute("name",t),o.setAttribute("value",r),i.appendChild(o);let a=document.createElement("label");a.setAttribute("for",r);let s=document.createTextNode(e.answer);a.appendChild(s),i.appendChild(a),n.appendChild(i)}),r.appendChild(n)}),t.appendChild(r),this.totalQuestions=e.length}shuffleAnswers(e){let t,r,n=e.length;for(;0!==n;)r=Math.floor(Math.random()*n),t=e[n-=1],e[n]=e[r],e[r]=t;return e}checkAnswer(e){let t=e.target,r=t.getAttribute("name"),n=t.getAttribute("value");if(this.validAnswers[r]==n){let e=this.domElem.querySelectorAll('.multiChoiceAnswer input[name="'+r+'"]');[].forEach.call(e,e=>{e.disabled=!0}),t.classList.add("correct"),t.classList.add("selected"),this.domElem.querySelector("#"+r).classList.add("answered")}else{let e=this.domElem.querySelectorAll('.multiChoiceAnswer input[name="'+r+'"]');[].forEach.call(e,e=>{e.disabled=!0}),t.classList.add("wrong"),t.classList.add("selected"),this.domElem.querySelector('.multiChoiceAnswer input[value="'+this.validAnswers[r]+'"]').classList.add("correct"),this.domElem.querySelector("#"+r).classList.add("answered")}let i=this.domElem.querySelectorAll("fieldset.answered");this.totalQuestions==i.length&&this.calcScore()}calcScore(){let e=this.domElem.querySelectorAll("input.selected.correct").length;this.printMsg(e)}printMsg(e,t=this.messages){for(let r=0;r<t.length;r++)if(e>=t[r].scoreThresold){let e=document.createElement("div");e.classList.add("scoreMsg");let n=document.createElement("p");n.classList.add("msgTitle");let i=document.createTextNode(t[r].title);n.appendChild(i),e.appendChild(n);let o=document.createElement("p"),a=document.createTextNode(t[r].message);o.appendChild(a),e.appendChild(o),this.domElem.appendChild(e);break}}setEventListeners(e=this.domElem){let t=e.querySelectorAll(".multiChoiceAnswer input");[].forEach.call(t,e=>{e.addEventListener("click",this.checkAnswer.bind(this))})}};var c=class{constructor(e,t,r,n={}){if(!e.length)throw new Error("No words provided");this.attempts=0,this.gridGrowths=0,this.domElem=t,this.allOrientations=["horizontal","horizontalBack","vertical","verticalUp","diagonal","diagonalUp","diagonalBack","diagonalUpBack"],this.orientations=n.orientations||allOrientations,this.wordList=e.slice(0).sort(),this.wordListElem=r;let i=this.wordList[0].length;this.opts={lang:n.lang||"EN",height:n.height||i,width:n.width||i,orientations:this.orientations,fillBlanks:void 0===n.fillBlanks||n.fillBlanks,allowExtraBlanks:void 0===n.allowExtraBlanks||n.allowExtraBlanks,maxAttempts:n.maxAttempts||3,maxGridGrowth:void 0!==n.maxGridGrowth?n.maxGridGrowth:10,preferOverlap:void 0===n.preferOverlap||n.preferOverlap,debug:void 0!==n.debug&&n.debug},this.lettersSet=this.setLetters(this.opts.lang),this.startSquare=null,this.lastSquare=null,this.selectedSquares=[],this.curWord="",this.curOrientation=null,this.finalPuzzle=this.newPuzzle(),this.drawPuzzle(),this.setEventHandlers()}compOrientations(e,t,r,n){switch(e){case"horizontal":return{x:t+n,y:r};case"horizontalBack":return{x:t-n,y:r};case"vertical":return{x:t,y:r+n};case"verticalUp":return{x:t,y:r-n};case"diagonal":return{x:t+n,y:r+n};case"diagonalBack":return{x:t-n,y:r+n};case"diagonalUp":return{x:t+n,y:r-n};case"diagonalUpBack":return{x:t-n,y:r-n}}}checkOrientations(e,t,r,n,i,o){switch(e){case"horizontal":return i>=t+o;case"horizontalBack":return t+1>=o;case"vertical":return n>=r+o;case"verticalUp":return r+1>=o;case"diagonal":return i>=t+o&&n>=r+o;case"diagonalBack":return t+1>=o&&n>=r+o;case"diagonalUp":return i>=t+o&&r+1>=o;case"diagonalUpBack":return t+1>=o&&r+1>=o}}skipOrientations(e,t,r,n){switch(e){case"horizontal":return{x:0,y:r+1};case"horizontalBack":return{x:n-1,y:r};case"vertical":return{x:0,y:r+100};case"verticalUp":return{x:0,y:n-1};case"diagonal":return{x:0,y:r+1};case"diagonalBack":return{x:n-1,y:t>=n-1?r+1:r};case"diagonalUp":return{x:0,y:r<n-1?n-1:r+1};case"diagonalUpBack":return{x:n-1,y:t>=n-1?r+1:r}}}fillPuzzle(e,t){let r,n,i;for(this.curPuzzle=[],r=0;r<t.height;r++)for(this.curPuzzle.push([]),n=0;n<t.width;n++)this.curPuzzle[r].push("");for(r=0,i=e.length;r<i;r++)if(!this.placeWordInPuzzle(this.curPuzzle,t,e[r]))return null;return this.curPuzzle}placeWordInPuzzle(e,t,r){let n=this.findBestLocations(e,t,r);if(0===n.length)return!1;let i=n[Math.floor(Math.random()*n.length)];return this.placeWord(e,r,i.x,i.y,i.orientation),!0}findBestLocations(e,t,r){let n=[],i=t.height,o=t.width,a=r.length,s=0;for(let u=0,c=t.orientations.length;u<c;u++){let c=t.orientations[u],d=0,h=0;for(;h<i;)if(this.checkOrientations(c,d,h,i,o,a)){var l=this.calcOverlap(r,e,d,h,c);(l>=s||!t.preferOverlap&&l>-1)&&(s=l,n.push({x:d,y:h,orientation:c,overlap:l})),++d>=o&&(d=0,h++)}else{let e=this.skipOrientations(c,d,h,a);d=e.x,h=e.y}}return t.preferOverlap?this.pruneLocations(n,s):n}calcOverlap(e,t,r,n,i){let o=0;for(let l=0,u=e.length;l<u;l++){var a=this.compOrientations(i,r,n,l),s=t[a.y][a.x];if(s===e[l])o++;else if(""!==s)return-1}return o}pruneLocations(e,t){var r=[];for(let n=0,i=e.length;n<i;n++)e[n].overlap>=t&&r.push(e[n]);return r}placeWord(e,t,r,n,i){for(let o=0,a=t.length;o<a;o++){let a=this.compOrientations(i,r,n,o);e[a.y][a.x]=t[o]}}setLetters(e=this.opts.lang){switch(e){case"EN":case"ES":return"abcdefghijklmnoprstuvwy";case"FR":return"abcdefghijklmnoprstuvwyéàèùâêîôûçëïü";case"IT":return"abcdefghijklmnoprstuvwyàèéìòóù";case"DE":return"abcdefghijklmnoprstuvwyäöüß";case"JA":return"アカサタナイキシチニウクスツヌエケセテネオコソトノハマヤラワヒミリヰフムユルンヘメレヱホモヨロヲガザダバパギジヂビピグズヅブプゲゼデベペゴゾドボポ";case"ZH":return"安吧爸八百北不大岛的弟地东都对多儿二方港哥个关贵国过海好很会家见叫姐京九可老李零六吗妈么没美妹们明名哪那南你您朋七起千去人认日三上谁什生师识十是四他她台天湾万王我五西息系先香想小谢姓休学也一亿英友月再张这中字";case"HI":return"अआएईऍऎऐइओऑऒऊऔउबभचछडढफफ़गघग़हजझकखख़लळऌऴॡमनङञणऩॐपक़रऋॠऱसशषटतठदथधड़ढ़वयय़ज़";case"ID":return"abcdefghijklmnoprstuvwy";case"NL":return"abcdefghijklmnoprstuvwyáéíóúàèëïöüĳ";case"PL":return"abcdefghijklmnoprstuvwyąćęłńóśżź";case"PT":return"abcdefghijklmnoprstuvwyàáâãçéêíóôõú";case"RU":return"абвгдеёжзийклмнопрстуфхцчшщъыьэюя";case"KO":return"ㄱㄴㄷㄹㅁㅂㅅㅇㅈㅊㅋㅌㅍㅎㅏㅓㅗㅜㅡㅣㅑㅕㅛㅠㄲㄸㅃㅆㅉㄳㄵㄶㄺㄻㄼㄽㄾㄿㅀㅄㅐㅒㅔㅖㅢㅘㅙㅚㅝㅞㅟ";default:return console.warn("Language not recognized, falling back to English"),"abcdefghijklmnoprstuvwy"}}newPuzzle(e=this.wordList,t=this.opts){for(;!this.curPuzzle;){for(;!this.curPuzzle&&this.attempts++<t.maxAttempts;)this.curPuzzle=this.fillPuzzle(e,t);if(!this.curPuzzle){if(this.gridGrowths++,this.gridGrowths>t.maxGridGrowth)throw new Error(`No valid ${t.width}x${t.height} grid found and not allowed to grow more`);console.log(`No valid ${t.width}x${t.height} grid found after ${this.attempts-1} attempts, trying with bigger grid`),t.height++,t.width++,this.attempts=0}}if(t.fillBlanks)for(let e=0,t=this.curPuzzle.length;e<t;e++)for(let t=0,r=this.curPuzzle[e].length;t<r;t++)""==this.curPuzzle[e][t]&&(this.curPuzzle[e][t]=this.lettersSet[Math.floor(Math.random()*this.lettersSet.length)]);return t.debug&&this.print(this.curPuzzle),this.curPuzzle}newPuzzleLax(e,t){try{return this.newPuzzle(e,t)}catch(i){if(!t.allowedMissingWords)throw i;(t=Object.assign({},t)).allowedMissingWords--;for(var r=0;r<e.length;r++){var n=e.slice(0);n.splice(r,1);try{return this.curPuzzle=this.newPuzzleLax(n,t),console.log(`Solution found without word "${e[r]}"`),this.curPuzzle}catch(e){}}throw i}}solve(e,t){for(var r={height:e.length,width:e[0].length,orientations:this.orientations,preferOverlap:!0},n=[],i=[],o=0,a=t.length;o<a;o++){let a=t[o],s=this.findBestLocations(e,r,a);s.length>0&&s[0].overlap===a.length?(s[0].word=a,n.push(s[0])):i.push(a)}return{found:n,notFound:i}}print(e){let t="";for(var r=0,n=e.length;r<n;r++){for(var i=e[r],o=0,a=i.length;o<a;o++)t+=(""===i[o]?" ":i[o])+" ";t+="\n"}return console.log(t),t}drawPuzzle(e=this.domElem,t=this.finalPuzzle){for(;e.firstChild;)e.removeChild(e.firstChild);for(var r=0,n=t.length;r<n;r++){let n=document.createElement("div");for(var i=t[r],o=0,a=i.length;o<a;o++){let e=document.createElement("button");e.classList.add("puzzleSquare"),e.setAttribute("x",o),e.setAttribute("y",r);let t=document.createTextNode(i[o]||"&nbsp;");e.appendChild(t),n.appendChild(e)}e.appendChild(n)}this.listWords(this.opts.lang)}listWords(e="EN",t=this.wordListElem){for(;t.firstChild;)t.removeChild(t.firstChild);this.wordList.sort(new Intl.Collator(e).compare).map(e=>{let r=document.createElement("li");r.setAttribute("data-word",e);let n=document.createTextNode(e);r.appendChild(n),t.appendChild(r)})}calcOrientation(e,t,r,n){for(let i=0;i<this.orientations.length;i++){let o=this.compOrientations(this.orientations[i],e,t,1);return o.x===r&&o.y===n?this.orientations[i]:null}}startTurn(e){let t=e.target;t.classList.add("selected"),this.startSquare=t,this.selectedSquares.push(t),this.curWord=t.innerText}mouseMove(e){let t=e.target;this.selectSquare(t)}touchMove(e){e.preventDefault(),e.stopPropagation();let t=e.touches[0]||e.changedTouches[0],r=t.clientX,n=t.clientY,i=document.elementFromPoint(r,n);this.selectSquare(i)}selectSquare(e){let t=this.selectedSquares[this.selectedSquares.length-1];if(this.startSquare&&e!==this.startSquare){let r=this.calcOrientation(t.getAttribute("x"),t.getAttribute("y"),e.getAttribute("x"),e.getAttribute("y"));""==this.curOrientation||this.curOrientation==r?this.playTurn(e):this.endTurn()}}playTurn(e){for(var t=0,r=this.wordList.length;t<r;t++)0===this.wordList[t].toUpperCase().indexOf(this.curWord.toUpperCase()+e.innerText.toUpperCase())&&(e.classList.add("selected"),this.selectedSquares.push(e),this.curWord+=e.innerText)}endTurn(){for(let e=0;e<this.wordList.length;e++){if(this.wordList[e].toUpperCase()===this.curWord.toUpperCase()){let t=document.querySelectorAll(".selected");[].forEach.call(t,e=>{e.classList.add("found")}),this.wordListElem.querySelector('li[data-word="'+this.curWord.toLowerCase()+'"]').classList.add("wordFound"),this.wordList.splice(e,1)}if(0===this.wordList.length){let e=document.querySelectorAll(".puzzleSquare");[].forEach.call(e,e=>{e.classList.add("complete")})}}let e=document.querySelectorAll(".selected");[].forEach.call(e,e=>{e.classList.remove("selected")}),this.startSquare=null,this.lastSquare=null,this.selectedSquares=[],this.curWord="",this.curOrientation=null}setEventHandlers(e=this.domElem){if(window.navigator.msPointerEnabled){let t=e.querySelectorAll(".puzzleSquare");[].forEach.call(t,e=>{e.addEventListener("MSPointerDown",this.startTurn.bind(this)),e.addEventListener("MSPointerOver",this.selectSquare.bind(this)),e.addEventListener("MSPointerUp",this.endTurn.bind(this))})}else{let t=e.querySelectorAll(".puzzleSquare");[].forEach.call(t,e=>{e.addEventListener("mousedown",this.startTurn.bind(this)),e.addEventListener("mouseenter",this.mouseMove.bind(this)),e.addEventListener("mouseup",this.endTurn.bind(this)),e.addEventListener("touchstart",this.startTurn.bind(this)),e.addEventListener("touchmove",this.touchMove.bind(this)),e.addEventListener("touchend",this.endTurn.bind(this))})}}};console.warn("I am self aware");var d=document.querySelector("#matchImg"),h=[["Le droit à une vie familiale","Le droit de s'exprimer","Le droit à l'égalité","Le droit à la santé","Le droit à l'éducation","Le droit à la protection","Le droit à la justice"],["img/family.svg","img/expression.svg","https://via.placeholder.com/150x150?text=EGALITE","https://via.placeholder.com/150x150?text=SANTE","img/education.svg","img/protection.svg","https://via.placeholder.com/150x150?text=JUSTICE"]];h[1]=h[1].map(e=>{let t=document.createElement("img");return t.setAttribute("src",e),t});new a(h,d);var f=document.querySelector("#matchSentence");new a([["Tu as le droit d'avoir une justice adaptée à ton âge : tout enfant a droit à un avocat spécialisé pour le conseiller et le défendre, et le droit d'être jugé par un juge des enfants s'il n'a pas respecté la loi.","Tu as le droit d'aller voir un médecin, une infirmière, de te soigner lorsque tu es malade, d'être bien nourri.","Tu as le droit d'etre protégé contre toute forme de violence, d'atteinte ou de brutalités physiques ou mentales, d'abandon ou de négligence.","Tu as le droit d'aller à l'école gratuitement, d'apprendre, d'avoir accès aux journaux et aux sources d'information pour te cultiver.","Tu as le droit d'exprimer librement ton opinion, tout en respectant celle des autres, de rechercher, de recevoir et de répandre des informations.","Tu dois être traité à égalité avec les autres enfants, partout dans le mondre, quels que soient ton origine, ton sexe, ta religion, tes opinions, ton handicap, tes croyances ou ta couleur de peau. Vous avez tous les mêmes droits.","Tu as le droit d'être bien entouré, aimé et de grandir dans un environnement sain et bienveillant."],["Droit à la justice","Droit à la santé","Droit à la protection","Droit à l'éducation","Droit à la liberté d'expression","Droit à l'égalité","Droit à une vie familiale"]],f);let p=[],m=f.querySelectorAll("li");[].forEach.call(m,e=>{p.push(e.clientHeight)}),p.sort((e,t)=>t-e),[].forEach.call(m,e=>{e.style.height=p[0]+"px"});new u([{question:"Lequel de ces droits est un droit fondamental pour les enfants ?",answers:[{answer:"Le droit d'avoir internet"},{answer:"Le droit d'avoir un prénom et une identité",valid:!0},{answer:"Le droit d'avoir de l'argent de poche"}]},{question:"Pour que les enfants aient tous droit à l'éducation, les États doivent rendre l'enseignement primaire obligatoire et ... ?",answers:[{answer:"Payant"},{answer:"Gratuit",valid:!0},{answer:"Facultatif (optionnel, au choix)"}]},{question:"Tu es dans la cour de ton école, tout le monde joue. C'est super de pouvoir se défouler à la récré ! Un petit groupe d'enfants commence une partie de football... Clémence, une copine de ta classe, veut y jouer aussi. Mais Thomas, Capitaine de l'équipe, lui interdit d'y participer parce que c'est une fille... Quel droit n'est pas respecté ici ?",answers:[{answer:"Le droit à l'égalité",valid:!0},{answer:"Le droit à la liberté d'expression"},{answer:"Le droit à l'éducation"}]},{question:"À l'occasion des vacances scolaires, tu proposes à des amis de vous rassembler pour nettoyer les plages et donc participer à la préservation de l'environnemment. À quel droit ton initiative fait-elle référence ?",answers:[{answer:"Le droit à la participation",valid:!0},{answer:"Le droit à l'information"},{answer:"Le droit aux loisirs"}]},{question:"Qu'est-ce que le droit à la santé",answers:[{answer:"Pouvoir manger de la viande tous les jours"},{answer:"Avoir de bonnes baskets pour faire du sport"},{answer:"Être soigné, bien nourri et avoir accès à l'eau potable",valid:!0}]},{question:"Dans laquelle de ces 3 situations un pays ne respecte-t-il pas la Convention internationale des droits de l'enfant ?",answers:[{answer:"Si des écoliers n'ont pas de goûter"},{answer:"Si toutes les écoles n'ont pas d'ordinateur"},{answer:"Si les enfants n'accèdent pas à l'école",valid:!0}]},{question:"A-t-on le droit de tout dire ?",answers:[{answer:"Oui, sans limite"},{answer:"Oui, dans le respect des autres",valid:!0},{answer:"Non, on ne droit rien dire"}]},{question:"Au collège, le professeur de français organise un débat en classe. D'habitude, tu es toujours d'accord sur tout avec tes amis. Mais cette fois, chacun donne son avis et tu as l'impression de na penser comme les autres. Au moment de t'exprimer, impossible de parler. Le soir après les cours, tu en parles avec Yorick, ton cousin. Il te dit que tu aurais pu enrichir le débat, que tu as le droit de donner ton avis. À quel droit fait-il référence ?",answers:[{answer:"Le droit à la protection"},{answer:"Le droit à la liberté d'expression",valid:!0},{answer:"Le droit au repos et aux loisirs"}]}],[{title:"L'expert",message:"Tu connais parfaitement les droits de l'enfant et tu sais reconnaître une situation qui va à l'envontre de ces droits. Les droits de l'enfant sont fondamentaux alors n'hésite pas à les partager avec tes amis et ton entourage pour qu'ils deviennent des experts comme toi !",scoreThresold:6},{title:"Le bon connaisseur",message:"Tu as de bonnes conaissances mais il te reste quelques petites choses à savoir. N'hésite pas à partager tes interrogations avec ton entourage car tu as toutes les clés en main pour devenir un expert !",scoreThresold:3},{title:"Le jeune padawan",message:"Tu es sur la bonne voie et en plein apprentissage des droits de l'enfant. Il t'en reste à découvrir et cela tombe bien, nous sommes là pour t'en parler ! Tous ces petits exercices te permettront d'en savoir plus et d'en parler avec ton entourage !",scoreThresold:0}],document.querySelector("#multipleChoice")),new c(["amour","avis","bien-être","bonheur","club","connaissance","convention","culture","développement","écrire","éducation","égalité","enfant","épanouissement","états","expression","famille","femme","harmonie","homme","humanité","idéaux","justice","liberté","loisirs","manifester","mineur","opinion","paix","parent","presse","principe","protection","religion","respect","santé","universel","vie"],document.querySelector("#wordsgame"),document.querySelector("#wordslist ul"),{lang:"FR",orientations:["horizontal","vertical"],height:20,width:25,maxAttempts:100,preferOverlap:!1});let g=document.querySelectorAll('input[type="checkbox"]');[].forEach.call(g,e=>{let t=e.id,r=document.createElement("label");r.setAttribute("for",t),e.parentNode.insertBefore(r,e.nextSibling)});let v=document.querySelectorAll('input[type="radio"]');[].forEach.call(v,e=>{let t=e.id,r=document.createElement("label");r.setAttribute("for",t),e.parentNode.insertBefore(r,e.nextSibling)}),document.querySelector("#incoweb .flow").addEventListener("click",()=>{window.open("http://incoweb.playbac.fr/indexhtml.php5?livret=74","EVENTAIL_PLAYBAC","height=700, width=900, toolbar=no, menubar=no, scrollbars=yes, resizable=no, location=no, directories=no, status=no")});var w=0,y=document.querySelector("body").clientHeight,b=document.querySelector("#leavesLeft").clientHeight,E=!1;window.addEventListener("scroll",()=>{w=window.scrollY,E||(window.requestAnimationFrame(function(){!function(e){let t=b*e/y,r=document.querySelectorAll(".leaves");[].forEach.call(r,e=>{e.style.top=-t+"px"})}(w),E=!1}),E=!0)}),window.addEventListener("resize",()=>{y=document.querySelector("body").clientHeight,b=document.querySelector("#leavesLeft").clientHeight})},function(e,t){var r=9007199254740991,n="[object Arguments]",i="[object Function]",o="[object GeneratorFunction]",a=/^(?:0|[1-9]\d*)$/;function s(e,t,r){switch(r.length){case 0:return e.call(t);case 1:return e.call(t,r[0]);case 2:return e.call(t,r[0],r[1]);case 3:return e.call(t,r[0],r[1],r[2])}return e.apply(t,r)}var l=Object.prototype,u=l.hasOwnProperty,c=l.toString,d=l.propertyIsEnumerable,h=Math.max;function f(e,t){var r=b(e)||function(e){return function(e){return function(e){return!!e&&"object"==typeof e}(e)&&E(e)}(e)&&u.call(e,"callee")&&(!d.call(e,"callee")||c.call(e)==n)}(e)?function(e,t){for(var r=-1,n=Array(e);++r<e;)n[r]=t(r);return n}(e.length,String):[],i=r.length,o=!!i;for(var a in e)!t&&!u.call(e,a)||o&&("length"==a||w(a,i))||r.push(a);return r}function p(e,t,r,n){return void 0===e||y(e,l[r])&&!u.call(n,r)?t:e}function m(e,t,r){var n=e[t];u.call(e,t)&&y(n,r)&&(void 0!==r||t in e)||(e[t]=r)}function g(e){if(!x(e))return function(e){var t=[];if(null!=e)for(var r in Object(e))t.push(r);return t}(e);var t,r,n,i=(r=(t=e)&&t.constructor,n="function"==typeof r&&r.prototype||l,t===n),o=[];for(var a in e)("constructor"!=a||!i&&u.call(e,a))&&o.push(a);return o}function v(e,t){return t=h(void 0===t?e.length-1:t,0),function(){for(var r=arguments,n=-1,i=h(r.length-t,0),o=Array(i);++n<i;)o[n]=r[t+n];n=-1;for(var a=Array(t+1);++n<t;)a[n]=r[n];return a[t]=o,s(e,this,a)}}function w(e,t){return!!(t=null==t?r:t)&&("number"==typeof e||a.test(e))&&e>-1&&e%1==0&&e<t}function y(e,t){return e===t||e!=e&&t!=t}var b=Array.isArray;function E(e){return null!=e&&function(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=r}(e.length)&&!function(e){var t=x(e)?c.call(e):"";return t==i||t==o}(e)}function x(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}var L,S=(L=function(e,t,r,n){!function(e,t,r,n){r||(r={});for(var i=-1,o=t.length;++i<o;){var a=t[i],s=n?n(r[a],e[a],a,r,e):void 0;m(r,a,void 0===s?e[a]:s)}}(t,function(e){return E(e)?f(e,!0):g(e)}(t),e,n)},v(function(e,t){var r=-1,n=t.length,i=n>1?t[n-1]:void 0,o=n>2?t[2]:void 0;for(i=L.length>3&&"function"==typeof i?(n--,i):void 0,o&&function(e,t,r){if(!x(r))return!1;var n=typeof t;return!!("number"==n?E(r)&&w(t,r.length):"string"==n&&t in r)&&y(r[t],e)}(t[0],t[1],o)&&(i=n<3?void 0:i,n=1),e=Object(e);++r<n;){var a=t[r];a&&L(e,a,r,i)}return e})),k=v(function(e){return e.push(void 0,p),s(S,void 0,e)});e.exports=k},function(e,t){function r(e,t){var r=[],n=[];return null==t&&(t=function(e,t){return r[0]===t?"[Circular ~]":"[Circular ~."+n.slice(0,r.indexOf(t)).join(".")+"]"}),function(i,o){if(r.length>0){var a=r.indexOf(this);~a?r.splice(a+1):r.push(this),~a?n.splice(a,1/0,i):n.push(i),~r.indexOf(o)&&(o=t.call(this,i,o))}else r.push(o);return null==e?o:e.call(this,i,o)}}(e.exports=function(e,t,n,i){return JSON.stringify(e,r(t,i),n)}).getSerialize=r},function(e,t,r){"use strict";var n=r(4),i=function(e){return function(){var t,r,i=48,o=1,a=i,s=new Array(i),l=0,u=new function(){var e=4022871197;return function(t){if(t){t=t.toString();for(var r=0;r<t.length;r++){var n=.02519603282416938*(e+=t.charCodeAt(r));n-=e=n>>>0,e=(n*=e)>>>0,e+=4294967296*(n-=e)}return 2.3283064365386963e-10*(e>>>0)}e=4022871197}};for(t=0;t<i;t++)s[t]=u(Math.random());var c=function(){++a>=i&&(a=0);var e=1768863*s[a]+2.3283064365386963e-10*o;return s[a]=e-(o=0|e)},d=function(e){return Math.floor(e*(c()+1.1102230246251565e-16*(2097152*c()|0)))};d.string=function(e){var t,r="";for(t=0;t<e;t++)r+=String.fromCharCode(33+d(94));return r};return d.cleanString=function(e){return e=(e=(e=e.replace(/(^\s*)|(\s*$)/gi,"")).replace(/[\x00-\x1F]/gi,"")).replace(/\n /,"\n")},d.hashString=function(e){for(e=d.cleanString(e),u(e),t=0;t<e.length;t++)for(l=e.charCodeAt(t),r=0;r<i;r++)s[r]-=u(l),s[r]<0&&(s[r]+=1)},d.seed=function(e){void 0!==e&&null!==e||(e=Math.random()),"string"!=typeof e&&(e=n(e,function(e,t){return"function"==typeof t?t.toString():t})),d.initState(),d.hashString(e)},d.addEntropy=function(){var e=[];for(t=0;t<arguments.length;t++)e.push(arguments[t]);!function(){var e=Array.prototype.slice.call(arguments);for(t=0;t<e.length;t++)for(r=0;r<i;r++)s[r]-=u(e[t]),s[r]<0&&(s[r]+=1)}(l+++(new Date).getTime()+e.join("")+Math.random())},d.initState=function(){for(u(),t=0;t<i;t++)s[t]=u(" ");o=1,a=i},d.done=function(){u=null},void 0!==e&&d.seed(e),d.range=function(e){return d(e)},d.random=function(){return d(Number.MAX_VALUE-1)/Number.MAX_VALUE},d.floatBetween=function(e,t){return d.random()*(t-e)+e},d.intBetween=function(e,t){return Math.floor(d.random()*(t-e+1))+e},d}()};i.create=function(e){return new i(e)},e.exports=i},function(e,t){var r=9007199254740991,n="[object Arguments]",i="[object Function]",o="[object GeneratorFunction]",a=/^(?:0|[1-9]\d*)$/;function s(e,t,r){switch(r.length){case 0:return e.call(t);case 1:return e.call(t,r[0]);case 2:return e.call(t,r[0],r[1]);case 3:return e.call(t,r[0],r[1],r[2])}return e.apply(t,r)}var l=Object.prototype,u=l.hasOwnProperty,c=l.toString,d=l.propertyIsEnumerable,h=Math.max;function f(e,t){var r=b(e)||function(e){return function(e){return function(e){return!!e&&"object"==typeof e}(e)&&E(e)}(e)&&u.call(e,"callee")&&(!d.call(e,"callee")||c.call(e)==n)}(e)?function(e,t){for(var r=-1,n=Array(e);++r<e;)n[r]=t(r);return n}(e.length,String):[],i=r.length,o=!!i;for(var a in e)!t&&!u.call(e,a)||o&&("length"==a||w(a,i))||r.push(a);return r}function p(e,t,r,n){return void 0===e||y(e,l[r])&&!u.call(n,r)?t:e}function m(e,t,r){var n=e[t];u.call(e,t)&&y(n,r)&&(void 0!==r||t in e)||(e[t]=r)}function g(e){if(!x(e))return function(e){var t=[];if(null!=e)for(var r in Object(e))t.push(r);return t}(e);var t,r,n,i=(r=(t=e)&&t.constructor,n="function"==typeof r&&r.prototype||l,t===n),o=[];for(var a in e)("constructor"!=a||!i&&u.call(e,a))&&o.push(a);return o}function v(e,t){return t=h(void 0===t?e.length-1:t,0),function(){for(var r=arguments,n=-1,i=h(r.length-t,0),o=Array(i);++n<i;)o[n]=r[t+n];n=-1;for(var a=Array(t+1);++n<t;)a[n]=r[n];return a[t]=o,s(e,this,a)}}function w(e,t){return!!(t=null==t?r:t)&&("number"==typeof e||a.test(e))&&e>-1&&e%1==0&&e<t}function y(e,t){return e===t||e!=e&&t!=t}var b=Array.isArray;function E(e){return null!=e&&function(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=r}(e.length)&&!function(e){var t=x(e)?c.call(e):"";return t==i||t==o}(e)}function x(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}var L,S=(L=function(e,t,r,n){!function(e,t,r,n){r||(r={});for(var i=-1,o=t.length;++i<o;){var a=t[i],s=n?n(r[a],e[a],a,r,e):void 0;m(r,a,void 0===s?e[a]:s)}}(t,function(e){return E(e)?f(e,!0):g(e)}(t),e,n)},v(function(e,t){var r=-1,n=t.length,i=n>1?t[n-1]:void 0,o=n>2?t[2]:void 0;for(i=L.length>3&&"function"==typeof i?(n--,i):void 0,o&&function(e,t,r){if(!x(r))return!1;var n=typeof t;return!!("number"==n?E(r)&&w(t,r.length):"string"==n&&t in r)&&y(r[t],e)}(t[0],t[1],o)&&(i=n<3?void 0:i,n=1),e=Object(e);++r<n;){var a=t[r];a&&L(e,a,r,i)}return e})),k=v(function(e){return e.push(void 0,p),s(S,void 0,e)});e.exports=k},function(e,t){function r(e,t){var r=[],n=[];return null==t&&(t=function(e,t){return r[0]===t?"[Circular ~]":"[Circular ~."+n.slice(0,r.indexOf(t)).join(".")+"]"}),function(i,o){if(r.length>0){var a=r.indexOf(this);~a?r.splice(a+1):r.push(this),~a?n.splice(a,1/0,i):n.push(i),~r.indexOf(o)&&(o=t.call(this,i,o))}else r.push(o);return null==e?o:e.call(this,i,o)}}(e.exports=function(e,t,n,i){return JSON.stringify(e,r(t,i),n)}).getSerialize=r},function(e,t,r){"use strict";var n=r(7),i=function(e){return function(){var t,r,i=48,o=1,a=i,s=new Array(i),l=0,u=new function(){var e=4022871197;return function(t){if(t){t=t.toString();for(var r=0;r<t.length;r++){var n=.02519603282416938*(e+=t.charCodeAt(r));n-=e=n>>>0,e=(n*=e)>>>0,e+=4294967296*(n-=e)}return 2.3283064365386963e-10*(e>>>0)}e=4022871197}};for(t=0;t<i;t++)s[t]=u(Math.random());var c=function(){++a>=i&&(a=0);var e=1768863*s[a]+2.3283064365386963e-10*o;return s[a]=e-(o=0|e)},d=function(e){return Math.floor(e*(c()+1.1102230246251565e-16*(2097152*c()|0)))};d.string=function(e){var t,r="";for(t=0;t<e;t++)r+=String.fromCharCode(33+d(94));return r};return d.cleanString=function(e){return e=(e=(e=e.replace(/(^\s*)|(\s*$)/gi,"")).replace(/[\x00-\x1F]/gi,"")).replace(/\n /,"\n")},d.hashString=function(e){for(e=d.cleanString(e),u(e),t=0;t<e.length;t++)for(l=e.charCodeAt(t),r=0;r<i;r++)s[r]-=u(l),s[r]<0&&(s[r]+=1)},d.seed=function(e){void 0!==e&&null!==e||(e=Math.random()),"string"!=typeof e&&(e=n(e,function(e,t){return"function"==typeof t?t.toString():t})),d.initState(),d.hashString(e)},d.addEntropy=function(){var e=[];for(t=0;t<arguments.length;t++)e.push(arguments[t]);!function(){var e=Array.prototype.slice.call(arguments);for(t=0;t<e.length;t++)for(r=0;r<i;r++)s[r]-=u(e[t]),s[r]<0&&(s[r]+=1)}(l+++(new Date).getTime()+e.join("")+Math.random())},d.initState=function(){for(u(),t=0;t<i;t++)s[t]=u(" ");o=1,a=i},d.done=function(){u=null},void 0!==e&&d.seed(e),d.range=function(e){return d(e)},d.random=function(){return d(Number.MAX_VALUE-1)/Number.MAX_VALUE},d.floatBetween=function(e,t){return d.random()*(t-e)+e},d.intBetween=function(e,t){return Math.floor(d.random()*(t-e+1))+e},d}()};i.create=function(e){return new i(e)},e.exports=i}]);