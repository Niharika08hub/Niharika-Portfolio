import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

function Contact() {
  return (
    <section
      id="contact"
      className="bg-[#24282d] text-white pt-14 py-1"
    >
      <div className="max-w-7xl mx-auto px-4">

        {/* Stats */}

        <h2 className="text-4xl font-bold text-center mb-16">
          My Journey in Numbers
        </h2>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 text-center">

          <div>
            <h3 className="text-5xl font-bold text-blue-500">
              500+
            </h3>
            <p className="mt-3 text-xl">
              Coding Problems Solved
            </p>
          </div>

          <div>
            <h3 className="text-5xl font-bold text-blue-500">
              5+
            </h3>
            <p className="mt-3 text-xl">
              Hackathons Participated
            </p>
          </div>

          <div>
            <h3 className="text-5xl font-bold text-blue-500">
              4+
            </h3>
            <p className="mt-3 text-xl">
              Projects Completed
            </p>
          </div>

          <div>
            <h3 className="text-5xl font-bold text-blue-500">
              2+
            </h3>
            <p className="mt-3 text-xl">
              Open Source Contributions
            </p>
          </div>

        </div>

        {/* Divider */}

        <div className="border-t border-gray-500 my-16"></div>

        {/* Contact */}

        <div className="text-center">

          <h2 className="text-5xl font-bold mb-6">
            Contact Me
          </h2>

          <p className="text-xl">
            Email :{" "}
            <a
              href="mailto:official.niharikaa23@gmail.com"
              className="underline hover:text-blue-400"
            >
              official.niharikaa23@gmail.com
            </a>
          </p>

          <div className="flex justify-center gap-8 mt-8 text-5xl">

            <a
              href="mailto:official.niharikaa23@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <FaEnvelope className="hover:text-blue-400 transition" />
            </a>

            <a
              href="https://www.linkedin.com/in/niharika-305545252"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin className="hover:text-blue-400 transition" />
            </a>

            <a
              href="https://github.com/Niharika08hub"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub className="hover:text-blue-400 transition" />
            </a>

          </div>

          <p className="text-gray-400 mt-12 text-sm">
            © 2026 Niharika. All Rights Reserved.
          </p>

        </div>

      </div>
    </section>
  );
}

export default Contact;