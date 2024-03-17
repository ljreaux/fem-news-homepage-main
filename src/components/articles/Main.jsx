import image3 from "../../assets/images/image-web-3-desktop.jpg";
import image3mobile from "../../assets/images/image-web-3-mobile.jpg";

export default function Main() {
  return (
    <div className="main-section">
      <img srcSet={`${image3mobile} 600w`} src={image3} alt="main image" />
      <h1 className="heading-color">The Bright Future of Web 3.0?</h1>
      <div>
        <p className="section-color">
          We dive into the next evolution of the web that claims to put the
          power of the platforms back into the hands of people. But is it really
          fulfilling its promise?
        </p>
        <button className="btn">READ MORE</button>
      </div>
    </div>
  );
}
