"use client";
import * as React from "react";

/*
 *
 * Web Components use only plain strings as props
 *
 * */

const DEFAULTS = {
  title: "Something went wrong",
  description: "Sorry, you are not allowed to be here",
  imgUrl:
    "https://placehold.jp/ffffff/f549b4/600x400.png?text=Something%20went%20wrong",
  redirectUrl: "/",
  classList: "not-found_wrapper",
};

function StubNotFound(props) {
  return (
    <>
      <div className={props.classList || DEFAULTS.classList + " div"}>
        <a className="a" href={props.redirectUrl || DEFAULTS.redirectUrl}>
          <img
            src={props.imgUrl || DEFAULTS.imgUrl}
            alt={props.title || DEFAULTS.title}
          />
        </a>
      </div>
      <style jsx>{`
        .div {
          width: 100%;
          height: 100%;
          display: grid;
          place-items: center;
        }
        .a {
          color: inherit;
          text-decoration: none;
        }
      `}</style>
    </>
  );
}

export default StubNotFound;
