const ruleBtn = document.getElementById('rules-btn');
const closeBtn = document.getElementById('close-btn');


//Rules section open close-------------
ruleBtn.addEventListener('click', ()=>rules.classList.add('show'));
closeBtn.addEventListener('click', ()=>rules.classList.remove('show'));

const cardArray = [
    {
        name: 'fries',
        img: 'images/fries.png'
      },
      {
        name: 'cheeseburger',
        img: 'images/cheeseburger.png'
      },
      {
        name: 'ice-cream',
        img: 'images/ice-cream.png'
      },
      {
        name: 'pizza',
        img: 'images/pizza.png'
      },
      {
        name: 'milkshake',
        img: 'images/milkshake.png'
      },
      {
        name: 'hotdog',
        img: 'images/hotdog.png'
      },
      {
        name: 'fries',
        img: 'images/fries.png'
      },
      {
        name: 'cheeseburger',
        img: 'images/cheeseburger.png'
      },
      {
        name: 'ice-cream',
        img: 'images/ice-cream.png'
      },
      {
        name: 'pizza',
        img: 'images/pizza.png'
      },
      {
        name: 'milkshake',
        img: 'images/milkshake.png'
      },
      {
        name: 'hotdog',
        img: 'images/hotdog.png'
      },
      {
        name: 'milkshake',
        img: 'images/milkshake.png'
      },
      {
        name: 'hotdog',
        img: 'images/hotdog.png'
      },
      {
        name: 'milkshake',
        img: 'images/milkshake.png'
      },
      {
        name: 'hotdog',
        img: 'images/hotdog.png'
      }
]
console.log(cardArray)
cardArray.sort(() => 0.5 - Math.random());

const grid = document.querySelector('.grid')
const resultDisplay = document.querySelector('.result')
cardsChosen=[];
cardsChosenId=[];
cardsWon = [];


//create board--------------
function createBoard(){
    for(let i=0;i<cardArray.length;i++){
        let card = document.createElement('img');
        card.setAttribute('src', 'images/blank.png');
        card.setAttribute('data-id', i);
        card.addEventListener('click', flipTheCard);
    grid.appendChild(card);
         
    }
}

//check for match----------------
function checkForMatch(){
    let cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenId[0]
    const optionTwoId = cardsChosenId[1]

    if(cardsChosen[0] === cardsChosen[1]){
        alert('you found match')
        cards[optionOneId].setAttribute('src', 'images/white.png')
        cards[optionTwoId].setAttribute('src', 'images/white.png')
        cards[optionOneId].removeEventListener('click', flipTheCard)
        cards[optionTwoId].removeEventListener('click', flipTheCard)
        cardsWon.push(cardsChosen)
    }
      else{
          cards[optionOneId].setAttribute('src', 'images/blank.png')
          cards[optionTwoId].setAttribute('src', 'images/blank.png')
       alert('sorry try again')
    }
    cardsChosen = []
    cardsChosenId = []
    resultDisplay.textContent = cardsWon.length;
    if(cardsWon.length===cardArray/2){
        resultDisplay.textContent = 'Congratulations ! you found all of them'
    }

}
//flip your cards--------------------
function flipTheCard(){
    let cardId = this.getAttribute('data-id');
    cardsChosen.push(cardArray[cardId].name);
    cardsChosenId.push(cardId);
    this.setAttribute('src', cardArray[cardId].img);
    if(cardsChosen.length === 2){
        setTimeout(checkForMatch, 500)
    }
}
createBoard() 