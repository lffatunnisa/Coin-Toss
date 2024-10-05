let coin = document.querySelector(".coin");
let flipBtn = document.querySelector("#flip-button");
let resetBtn = document.querySelector("#reset-button");

let heads = 0;
let tails = 0;

flipBtn.addEventListener("click", () => {
  let num = Math.random();  // Menghasilkan nilai acak antara 0 dan 1
  coin.style.animation = "none";

  if (num > 0.9) { // 10% peluang untuk angka
    setTimeout(() => {
      coin.style.animation = "spin-head 3s forwards";
    }, 100);
    heads++;
  } else { // 90% peluang untuk gambar
    setTimeout(() => {
      coin.style.animation = "spin-tail 3s forwards";
    }, 100);
    tails++;
  }
  setTimeout(updateScores, 3000);
  disableButton();
});

function updateScores() {
  document.querySelector("#head-count").textContent = `ANGKA : ${heads}`;
  document.querySelector("#tail-count").textContent = `GAMBAR : ${tails}`;
}

function disableButton(){
    flipBtn.disabled = true;
    setTimeout(function(){
        flipBtn.disabled = false;
    },3000);
}

resetBtn.addEventListener("click",() => {
    coin.style.animation = "none";
    heads = 0;
    tails = 0;
    updateScores();
});

// Bubble
document.getElementById("flip-button").addEventListener("click", function() {
    createBubbles();
});

function createBubbles() {
    const bubbleContainer = document.getElementById('bubbleContainer');
    for (let i = 0; i < 10; i++) {
        const bubble = document.createElement('div');
        bubble.classList.add('bubble');
        
        // Random size and position for bubbles
        const size = Math.random() * 100 + 20 + 'px';
        bubble.style.width = size;
        bubble.style.height = size;
        bubble.style.left = Math.random() * 100 + 'vw';
        bubble.style.animationDuration = Math.random() * 2 + 3 + 's';

        bubbleContainer.appendChild(bubble);

        // Remove the bubble after the animation ends
        setTimeout(() => {
            bubble.remove();
        }, 5000); // Match the duration of the rise animation
    }
}