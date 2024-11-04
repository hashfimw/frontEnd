"use client";

import { motion } from "framer-motion";
import Image from "next/image";

function Homepage() {
  return (
    <div className="homepage">
      <div className="container mx-auto px-4">
        <div className="hero grid md:grid-cols-2 grid-cols-1 items-center gap-20 pt-36">
          <motion.div
            className="box"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <motion.h1
              className="lg:text-6xl/tight text-3xl font-medium mb-7"
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1 }}
            >
              Hi. It's My First Project With{" "}
              <span className="font-semibold text-sky-300">Tailwind CSS.</span>
            </motion.h1>
            <p className="text-base/8 mb-7">
              The first time I created CSS with Tailwind, I was impressed by its
              simplicity and flexibility in building responsive designs.
            </p>
            <a
              href="#about"
              className="bg-slate-600 hover:bg-slate-800 transition-all py-2 px-4 text-white shadow rounded-full"
            >
              Introduction.
              <i className="ri-eye-line ms-2"></i>
            </a>
          </motion.div>
          <motion.div
            className="box"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <Image
              src="/image/althero2.png"
              alt="HeroImage"
              height={400}
              width={400}
              className="md:w-full w-[400px] mx-auto md:m-0"
            />
          </motion.div>
        </div>
        <div
          className="about grid md:grid-cols-2 grid-cols-1 items-center gap-20 md:pt-32 pt-36"
          id="about"
        >
          <div className="box md:order-1 order-2">
            <div className="relative w-[80%] sm:w-[60%] md:w-[90%] lg:w-[380px] h-auto mx-auto">
              <Image
                src="/image/avatar.png"
                alt="AboutImage"
                className="w-full h-auto transition-opacity duration-300 ease-in-out hover:opacity-0 object-cover"
                height={300}
                width={300}
              />
              <Image
                src="/image/avatar2.png"
                alt="Alternate AboutImage"
                className="absolute inset-0 w-full h-auto transition-opacity duration-300 ease-in-out opacity-0 hover:opacity-100 object-cover"
                height={300}
                width={300}
              />
            </div>
          </div>
          <div className="box md:order-2 order-1">
            <h1 className="lg:text-5xl/tight text-3xl font-medium mb-7">
              About <span className="text-slate-600 ">Me.</span>
            </h1>
            <p className="text-base/loose">
              <span className="text-slate-600 font-light text-xl">
                I'm Hashfi Mawarid{" "}
              </span>{" "}
              a Junior Web Developer, with a strong interest in building
              engaging and intuitive websites. I graduated with a Bachelor's
              degree in Communication Science from Pasundan University, a field
              that differs significantly from web development. However, my
              passion for technology drives me to pursue a career in this area.
              Currently, I'm honing my skills in Fullstack Web Development at
              Digital School Technology Purwadhika, eager to learn and
              contribute to exciting projects.
            </p>
          </div>
        </div>

        <div className="contact pt-32 z-10">
          <h1 className="text-center lg:text-5xl/tight text-3xl font-medium mb-5 ">
            <span className="text-slate-600" id="contactme">
              Let's
            </span>{" "}
            Connect.
          </h1>
          <p className="text-center mb-14">
            I'd love to hear from you! Whether you have questions, feedback, or
            just want to connect, feel free to reach out. Let's start a
            conversation!
          </p>
        </div>
        <div className="sosial-footer flex items-center justify-center gap-3 mx-auto pb-0">
          <a href="https://github.com/hashfimw/" target="_blank">
            <i className="ri-github-fill lg:text-6xl sm:text-6xl text-6xl hover:bg-slate-400 rounded-full"></i>
          </a>
          <a
            href="https://www.instagram.com/hashfimawarid/?hl=en"
            target="_blank"
          >
            <i className="ri-instagram-fill lg:text-6xl sm:text-6xl text-6xl hover:bg-slate-400 rounded-2xl "></i>
          </a>
          <a href="https://id.linkedin.com/in/hashfimawarid" target="_blank">
            <i className="ri-linkedin-box-fill lg:text-6xl sm:text-6xl text-6xl hover:bg-slate-400 rounded-lg"></i>
          </a>
          <a
            href="https://steamcommunity.com/id/hashfimawarid/"
            target="_blank"
          >
            <i className="ri-steam-fill lg:text-6xl sm:text-6xl text-6xl  hover:bg-slate-400 rounded-full"></i>
          </a>
          <a href="https://discordapp.com/users/Piw#8292" target="_blank">
            <i className="ri-discord-fill lg:text-6xl sm:text-6xl text-6xl  hover:bg-slate-400 rounded-full"></i>
          </a>
        </div>
      </div>
      <div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#88B8E0"
            fillOpacity="1"
            d="M0,96L21.8,101.3C43.6,107,87,117,131,117.3C174.5,117,218,107,262,133.3C305.5,160,349,224,393,234.7C436.4,245,480,203,524,197.3C567.3,192,611,224,655,213.3C698.2,203,742,149,785,122.7C829.1,96,873,96,916,128C960,160,1004,224,1047,256C1090.9,288,1135,288,1178,277.3C1221.8,267,1265,245,1309,224C1352.7,203,1396,181,1418,170.7L1440,160L1440,320L1418.2,320C1396.4,320,1353,320,1309,320C1265.5,320,1222,320,1178,320C1134.5,320,1091,320,1047,320C1003.6,320,960,320,916,320C872.7,320,829,320,785,320C741.8,320,698,320,655,320C610.9,320,567,320,524,320C480,320,436,320,393,320C349.1,320,305,320,262,320C218.2,320,175,320,131,320C87.3,320,44,320,22,320L0,320Z"
          ></path>
        </svg>
      </div>
    </div>
  );
}

export default Homepage;
