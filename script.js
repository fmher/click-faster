const startBtn = document.querySelector('#start')
const resetBtn = document.querySelector('#reset')
const grid = document.querySelector('#grid')
const score = document.querySelector('#score-holder')
const scoreToBeat = document.querySelector('#score-to-beat')
const clickBox1 = document.querySelector('#box1')
const clickBox2 = document.querySelector('#box2')
const clickBox3 = document.querySelector('#box3')
const clickBox4 = document.querySelector('#box4')
const clickBox5 = document.querySelector('#box5')
const clickBox6 = document.querySelector('#box6')
const clickBox7 = document.querySelector('#box7')
const clickBox8 = document.querySelector('#box8')
const clickBox9 = document.querySelector('#box9')
const clickBox10 = document.querySelector('#box10')
const clickBox11 = document.querySelector('#box11')
const clickBox12 = document.querySelector('#box12')
const clickBox13 = document.querySelector('#box13')
const clickBox14 = document.querySelector('#box14')
const pTag = document.querySelector('#p')
const target = document.querySelector('#target')
const countDown = document.querySelector('#countDown')
const instructions = document.querySelector('#instructions');
// console.log(instructions)
//An array of all the divs, red boxes
const clickBoxArr = [clickBox1, clickBox2, clickBox3, clickBox4, clickBox5, clickBox6, clickBox7, clickBox8, clickBox9, clickBox10, clickBox11, clickBox12, clickBox13, clickBox14];

//click instruction btn then explains the game
instructions.addEventListener('click', () => {
    const popUp = document.createElement('p')
    popUp.setAttribute('id', 'pID')
    const youWin = document.createTextNode('To win the game your SCORE must be higher than SCORE TO BEAT! When you click the start button, red targets will spawn in the colored area. Every time you successfully clicked a red target your score will go up by 10. Try to get a higher score within a set time! The time is 30 seconds! If you lose or want to restart, click on the reset button. To start the game click on START or RESET. Good luck!')
    popUp.appendChild(youWin)
    pTag.appendChild(popUp)
    startBtnListener = null
})





// Allows game to start
const startBtnListener = startBtn.addEventListener('click', () => {
    score.innerText = '0'
    //BOTTOM TWO ALLOWS GAME TO RESTART ONLY IF WIN OR LOST. NOT DURING MID GAME
    pTag.innerText = null
    countDown.innerText = 30
    
    // creates random number that you will have to beat!
    let randomNum = Math.round((Math.random() * 10000) * 0.001) * 10 
    scoreToBeat.innerText = randomNum
    
    // creates target every 0.8 secs
    let timer = setInterval(() => {
        targetMaker()
        // if score is = or greater stops timer and you losing
        if(score.innerText > scoreToBeat.innerText) {
            clearInterval(timer)
            clearInterval(losePopUp)
        } 
        else {
            // stops timer from running and losing pop from showing after clicked
            resetBtn.addEventListener('click', () => {
                clearTimeout(timer)
                clearTimeout(losePopUp)
            })
        }
    }, 800)


    //ends game around 30sec or what number is +countDown.innerText
    setTimeout(() => clearInterval(timer), (+countDown.innerText * 990))

    //timer ends and creates a pop up you lost!
    let losePopUp = setTimeout(() => {
        youLost()
    }, (+countDown.innerText * 1010))

    // allows timer to decrement WHEN BUTTON PRESSED
    timerCountDown(+countDown.innerText)

})






// create a pop up, you lose, when dont beat SCORE-TO-BEAT within time
const youLost = () => {
    if (score.innerText <= scoreToBeat.innerText) {

        const popUp = document.createElement('p')
        const youWin = document.createTextNode('You Lost! Try again!')
        popUp.appendChild(youWin)
        pTag.appendChild(popUp)

    }

}


//works, DECREMENTS TIMER
const timerCountDown = (num) => {
    let decrement = setInterval(() => {
        num--
        countDown.innerText = num
        //creates a bar the decrements with the time
        countDown.style.width = num + 'rem';
        // if timer hits 0 then stops decrement
        if (num === 0) clearInterval(decrement)
        // if score is higher than score-to-beat stops timer
        else if (score.innerText > scoreToBeat.innerText) {
            clearInterval(decrement)
        }
        // resets timer and without it, it breaks game
        resetBtn.onclick = () => {
            clearInterval(decrement)
            countDown.innerText = 30
        }
    }, 1000)
}


//changes score and increments it
// allows game to function
const clickBox = () => {
    //ADDING + IN FRONT ON STRING CONVERTS IT TO NUMBER, IF IS NUMBER
    score.innerText = scoreUp(+score.innerText)
    scoreUp(+score.innerText)

    if (+score.innerText - 20 >= +scoreToBeat.innerText) {
        // this allows asynchronous to work with each other. Due to setTimeout, setInterval, clearSetTimeout, clearInterval always functioning with a slight lag
        setTimeout( () => {
            const popUp = document.createElement('p')
            popUp.setAttribute('id', 'overachiever')
            const youWin = document.createTextNode('Wow, you got extra points you over achiever. Congrats winner!')
            popUp.appendChild(youWin)
            pTag.appendChild(popUp)
        }, 1)
        
        
    } 
    // else 
    if (+score.innerText > +scoreToBeat.innerText) {
        setTimeout( () => {
            const popUp = document.createElement('p')
            const youWin = document.createTextNode('You win!')
            popUp.appendChild(youWin)
            pTag.appendChild(popUp)
        }, 1000)
    }
}


//CREATES TARGETS
const targetMaker = () => {
    const randomIndex = Math.round(Math.random() * clickBoxArr.length)
    console.log(randomIndex)
    const randomDiv = clickBoxArr[randomIndex]
    const newDiv = document.createElement('div')
    //creating new div to make targets at random divs
    newDiv.setAttribute('id', 'target')
    randomDiv.appendChild(newDiv)

    // console.log('randomdiv = ',randomDiv)
    // console.log('   newDiv =', newDiv)

    newDiv.addEventListener('click', clickBox)
//  REMOVES TARGET WHEN CLICKED ON
    newDiv.onclick = () => {
        randomDiv.removeChild(newDiv)
    }

// REMOVES TARGETS WITHIN SET TIME!------------------------------
    let targetRemover = setInterval(() => {
        clearInterval(targetRemover)
        if (newDiv != null) {
            randomDiv.removeChild(newDiv)
        } 
    }, 700)
}




//SIMPLE FUNC THAT INCREMENTS SCORE BY 10
const scoreUp = (num) => {
    num += 10
    return num
}

// RESETS 
resetBtn.addEventListener('click', () => {
    score.innerText = 'score'
    scoreToBeat.innerText = 'score to beat!'
    pTag.innerText = null
    countDown.innerText = 30
    countDown.style.width = '30rem'

})