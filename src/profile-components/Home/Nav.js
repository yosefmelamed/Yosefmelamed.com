export default function Nav() {
  return (
    <nav className="navbar">
      <div>
        <h3 className="ms-4 my-2">YM</h3>
      </div>
      <div>
        <ul className="d-flex flex-row justify-content-between">
          <li className="my-3">
            <a href="/Home" id="homepage">
              Home
            </a>
          </li>
          <li className="ms-2 my-3">
            <a href="/About" id="homepage">
              About
            </a>
          </li>
          <li className="ms-2 my-3">
            <a href="/Portfolio" id="homepage">
              Portfolio
            </a>
          </li>
          <li className="ms-2 me-3 my-3">
            <a href="/Contact" id="homepage">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
