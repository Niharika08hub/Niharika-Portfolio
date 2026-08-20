function About() {
  return (
    <section id="about" className="bg-white py-24">
      <div className="max-w-8xl mx-auto px-7">

        {/* Heading */}
        <h2 className="text-4xl font-semibold text-center text-gray-900">
          About Me
        </h2>

        {/* Description */}
        <p className="mt-6 text-center text-[20px] leading-9 text-gray-700 max-w-6xl mx-auto">
          I'm a Fourth-year B.Tech Information Technology student at IGDTUW,
          passionate about software engineering, web development, and artificial
          intelligence.
          Through internships and real-world projects, I've gained hands-on experience in building scalable web applications, backend systems, and AI-powered solutions while continuously strengthening my problem-solving skills.

          <br />
          <br />

        </p>

        {/* Two Columns */}
        <div className="grid md:grid-cols-2 gap-32 mt-8 max-w-5xl mx-auto">

          {/* Core Skills */}
                    <div className="ml-15">

            <h3 className="text-2xl font-semibold mb-5 text-gray-900">
              Core Skills
            </h3>

            <ul className="space-y-2 text-[18px] leading-8 text-gray-500 list-disc pl-6">
              <li>C, C++, Python, HTML, CSS, JavaScript</li>
              <li>React.js, Node.js, Tailwind CSS, REST APIs</li>
              <li>Git & GitHub, Jupyter Notebook</li>
              <li>DBMS, OOP, OS, System Design & DSA</li>
            </ul>
          </div>

          {/* Professional Strengths */}
          <div className="ml-26">
            

            <h3 className="text-2xl font-semibold mb-5 text-gray-900">
              Professional Strengths
            </h3>

            <ul className="space-y-2 text-[18px] leading-8 text-gray-500 list-disc pl-6">
              <li>Problem Solving</li>
              <li>Team Collaboration</li>
              <li>Leadership</li>
              <li>Time Management</li>
            </ul>
          </div>

        </div>

      </div>
    </section>
  );
}

export default About;