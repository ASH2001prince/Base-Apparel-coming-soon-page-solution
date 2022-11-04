const button = document.querySelector(".btn");
const emailEnput = document.querySelector(".email-input");
const wrongMassege = document.querySelector("#caution-massege");
const errorImage = document.querySelector(".error");

button.addEventListener("click", (e) => {
  if (!emailEnput.checkValidity() || emailEnput.value === "") {
    e.preventDefault();
    emailEnput.style.border = "2px solid hsl(0, 93%, 68%)";
    wrongMassege.style.visibility = "visible";
    errorImage.style.visibility = "visible";
  }
});
