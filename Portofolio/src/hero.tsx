import "./style.css";
import "../src/assets/backgroundhero.jpg";
import { TypeAnimation } from "react-type-animation";
import backgroundImage from "../src/assets/backgroundhero.jpg";

function Hero() {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about-section");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      id="hero-section"
      className="flex items-center justify-center bg-center bg-cover h-screen"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <div>
        <div className="hero-center text-justify">
          <div className="max-w-md text-right">
            <h1 className="text-8xl font-light animate-pulse text-justify text-white">
              Hi.
            </h1>
            <TypeAnimation
              sequence={[
                1000,
                "I'm Hashfi Mawarid, a Web Des***n.",
                700,
                "I'm Hashfi Mawarid, a Web Developer.",
              ]}
              speed={50} // Kecepatan mengetik dalam ms
              className="text-6xl font-light py-4 text-left text-white"
              wrapper="h1" // Membungkus dalam elemen h1
              repeat={0} // Mengulangi animasi
            />

            <button className="btn btn-sm font-light" onClick={scrollToAbout}>
              Read More•
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
