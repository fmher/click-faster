const clickBox1 = document.querySelector('.click-box1')
const score = document.querySelector('#score-holder')
const btn = document.querySelector('.click-box1')

// console.log(score)
// console.log(btn)


btn.addEventListener('click', () => {
    let scoreUp = score.innerText = 10
    console.log('been clicked!')
    btn.innerText = 'got clicked!'
    scoreUp += 100

})
