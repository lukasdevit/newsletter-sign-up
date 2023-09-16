export default function formDisabler(e) {
    const email = document.getElementById("email");
    const submitButton = document.querySelector(".submit");

    if (e === true) {
        submitButton.disabled = true;
        submitButton.style.pointerEvents = "none";
        email.disabled = true;
        return true;
    } else {
        submitButton.disabled = false;
        submitButton.style.pointerEvents = "auto";
        email.disabled = false;
        return false;
    }
}

