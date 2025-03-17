let card = document.querySelectorAll(".card")

//card 1
let card1 = card[0]
console.log(card1)

card1.addEventListener("click", () => {
    card1.style.boxShadow = "rgb(119, 119, 119) 4px 4px 2px"
})


card1.addEventListener("dblclick", () => {
    card1.remove()
})

card1.addEventListener("mouseover", () => {
    card1.style.background = "#ffff9f"
})

card1.addEventListener("mouseout", () => {
    card1.style.background = "#ffffff"
    card1.style.boxShadow = "none"
})

// card 2

let card2 = card[1]
console.log(card2)

card2.addEventListener("click", () => {
    card2.style.boxShadow = "rgb(119, 119, 119) 4px 4px 2px"
})


card2.addEventListener("dblclick", () => {
    card2.remove()
})

card2.addEventListener("mouseover", () => {
    card2.style.background = "#ffff9f"
})

card2.addEventListener("mouseout", () => {
    card2.style.background = "#ffffff"
    card2.style.boxShadow = "none"
})

// card 3

let card3 = card[2]
console.log(card3)

card3.addEventListener("click", () => {
    card3.style.boxShadow = "rgb(119, 119, 119) 4px 4px 2px"
})


card3.addEventListener("dblclick", () => {
    card3.remove()
})

card3.addEventListener("mouseover", () => {
    card3.style.background = "#ffff9f"
})

card3.addEventListener("mouseout", () => {
    card3.style.background = "#ffffff"
    card3.style.boxShadow = "none"
})

// card 4

let card4 = card[3]
console.log(card4)

card4.addEventListener("click", () => {
    card4.style.boxShadow = "rgb(119, 119, 119) 4px 4px 2px"
})


card4.addEventListener("dblclick", () => {
    card4.remove()
})

card4.addEventListener("mouseover", () => {
    card4.style.background = "#ffff9f"
})

card4.addEventListener("mouseout", () => {
    card4.style.background = "#ffffff"
    card4.style.boxShadow = "none"
})

// card 5

let card5 = card[4]
console.log(card5)

card5.addEventListener("click", () => {
    card5.style.boxShadow = "rgb(119, 119, 119) 4px 4px 2px"
})


card5.addEventListener("dblclick", () => {
    card5.remove()
})

card5.addEventListener("mouseover", () => {
    card5.style.background = "#ffff9f"
})

card5.addEventListener("mouseout", () => {
    card5.style.background = "#ffffff"
    card5.style.boxShadow = "none"
})

// card 6

let card6 = card[5]
console.log(card6)

card6.addEventListener("click", () => {
    card6.style.boxShadow = "rgb(119, 119, 119) 4px 4px 2px"
})


card6.addEventListener("dblclick", () => {
    card6.remove()
})

card6.addEventListener("mouseover", () => {
    card6.style.background = "#ffff9f"
})

card6.addEventListener("mouseout", () => {
    card6.style.background = "#ffffff"
    card6.style.boxShadow = "none"
})

// footer

let footer = document.querySelector("footer")
console.log(footer)

let pfoot = document.querySelector("footer > p")
console.log(pfoot)

pfoot.remove()


// let footer2 = document.createElement("footer")
// footer.appendChild(footer2)


// // input

let input = document.createElement("input")
footer.appendChild(input)

input.style.fontFamily = "monospace"
input.style.fontSize = "12px"
input.style.width = "165px"
input.value = "Email d'inscription à la"

// // bouton newsletter

let btnNews = document.createElement("button")
footer.appendChild(btnNews)

btnNews.textContent="Newsletter"

btnNews.style.borderStyle = "solid"
btnNews.style.borderWidth = "1px"
btnNews.style.borderColor = "#000"
btnNews.style.borderRadius = "50px"
btnNews.style.fontFamily = "monospace"
btnNews.style.fontSize = "13px"
btnNews.style.paddingLeft = "8px"
btnNews.style.paddingRight = "8px"
btnNews.style.marginLeft = "8px"

btnNews.addEventListener("mouseover", () => {
    btnNews.style.background = "#ffff9f"
})

btnNews.addEventListener("mouseout", () => {
    btnNews.style.background = "#ffffff"
})

// supprimer le hover des btn dans les cards

let hover = document.querySelectorAll(".btn")
console.log(hover)

console.log(hover[0])

for (i =0 ; i <hover.length ; i++) {
    console.log(hover[i])
    hover[i].addEventListener("mouseover", () => {
        hover[i].style.background="#ffffff"
    })
}