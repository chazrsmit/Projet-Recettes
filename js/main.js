let card = document.querySelectorAll(".card")

let card1 = card[0]
console.log(card1)

card1.addEventListener("mouseover", () => {
    card1.style.boxShadow = " #000000 4px 4px"
})

card1.addEventListener("mouseout", () => {
    card1.style.boxShadow = "none"
})
