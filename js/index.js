// Iteration 1: Names and Input

const hacker1 = 'Paulo'
const hacker2 = 'Weslley'

console.log(`The driver's name is ${hacker1}`)
console.log(`The navigator's name is ${hacker2}`)

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
  console.log(`The driver has the longest name, it has ${hacker1.length} characters`)
} else if (hacker1.length < hacker2.length) {
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`)
} else {
  console.log(`Wow,yopu both have equally long names, ${hacker1.length}`)
}

// Iteration 3: Loops

let spacedName = ""
for (index of hacker1) {
  spacedName += ` ${index}`.toUpperCase()
}
console.log(spacedName.trim())

/* Esse achei no google

let reversedName =  hacker2.split("").reverse().join("")
console.log(reversedName) 
*/


let secondName = ""
for (i = hacker2.length - 1; i >= 0; i--) {
  secondName += `${hacker2[i]}`
}
console.log(secondName)


const hackers = [hacker1, hacker2].sort()
if (hacker1.toUpperCase() === hacker2.toUpperCase()) {
  console.log("What?! You both have the same name?")
} else if (hackers[0] !== hacker1) {
  console.log("Yo, the navigator goes first definetely.")
} else if (hackers[0] === hacker1) {
  console.log("The driver's name goes first." )
}


