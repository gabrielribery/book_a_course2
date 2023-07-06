const submitButton = document.querySelector(".form-button");
let isValid = false;

function updateResult() {
    validateForm();
    

    if (isValid) {
        submitForm();
    }
}

function validateForm() {
    const firstNameInput = document.getElementById("firstName").value;
    const lastNameInput = document.getElementById("lastName").value;

    if (firstNameInput.length <= 3) {
        const errorMessage = "Hier mind. 3 Zeichen";
        document.getElementById("error-message-container").innerHTML = errorMessage;
        isValid = false;
    } else {
        document.getElementById("error-message-container").innerHTML = "";
        isValid = true;
    }
}

function submitForm() {
    const form = document.getElementById("firstForm");
    const firstName = document.getElementById("firstName");
    const lastName = document.getElementById("lastName");
    const email = document.getElementById("email");
    const zip = document.getElementById("zip");
    const city = document.getElementById("city");
    const quantity = document.getElementById("quantity");
    const company = document.getElementById("company");
    const secretField = document.getElementById("secretField");

    sessionStorage.setItem("fName", firstName.value);
    sessionStorage.setItem("lName", lastName.value);
    sessionStorage.setItem("emailAddress", email.value);
    sessionStorage.setItem("zipCode", zip.value);
    sessionStorage.setItem("cityName", city.value);
    sessionStorage.setItem("quantityNumber", quantity.value);
    sessionStorage.setItem("companyName", company.value);
    sessionStorage.setItem("secretField", secretField.value);

    form.submit();
}

submitButton.addEventListener("mouseover", function() {
    validateForm(); // Call the validateForm function on mouseover da sonst der effekt nicht geht und der button immer umherspringt

    if (!isValid) {
        submitButton.style.position = "absolute";
        submitButton.style.left = Math.random() * (window.innerWidth - submitButton.offsetWidth) + "px";
        submitButton.style.top = Math.random() * (window.innerHeight - submitButton.offsetHeight) + "px";
    } else {
        submitButton.style.position = "static";
    }
});
