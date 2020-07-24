
var bubbles = [60, 50, 60, 63, 45, 59, 61, 67, 54, 59]

var flavours = ["apple", "chocholate", "coffee", "banana"]

bubbles[3] = 65
bubbles[9] = 60
bubbles[10] = 55

bubbles.push(49)
bubbles.push(50)

flavours.push("melon")


flavours.unshift("orange")

bubbles.sort()
flavours.sort()

var max = bubbles.pop()
var min = bubbles.shift()

console.log(bubbles)
console.log(flavours)
console.log(max)

document.write(bubbles.length)