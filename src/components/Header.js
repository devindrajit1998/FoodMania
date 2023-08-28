import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
  const leftNavLink = [
    {
      id: 1,
      link: "Home",
      url: "",
    },
    {
      id: 2,
      link: "Menu",
      url: "",
    },
    {
      id: 3,
      link: "Reservation",
      url: "",
    },
  ];
  const rightNavLink = [
    {
      id: 4,
      link: "About Us",
      url: "",
    },
    {
      id: 5,
      link: "Contact Us",
      url: "",
    },
    {
      id: 6,
      link: "My Cart",
      url: "",
    },
  ];
  return (
    <>
      <header id="header" className="header clearfix">
        <div className="header-wrap clearfix">
          <div className="container">
            <div className="logo-mobi">
              <Link>
                <img src="images/logo.png" alt="logo" />
              </Link>
            </div>
            <div className="btn-menu">
              <span />
            </div>
            <nav id="mainnav" className="mainnav">
              <ul className="menu">
                {leftNavLink.map((curElem) => {
                  return (
                    <li className="has-sub" key={curElem.id}>
                      <NavLink>{curElem.link}</NavLink>
                    </li>
                  );
                })}

                <li className="logo">
                  <Link>
                    <img src="images/logo.png" alt="logo" />
                  </Link>
                </li>
                {rightNavLink.map((curElem) => {
                  return (
                    <li className="has-sub" key={curElem.id}>
                      <NavLink>{curElem.link}</NavLink>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
}
