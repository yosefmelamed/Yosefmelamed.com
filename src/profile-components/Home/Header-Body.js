export default function HeaderBody() {
  return (
    <>
      <div id="back"></div>
      <h1>Hello. My Name is Yosef Melamed</h1>
      <img className="profile" src="images/mypicture2.jpg" alt="" />
      {/* <img
        className="computer"
        src="https://media.istockphoto.com/photos/code-programming-for-website-editors-view-picture-id1290492381?k=20&m=1290492381&s=612x612&w=0&h=FsX6JK-AYJuG6oV8hXlBmuoT7lXcMogVVoCLsSHesDU="
        alt=""
      /> */}
      <h4 id="Home">
        I am a <span id="one">fullstack</span> developer, and{" "}
        <span id="two">I love to</span> work across the stack. I love to{" "}
        <span id="three">problem solve</span>, learn, and
        <span id="four"> teach</span>, and I am a{" "}
        <span id="five">strong team player.</span> I am{" "}
        <span id="six">passionate about developing</span> the web and harnessing
        its power to <span id="seven">impact our</span> daily lives and to{" "}
        <span id="eight">change the world </span>
        for the better.
      </h4>
    </>
  );
}