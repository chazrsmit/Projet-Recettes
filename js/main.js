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

// // input index

let footer = document.querySelectorAll("footer")

let footer1bis = footer[0]

let p1 = footer1bis.querySelector("p")

console.log(p1)

p1.remove()

let input = document.createElement("input")
footer1bis.appendChild(input)

input.style.fontFamily = "monospace"
input.style.fontSize = "12px"
input.style.width = "165px"

// // bouton newsletter index

let btnNews = document.createElement("button")
footer1bis.appendChild(btnNews)

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

btnNews.addEventListener("click", () =>{
    alert("Bienvenue dans notre contact list !")
})

// // input index



let footer2bis = footer[1]

let p2 = footer2bis.querySelector("footer > p")

console.log(p2)

p2.remove()

let input2 = document.createElement("input")
footer2bis.appendChild(input2)

input2.style.fontFamily = "monospace"
input2.style.fontSize = "12px"
input2.style.width = "165px"

// // bouton newsletter index

let btnNews2 = document.createElement("button")
footer2bis.appendChild(btnNews2)

btnNews2.textContent="Newsletter"

btnNews2.style.borderStyle = "solid"
btnNews2.style.borderWidth = "1px"
btnNews2.style.borderColor = "#000"
btnNews2.style.borderRadius = "50px"
btnNews2.style.fontFamily = "monospace"
btnNews2.style.fontSize = "13px"
btnNews2.style.paddingLeft = "8px"
btnNews2.style.paddingRight = "8px"
btnNews2.style.marginLeft = "8px"

btnNews2.addEventListener("mouseover", () => {
    btnNews2.style.background = "#ffff9f"
})

btnNews2.addEventListener("mouseout", () => {
    btnNews2.style.background = "#ffffff"
})

btnNews2.addEventListener("click", () =>{
    alert("Bienvenue dans notre contact list !")
})