const worldDiv = document.getElementById('world')
const scoreDiv = document.getElementById('score')

let score = 0

export function createVegetable(src, pts) {
    const v = document.createElement('img')
    v.src = src
    v.style.left = Math.random() * (window.innerWidth- 100) + 'px'
    v.style.animationDuration = Math.random() * 3 + 2 + 's'
    v.draggable = false
    v.classList.add('vege')

    v.onclick = () => {
        v.src = 'images/money.png'
        score += pts
        scoreDiv.textContent = score
    }

    worldDiv.append(v)

    setTimeout(() => {
        v.remove()
    }, 6000)
}