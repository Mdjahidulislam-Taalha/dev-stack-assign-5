import logoText from "../assets/logo-text.png";
function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">

      
    <div className="brand">
     <img src={logoText} alt="Dev Stack" />
    </div>

        <div className="nav-links">
          <a href="#">Home</a>
          <a href="#">Technologies</a>
          <a href="#">Projects</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </div>

       
        <div className="nav-buttons">
          <button className="sign-in">Sign In</button>
          <button className="sign-up">Sign Up</button>
        </div>

        <button className="menu-button">☰</button>

      </div>
    </nav>
  );
}

export default Navbar;