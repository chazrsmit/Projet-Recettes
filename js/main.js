let card = document.querySelectorAll(".card")

// Box shadow card 1
let card1 = card[0]
console.log(card1)

card1.addEventListener("mouseover", () => {
    card1.style.boxShadow = "rgb(119, 119, 119) 4px 4px 2px"
})

card1.addEventListener("mouseout", () => {
    card1.style.boxShadow = "none"
})

// Box shadow card 2

let card2 = card[1]
console.log(card2)

card2.addEventListener("mouseover", () => {
    card2.style.boxShadow = "rgb(119, 119, 119) 4px 4px 2px"
})

card2.addEventListener("mouseout", () => {
    card2.style.boxShadow = "none"
})
