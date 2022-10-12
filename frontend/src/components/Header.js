import { Link } from "react-router-dom";

function Header() {
  const logout = (e) => {
    e.preventDefault();
    localStorage.removeItem("token");
    window.location.reload(false);
  };

  return (
    <header className="Header">
      <nav className="Navbar">
        <Link to="/">
          <h2>Missing Persons</h2>
        </Link>

        <Link to="/new">
          <h4
            style={{
              color: "red",
            }}
          >
            Report a Missing Person
          </h4>
        </Link>
        <a href="/" onClick={logout}>
          <h4>Logout</h4>
        </a>
      </nav>
    </header>
  );
}

export default Header;
