
function showGeneration() {

    var generation
    var birthYear = document.getElementById('year').value

    if (birthYear <= 1945) {
        generation = 'Traditionalists'
    } else if (birthYear <= 1964) {
        generation = 'Boomers'
    } else if (birthYear <= 1976) {
        generation = 'X'
    } else if (birthYear <= 1997) {
        generation = 'Millenials'
    } else {
        generation = 'Y'
    }

    alert(generation)
}