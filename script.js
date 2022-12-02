const startBtn = document.querySelector('#start')
const grid = document.querySelector('#grid')
const score = document.querySelector('#score-holder')
const scoreToBeat = document.querySelector('#score-to-beat')
const clickBox1 = document.querySelector('#box1')
const clickbox2 = document.querySelector('#box2')
const clickbox3 = document.querySelector('#box3')
const clickbox4 = document.querySelector('#box4')
const clickbox5 = document.querySelector('#box5')
const clickbox6 = document.querySelector('#box6')

// console.log(winLose)


// changes score and score to beat to a number
// eventually will add a timer when start button is pressed
startBtn.addEventListener('click', () => {
    score.innerText = 0
    
    // creates random number that you will have to beat!
    let randomNum = Math.round((Math.random() * 10000) * 0.001) * 10
    console.log(randomNum)
    scoreToBeat.innerText = randomNum

    clickBox1.addEventListener('click', () => {
       score.innerText = scoreUp(+score.innerText)
        // console.log('new score', score)
        // console.log('score =', score)
        // console.log('been clicked!')
        
        
        scoreUp(+score.innerText)
        
        // win condition works, but if pressed to fast you break game, idk
        // doesnt work idk, ----> NOW DOES WORK = IDK
        // suppose increment score up by 10 each time btn is clicked
        // start button counts score incrementing up
        //EX score to beat 10, click start 2 times then target after = win
        if (score.innerText > scoreToBeat.innerText) {
            grid.innerText = 'you won!'
        } 
    
    })
    
    clickbox2.addEventListener('click', () => {
        score.innerText = scoreUp(+score.innerText)
        scoreUp(+score.innerText)

        if (score.innerText > scoreToBeat.innerText) {
            grid.innerText = 'you won!'
        } 
    })
    
    clickbox3.addEventListener('click', () => {
        score.innerText = scoreUp(+score.innerText)
        scoreUp(+score.innerText)

        if (score.innerText > scoreToBeat.innerText) {
            grid.innerText = 'you won!'
        } 
    })
    
    clickbox4.addEventListener('click', () => {
        score.innerText = scoreUp(+score.innerText)
        scoreUp(+score.innerText)

        if (score.innerText > scoreToBeat.innerText) {
            grid.innerText = 'you won!'
        } 
    })
    
    clickbox5.addEventListener('click', () => {
        score.innerText = scoreUp(+score.innerText)
        scoreUp(+score.innerText)

        if (score.innerText > scoreToBeat.innerText) {
            grid.innerText = 'you won!'
        } 
    })
    
    clickbox6.addEventListener('click', () => {
        score.innerText = scoreUp(+score.innerText)
        scoreUp(+score.innerText)

        if (score.innerText > scoreToBeat.innerText) {
            grid.innerText = 'you won!'
        } 

    })
    
    
})


//adds the score up, increments
const scoreUp = (num) => {
    num+=10
    return num
}

//reset button!!!!!!!!!!




// score.innerText = '10'
// console.log(scoreUp(10))
// // by adding + infront, converts string into a number
// console.log(scoreUp(+score.innerText))
// // reason why it doesnt work is because your adding a number to a string
// console.log(scoreUp(score.innerText))



