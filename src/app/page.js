'use client'

import React, { useState } from "react";
import "./page.css"
import Attribution from "@/components/attributtion";
import NewsFormSuccess from "@/app/success/newsFormSuccess";
import Image from "next/image"
import formDisabler from "@/components/formDisabler";

function emailValidation(e) {
  const email = document.getElementById("email");
  const emailRequired = document.querySelector(".email-required");
  const success = document.querySelector(".success-content");
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const blurredClasses = document.querySelector(".home", "illustration-sign-up-desktop");


  if (email.value === "") {
    emailRequired.hidden = false;
    return false;
  }
  if (!emailRegex.test(email.value)) {
    emailRequired.hidden = false;
    return false;
  }
  if (emailRegex.test(email.value)) {
    emailRequired.hidden = true;
    success.style.display = "flex";
    blurredClasses.classList.add("blur");
    formDisabler(true);
    return true;
  }
};

export default function Home() {
  return (
    <div className="news-container">
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
          <form className= "submit-form" onSubmit={e => e.preventDefault()}>
            <div className="email-headers">
              <p className="email-label">Email adress</p>
              <p hidden className="email-required">Valid email required</p>
            </div>
            <input
              required=""
              className="email-input"
              id="email"
              type="email"
              placeholder="example@yourcompany.com"
              autoComplete="off"
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
      <NewsFormSuccess />
      <Attribution />
    </div>
  );

}
