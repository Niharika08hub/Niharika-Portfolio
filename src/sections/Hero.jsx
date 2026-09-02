import profile from "../assets/image.png";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen bg-gradient-to-br from-[#0f172a] via-[#1e3a8a] to-[#4c1d95] text-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto min-h-screen flex flex-col-reverse lg:flex-row items-center justify-center lg:justify-between px-6 sm:px-10 pt-28 pb-24 gap-14">

        {/* LEFT */}
        <div className="max-w-2xl text-center lg:text-left">

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
            Hi, I'm{" "}
            <span className="text-yellow-400">
              Niharika
            </span>
          </h1>

          <h2 className="text-lg sm:text-xl lg:text-2xl mt-5 text-gray-200">
            B.Tech Information Technology '27
          </h2>

          <p className="mt-6 text-sm sm:text-base leading-7 text-gray-300 max-w-lg mx-auto lg:mx-0">
            Passionate about technology and problem-solving.
            <br />
            Driven by curiosity and innovation.
          </p>

          <a
            href="https://drive.google.com/file/d/1tafs3OXKUyR-2sYK8BX_YEPFwhUmC-q1/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-8 bg-white text-black px-7 py-3 rounded-xl font-semibold hover:scale-105 transition duration-300"
          >
            Resume
          </a>

          <div className="flex justify-center lg:justify-start gap-6 mt-10 text-4xl sm:text-5xl">

            <a
              href="https://www.linkedin.com/in/niharika-305545252"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="hover:text-yellow-300 hover:scale-110 transition duration-300" />
            </a>

            <a
              href="https://github.com/Niharika08hub"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="hover:text-yellow-300 hover:scale-110 transition duration-300" />
            </a>

          </div>

        </div>

        {/* RIGHT */}
        <div className="flex flex-col items-center">

          <div className="w-52 h-52 sm:w-64 sm:h-64 lg:w-[250px] lg:h-[250px] rounded-full border-4 border-white overflow-hidden shadow-2xl">

            <img
              src={profile}
              alt="Niharika"
              className="w-full h-full object-cover"
            />

          </div>

          <h2 className="mt-6 text-2xl sm:text-3xl lg:text-4xl italic text-yellow-300 font-bold text-center">
            Dream. Build. Inspire.
          </h2>

        </div>

      </div>

      {/* Wave Divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg
          viewBox="0 0 1440 200"
          className="w-full h-20 sm:h-28 lg:h-[140px]"
          preserveAspectRatio="none"
        >
          <path
            d="M0,80 C360,0 1080,0 1440,80 L1440,200 L0,200 Z"
            fill="white"
          />
        </svg>
      </div>

    </section>
  );
}

export default Hero;