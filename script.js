import { createVegetable } from './vegetables.js'
import { createLocust } from './evillocust.js'
import { Game } from './game.js'


const startDiv = document.getElementById('start-screen')
const timerDiv = document.getElementById('timer')
const pausedDiv = document.getElementById('pause-screen')
const scoreDiv = document.getElementById('score')

let vegeGameUnits = []

let time = timerDiv.textContent
let isPaused = false

let gameObj

document.addEventListener("click", startGame, { once: true})

const vegeArray = [
    {src: 'images/broccoli.png', point: 1},
    {src: 'images/carrot.png', point: 2},
    {src: 'images/corn.png', point: 1},
    {src: 'images/eggplant.png', point: 4},
    {src: 'images/tomatoe.png', point: 1},
    {src: 'images/yellowpepper.png', point: 1}
]

function startGame() {
    gameObj = new Game(5, 0, 5)
    startDiv.classList.add('hide')
    startTimer()
    startVegeCreation()
    startLocustCreation()
}

function startVegeCreation() {
    const v = setInterval(() => {
        if (!isPaused) {
            let index = Math.floor(Math.random() * vegeArray.length)
            let vege = createVegetable(vegeArray[index].src, vegeArray[index].point)

            vege.onclick = () => {
                vege.src = 'images/money.png'
                gameObj.score += vegeArray[index].point
                scoreDiv.textContent = gameObj.score
            }

            vegeGameUnits.push(vege)
            if (time === 0) clearInterval(v)
            removeItem(vege)
        }
    }, 1000)
}

function startTimer() {
    const s = setInterval(() => {
        if (!isPaused) {
            time -= 1
            timerDiv.textContent = time
            if (time === 0) clearInterval(s)
        }
    }, 1000)
}

function startLocustCreation() {
    const l = setInterval(() => {
        if (!isPaused) {
            let loc = createLocust()
            loc.onclick = () => {
                gameObj.score -= 5
                scoreDiv.textContent = gameObj.score
            }
        }
            
        if (time === 0) clearInterval(l)
    }, 5000)
}

document.addEventListener("keydown", (e) => {
    if (e.key == 'p'){
        isPaused = !isPaused
        isGamePaused(isPaused)
        vegeGameUnits.forEach(item => {
            item.style.animationPlayState = isPaused ? 'paused' : 'running'
        })
    }
})

function isGamePaused(pause) {
    if (pause)
        pausedDiv.classList.remove('hide')
    else
        pausedDiv.classList.add('hide')
}

function removeItem(ele) {
    const s = setInterval(() => {
        let rect = ele.getBoundingClientRect()
        if (rect.y > window.innerHeight){
            ele.remove()
            vegeGameUnits = vegeGameUnits.filter(item => item !== ele)
        }
        if (vegeGameUnits.length == 0) clearInterval(s)
    }, 10)
    
}