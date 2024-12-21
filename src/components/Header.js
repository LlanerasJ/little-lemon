import "./Header.css";
import logo from "../assets/logo.png";

export default function Header() {
  return (
    <nav className="nav">
      <img src={logo} alt={logo}></img>
      <ul>
        <li>
          <a href="Home">Home</a>
        </li>
        <li>
          <a href="About">About</a>
        </li>
        <li>
          <a href="Menu">Menu</a>
        </li>
        <li>
          <a href="Reservations">Reservations</a>
        </li>
        <li>
          <a href="Order Online">Order Online</a>
        </li>
        <li>
          <a href="Login">Login</a>
        </li>
      </ul>
    </nav>
  );
}
