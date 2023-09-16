import React from "react";
import "./newsFormSuccess.css";
import formDisabler from "@/components/formDisabler";

const hidePopup = () => {
  const popup = document.querySelector(".success-content");
  const blurredClasses = document.querySelector(".home", "illustration-sign-up-desktop");
  blurredClasses.classList.remove("blur");
  popup.style.display = "none";
  formDisabler(false);
};
export default function NewsFormSuccess() {
  return (
      <div className="success-content centered">
        <div className="success-info"><img src="/news-icon-success.svg" alt="" />
        <h1>Thanks for subscribing!</h1>
        <p>
          A confirmation email has been sent to <b>example@yourcompany.com.</b>{" "}
          Please open it and click the button inside to confirm your
          subscription.
        </p></div>
        <button className="dismiss" type="submit" onClick={hidePopup}>
          Dismiss message
        </button>
      </div>
  );
}
