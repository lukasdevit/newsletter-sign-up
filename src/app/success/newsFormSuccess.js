import React from "react";
import "./newsFormSuccess.css";
import formDisabler from "@/app/components/formDisabler";
import Image from "next/image";
import iconSuccess from "../../../public/news-icon-success.svg"

const hidePopup = () => {
  const popup = document.querySelector(".success-content");
  const blurredClasses = document.querySelector(".home", "illustration-sign-up-desktop");
  blurredClasses.classList.remove("blur");
  popup.style.display = "none";
  formDisabler(false);
};
export default function NewsFormSuccess({ email }) {
  return (
      <section role="successful-signup-information" className="success-content centered">
        <article className="success-info"><Image src={iconSuccess} alt="Success Icon" />
        <h1>Thanks for subscribing!</h1>
        <p>
          A confirmation email has been sent to <b>{ email }</b>. {" "}
          Please open it and click the button inside to confirm your
          subscription.
        </p></article>
        <button className="dismiss" type="submit" onClick={hidePopup}>
          Dismiss message
        </button>
      </section>
  );
}
