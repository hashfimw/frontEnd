import "./style.css";
import "../src/assets/backgroundhero.jpg";
import { TypeAnimation } from "react-type-animation";

function Hero() {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about-section");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      <div className="bg-opacity-60 hero bg-base-200 ">
        <img src="../src/assets/backgroundhero.jpg" alt="background" />
        <div className="hero-center text-justify">
          <div className="max-w-md">
            <h1 className="text-8xl font-light animate-pulse">Hello</h1>

            <TypeAnimation
              sequence={[
                "I'm Hashfi Mawarid, a Web Developer.",
                1000,
                "",
                300, // Menunggu 1 detik sebelum memulai ulang
              ]}
              speed={50} // Kecepatan mengetik dalam ms
              className="text-5xl font-light py-4 text-justify"
              wrapper="h1" // Membungkus dalam elemen h1
              repeat={Infinity} // Mengulangi animasi
            />

            <button className="btn" onClick={scrollToAbout}>
              •Read More•
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
