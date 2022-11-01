export default function Portfolio() {
  return (
    <>
      <div id="portback"></div>
      <h2 className="p-2 m-2 text-center">My Portfolio</h2>
      <h5 className="p-2 m-2 text-center">
        {/* <a href="/Home" id="goback">
          Click here to go back to the home page!
        </a> */}
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
      </h5>
      <div className="d-flex flex-row justify-content-between">
        <div
          className="d-flex flex-column justify-content-between pt-5 pb-4"
          id="one"
        >
          <div>
            <a href="https://final-caps-22-client.herokuapp.com/dashboard">
              {" "}
              Restauarant Resrevations{" "}
            </a>
          </div>
          <div>
            <img
              src="/images/us-01-submit-after.png"
              className="container-fluid pt-4"
              alt="resApp"
            />
          </div>
          <div>
            <p id="rest">
              Full-stack app for creating and managing restaurant reservations.
              Built using HTML, JavaScript, Bootstrap CSS, React.js, Express.js,
              PostgreSQL, and Knex.js.
            </p>
          </div>
        </div>
        <div
          className="d-flex flex-column justify-content-between pt-5 pb-4"
          id="two"
        >
          <div>
            <a href="https://github.com/yosefmelamed/We-love-movies3">
              {" "}
              We Love Movies{" "}
            </a>
          </div>
          <div>
            <p id="welove">
              Database and server for viewing movies, theaters, and movie
              reviews. Built using Express.js, Knex.js, and PostgreSQL and
              follows RESTful API convention.
            </p>
          </div>
        </div>
        <div
          className="d-flex flex-column justify-content-between pt-5 pb-3"
          id="three"
        >
          <div>
            <a href="https://github.com/yosefmelamed/GrubDash"> Grub Dash </a>
          </div>
          <div>
            <p id="grub">
              CRUD app to manage a restaurant’s menu and orders. Built using
              JavaScript, Express.js, and Express Router. Follows RESTful API
              convention and employs extensive middleware.
            </p>
          </div>
        </div>
        <div
          className="d-flex flex-column justify-content-between pt-5 pb-3"
          id="four"
        >
          <div>
            <a href="https://github.com/yosefmelamed/Thinkful-bnb">
              {" "}
              Thinkful BNB{" "}
            </a>
          </div>
          <div>
            <p id="think">
              State of the art responsive frontend website. Built using
              JavaScript, HTML, HTML Forms, media queries, and careful attention
              to detail and design
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
