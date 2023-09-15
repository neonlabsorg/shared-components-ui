"use client";
import * as React from "react";
import { useState, useEffect } from "react";

/*
 *
 * Web Components use only plain strings as props
 *
 * */

const DEFAULTS = {
  title: "We use cookies",
  description:
    "If you continue browsing, we consider that you have accepted the",
  policyText: "cookies policy",
  policyUrl: "cookie-policy",
  classList: {
    container:
      "fixed bottom-5 right-5 w-[calc(100%-40px)] sm:w-72 bg-cookie-banner p-5 rounded-lg z-50 drop-shadow-lg",
    title: "font-bold text-white text-lg",
    description: "text-xs text-grey mb-2",
    policyUrl:
      "text-pink hover:text-pink-weak cursor-pointer tracking-tight underline",
    acceptCta: "text-base font-bold text-pink hover:text-pink-weak",
    postponeCta:
      "pl-4 uppercase text-black-light text-base font-bold hover:text-black-light/70",
  },
  buttonGroupContent: {
    acceptText: "Accept",
    postponeText: "Ask me later",
  },
};

function CookieControl(props) {
  const [show, setShow] = useState(() => true);

  function acceptCookies() {
    localStorage.setItem("cookie-usage", "true");
    setShow(false);
  }

  function postponeCookies() {
    localStorage.setItem("cookie-expire", new Date().getTime().toString());
    setShow(false);
  }

  function checkCookieAcceptancePostpone() {
    const expireDate = localStorage.getItem("cookie-expire");
    if (
      expireDate &&
      Math.abs(Number(expireDate) - new Date().getTime()) / (60 * 60 * 1000) >
        24
    ) {
      localStorage.removeItem("cookie-expire");
      //Banner is visible
      return true;
    }
    return false;
  }

  useEffect(() => {
    const expireDate = localStorage.getItem("cookie-expire");
    setShow(
      checkCookieAcceptancePostpone() ||
        (!expireDate && !localStorage.getItem("cookie-usage"))
    );
  }, []);

  return (
    <>
      {show ? (
        <>
          <div
            className={
              props.customClassList?.container ||
              props.containerClass ||
              DEFAULTS.classList.container
            }
          >
            <h4
              className={
                props.customClassList?.title ||
                props.titleClass ||
                DEFAULTS.classList.title
              }
            >
              {props.title || DEFAULTS.title}
            </h4>

            <p
              className={
                props.customClassList?.description ||
                props.descriptionClass ||
                DEFAULTS.classList.description
              }
            >
              {props.description || DEFAULTS.description}
              <a
                className={
                  props.customClassList?.policyUrl ||
                  props.policyUrlClass ||
                  DEFAULTS.classList.policyUrl
                }
                href={props.policyUrl || DEFAULTS.policyUrl}
                target={props.linkTarget ? "_blank" : "_self"}
              >
                {props.policyText || DEFAULTS.policyText}
              </a>
              .
            </p>

            <button
              className={
                props.customClassList?.acceptCta ||
                props.acceptCtaClass ||
                DEFAULTS.classList.acceptCta
              }
              onClick={(event) => acceptCookies()}
            >
              {(
                props.buttonGroupContent?.acceptText ||
                props.acceptText ||
                DEFAULTS.buttonGroupContent.acceptText
              ).toUpperCase()}
            </button>

            <button
              className={
                props.customClassList?.postponeCta ||
                props.postponeCtaClass ||
                DEFAULTS.classList.postponeCta
              }
              onClick={(event) => postponeCookies()}
            >
              {(
                props.buttonGroupContent?.postponeText ||
                props.postponeText ||
                DEFAULTS.buttonGroupContent.postponeText
              ).toUpperCase()}
            </button>
          </div>
        </>
      ) : null}
    </>
  );
}

export default CookieControl;
