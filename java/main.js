 //DOM Elements
 const circles = document.querySelectorAll(".circle"),
 progressBar = document.querySelector(".indicator"),
 buttons = document.querySelectorAll("button");

let currentStep = 1;

// function that updates the current step and updates the DOM
const updateSteps = (e) => {
 // update current step based on the button clicked
 currentStep = e.target.id === "next" ? ++currentStep : --currentStep;

 // loop through all circles and add/remove "active" class based on their index and current step
 circles.forEach((circle, index) => {
   circle.classList[`${index < currentStep ? "add" : "remove"}`]("active");
 });

 // update progress bar width based on current step
 progressBar.style.width = `${((currentStep - 1) / (circles.length - 1)) * 100}%`;

 // check if current step is last step or first step and disable corresponding buttons
 if (currentStep === circles.length) {
   buttons[1].disabled = true;
 } else if (currentStep === 1) {
   buttons[0].disabled = true;
 } else {
   buttons.forEach((button) => (button.disabled = false));
 }
};

// add click event listeners to all buttons
buttons.forEach((button) => {
 button.addEventListener("click", updateSteps);
});


// ---------------------------------------slider-image-------

const nextEl = document.querySelector(".next");

const prevEl = document.querySelector(".prev");

const imgsEl = document.querySelectorAll("img");

const imageContainerEl = document.querySelector(".image-container");

let currentImg = 1;

let timeout;

nextEl.addEventListener("click", () => {
  currentImg++;
  clearTimeout(timeout);
  updateImg();
});

prevEl.addEventListener("click", () => {
  currentImg--;
  clearTimeout(timeout);
  updateImg();
});

updateImg();

function updateImg() {
  if (currentImg > imgsEl.length) {
    currentImg = 1;
  } else if (currentImg < 1) {
    currentImg = imgsEl.length;
  }
  imageContainerEl.style.transform = `translateX(-${(currentImg - 1) * 500}px)`;
  timeout = setTimeout(() => {
    currentImg++;
    updateImg();
  }, 3000);
}
