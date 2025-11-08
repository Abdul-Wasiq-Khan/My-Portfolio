export default function About() {
  return (
    <div className="text-white bg-neutral-800  mx-6 my-8 rounded-lg" >

      
      <div className="flex flex-col lg:flex-row gap-8 p-2 m-4">
        {/* Image Section */}
        <div className="text-center">
          <a href="https://github.com/Abdul-Wasiq-Khan">
            <img 
              className="w-32 h-32 mx-auto mb-4" 
              src="pictures/profilepicture.png" 
              alt="Description" 
            />
          </a>
          <p className="font-semibold">Abdul Wasiq khan</p>
          <a 
            href="https://github.com/Abdul-Wasiq-Khan" 
            className="text-blue-400 hover:text-blue-300 underline block mt-8"
          >
            Link to Github
          </a>
        </div>

        {/* Description and Skills Section */}
        <div className="flex-1 mt-2">
          <p className="mb-6 leading-relaxed">
            I am an aspiring Robotics Engineer specializing in software driven robotic systems.<br/>
            I am proficient in Python, C++, and full-stack web development using React/Next + Tailwind CSS.<br/> 
            Experienced in IoT, embedded systems and lead in hands on projects that solve real-world problems.
          </p>
          
          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div>
              <p className="font-semibold mb-3">Programming Languages:</p>
              <ul className="list-disc ml-6 space-y-1 text-white">
                <li>Python</li>
                <li>C++</li>
                <li>HTML, CSS, JavaScript</li>
              </ul>
            </div>
            
            <div>
              <p className="font-semibold mb-3">Web Development:</p>
              <ul className="list-disc ml-6 space-y-1 text-white">
                <li>React.js</li>
                <li>Next.js</li>
                <li>Tailwind CSS</li>
                <li>Node.js</li>
              </ul>
            </div>
            
            <div>
              <p className="font-semibold mb-3">Hardware & electronics</p>
              <ul className="list-disc ml-6 space-y-1 text-white">
                <li>Arduino</li>
                <li>ESP</li>
                <li>IOT systems</li>
                <li>Circuit design</li>
                <li>Robotics design and assembly</li>
              </ul>
            </div>
            
            <div>
              <p className="font-semibold mb-3">Others:</p>
              <ul className="list-disc ml-6 space-y-1 text-white">
                <li>3D Modeling</li>
                <li>Machine Learning</li>
                <li>Computer Vision</li>
                <li>Graphic design</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}