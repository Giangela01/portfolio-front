

function Header(props) {
  return (
    <header className="header">
      <nav>
      <ul className="nav justify-content-end">
        <li className="nav-item">
          <a className="nav-link" href="/">HOME</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/projects">PROJECTS</a>
        </li>
      </ul>
      </nav>
    </header>
  );
}

export default Header;