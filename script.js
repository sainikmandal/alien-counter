
let countEl = document.getElementById("count-el")
console.log(countEl)

let count = 0
function increment() {
    console.log("clicked")
    count += 1
    countEl.innerText = count
    console.log(count)
}

function save() {
    console.log(count)
}