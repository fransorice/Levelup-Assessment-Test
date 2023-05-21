const cardType = document.getElementById("card");
const cvcInput = document.querySelector("#input-cvc");
let actualCardValue;

cardType.addEventListener('change', (e) => {
    let cardValue = e.target.value;
    if (cardValue == "American Express") {
    cvcInput.setAttribute("maxlength", 4);
    }
    actualCardValue = cardValue;
})