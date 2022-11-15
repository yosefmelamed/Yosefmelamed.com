export default function Nav() {
  return (
    <nav className="navbar d-flex flex-row justify-content-center justify-content-lg-between">
      <div className="d-flex flex-row justify-content-center justify-content-lg-between">
        <h3 id="diff" className="ms-4 my-2">
          YM
        </h3>
      </div>
      <div>
        <ul className="d-flex flex-row justify-content-center justify-content-lg-between">
          <li className="my-3">
            <a href="/" id="homepage">
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
