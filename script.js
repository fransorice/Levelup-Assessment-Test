const myForm = document.querySelector("#paymentForm");
const purchaseForm = document.querySelector('.main-container__form');
const purchaseImg = document.querySelector('.main-container__img');
const purchaseMessage = document.querySelector('.div-purchase-completed');

const verifyDate = () => {
    let date = new Date();
    let actualYear = date.getFullYear();
    let actualMonth = date.getMonth() + 1;
    let yearCreditCard = document.querySelector("#input-year").value;
    let monthCreditCard = document.querySelector("#input-month").value;
    let inputMonthError = document.querySelector(".input_month_error");
    let inputYearError = document.querySelector(".input_year_error");
    if (monthCreditCard > 12) {
        inputMonthError.innerHTML = `Invalid month.`;
        return false;
    }
    if (yearCreditCard < actualYear) {
        inputYearError.innerHTML = `Expired year.`;
        return false;
    } else if (yearCreditCard = actualYear) {
        if (monthCreditCard < actualMonth) {
            inputYearError.innerHTML = ``;
            inputMonthError.innerHTML = `Expired month.`;
            return false;
        }
    } else if (yearCreditCard > actualYear) {
        return true;
    } 
    else return true;
}

const verifyAmericanCard = () => {
    const inputCardNumber = document.querySelector("#input-number").value;
    const arrayCardNumber = Array.from(inputCardNumber);
    let inputNumberError = document.querySelector('.input_number_error');
    let inputCvcError = document.querySelector('.input_cvc_error');
    if ((actualCardValue == "American Express" && arrayCardNumber[0] == 3 && arrayCardNumber[1] == 4 && cvcInput.value.length == 4) || (arrayCardNumber[0] == 3 && arrayCardNumber[1] == 7 && cvcInput.value.length == 4)) {
        return true;
    } else if ((actualCardValue == "American Express" && arrayCardNumber[0] == 3 && arrayCardNumber[1] == 4) || (arrayCardNumber[0] == 3 && arrayCardNumber[1] == 7)) {
        inputCvcError.innerHTML = `CVC of an American Express must be 4 digits long.`;
        return false;
    }
    else if ((arrayCardNumber[0] == 3 && arrayCardNumber[1] == 4) || (arrayCardNumber[0] == 3 && arrayCardNumber[1] == 7)) {
        inputNumberError.innerHTML = `This PAN is from an American Express card.`;
        return false;
    } 
}

const verifyNumberLong = () => {
    const inputCardNumber = document.querySelector("#input-number").value;
    const arrayCardNumber = Array.from(inputCardNumber);
    let inputNumberError = document.querySelector('.input_number_error');
    if (arrayCardNumber.length <= 16) {
        inputNumberError.innerHTML = `Card number must be at least 16 digits long`;
        return false;
    } else return true;
}

myForm.addEventListener("submit", (e) => {
    if (verifyNumberLong() == false) {
        e.preventDefault();
    } else if (verifyDate() == false) {
        e.preventDefault();
    } else if (verifyAmericanCard() == false) {
        e.preventDefault();
    } else {
        purchaseForm.classList.add('displayNone');
        purchaseImg.classList.add('displayNone');
        purchaseMessage.classList.remove('displayNone');
        e.preventDefault();
    }   
});