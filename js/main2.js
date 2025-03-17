//effet sur les cards

let card = document.querySelectorAll(".card")

for (i=0 ; i < card.length ; i++) {
    let carddd = card[i]
    carddd.addEventListener("click", () => {
        carddd.style.boxShadow = "rgb(119, 119, 119) 4px 4px 2px"
    })
    
    
    carddd.addEventListener("dblclick", () => {
        carddd.remove()
    })
    
    carddd.addEventListener("mouseover", () => {
        carddd.style.background = "#ffff9f"
    })
    
    carddd.addEventListener("mouseout", () => {
        carddd.style.background = "#ffffff"
        carddd.style.boxShadow = "none"
    })
}

// footer

// // input index

// let footer = document.querySelectorAll("footer")
// let footer 1 = footer[0]
// let footer 2 = footer[1]

let footer1 = document.querySelector("#footer-1")

let p1 = footer1.querySelector("p")

console.log(p1)

p1.remove()

let input = document.createElement("input")
footer1.appendChild(input)

input.style.fontFamily = "monospace"
input.style.fontSize = "12px"
input.style.width = "165px"

// // bouton newsletter index

let btnNews = document.createElement("button")
footer1.appendChild(btnNews)

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

// // input pages veggie & non-veggie

let footer2 = document.querySelector("#footer-2")

let p2 = footer2.querySelector("p")

console.log(p2)

p2.remove()

let input2 = document.createElement("input2")
footer2.appendChild(input2)

input2.style.fontFamily = "monospace"
input2.style.fontSize = "12px"
input2.style.width = "165px"

// // bouton newsletter veggie & non-veggie

let btnNews2 = document.createElement("button")
footer2.appendChild(btnNews2)

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