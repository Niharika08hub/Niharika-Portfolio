import { FiExternalLink } from "react-icons/fi";
function Experience() {
  return (
    <section id="experience" className="bg-gray-100 py-21">
      <div className="max-w-6xl mx-auto px-8">

        {/* Heading */}
        <h2 className="text-4xl font-semibold text-center text-gray-900 mb-10">
          Experience
        </h2>

        <div className="border-l-2 border-gray-700 pl-6 space-y-3">

          {/* 1 */}
          <div>
           <h3 className="flex items-center gap-2 text-xl font-semibold text-gray-900">
  <span>● AppSquadz Software Pvt. Ltd. | Software Developer Intern</span>

  <a
    href="https://drive.google.com/file/d/1xiQKZGd-NrGRfYnvppbydhgsmAxI_q4S/view"
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-500 hover:text-blue-600 transition"
  >
    <FiExternalLink size={18} />
  </a>
</h3>
            <p className="text-sm text-gray-500 mt-1">
              June 2026 – July 2026 -  ( Noida )
            </p>

            <ul className="list-disc pl-5 mt-2 space-y-1 text-[15px] leading-6 text-gray-700">
              <li>
                Assisted the development team in building and debugging software
                applications using Git for version control.
              </li>
              <li>
                Performed SQL database operations, feature testing, code
                reviews, and technical documentation.
              </li>
            </ul>
          </div>

          {/* 2 */}
          <div>
            <h3 className="flex items-center gap-2 text-xl font-semibold text-gray-900">
  <span>● IGDTUW | Undergraduate Researcher</span>

  
</h3>

            <p className="text-sm text-gray-500 mt-1">
              May 2025 – July 2025 -  ( Delhi )
            </p>

            <ul className="list-disc pl-5 mt-2 space-y-1 text-[15px] leading-6 text-gray-700">
              <li>
                Conducted research in bioinformatics, metaheuristic algorithms,
                and cybersecurity applications.
              </li>
              <li>
                Implemented the RSWO–MPA optimization algorithm for Intrusion
                Detection Systems to improve classification accuracy and reduce
                false positives.
              </li>
            </ul>
          </div>

          {/* 3 */}
          <div>
           <h3 className="flex items-center gap-2 text-xl font-semibold text-gray-900">
  <span>● Timeout Productions | Business Development Associate Intern</span>

  <a
    href="https://drive.google.com/file/d/17VhN42YXbFJfYKX7EKRVNusrIumsPluk/view?usp=sharing"
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-500 hover:text-blue-600 transition"
  >
    <FiExternalLink size={18} />
  </a>
</h3>

            <p className="text-sm text-gray-500 mt-1">
              July 2025 – September 2025 - ( Hybrid )
            </p>

            <ul className="list-disc pl-5 mt-2 space-y-1 text-[15px] leading-6 text-gray-700">
              <li>
                Managed production workflows and resource allocation for digital
                media projects.
              </li>
              <li>
                Oversaw post-production quality assurance and operational
                logistics for smooth project delivery.
              </li>
            </ul>
          </div>

          {/* 4 */}
          <div>
            <h3 className="flex items-center gap-2 text-xl font-semibold text-gray-900">
  <span>● Internshala Trainings | Web Development Intern</span>

  <a
    href="https://trainings.internshala.com/view_certificate/i0eqwvlev5n/h32l0h475s2/"
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-500 hover:text-blue-600 transition"
  >
    <FiExternalLink size={18} />
  </a>
</h3>

            <p className="text-sm text-gray-500 mt-1">
              June 2024 – August 2024 - ( Remote )
            </p>

            <ul className="list-disc pl-5 mt-2 space-y-1 text-[15px] leading-6 text-gray-700">
              <li>
                Developed a responsive full-stack web application using HTML,
                CSS, JavaScript, Bootstrap, React, PHP, and MySQL.
              </li>
              <li>
                Explored AI integration and implemented practical web features.
              </li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Experience;