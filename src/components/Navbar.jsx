import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">

      <h2 className="logo">
        🎟️ TicketHub
      </h2>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/">Events</Link>
        <Link to="/">My Tickets</Link>
      </div>

    </nav>
  );
}

export default Navbar;
