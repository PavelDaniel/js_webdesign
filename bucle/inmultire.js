
// numarul de la care incepem
var i = 1
while(i < 10) {
    // afisez tabla inmultirii pentru i
    showTable(i)
    // merg la urmatorul numar
    i++
}

// structura unei bucle for (bucla prescurtata)
// numarul de la care incepem; conditia; modificarea numarului
for(var i = 1; i < 10; i++) {
    showTable(i)
}

function showTable(multiplier) {
    // numarul de la care pornim
    var number = 1
    // cat timp numarul este mai mic sau egal cu 10
    while(number <= 10) {
        // calculam rezultatul inmultirii cu numarul
        var result = multiplier * number
        // afisam multiplier x numar = rezultat
        document.writeln(multiplier + " x " + number + " = " + result)
        // punem o noua linie in HTML
        document.writeln("<br>")
        // mergem la urmatorul numar
        number++
    }
    // afisam inca o linie goala
    document.writeln("<br>")
}
