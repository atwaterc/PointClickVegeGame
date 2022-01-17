const worldDiv = document.getElementById('world')

export function createVegetable(src, pts) {
    const v = document.createElement('img')
    v.src = src
    v.style.left = Math.random() * (window.innerWidth- 100) + 'px'
    v.style.animationDuration = Math.random() * 3 + 2 + 's'
    v.draggable = false
    v.classList.add('vege')

    worldDiv.append(v)
    return v
}