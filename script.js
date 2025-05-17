
let countEl = document.getElementById("count-el")
console.log(countEl)
let saveEl = document.getElementById("save-el")
console.log(saveEl)

let count = 0
function increment() {
    console.log("clicked")
    count += 1
    countEl.innerText = count
    console.log(count)
}

function save() {
    saveString = count + " - "
    saveEl.textContent += saveString
    console.log(count)
}