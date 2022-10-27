export default function Nav() {
  return (
    <nav className="navbar">
      <div>
        <h3 className="ms-4 my-2">YM</h3>
      </div>
      <div>
        <ul className="d-flex flex-row justify-content-between">
          <li className="my-3">
            <a href="/Home">Home</a>
          </li>
          <li className="ms-2 my-3">
            <a href="/About">About</a>
          </li>
          <li className="ms-2 my-3">
            <a href="/Portfolio">Portfolio</a>
          </li>
          <li className="ms-2 me-3 my-3">
            <a href="/Contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
