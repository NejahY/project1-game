const squares = document.querySelectorAll('.square')
const mole = document.querySelector('.mole')
const timeLeft = document.querySelector('#time-left')
const score  = document.querySelector('#score')

let result = 0
let hitPosition
let currentTime = 30
let timerId = null

function random() {
    squares.forEach(square => {
        square.classList.remove('mole')
    })

    let random = squares[Math.floor(Math.random() * 9)]
    random.classList.add('mole')

    hitPosition = random.id
}

squares.forEach(square => {
    square.addEventListener('mousedown', () => {
        if (square.id == hitPosition) {
            result++
            score.textContent = result
            hitPosition = null
        }
    })
})

function moveMole () {
    timerId = setInterval(random, 1000)
}

moveMole()

function countDown () {
    currentTime--
    timeLeft.textContent = currentTime

    if (currentTime == 0) {
        clearInterval(countDownTimerId)
        clearInterval(timerId)
        alert('Game Over! Your final score is ' + result)
    }

}

let countDownTimerId = setInterval(countDown, 1000)