import { useState, useEffect } from 'react';

const Hero = ({ 
  backgroundImage, 
  title, 
  description, 
  borderColor = '#ffffff',
  typewriterSpeed = 100 
}) => {
  const [displayedTitle, setDisplayedTitle] = useState('');
  const [titleComplete, setTitleComplete] = useState(false);

  useEffect(() => {
    if (!title) return;
    
    let i = 0;
    const timer = setInterval(() => {
      if (i < title.length) {
        setDisplayedTitle(title.slice(0, i + 1));
        i++;
      } else {
        setTitleComplete(true);
        clearInterval(timer);
      }
    }, typewriterSpeed);

    return () => clearInterval(timer);
  }, [title, typewriterSpeed]);

  // Test image loading
  useEffect(() => {
    if (backgroundImage) {
      const img = new Image();
      img.onload = () => console.log('✅ Background image loaded successfully');
      img.onerror = () => console.error('❌ Failed to load background image:', backgroundImage);
      img.src = backgroundImage;
    }
  }, [backgroundImage]);

  console.log('Background image path:', backgroundImage);

  return (
    <div 
      className={`min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat relative bg-[url("/pictures/background.jpg")] z-10`}
    >


      {/* Overlay for better text visibility */}
      <div className="absolute inset-0 bg-black brighten"></div>
      
      <div className="text-center z-10 px-4 max-w-4xl">
        {/* Typewriter Title */}
        <h1 
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8"
          style={{
            WebkitTextStroke: `2px ${borderColor}`,
            color: 'transparent',
            textShadow: 'none'
          }}
        >
          {displayedTitle}
          {!titleComplete && <span className="animate-pulse">|</span>}
        </h1>
        
        {/* Hollow Description */}
        {description && titleComplete && (
          <p 
            className="text-lg md:text-xl lg:text-2xl leading-relaxed animate-fade-in"
            style={{
              WebkitTextStroke: `1px ${borderColor}`,
              color: 'transparent',
              textShadow: 'none'
            }}
          >
            {description}
          </p>
        )}
      </div>
      

      {/*
            <style jsx>{`
        .animate-fade-in {
          animation: fadeIn 1s ease-in;
        }
        
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
      
      */}
      <style jsx>{`
      .brighten {
        animation: brighten 10s ease-in-out forwards;
      }
      @keyframes brighten {
        from { opacity: 0.8; }
        to { opacity: 0.4; }
      `}</style>

    </div>
  );
};

export default Hero;