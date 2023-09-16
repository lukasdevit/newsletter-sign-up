'use client'

import React, { useState } from "react";
import "./page.css"
import Attribution from "@/components/attributtion";
import NewsFormSuccess from "@/app/success/newsFormSuccess";
import Image from "next/image"

function emailValidation() {
  const emailInput = document.getElementById("email-input");
  const emailRequired = document.querySelector(".email-required");
  const successPopup = document.querySelector(".success-content");
  const blurredClasses = document.querySelector(".home", "illustration-sign-up-desktop");
  console.log(emailInput.reportValidity());
  console.log(emailInput.value);
  // if emails is valid and not empty
  if (emailInput.reportValidity() && emailInput.value !== "") {
    emailRequired.hidden = true;
    successPopup.style.display = "flex";
    blurredClasses.classList.add("blur");
    console.log("valid");
    return true;
  } else {
    emailRequired.hidden = false;
    console.log("invalid");
    return false;
  }
};

export default function Home() {
  const [email, setEmail] = useState(""); /* implemented useState */
  console.log(email);
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
                src="/news-icon-list.svg"
                width={21}
                height={21}
                alt=""
                className="list_icon"
              />
              <p>Product discovery and building what matters</p>
            </li>
            <li>
            <Image
                src="/news-icon-list.svg"
                width={21}
                height={21}
                alt=""
                className="list_icon"
              />
              <p>Measuring to ensure updates are a success</p>
            </li>
            <li>
            <Image
                src="/news-icon-list.svg"
                width={21}
                height={21}
                alt=""
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
              placeholder="example@yourcompany.com"
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
        <Image width="400" height="593" className="illustration-sign-up-desktop" src="\illustration-sign-up-desktop.svg" alt="" />
        <Image width="375" height="284" className="illustration-sign-up-mobile" src="\illustration-sign-up-mobile.svg" alt="" />
      </div>
      <NewsFormSuccess email={email}/>
      <Attribution />
    </section>
  );

}
