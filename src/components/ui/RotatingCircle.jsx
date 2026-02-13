import React from 'react';

const RotatingCircle = ({ className = '' }) => {
  return (
    <svg 
      className={`w-[300px] xl:w-[506px] h-[300px] xl:h-[506px] rotating-circle ${className}`}
      fill="transparent" 
      viewBox="0 0 506 506" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle 
        cx="253" 
        cy="253" 
        r="250" 
        stroke="#00ffff" 
        strokeWidth="4" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        strokeDasharray="6.32439 206.4177 35.55894 31.68496"
        style={{
          transformOrigin: '50% 50%',
          transformBox: 'fill-box',
        }}
      />
    </svg>
  );
};

export default RotatingCircle;
