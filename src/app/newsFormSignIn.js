'use client'

import React, { useState } from "react";
import "../../styles/newsForm.css";
import Attribution from "@/app/components/attributtion";
import NewsFormSuccess from "./newsFormSuccess";
import formDisabler from "./formDisabler";
import Image from "next/image"

function emailValidation(e) {
  const email = document.getElementById("email");
  const emailRequired = document.querySelector(".email_required");
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

export default function NewsFormSignIn() {
  return (
    <div className="news_container">
      <div className="home centered">
        <section className="form_section">
          <header>
            <h1>Stay updated!</h1>
            <p>Join 60,000+ product managers receiving monthly updates on:</p>
          </header>
          <ul>
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
          <form onSubmit={e => e.preventDefault()}>
            <div className="email_headers">
              <p className="email_label">Email adress</p>
              <p hidden className="email_required">Valid email required</p>
            </div>
            <input
              required=""
              id="email"
              type="email"
              placeholder="email@company.com"
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
