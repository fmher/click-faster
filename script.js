const startBtn = document.querySelector('#start')
const resetBtn = document.querySelector('#reset')
const grid = document.querySelector('#grid')
const grid2 = document.querySelector('#grid')
const score = document.querySelector('#score-holder')
const scoreToBeat = document.querySelector('#score-to-beat')
const clickBox1 = document.querySelector('#box1')
const clickbox2 = document.querySelector('#box2')
const clickbox3 = document.querySelector('#box3')
const clickbox4 = document.querySelector('#box4')
const clickbox5 = document.querySelector('#box5')
const clickbox6 = document.querySelector('#box6')
const pTag = document.querySelector('#p')
// checks to see if I targeted the right element correctly
// console.log( popUp)


// changes score and score to beat to a number
// eventually will add a timer when start button is pressed
startBtn.addEventListener('click', () => {
    score.innerText = 0
    
    // creates random number that you will have to beat!
    let randomNum = Math.round((Math.random() * 10000) * 0.001) * 10
    console.log(randomNum)
    scoreToBeat.innerText = randomNum
    console.log(scoreToBeat)
    console.log()
    render()
    
})

// allows game to function
const render = () => {

    clickBox1.addEventListener('click', () => {
       score.innerText = scoreUp(+score.innerText)
      
       // win condition works, but if pressed to fast you break game, idk
       // goes up by 10!!
        scoreUp(+score.innerText)
        
        // creates a pop telling you that you won!
        if (score.innerText > scoreToBeat.innerText) {
            const popUp = document.createElement('p')
            const youWin = document.createTextNode('you win!')
            popUp.appendChild(youWin)
            pTag.appendChild(popUp)
        } 
    
    })
    
    clickbox2.addEventListener('click', () => {
        score.innerText = scoreUp(+score.innerText)
        scoreUp(+score.innerText)
    
        if (score.innerText > scoreToBeat.innerText) {
            const popUp = document.createElement('p')
            const youWin = document.createTextNode('you win!')
            popUp.appendChild(youWin)
            pTag.appendChild(popUp)

        } 
    })
    
    clickbox3.addEventListener('click', () => {
        score.innerText = scoreUp(+score.innerText)
        scoreUp(+score.innerText)
    
        if (score.innerText > scoreToBeat.innerText) {
            const popUp = document.createElement('p')
            const youWin = document.createTextNode('you win!')
            popUp.appendChild(youWin)
            pTag.appendChild(popUp)
        } 
    })
    
    clickbox4.addEventListener('click', () => {
        score.innerText = scoreUp(+score.innerText)
        scoreUp(+score.innerText)
    
        if (score.innerText > scoreToBeat.innerText) {
            const popUp = document.createElement('p')
            const youWin = document.createTextNode('you win!')
            popUp.appendChild(youWin)
            pTag.appendChild(popUp)
        } 
    })
    
    clickbox5.addEventListener('click', () => {
        score.innerText = scoreUp(+score.innerText)
        scoreUp(+score.innerText)
    
        if (score.innerText > scoreToBeat.innerText) {
            const popUp = document.createElement('p')
            const youWin = document.createTextNode('you win!')
            popUp.appendChild(youWin)
            pTag.appendChild(popUp)
        } 
    })
    
    clickbox6.addEventListener('click', () => {
        score.innerText = scoreUp(+score.innerText)
        scoreUp(+score.innerText)
    
        if (score.innerText > scoreToBeat.innerText) {
            const popUp = document.createElement('p')
            const youWin = document.createTextNode('you win!')
            popUp.appendChild(youWin)
            pTag.appendChild(popUp)
        } 
    
    })
}


//adds the score up, increments
const scoreUp = (num) => {
    num= num + 10
    return num
}

//reset button!!!!!!!!!!
//somehow reset button allow you to start at 0+10, everytime tapped +10
resetBtn.addEventListener('click', () => {
    console.log('reset button pressed!')

    //resets score and score to beat back to normal
    // console.log('holding score', score.innerText)
    score.innerText = 'score'
    scoreToBeat.innerText = 'score to beat!'
    
    pTag.innerText = null
    
})



// score.innerText = '10'
// console.log(scoreUp(10))
// // by adding + infront, converts string into a number
// console.log(scoreUp(+score.innerText))
// // reason why it doesnt work is because your adding a number to a string
// console.log(scoreUp(score.innerText))



