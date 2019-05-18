//Fisher yates algorithm
function shuffle(array) {
    let currentIndex = array.length, temporaryValue, randomIndex;
  
    while (0 !== currentIndex) {
  
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  }

class Logo {
    constructor(name) {
        this.name = name;
    }
    startAnimate(ele) {
        ele.classList.add('fadeOutUp');
    }
    endAnimate(ele) {
        ele.classList.remove('fadeOutUp');
    }
}

const logoA = new Logo('Logo A');
const logoB = new Logo('Logo B');
const logoC = new Logo('Logo C');
const logoD = new Logo('Logo D');
const logoE = new Logo('Logo E');
const logoF = new Logo('Logo F');
const logoG = new Logo('Logo G');
const logoH = new Logo('Logo H');

const arr = [logoA,logoB,logoC,logoD,logoE,logoF,logoG,logoH];


const spaces = document.querySelectorAll('.logo-container span');

const shuffledLogos = shuffle(arr);
const shuffledSpaces = shuffle([...spaces])

function loadStart() {
    let arr = [];
    for (let i = 0; i < shuffledSpaces.length; i++) {
        let logo = shuffledLogos[i];
        shuffledSpaces[i].textContent = logo.name;
        arr.push(shuffledSpaces[i]);
    }
    return arr;
}

const currentLogos = loadStart();

const shuffledCurrentLogos = shuffle(currentLogos);

function createRandomNumber() {
    let randomNumber = Math.floor(shuffledCurrentLogos.length * Math.random());
    return randomNumber;
}

(function pickRandomElement() {
    let randomNumber = createRandomNumber();
    let currentLogo = shuffledCurrentLogos[randomNumber];
    if (!currentLogo.classList.contains('fadeOutUp')) {
        currentLogo.classList.add('fadeOutUp');
        currentLogo.addEventListener('animationend', function() {
            this.textContent = shuffledLogos[randomNumber].name;
            this.classList.remove('fadeOutUp');
            this.classList.add('fadeInDown');

        })

    }
})();
