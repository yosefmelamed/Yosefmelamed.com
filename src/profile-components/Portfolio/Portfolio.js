export default function Portfolio() {
  return (
    <>
      <h2 className="p-3 m-3">My Portfolio</h2>
      <h4 className="p-2 m-2">
        Welcome to my portfolio!! Feel free to browse
        <a
          href="https://github.com/yosefmelamed?tab=repositories"
          id="portfolio"
        >
          {" "}
          my projects{" "}
        </a>
        and their
        <a
          href="https://github.com/yosefmelamed?tab=repositories"
          id="portfolio"
        >
          {" "}
          source-codes.
        </a>{" "}
        Each project can be accessed indivdually on{" "}
        <a href="https://github.com/yosefmelamed" id="portfolio">
          GitHub
        </a>{" "}
        at the project link I provided. I hope you enjoy!!
      </h4>
      <a href="/Home" id="goback">
        Click here to go back to the home page!
      </a>
    </>
  );
}
