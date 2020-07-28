
// setTimeout(changeAll, 3000)
// setTimeout(removeRedPlanet, 5000)

document.getElementById("redplanet")
        .addEventListener("mouseover", changeStatus)

document.getElementById("redplanet")
        .addEventListener("mouseout", changeStatus)

function changeStatus() {
    var redplanet = document.getElementById("redplanet")

    if (redplanet.classList.contains("warning")) {
        // il facem normal
        redplanet.innerText = "Red planet: All is well"
        redplanet.classList.remove("warning")
    } else {
        // il facem warning
        redplanet.innerText = "Red planet: Warning! Systems are melting!"
        redplanet.classList.add("warning")
    }
}

function changeAll() {
    var planets = document.querySelectorAll("p[id]")

    for (var planet of planets) {
        planet.classList.add("warning")
    }
}

function removeRedPlanet() {
    var redplanet = document.getElementById("redplanet")

    redplanet.parentNode.removeChild(redplanet)
}