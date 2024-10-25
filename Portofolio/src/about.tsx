import "./style.css";
import "../src/assets/avatar.png";

function About() {
  return (
    <div id="about-section">
      <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical bg-black bg-opacity-90">
        <li>
          <div className="timeline-middle mt-20 pt-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="white"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-end mt-0 mb-20">
            <time className="font-light font-sans text-4xl">About Me</time>
            <div className="font-light text-2xl"></div>I am a passionate
            individual currently enrolled in a Fullstack Web Development
            bootcamp at Digital School Technology Purwadhika. I am working
            towards becoming a skilled Web Developer and, eventually, expanding
            into Mobile App Development. Though I don't have any projects under
            my belt yet, I am determined to build a future where I contribute to
            hundreds or even thousands of projects. I am eager to grow, learn,
            and take on challenges in the world of development.
          </div>
          <div className="timeline-start mb 10 mr-40 ml-0 mt-20">
            <img
              src="../src/assets/avatar.png"
              alt="Avatar"
              className="rounded-lg shadow-lg h-[340px]"
            />
          </div>
          <hr className="bg-white" />
        </li>
        <li>
          <hr className="bg-white" />
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="white"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-end mb-20 mt-0">
            <time className="font-light text-4xl">Education</time>
            <div className="text-lg font-black"></div>I am a graduate with a
            Bachelor's degree in Communication Science from Universitas
            Pasundan. Currently, I am attending a Fullstack Web Developer
            bootcamp at Purwadhika, with a strong interest in Front End
            Development.
          </div>

          <hr className="bg-white" />
        </li>
      </ul>
    </div>
  );
}

export default About;
