import { useState } from "react";
import logo from "../assets/images/logo.svg";
import open from "../assets/images/icon-menu.svg";
import close from "../assets/images/icon-menu-close.svg";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <nav className="navbar">
      <img src={logo} alt="logo" className="logo" />
      <div>
        {" "}
        <button onClick={() => setIsOpen((prev) => !prev)}>
          <img src={isOpen ? open : close} alt="" />
        </button>
        <ul className={`nav-items ${isOpen && "hidden"}`}>
          <li>
            <a href="/home">Home</a>
          </li>
          <li>
            <a href="/new">New</a>
          </li>
          <li>
            <a href="/popular">Popular</a>
          </li>
          <li>
            <a href="/trending">Trending</a>
          </li>
          <li>
            <a href="/categories">Categories</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
