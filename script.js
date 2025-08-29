// heart count 

const HeartCount = document.querySelector(".heart-count");

document.querySelectorAll(".heart-icon").forEach((icon) => {
  icon.addEventListener("click", () => {
    let count = parseInt(HeartCount.innerText);
    HeartCount.innerText = count + 1;
  });
});

// copy count 
const copyBtns = document.getElementsByClassName("copy-btn");


const copyCountSpan = document.querySelector(".copy-parent span");


for (let btn of copyBtns) {
  btn.addEventListener("click", function () {
    const card = btn.parentElement.parentElement;

    const number = card.getElementsByClassName("card-number")[0].innerText;

    navigator.clipboard.writeText(number).then(() => {
      alert(`Copied: ${number}`);

      
      let currentCount = parseInt(copyCountSpan.innerText);
      copyCountSpan.innerText = currentCount + 1;
    });
  });
}

// call section process 

let coinCount = document.getElementsByClassName("coin-count")[0];


let callButtons = document.getElementsByClassName("call-btn");

for (let i = 0; i < callButtons.length; i++) {
  callButtons[i].addEventListener("click", function () {
    
    let btnGroup = this.parentElement;

    
    let card = btnGroup.parentElement;

   
    let serviceName = card.getElementsByTagName("h2")[0].innerText;

   
    let serviceNumber = card.getElementsByClassName("card-number")[0].innerText;

    
    let coins = parseInt(coinCount.innerText);
    if (coins < 20) {
      alert("Not enough coins to make a call!");
      return; 
    }

    
    alert("Calling " + serviceName + " at " + serviceNumber);

    
    coinCount.innerText = coins - 20;
  });
}

