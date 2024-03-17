import logo from "../assets/images/logo.svg";

export default function Navbar() {
  return (
    <nav className="navbar">
      <img src={logo} alt="logo" className="logo" />
      <ul className="nav-items">
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
    </nav>
  );
}
