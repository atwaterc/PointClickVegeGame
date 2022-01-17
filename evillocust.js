const worldDiv = document.getElementById('world')
const scoreDiv = document.getElementById('score')

let score = scoreDiv.textContent
export function createLocust() {
    const loc = document.createElement('img')
    loc.src = 'images/evillocust.png'
    loc.style.top = Math.random() * (window.innerHeight) + 'px'
    //loc.style.animationDuration = Math.random() * 3 + 2 + 's'
    loc.draggable = false
    loc.classList.add('locust')

    worldDiv.append(loc)

    loc.onclick = () => {
        score -= 1
        scoreDiv.textContent = score
    }

    return loc
}