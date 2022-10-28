export default function Portfolio() {
  return (
    <>
      <div id="portback"></div>
      <h2 className="p-2 m-2 text-center">My Portfolio</h2>
      <h4 className="p-2 m-2">
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
      </h4>
      <div className="d-flex flex-row">
        <a
          href="https://final-caps-22-client.herokuapp.com/dashboard"
          id="restaurant"
        >
          {" "}
          Restauarant Resrevations{" "}
        </a>
        <a href="https://github.com/yosefmelamed/We-love-movies3" id="welove">
          {" "}
          We Love Movies{" "}
        </a>
        <a href="https://github.com/yosefmelamed/GrubDash" id="grub">
          {" "}
          Grub Dash{" "}
        </a>
        <a href="https://github.com/yosefmelamed/Thinkful-bnb" id="think">
          {" "}
          Thinkful BNB{" "}
        </a>
      </div>
      <div className="d-flex flex-row">
        <p id="rest">
          Full-stack app for creating and managing restaurant reservations.
          Built using HTML, JavaScript, Bootstrap CSS, React.js, Express.js,
          PostgreSQL, and Knex.js.
        </p>
        <p id="welove">
          Database and server for viewing movies, theaters, and movie reviews.
          Built using Express.js, Knex.js, and PostgreSQL and follows RESTful
          API convention.
        </p>
        <p id="grub">
          CRUD app to manage a restaurant’s menu and orders. Built using
          JavaScript, Express.js, and Express Router. Follows RESTful API
          convention and employs extensive middleware.
        </p>
        <p id="think">
          State of the art responsive frontend website. Built using JavaScript,
          HTML, HTML Forms, media queries, and careful attention to detail and
          design
        </p>
      </div>

      {/* <img
        id="portimg"
        src="https://media.istockphoto.com/photos/digital-tablet-pc-and-smart-phone-isolated-on-white-background-picture-id485560875?k=20&m=485560875&s=612x612&w=0&h=ZRfz-JyqMZEMo3-YXP6P68XNTEKP0rg27asQnyb_4SM="
        alt="tech"
      ></img> */}
      {/* <img
        id="portimg"
        src="https://media.istockphoto.com/photos/presentation-center-picture-id174917916?k=20&m=174917916&s=612x612&w=0&h=3Nn8vq0OwahnZ8KGrZYL4CeCxVZCJY6zfL4QbXfaUT4="
        alt="tech"
      ></img> */}
    </>
  );
}
