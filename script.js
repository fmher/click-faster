const startBtn = document.querySelector('#start')
let score = document.querySelector('#score-holder')
const scoreToBeat = document.querySelector('#score-to-beat')
const clickBox1 = document.querySelector('#box1')
const clickbox2 = document.querySelector('#box2')
const clickbox3 = document.querySelector('#box3')
const clickbox4 = document.querySelector('#box4')
const clickbox5 = document.querySelector('#box5')
const clickbox6 = document.querySelector('#box6')

// console.log(score)
// console.log(btn)


// changes score and score to beat to a number
// eventually will add a timer when start button is pressed
startBtn.addEventListener('click', () => {
    score.innerText = 0
    scoreToBeat.innerText = 9999

    clickBox1.addEventListener('click', () => {
       score.innerText = scoreUp(+score.innerText)
        // console.log('new score', score)
        // console.log('score =', score)
        // console.log('been clicked!')
        
        
        // doesnt work idk
        // suppose increment score up by 10 each time btn is clicked
        scoreUp(+score.innerText)
    
    })

    clickbox2.addEventListener('click', () => {
        score.innerText = scoreUp(+score.innerText)
        scoreUp(+score.innerText)
    })

    clickbox3.addEventListener('click', () => {
        score.innerText = scoreUp(+score.innerText)
        scoreUp(+score.innerText)
    })

    clickbox4.addEventListener('click', () => {
        score.innerText = scoreUp(+score.innerText)
        scoreUp(+score.innerText)
    })

    clickbox5.addEventListener('click', () => {
        score.innerText = scoreUp(+score.innerText)
        scoreUp(+score.innerText)
    })

    clickbox6.addEventListener('click', () => {
        score.innerText = scoreUp(+score.innerText)
        scoreUp(+score.innerText)
    })
})

//adds the score up, increments
const scoreUp = (num) => {
    num+=10
    return num
}






// score.innerText = '10'
// console.log(scoreUp(10))
// // by adding + infront, converts string into a number
// console.log(scoreUp(+score.innerText))
// // reason why it doesnt work is because your adding a number to a string
// console.log(scoreUp(score.innerText))



