'use client'

import React, { useState } from "react";
import "./page.css"
import Attribution from "@/app/components/attributtion";
import NewsFormSuccess from "@/app/success/newsFormSuccess";
import formDisabler from "./components/formDisabler";
import Image from "next/image";
import listIcon from "../../public/news-icon-list.svg";
import illustrationDesktop from "../../public/illustration-sign-up-desktop.svg" ;
import illustrationMobile from "../../public/illustration-sign-up-mobile.svg";

function emailValidation() {
  const emailInput = document.getElementById("email-input");
  const emailRequired = document.querySelector(".email-required");
  const successPopup = document.querySelector(".success-content");
  const blurredClasses = document.querySelector(".home", "illustration-sign-up-desktop");
  // if emails is valid and not empty
  if (emailInput.reportValidity() && emailInput.value !== "") {
    emailRequired.hidden = true;
    successPopup.style.display = "flex";
    blurredClasses.classList.add("blur");
    formDisabler(true);
    return true;
  } else {
    emailRequired.hidden = false;
    emailInput.classList.add("email-error");
    return false;
  }
};

export default function Home() {
  const [email, setEmail] = useState(""); /* implemented useState */
  return (
    <section className="news-container">
      <div className="home centered">
        <section className="form_section">
          <header className="header">
            <h1>Stay updated!</h1>
            <p>Join 60,000+ product managers receiving monthly updates on:</p>
          </header>
          <ul className="pros">
            <li>
              <Image
                src={listIcon}
                alt="Only icon"
                className="list_icon"
              />
              <p>Product discovery and building what matters</p>
            </li>
            <li>
            <Image
                src={listIcon}
                alt="Only icon"
                className="list_icon"
              />
              <p>Measuring to ensure updates are a success</p>
            </li>
            <li>
            <Image
                src={listIcon}
                alt="Only icon"
                className="list_icon"
              />
              <p>And much more!</p>
            </li>
          </ul>
          <form className= "submit-form" onSubmit={e => (e.preventDefault())}>
            <div className="email-headers">
              <p className="email-label">Email adress</p>
              <p hidden className="email-required">Valid email required</p>
            </div>
            <input
              required=""
              id="email-input"
              className="email-input"
              type="email"
              placeholder="email@company.com"
              autoComplete="off"
              onChange={e => setEmail(e.target.value)}
            />
            <button
            onClick={emailValidation}
              type="submit"
              className="submit"
            >Subscribe to monthly newsletter</button>
          </form>
        </section>
        <Image className="illustration-sign-up-mobile" src={illustrationMobile} alt="Sign up very nice illustration" />
        <Image className="illustration-sign-up-desktop" src={illustrationDesktop} alt="Sign up very nice illustration" />
      </div>
      <NewsFormSuccess email={email}/>
      <Attribution />
    </section>
  );

}
