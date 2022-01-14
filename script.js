import { createVegetable } from './vegetables.js'
import { createLocust } from './evillocust.js'


const startDiv = document.getElementById('start-screen')
const timerDiv = document.getElementById('timer')

let time = timerDiv.textContent

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
    startDiv.classList.add('hide')
    startTimer()
    startVegeCreation()
    startLocustCreation()
}

function startVegeCreation() {
    const v = setInterval(() => {
        let index = Math.floor(Math.random() * vegeArray.length)
        createVegetable(vegeArray[index].src, vegeArray[index].point)
        if (time === 0) clearInterval(v)
    }, 400)
}

function startTimer() {
    const s = setInterval(() => {
        time -= 1
        timerDiv.textContent = time
        if (time === 0) clearInterval(s)
    }, 1000)
}

function startLocustCreation() {
    const l = setInterval(() => {
        createLocust()
        if (time === 0) clearInterval(l)
    }, 5000)
}