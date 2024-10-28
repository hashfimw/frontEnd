import "./style.css";
import "../src/assets/avatar.png";
import "../src/assets/avatar2.png";
import backgroundImage from "../src/assets/bg4.png";

function About() {
  return (
    <div
      id="about-section"
      className="flex items-center justify-center bg-center bg-cover h-screen"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical bg-opacity-90 items-center justify-items-center">
        <li>
          <div className="timeline-middle mt-10 md:mt-20 pt-4">
            {/* Lingkaran kosong */}
            <div className="h-5 w-5 rounded-full border border-white bg-white"></div>
          </div>
          <div className="timeline-end mt-0 mb-10 md:mb-20 md:ml-10 mr-20">
            <time className="font-light font-sans text-2xl md:text-4xl text-white">
              About Me
            </time>
            <div className="font-light font-sans text-sm md:text-base">
              I am a passionate individual currently enrolled in a Fullstack Web
              Development bootcamp at Digital School Technology Purwadhika. I am
              working towards becoming a skilled Web Developer and, eventually,
              expanding into Mobile App Development. Though I don't have any
              projects under my belt yet, I am determined to build a future
              where I contribute to hundreds or even thousands of projects. I am
              eager to grow, learn, and take on challenges in the world of
              development.
            </div>
          </div>
          <div className="timeline-start mb-10 md:mr-40 md:ml-0 md:mt-20 mt-10">
            <div className="relative">
              <img
                src="../src/assets/avatar.png"
                alt="Avatar"
                className="rounded-lg shadow-lg h-[240px] md:h-[340px] w-auto max-w-full transition-opacity duration-300 ease-in-out hover:opacity-0"
              />
              <img
                src="../src/assets/avatar2.png"
                alt="Alternate Avatar"
                className="absolute inset-0 rounded-lg shadow-lg h-[240px] md:h-[340px] w-auto max-w-full transition-opacity duration-300 ease-in-out opacity-0 hover:opacity-100"
              />
            </div>
          </div>
          <hr className="bg-white w-3/4 md:w-full" />
        </li>

        {/* Bagian Education */}
        <li>
          <hr className="bg-white w-3/4 md:w-full" />
          <div className="timeline-middle mt-10">
            <div className="h-5 w-5 rounded-full border border-white bg-white"></div>
          </div>
          <div className="timeline-end mb-10 md:mb-20 mt-0 md:ml-10 ml-0 mr-20">
            <time className="font-light text-2xl md:text-4xl text-white">
              Education
            </time>
            <div className="font-light font-sans text-sm md:text-base">
              I am a graduate with a Bachelor's degree in Communication Science
              from Pasundan University. Currently, I am attending a Fullstack
              Web Developer bootcamp at Purwadhika, with a strong interest in
              Front End Development.
            </div>
          </div>
          <hr className="bg-white w-3/4 md:w-full" />
        </li>

        {/* Bagian Contact Me */}
        <li>
          <hr className="bg-white w-3/4 md:w-full" />
          <div className="timeline-middle mt-10">
            <div className="h-5 w-5 rounded-full border border-white bg-white"></div>
          </div>
          <div className="timeline-end mb-10 md:mb-20 mt-0 md:ml-10 ml-0 mr-20">
            <time className="font-light text-2xl md:text-4xl text-white">
              Contact Me
            </time>
            <div className="font-light font-sans text-sm md:text-base">
              Feel free to reach out for collaborations or inquiries!
            </div>
          </div>
          <hr className="bg-white w-3/4 md:w-full" />
        </li>
      </ul>
    </div>
  );
}

export default About;
