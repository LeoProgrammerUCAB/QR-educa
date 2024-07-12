let hintCount = 0;

window.onload = () => {
  document.querySelectorAll("input").forEach((input) => (input.value = ""));
};

const phrases = {
  input1: "programando",
  input2: "el",
  input3: "futuro",
  input4: "de",
  input5: "venezuela",
};

Object.keys(phrases).forEach((inputId) => {
  const inputElement = document.getElementById(inputId);
  const phraseElement = document.getElementById(`phrase${inputId.slice(-1)}`);

  inputElement.addEventListener("input", () => {
    if (inputElement.value.trim().toLowerCase() === phrases[inputId]) {
      inputElement.style.display = "none";
      phraseElement.style.display = "block";
      hintCount++;
    }
    if (hintCount === 5) {
      startConfetti();
      setTimeout(() => {
           stopConfetti();
      }, 5000);
    }
  });
});

function startConfetti() {
  window.confettiful = new Confettiful(document.querySelector(".conffeti-container"));
}

function stopConfetti() {
  clearInterval(window.confettiful.confettiInterval);
  window.confettiful.containerEl.innerHTML = "";
}

// ------- confeti animation
const Confettiful = function (el) {
  this.el = el;
  this.containerEl = null;

  this.confettiFrequency = 3;
  this.confettiColors = ["#3843D0", "#16006D", "#F8623F", "#000000"];
  this.confettiAnimations = ["slow", "medium", "fast"];

  this._setupElements();
  this._renderConfetti();
};

Confettiful.prototype._setupElements = function () {
  const containerEl = document.createElement("div");
  const elPosition = this.el.style.position;

  if (elPosition !== "relative" || elPosition !== "absolute") {
    this.el.style.position = "relative";
  }

  containerEl.classList.add("confetti-container");

  this.el.appendChild(containerEl);

  this.containerEl = containerEl;
};

Confettiful.prototype._renderConfetti = function () {
  this.confettiInterval = setInterval(() => {
    const confettiEl = document.createElement("div");
    const confettiSize = Math.floor(Math.random() * 3) + 7 + "px";
    const confettiBackground =
      this.confettiColors[
        Math.floor(Math.random() * this.confettiColors.length)
      ];
    const confettiLeft = Math.floor(Math.random() * this.el.offsetWidth) + "px";
    const confettiAnimation =
      this.confettiAnimations[
        Math.floor(Math.random() * this.confettiAnimations.length)
      ];

    confettiEl.classList.add(
      "confetti",
      "confetti--animation-" + confettiAnimation
    );
    confettiEl.style.left = confettiLeft;
    confettiEl.style.width = confettiSize;
    confettiEl.style.height = confettiSize;
    confettiEl.style.backgroundColor = confettiBackground;

    confettiEl.removeTimeout = setTimeout(function () {
      confettiEl.parentNode.removeChild(confettiEl);
    }, 3000);

    this.containerEl.appendChild(confettiEl);
  }, 25);
};
