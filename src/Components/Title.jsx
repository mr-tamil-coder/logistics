import React, { useState, useEffect } from 'react';

const Title = () => {
  const [colors, setColors] = useState([]);
  const text = "Lead King Consolidators";
  
  // Generate random color
  const getRandomColor = () => {
    const colors = [
      'text-blue-400',
      'text-purple-400',
      'text-red-400',
      'text-green-400',
      'text-yellow-400',
      'text-pink-400',
      'text-indigo-400'
    ];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  // Initialize colors for each letter
  useEffect(() => {
    setColors(Array(text.length).fill('').map(() => getRandomColor()));
  }, []);

  // Change random letter color every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      const newColors = [...colors];
      const randomIndex = Math.floor(Math.random() * text.length);
      newColors[randomIndex] = getRandomColor();
      setColors(newColors);
    }, 2000);

    return () => clearInterval(interval);
  }, [colors]);

  return (
    <div className=" bg-gradient-to-b from-gray-900 to-gray-800 flex items-center justify-center">
      <div className="relative p-8 rounded-lg bg-black/30 backdrop-blur-sm">
        <div className="flex justify-center space-x-1">
          {text.split('').map((letter, index) => (
            <span
              key={index}
              className={`text-4xl md:text-6xl font-extrabold ${colors[index]} transform hover:scale-125 transition-all duration-300
                animate-bounce-custom`}
              style={{
                animationDelay: `${index * 0.1}s`,
                display: letter === ' ' ? 'inline-block' : 'inline-block',
                width: letter === ' ' ? '1rem' : 'auto'
              }}
            >
              {letter}
            </span>
          ))}
        </div>
        
        {/* Decorative animated lines */}
        <div className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-red-500 animate-gradient-x" />
        <div className="absolute -top-1 left-0 right-0 h-1 bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 animate-gradient-x" />
      </div>
      
      <style jsx>{`
        @keyframes gradient-x {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        @keyframes bounce-custom {
          0%, 100% { transform: translateY(0); }
          25% { transform: translateY(-10px) rotate(-3deg); }
          75% { transform: translateY(5px) rotate(3deg); }
        }
        
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 3s ease infinite;
        }
        
        .animate-bounce-custom {
          animation: bounce-custom 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Title;