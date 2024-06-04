// Homework 6A

document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById("myModal");
  const btn = document.getElementById("openModalBtn");
  const span = document.querySelector(".closeBtn");

  btn.onclick = () => modal.style.display = "block";
  span.onclick = () => modal.style.display = "none";
  window.onclick = (event) => event.target === modal ? modal.style.display = "none" : null;
});

// Homework 6A

// Homework 6B

document.addEventListener('DOMContentLoaded', () => {
  const changeColorBtn = document.getElementById("changeColorBtn");
  const validColors = ["red", "blue", "green", "black", "white"];

  changeColorBtn.onclick = () => {
      const colorInput = document.getElementById("colorInput").value.toLowerCase();
      if (validColors.includes(colorInput)) {
          document.body.style.backgroundColor = colorInput;
      } else {
          alert(`The color "${colorInput}" is not valid. Please enter a valid color: red, blue, green, black, or white.`);
      }
  };
});


// Homework 6B

// Homework 6C

document.addEventListener('DOMContentLoaded', () => {
  const calculateBtn = document.getElementById("calculateBtn");

  calculateBtn.onclick = () => {
      const input = document.getElementById("numbersInput").value;
      const numbers = input.split(":").map(Number);
      if (numbers.some(isNaN)) {
          alert("Please enter valid numbers separated by colons.");
          return;
      }
      const average = numbers.reduce((acc, num) => acc + num, 0) / numbers.length;
      document.getElementById("result").innerText = `Average: ${average}`;
  };
});


// Homework 6C