const clickBox1 = document.querySelector('.click-box1')
const score = document.querySelector('#score-holder').innerText
console.log(score)



clickBox1.addEventListener('click', () => {
    score.text = '100'
})

