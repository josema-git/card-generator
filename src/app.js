onload = function() {
  let suits = ["♠", "♣", "♥", "♦"];
  let numSuit = Math.floor(Math.random() * 4);
  let cardValues = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
  ];
  document.querySelectorAll(".suit").forEach((element) => {
    element.innerHTML = suits[numSuit];
  });
  document.querySelector(".center").innerHTML =
    cardValues[Math.floor(Math.random() * 13)];
  if (numSuit === 2 || numSuit === 3) {
    document.querySelectorAll(".suit").forEach((element) => {
      element.style.color = "red";
    });
  }
};

function changeCard() {
  let suits = ["♠", "♣", "♥", "♦"];
  let numSuit = Math.floor(Math.random() * 4);
  let cardValues = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
  ];
  document.querySelectorAll(".suit").forEach((element) => {
    element.innerHTML = suits[numSuit];
  });
  document.querySelector(".center").innerHTML =
    cardValues[Math.floor(Math.random() * 13)];
  if (numSuit > 1) {
    document.querySelectorAll(".suit").forEach((element) => {
      element.style.color = "red";
    });
  } else {
    document.querySelectorAll(".suit").forEach((element) => {
      element.style.color = "black";
    });
  }
}
