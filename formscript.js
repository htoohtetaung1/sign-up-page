let errorMsg = document.querySelector(".error");
errorMsg.textContent = "";
let submitBtn = document.querySelector(".submitBtn");

let form = document.querySelector("form");

let pwInput = document.querySelector("#password");
let cpwInput = document.querySelector("#cpassword");
if (pwInput.value == "" || cpwInput.value == "") {
  errorMsg.textContent = "Passwords cannot be empty.";
  submitBtn.disabled = true;
} else {
  errorMsg.textContent = "";
}

pwInput.addEventListener("input", (e) => {
  if (pwInput.value == "" || cpwInput.value == "") {
    errorMsg.textContent = "Passwords cannot be empty.";
  } else {
    errorMsg.textContent = "";
    submitBtn.disabled = false;
  }

  if (pwInput.value !== cpwInput.value){
      errorMsg.textContent = "Passwords have to match."
      submitBtn.disabled = true;
  }
});
cpwInput.addEventListener("input", (e) => {
    if (pwInput.value == "" || cpwInput.value == "") {
        errorMsg.textContent = "Passwords cannot be empty.";
    } else {
        errorMsg.textContent = "";
        submitBtn.disabled = false;
    }
    if (pwInput.value !== cpwInput.value){
        errorMsg.textContent = "Passwords have to match."
        submitBtn.disabled = true;
    }
});
