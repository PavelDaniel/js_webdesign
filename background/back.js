
document.querySelector("input[type='button']")
        .addEventListener("click", changeBackground)

function changeBackground() {
    var body = document.querySelector("body")
    var picker = document.getElementById("colorPicker")

    var color = picker.value
    body.style.backgroundColor = color
}
