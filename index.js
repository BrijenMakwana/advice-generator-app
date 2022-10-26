const adviceId = document.getElementById("advice-id");
const adviceText = document.getElementById("advice-text");
const dice = document.getElementById("dice");

// https://api.adviceslip.com/advice
const getAdvice = () => {
  fetch("https://api.adviceslip.com/advice")
    .then((res) => res.json())
    .then((data) => {
      adviceId.innerHTML = `advice #${data.slip.id}`;
      adviceText.innerHTML = data.slip.advice;
      console.log(data.slip.advice);
    });
};

getAdvice();

dice.addEventListener("click", getAdvice);
