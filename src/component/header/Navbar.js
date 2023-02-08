import React from "react";
import { NavLink } from "react-router-dom";
import shopping from "./shoping.jpg";

function Navbar() {
  return (
    <>
      <div className="jer">
        <nav>
          <div className="nav-main">
            <div className="nav-header">
              <img src={shopping} alt="logo" className="logoo" />
              <span>
                <strong
                  style={{
                    marginLeft: "350px",
                    fontSize: "25px",
                    fontFamily: "Gill Sans Extrabold, sans-serif",
                    color: "yellow"
                  }}
                >
                  Shopping.Com
                </strong>
              </span>
            </div>
            <ul className="menu">
              <li>
                <NavLink to="/home">Home</NavLink>
              </li>
              <li>
                <NavLink to="/product">Product</NavLink>
              </li>
              <li>
                <NavLink to="/additems">Cart</NavLink>
              </li>
              <li>
                <NavLink to="/contact">Contact</NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      
    </>
  );
}

export default Navbar;
