var sum = 0

const sumText = document.getElementsByClassName('sumText')

var sumNumber = document.getElementById('number')

const op1 = document.getElementById('op1')
const op2 = document.getElementById('op2')

function displayOn() {
    op1.disabled = false
    op2.disabled = false
    op1.classList.remove('disabled')
    op2.classList.remove('disabled')
}
function displayOff() {
    op1.disabled = true
    op2.disabled = true
    op1.classList.add('disabled')
    op2.classList.add('disabled')
}
function youLost() {
    displayOff()
    sumNumber.innerHTML = '<h1 id="number">You lost!</h1>'
}
function youWon() {
    displayOff()
    sumNumber.innerHTML = '<h1 id="number">You won!</h1>'
}

// Algorithm for the bot
function algorithm(remainder) {switch (remainder) {
    case 2:
        sum = sum + 2
        console.log(`bot add 2 and sum = ${sum}`)
        sumNumber.innerHTML = `${sum}`
        displayOn()
        if (sum == 100) {
            youLost()
        }
        break
    case 1:
        var randomAdd = Math.ceil(Math.random()*2)
        sum = sum + randomAdd
        console.log(`bot add ${randomAdd} and sum = ${sum}`)
        sumNumber.innerHTML = `${sum}`
        displayOn()
        if (sum == 100) {
            youLost()
        }
        break
    case 0:
        sum = sum + 1
        console.log(`bot add 1 and sum = ${sum}`)
        sumNumber.innerHTML = `${sum}`
        displayOn()
        if (sum == 100) {
            youLost()
        }
        break}}

// Add one 
function addOne() {
    sum++
    var remainder = sum % 3
    sumNumber.innerHTML = `${sum}`
    if (sum == 100) {
        youWon()
        return
    }
    displayOff()
    setTimeout(function() {algorithm(remainder)} ,1000)
}

// Add two
function addTwo(){
    sum = sum + 2
    var remainder = sum % 3
    sumNumber.innerHTML = `${sum}`
    if (sum >= 100) {
        youWon()
        return
   }
    displayOff()
    setTimeout(function() {algorithm(remainder)} ,1000)
}

// Restart the game
function restart() {
    displayOn()
    sum = 0
    sumNumber.innerHTML = `
    ${sum}
    `
    console.log('restart!')
}



document.getElementById('number').value = sum;
