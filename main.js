var sum = 0
var sumNumber = document.getElementById('number')
var responseTime = 200

const op1 = document.getElementById('op1')
const op2 = document.getElementById('op2')
const timer = document.getElementById('timer')
const logs = document.getElementById('logs')
const setting = document.getElementById('settings')
const overlay = document.getElementById('overlay')
const devName = document.getElementById('dev')

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
        logs.innerHTML = `<div id="logs">Bot add 2!</div>`
        logs.classList.remove('visible')
        logs.classList.add('fade-out')
        sumNumber.innerHTML = `${sum}`
        displayOn()
        if (sum >= 100) {
            youLost()
            
        }
        break
    case 1:
        var randomAdd = Math.ceil(Math.random()*2)
        sum = sum + randomAdd
        logs.innerHTML = `<div id="logs">Bot add ${randomAdd}!</div>`
        logs.classList.remove('visible')
        logs.classList.add('fade-out')
        sumNumber.innerHTML = `${sum}`
        displayOn()
        if (sum >= 100) {
            youLost()
            
        }
        break
    case 0:
        sum = sum + 1
        logs.innerHTML = `<div id="logs">Bot add 1!</div>`
        logs.classList.remove('visible')
        logs.classList.add('fade-out')
        sumNumber.innerHTML = `${sum}`
        displayOn()
        if (sum >= 100) {
            youLost()
            
        }
        break}}

// Add one 
function addOne() {
    sum++
    var remainder = sum % 3
    sumNumber.innerHTML = `${sum}`
    logs.classList.add('visible')
    logs.classList.remove('fade-out')
    if (sum == 100) {
        youWon()
        return
    }
    displayOff()
    setTimeout(function() {algorithm(remainder)} ,responseTime)
}

// Add two
function addTwo(){
    sum = sum + 2
    var remainder = sum % 3
    sumNumber.innerHTML = `${sum}`
    logs.classList.add('visible')
    logs.classList.remove('fade-out')
    if (sum == 100) {
        youWon()
        return
   }
    displayOff()
    setTimeout(function() {algorithm(remainder)} ,responseTime)
}

// Restart the game
function restart() {
    displayOn()
    sum = 0
    sumNumber.innerHTML = `${sum}`
    console.log('restart!')
    eListener()
}
function settings() {
    overlay.style.display = 'block'
    console.log('overlay on')
}
function closeSetting() {
    overlay.style.display = 'none'
    console.log('overlay off')
}


var firstExecution = 0
var interval = responseTime + 100
function eListener() {
document.addEventListener("keydown", function event(e) {
    e.key.toString()
    if (!e.repeat)
    
    var date = new Date();
    var milliseconds = date.getTime(); 
    if((milliseconds - firstExecution) > interval){
        firstExecution = milliseconds;
    if (e.key.toString() == 1){
        addOne()
        
    }
    if (e.key.toString() == 2){
        addTwo()
        
    }}
    if (sum >= 100) {
        console.log('listener removed')
        this.removeEventListener("keydown", arguments.callee)
    }
})}
eListener()

function botResponse() {
    var inputValue = document.getElementById('input').value
    responseTime = parseInt(inputValue)
    console.log(inputValue)
}
function dev() {
    devName.innerHTML = `<div id="dev">
    <br>
    Discord: <br>
    Script and algorithm - nani desuka?#5423 
    <br> 
    <br>
    Background and UI - DressUnicycle60#5438
    </div>`

}
console.log(document.getElementsByClassName('input').value)
// function onCoolDown() {
//     console.log('you on cool down')
//     coolDown = true
//     setTimedOut(function() {coolDown = false}, 200)
// }

document.getElementById('number').value = sum;
