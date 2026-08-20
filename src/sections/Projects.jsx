import { FiExternalLink } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";

function Projects() {
  return (
    <section id="projects" className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-8">

        {/* Heading */}
        <h2 className="text-4xl font-semibold text-center text-gray-900 mb-10">
          Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-5">


                    {/* ================= Project 1 ================= */}

          <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-4 hover:shadow-md transition">

            <h3 className="text-[22px] font-semibold text-gray-900">
Restaurant - AI-Powered Management SaaS            </h3>

            <p className="mt-2 text-[15px] leading-7 text-gray-600">
             AI-powered B2B SaaS platform for restaurants to manage their digital presence, reservations, orders, menus, inventory, staff and analytics from one centralized platform, with AI-driven insights, role-based access, subscriptions and Razorpay payments using React.js, Node.js, Express.js and MongoDB.
            </p>

            <div className="flex gap-2 mt-4">
 <a
                href="https://restrosphere-1.onrender.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-md text-sm hover:bg-blue-700 transition"
              >
                <FiExternalLink size={15} />
                Live Demo
              </a>
          
              <a
                href="https://github.com/Niharika08hub/RestroSphere"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 border border-blue-600 text-blue-600 px-4 py-2 rounded-md text-sm hover:bg-blue-50 transition"
              >
                <FaGithub />
                GitHub
              </a>

            </div>

          </div>
          {/* ================= Project 2 ================= */}


          <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-4 hover:shadow-md transition">

            <h3 className="text-[22px] font-semibold text-gray-900">
              SkillSync AI
            </h3>

            <p className="mt-2 text-[15px] leading-7 text-gray-600">
              AI-powered recruitment platform with resume analysis,
              semantic embeddings, candidate-job matching,
              role-based authentication and job management using
              React.js, Node.js, Express.js, MongoDB Atlas,
              Google Gemini AI and JWT.
            </p>

            <div className="flex gap-2 mt-4">

              <a
                href="https://skillsync-ai-2-nfh0.onrender.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-md text-sm hover:bg-blue-700 transition"
              >
                <FiExternalLink size={15} />
                Live Demo
              </a>

              <a
                href="https://github.com/Niharika08hub/skillsync-ai"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 border border-blue-600 text-blue-600 px-4 py-2 rounded-md text-sm hover:bg-blue-50 transition"
              >
                <FaGithub />
                GitHub
              </a>

            </div>

          </div>



          {/* ================= Project 3 ================= */}

          <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-4 hover:shadow-md transition">

            <h3 className="text-[22px] font-semibold text-gray-900">
              Fake News Detection System
            </h3>

            <p className="mt-2 text-[15px] leading-7 text-gray-600">
              NLP-powered fake news detection using TF-IDF,
              Logistic Regression and Random Forest with
              precision, recall and F1-score evaluation.
            </p>

            <div className="flex gap-2 mt-4">

            

               <a
                href="https://drive.google.com/file/d/1Ie_VmejfWbU4gDOAH37-LGQ5YbyuGCCj/view"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-md text-sm hover:bg-blue-700 transition"
              >
                <FiExternalLink size={15} />
                Paper
              </a>
<a
                href="https://github.com/Niharika08hub/Fake-News-Detection"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 border border-blue-600 text-blue-600 px-4 py-2 rounded-md text-sm hover:bg-blue-50 transition"
              >
                <FaGithub />
                GitHub
              </a>
            </div>

          </div>

          {/* ================= Project 4 ================= */}

          <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-4 hover:shadow-md transition">

            <h3 className="text-[22px] font-semibold text-gray-900">
IGDTUW Lost & Found

            </h3>

            <p className="mt-2 text-[15px] leading-7 text-gray-600">
              A responsive React-based web application that helps students report, browse, and claim lost items with Firebase Authentication and Firestore integration.
            </p>

            <div className="flex gap-2 mt-4">

              <a
                href="https://igdtuw-lost-found.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-md text-sm hover:bg-blue-700 transition"
              >
                <FiExternalLink size={15} />
                Live Demo
              </a>

              <a
                href="https://github.com/Niharika08hub/IGDTUW-Lost-Found-"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 border border-blue-600 text-blue-600 px-4 py-2 rounded-md text-sm hover:bg-blue-50 transition"
              >
                <FaGithub />
                GitHub
              </a>

            </div>

          </div>

        </div>
        
      </div>
     <div className="mt-10 text-center">
  

  <a
    href="https://github.com/Niharika08hub"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center gap-2 mt-4 bg-gray-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition"
  >
    <FaGithub className="text-lg" />
    Explore All Projects
  </a>
</div>
    </section>
  );
}

export default Projects;