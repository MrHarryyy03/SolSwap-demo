const walletBtn = document.getElementById("walletBtn");
const swapBtn = document.getElementById("swapBtn");

const popup = document.getElementById("popup");
const closePopup = document.getElementById("closePopup");

const fromAmount = document.getElementById("fromAmount");
const toAmount = document.getElementById("toAmount");

const fromToken = document.getElementById("fromToken");
const toToken = document.getElementById("toToken");

const rates = {
  SOL: 150,
  USDC: 1,
  BONK: 0.00003,
  JUP: 1.2,
  RAY: 2.4
};

function updateSwap(){

  const from = fromToken.value;
  const to = toToken.value;

  const amount = parseFloat(fromAmount.value) || 0;

  const usdValue = amount * rates[from];

  const result = usdValue / rates[to];

  toAmount.value = result.toFixed(4);
}

fromAmount.addEventListener("input", updateSwap);

fromToken.addEventListener("change", updateSwap);

toToken.addEventListener("change", updateSwap);

updateSwap();

function showPopup(){
  popup.classList.remove("hidden");
}

walletBtn.addEventListener("click", showPopup);

swapBtn.addEventListener("click", showPopup);

closePopup.addEventListener("click", () => {
  popup.classList.add("hidden");
});

window.addEventListener("click", (e) => {

  if(e.target === popup){
    popup.classList.add("hidden");
  }

});