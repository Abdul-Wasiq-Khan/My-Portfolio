import LanguagesCard from './LanguagesCard.jsx';
export default function About() {
  return (
    <div className="text-white bg-neutral-800  mx-6 mt-8 rounded-lg min-h-screen" >
      <div className="headings">About Me</div>
      
      <div className="flex flex-col lg:flex-row gap-8 p-5 m-4 rounded-lg">
        
        {/* Image Section */}
        <div className="text-center ">
          <a href="https://github.com/Abdul-Wasiq-Khan">
            <img 
              className="w-32 h-32 mx-auto mb-4" 
              src="pictures/profilepicture.png" 
              alt="Description" 
            />
          </a>

        </div>

        {/* Description and Skills Section */}
        <div className="flex-1 mt-2">
          <p className="mb-6 leading-relaxed">
            I am Abdul Wasiq Khan, an aspiring Robotics Engineer specializing in software driven robotic systems.<br/>
            I am proficient in Python, C++, and full-stack web development using React/Next + Tailwind CSS.<br/> 
            Experienced in IoT, embedded systems and lead in hands on projects that solve real-world problems.
          </p>
          
         
        </div>
      </div>
      <LanguagesCard />

    </div>
  );
}