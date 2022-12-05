const startBtn = document.querySelector('#start')
const resetBtn = document.querySelector('#reset')
const grid = document.querySelector('#grid')
const grid2 = document.querySelector('#grid')
const score = document.querySelector('#score-holder')
const scoreToBeat = document.querySelector('#score-to-beat')
const clickBox1 = document.querySelector('#box1')
const clickBox2 = document.querySelector('#box2')
const clickBox3 = document.querySelector('#box3')
const clickBox4 = document.querySelector('#box4')
const clickBox5 = document.querySelector('#box5')
const clickBox6 = document.querySelector('#box6')
const pTag = document.querySelector('#p')
const target = document.querySelector('#target')
const countDown = document.querySelector('#countDown')
// checks to see if I targeted the right element correctly
// console.log(countDown)


const clickBoxArr = [clickBox1, clickBox2, clickBox3, clickBox4, 
                    clickBox5, clickBox6];


//SOMEHOW THE START BUTTON IS KEEPING HOLD ON INCREMENT AND IS WHY IM
//ABLE TO START AT A HIGHER NUM THAN 0 WHEN I RESET

// changes score and score to beat to a number
// eventually will add a timer when start button is pressed
const startBtnListener = startBtn.addEventListener('click', () => {
    score.innerText = '0'
    
    // creates random number that you will have to beat!
    let randomNum = Math.round((Math.random() * 10000) * 0.001) * 10
    scoreToBeat.innerText = randomNum
    
    // creates target every 1 secs
    let timer = setInterval(() => {
        console.log('this is a 1sec')
        targetMaker()
        
    }, 1000)

    let countingDown = setInterval(() => {
        console.log('timer countdown??')
        let num = +countDown.innerText
        num--
    }, 1000)

})


const targetMaker = () => {
    const randomIndex = Math.round(Math.random() * 5)
    const randomDiv = clickBoxArr[randomIndex]
    const newDiv = document.createElement('div')
    //creating new div to make targets at random divs
    newDiv.setAttribute('id', 'target')
    randomDiv.appendChild(newDiv)
    //WORKS, CLICKS BOX TO INCREASE SCORE
    // randomDiv.addEventListener('click', clickBox)
    //WORKS, CLICKS ONLY TARGET TO INCREASE SCORE
    newDiv.addEventListener('click', clickBox)

    newDiv.onclick = () => {
        randomDiv.removeChild(newDiv)
    }
}

//so idea does work, dont need loop
// let arr = [1, 'word',3,'2wrod',5,'lels']
// let randomIndex = Math.round(Math.random() * 5)
// console.log('the arr numbers!!!',arr[randomIndex])

//changes score and increments it
// allows game to function
const clickBox = () => {
    //ADDING + IN FRONT ON STRING CONVERTS IT TO NUMBER, IF IS NUMBER
    score.innerText = scoreUp(+score.innerText)
    scoreUp(+score.innerText)

    if (+score.innerText > +scoreToBeat.innerText) {
        const popUp = document.createElement('p')
        const youWin = document.createTextNode('You win!')
        popUp.appendChild(youWin)
        pTag.appendChild(popUp)
        //gets removed, ptag was not on top, target could be seen and touched
        target.remove()
    }
}

const scoreUp = (num) => {
    num += 10
    return num
}

// clickBox1.addEventListener('click', clickBox)
// target.addEventListener('click', clickBox)
// clickBox2.addEventListener('click', clickBox)
    
// clickBox3.addEventListener('click', clickBox)
    
// clickBox4.addEventListener('click', clickBox)
    
// clickBox5.addEventListener('click', clickBox)
    
// clickBox6.addEventListener('click', clickBox)



//adds the score up, increments


resetBtn.addEventListener('click', () => {
    console.log('reset button pressed!')

    //resets score and score to beat back to normal
    // console.log('holding score', score.innerText)
    score.innerText = 'score'
    scoreToBeat.innerText = 'score to beat!'
    pTag.innerText = null

    //does not work
    // clearInterval(timer, 0)
    // target = null
})





