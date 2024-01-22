function subsNews() {
  // Prevent refresh
  var form = document.getElementById("formId");
  function handleForm(event) {
    event.preventDefault();
  }
  form.addEventListener("submit", handleForm);

  //   Declare variables
  var emailInput = document.getElementById("emailInput");
  var emailUser = emailInput.value;
  var content = document.getElementById("content");
  var success = document.getElementById("success");

  //   Email check
  var filter =
    /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

  // When the input is empty
  if (emailUser == null || emailUser == "") {
    document.getElementById("empty-email").style.display = "flex";
    document.getElementById("invalid-email").style.display = "none";
    emailInput.className = "subscription-form-error";

    // When the inputed email is invalid
  } else if (!filter.test(emailUser)) {
    document.getElementById("invalid-email").style.display = "flex";
    document.getElementById("empty-email").style.display = "none";
    emailInput.className = "subscription-form-error";

    // Success input
  } else {
    emailInput.value = "";
    document.getElementById("invalid-email").style.display = "none";
    document.getElementById("empty-email").style.display = "none";
    emailInput.className = "subscription-form";
    content.style.display = "none";
    success.style.display = "flex";
    document.getElementById("userEmail").textContent = emailUser;
  }
}

function dismissMessage() {
  // Dismiss message function
  document.getElementById("content").style.display = "flex";
  document.getElementById("success").style.display = "none";
}
