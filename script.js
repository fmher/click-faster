const clickBox1 = document.querySelector('.click-box1')
let score = document.querySelector('#score-holder')
const scoreToBeat = document.querySelector('#score-to-beat')
const targetBtn = document.querySelector('.click-box1')
const startBtn = document.querySelector('#start')

// console.log(score)
// console.log(btn)

startBtn.addEventListener('click', () => {
    score.innerText = 0
    scoreToBeat.innerText = 9999

})


targetBtn.addEventListener('click', () => {
    // score = score.innerText = 0
    console.log('new score', score)
    // console.log('score =', score)
    // console.log('been clicked!')
    targetBtn.innerText = 'got clicked!'
    
    // doesnt work idk
    // suppose increment score up by 10 each time btn is clicked
    score = scoreUp(0)

})


const scoreUp = (num) => {
    num+=10
    return num
}
// console.log(scoreUp(10))
// console.log(scoreUp(score))



