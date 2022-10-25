export default function Nav() {
  return (
    <nav className="navbar bg-light">
      <div>
        <h3 className="ms-4 my-2">YM</h3>
      </div>
      <div>
        <ul className="d-flex flex-row justify-content-between">
          <li className="my-3">
            <a href="#home">Home</a>
          </li>
          <li className="ms-2 my-3">
            <a href="#about">About</a>
          </li>
          <li className="ms-2 my-3">
            <a href="#portfolio">Portfolio</a>
          </li>
          <li className="ms-2 me-3 my-3">
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
