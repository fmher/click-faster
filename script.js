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
const countDown = +document.querySelector('#countDown').innerText
// checks to see if I targeted the right element correctly
// console.log(countDown)


const clickBoxArr = [clickBox1, clickBox2, clickBox3, clickBox4, 
                    clickBox5, clickBox6];

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
        
        if(score.innerText > scoreToBeat.innerText) {
            clearInterval(timer)
            // setTimeout(() => clearInterval(timer), 1)
        }
        
    }, 1000)

    //ends game around 30sec or what number is by timer
    setTimeout(() => clearInterval(timer), (countDown * 999))


})



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
        // target.remove()
    }
}



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
// removes all targets at 30sec or countDown time
    let targetRemover = setInterval(() => {

        //WORKS NOW BUT SHOWS UP ERROR WHEN HAS NOTHING TO REMOVE
        //DUE TO, USER CLICKING TARGET TO GET POINTS
        //SHOULD ASK IF OKAY, A ERROR BECAUSE IT WORKS
        clearInterval(targetRemover)
        // if (setTimeout(() => clearInterval(timer), (countDown * 900))) {
            //     clearInterval(targetRemover)
            // }
            if (newDiv != null) {
                randomDiv.removeChild(newDiv)
        } else clearInterval(targetRemover)

    }, 500)

}





const scoreUp = (num) => {
    num += 10
    return num
}
//NOT USED YET, suppose to decrement
const timerCountDown = (num) => {
    console.log(num)
    num--
    return num
    
}

// clickBox1.addEventListener('click', clickBox)
// target.addEventListener('click', clickBox)
// clickBox2.addEventListener('click', clickBox)
// clickBox3.addEventListener('click', clickBox)
// clickBox4.addEventListener('click', clickBox)
// clickBox5.addEventListener('click', clickBox)
// clickBox6.addEventListener('click', clickBox)




// NEED TO FIGURE OUT HOW TO REMOVE TARGETS FROM DIF SCOPE WHEN CLICK RESET
resetBtn.addEventListener('click', () => {
    console.log('reset button pressed!')

    //resets score and score to beat back to normal

    score.innerText = 'score'
    scoreToBeat.innerText = 'score to beat!'
    pTag.innerText = null

    // clearInterval(targetMaker())
    

})





