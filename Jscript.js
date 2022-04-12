const yellow = document.getElementById("yellow")
const green = document.getElementById("green")
const pink = document.getElementById("pink")
const salmon = document.getElementById("salmon")
const gray = document.getElementById("gray")
const violet = document.getElementById("violet")
const blue = document.getElementById("blue")

const cardContainer = document.querySelector(".cardContainer")
const cardDisplay = document.querySelector(".cardDisplay")

const catButtn = document.getElementById("#catButtn")
userInput = document.querySelector(".userinput")
catInput = userInput.querySelector(".picture button");
catImg = document.getElementById("#imgCard")
catButtn.addEventListener("click", () => {
    let catValue = catInput.value.trim()
    catImg.src = `https://api.catboys.com/img
    ${catValue}`;

})

const wrapper = document.querySelector(".wrapper");
qrInput = wrapper.querySelector(".form input");
generateBtn = wrapper.querySelector(".form button");
qrImg = wrapper.querySelector(".qr-code img");

generateBtn.addEventListener("click", () => {
    // when inserting url or text in the input box
    let qrValue = qrInput.value.trim();
    if (!qrValue) return; 
    console.log(qrValue);
    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${qrValue}`;
    wrapper.classList.add("active");
})

