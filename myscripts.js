let isAlive = false
let hasBlackJack = false
let cardArray =[]
let count = 0;
let messageEl = document.getElementById("message-el")
let cardsEl = document.getElementById("cards-el")
let sumEl = document.getElementById("sum-el")

function getRandomNumber(){
    let num = Math.floor(Math.random()*13) + 1
    if (num>10){
        return 13
    }
    else if (num==1){
        return 11
    }
    else{
        return num
    }
}

function startgame(){
    let firstnumber = getRandomNumber()
    let secondnumber = getRandomNumber()
    cardArray = [firstnumber,secondnumber]
    count = firstnumber + secondnumber
    isAlive = true
    document.getElementById("startgame-el").onclick = null;
    rendergame()
}

function rendergame(){
    cardsEl.textContent = "Cards: "
    for (let i =0; i<cardArray.length; i++){
        cardsEl.textContent += cardArray[i] + "  "
    }
    sumEl.textContent = "Sum: " + count
    if(count < 21){
        messageEl.textContent = "Do you want to draw another card?"
    }
    else if (count === 21){
        messageEl.textContent = "Congo!!! You've got the BlackJack" 
        hasBlackJack = true
    }
    else {
        messageEl.textContent = "Sorry... You've lost the game!"
        isAlive = false
    }

}

function newcard(){
    if (isAlive == true && hasBlackJack == false){
        let newNum = getRandomNumber()
        count += newNum
        cardArray.push(newNum)
        rendergame()
    }
    else if (isAlive == false && hasBlackJack == false){
        messageEl.textContent = "You've lost, RESET to draw new cards!"
    }
    else if (isAlive == true && hasBlackJack == true){
        messageEl.textContent = "You've won, please RESET to play another game!"
    }


}

