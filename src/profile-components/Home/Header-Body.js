export default function HeaderBody() {
  let profile = (
    <>
      I am a <span id="one">fullstack</span> developer, and{" "}
      <span id="two">I love to</span> work across the stack. I love to{" "}
      <span id="three">problem solve</span>, learn, and
      <span id="four"> teach</span>, and I am a{" "}
      <span id="five">strong team player.</span> I am{" "}
      <span id="six">passionate about developing</span> the web and harnessing
      its power to <span id="seven">impact our</span> daily lives and to{" "}
      <span id="eight">change the world </span>
      for the better.
    </>
  );
  return (
    <>
      <div id="home">
        <div id="back"></div>
        <h1 className="text-center fs-5 fs-1">
          Hello. My Name is Yosef Melamed
        </h1>
        <div className="d-none d-lg-flex justify-content-center pt-2">
          <img id="profile" src="images/mypicture2.jpg" alt="myPic" />
        </div>
        <div className="d-flex d-lg-none justify-content-center pt-2">
          <img id="profile-mobile" src="images/mypicture2.jpg" alt="myPic" />
        </div>

        <h4 id="Home">
          <div className="d-none d-lg-block text-center">{profile}</div>
        </h4>
        <div id="Home-b">
          <h4 id="Home-b">
            <div className="d-block text-center d-lg-none" id="Home-b">
              {profile}
            </div>
          </h4>
        </div>
      </div>
    </>
  );
}
