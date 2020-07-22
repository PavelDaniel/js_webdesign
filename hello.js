
var message

message = "Bine ati venit pe site-ul meu!"

// setTimeout(twoPopUp, 5000)

hour = new Date().getHours()
hour = 13

birthYear = 1986

if (hour < 12) {
    alert('Buna dimineata!')
} else if(hour < 18) {
    alert('Buna ziua!')
} else {
    alert('Buna seara!')
}

function twoPopUp() {
    console.log(message)
    alert(message)
}

