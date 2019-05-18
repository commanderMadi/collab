const logos = ['Logo A', 'Logo B', 'Logo C', 'Logo D', 'Logo E', 'Logo F', 'Logo G', 'Logo H'];

const spaces = document.querySelectorAll('.logo-container span');

const shuffled = shuffle(logos);

for (let i = 0; i < spaces.length; i++) {
        spaces[i].textContent = shuffled[i];
        spaces[i].addEventListener('animationstart', function() {
            spaces[i].classList.add('fadeOutUp')
            spaces[i].addEventListener('animationend', function() {
                if (i >= spaces.length - 1) {
                    return;
                }
                else {
                    console.log(i, spaces.length)
                    spaces[i+1].classList.add('fadeOutUp');
                    if (spaces[i].textContent === shuffled[i]) {
                        console.log('ran')
                        spaces[i].classList.remove('fadeOutUp')
                        spaces[i].textContent = shuffled[i+1];
                        // spaces[i+1].classList.remove('fadeOutUp')
                    }
                }
            })
        })

}

function loadAnother(arr, currentElement) {
    for (let j = 0; j < arr.length; j++) {
        console.log(currentElement.textContent)
        if (currentElement.textContent != arr[j]) {
            console.log('ran')
            currentElement.textContent = arr[j];
        }
    }
}

function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    while (0 !== currentIndex) {
  
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  }
