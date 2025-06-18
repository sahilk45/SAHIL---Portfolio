import React from 'react';

const Logo = ({ className = "w-10 h-10", showGlow = true, animated = true }) => (
  <div className={`${className} relative ${animated ? 'group cursor-pointer' : ''}`}>
    <svg
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
    >
      <defs>
        <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#a855f7" />
          <stop offset="50%" stopColor="#ec4899" />
          <stop offset="100%" stopColor="#3b82f6" />
        </linearGradient>
        <linearGradient id="logoGradientHover" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#c084fc" />
          <stop offset="50%" stopColor="#f472b6" />
          <stop offset="100%" stopColor="#60a5fa" />
        </linearGradient>
      </defs>
      
      <circle
        cx="20"
        cy="20"
        r="18"
        stroke="url(#logoGradient)"
        strokeWidth="2"
        fill="none"
        className={animated ? "group-hover:stroke-[url(#logoGradientHover)] transition-all duration-300" : ""}
      />
      
      <path
        d="M12 14 Q16 10 20 14 Q24 18 28 14"
        stroke="url(#logoGradient)"
        strokeWidth="2.5"
        fill="none"
        strokeLinecap="round"
        className={animated ? "group-hover:stroke-[url(#logoGradientHover)] transition-all duration-300" : ""}
      />
      
      <path
        d="M12 26 Q16 22 20 26 Q24 30 28 26"
        stroke="url(#logoGradient)"
        strokeWidth="2.5"
        fill="none"
        strokeLinecap="round"
        className={animated ? "group-hover:stroke-[url(#logoGradientHover)] transition-all duration-300" : ""}
      />
      
      <polygon
        points="20,16 24,20 20,24 16,20"
        fill="url(#logoGradient)"
        className={animated ? "group-hover:fill-[url(#logoGradientHover)] transition-all duration-300" : ""}
      />

      <circle cx="12" cy="12" r="1.5" fill="url(#logoGradient)" className={animated ? "group-hover:fill-[url(#logoGradientHover)] transition-all duration-300" : ""} />
      <circle cx="28" cy="12" r="1.5" fill="url(#logoGradient)" className={animated ? "group-hover:fill-[url(#logoGradientHover)] transition-all duration-300" : ""} />
      <circle cx="12" cy="28" r="1.5" fill="url(#logoGradient)" className={animated ? "group-hover:fill-[url(#logoGradientHover)] transition-all duration-300" : ""} />
      <circle cx="28" cy="28" r="1.5" fill="url(#logoGradient)" className={animated ? "group-hover:fill-[url(#logoGradientHover)] transition-all duration-300" : ""} />
    </svg>
    
    {/* Glow Effect */}
    {showGlow && animated && (
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 rounded-full blur-md opacity-0 group-hover:opacity-30 transition-opacity duration-300 -z-10"></div>
    )}
  </div>
);

export default Logo;