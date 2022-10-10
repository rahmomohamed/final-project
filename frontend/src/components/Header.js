import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Header() {
  return (
    <header className="Header">
      <nav className="Navbar">
        <Link to="/">
          <FontAwesomeIcon icon="fa-solid fa-person-circle-question" />
        </Link>
        <h2>Missing Persons</h2>
      </nav>
    </header>
  );
}

export default Header;
