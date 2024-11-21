const adviceSection = document.querySelector('.adviceSection');
let advices = [];  

init();

async function init() {
  await fetch('https://dummyjson.com/quotes?limit=2000')
    .then(response => response.json())  
    .then(data => {
      advices = data.quotes;  
      randomAdvice();  
    })
}

document.querySelector('.adviceBtn').addEventListener('click', function() {
  randomAdvice();
});

function randomAdvice() {
  const randomNumber = Math.floor(Math.random() * advices.length);
  const randomQuote = advices[randomNumber];
  document.querySelector(".adviceText").textContent = `"${randomQuote.quote}"`;
  document.querySelector(".adviceNumber").textContent = `ADVICE #${randomQuote.id}`;
  
}

