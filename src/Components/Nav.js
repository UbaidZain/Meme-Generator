import img from "../Images/nav-img.png";
function Navbar() {
  return (
    <nav>
      <div className="nav-main">
        <img src={img} className="nav-logo" />
        <h2>Meme Generator</h2>
      </div>

      <p> React Course - Project 3</p>
    </nav>
  );
}
export default Navbar;
