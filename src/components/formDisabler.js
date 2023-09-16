export default function formDisabler(e) {
    const emailInput = document.getElementById("email-input");
    const submitButton = document.querySelector(".submit");

    if (e === true) {
        submitButton.disabled = true;
        submitButton.style.pointerEvents = "none";
        emailInput.disabled = true;
        return true;
    } else {
        submitButton.disabled = false;
        submitButton.style.pointerEvents = "auto";
        emailInput.disabled = false;
        return false;
    }
}

