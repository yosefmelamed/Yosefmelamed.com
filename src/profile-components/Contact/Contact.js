export default function Contact() {
  return (
    <>
      <footer id="contact" className="d-flex flex-column">
        <h3>Feel free to reach out and see more about me at:</h3>
        <div>
          <a
            class="linkdin"
            target="blank"
            href="https://www.linkedin.com/in/yosef-melamed"
          >
            LinkedIn
          </a>
          <a
            class="linkdin"
            target="blank"
            href="https://www.linkedin.com/in/yosef-melamed"
          >
            <img
              class="linkdinlogo"
              src="https://s.yimg.com/fz/api/res/1.2/YVck0ntH8cXwQqHyq5ASBA--~C/YXBwaWQ9c3JjaGRkO2ZpPWZpdDtoPTI0MDtxPTgwO3c9MjQw/https://s.yimg.com/zb/imgv1/b686c4f9-b176-3be3-abd2-3ad3121782b1/t_500x300"
              alt="linkedin logo"
            />
          </a>
        </div>
        <div>
          <a
            class="github"
            target="blank"
            href="https://github.com/yosefmelamed"
          >
            GitHub
          </a>
          <a
            class="github"
            target="blank"
            href="https://github.com/yosefmelamed"
          >
            <img
              class="githublogo"
              src="https://tse1.mm.bing.net/th?id=OIP.EgSPriuEnAtlIWJV8R_E1QHaGs&pid=Api&rs=1&c=1&qlt=95&w=114&h=103"
              alt="Github logo"
            />
          </a>
        </div>
        <div>
          <a href="/" id="goback" className="text-center">
            Click Here to Go Back!
          </a>
        </div>
      </footer>
    </>
  );
}
