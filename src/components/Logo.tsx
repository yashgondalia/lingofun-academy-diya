// import React from 'react';

// interface LogoProps {
//   variant?: 'full' | 'icon';
//   size?: 'sm' | 'md' | 'lg';
//   className?: string;
// }

// const Logo: React.FC<LogoProps> = ({ variant = 'full', size = 'md', className = '' }) => {
//   const sizeClass = {
//     sm: variant === 'full' ? 'h-8' : 'h-8',
//     md: variant === 'full' ? 'h-10' : 'h-10',
//     lg: variant === 'full' ? 'h-12' : 'h-12',
//   };

//   return (

//     <div className={'flex items-center ${className}'}>
//       {/* Logo icon */}
//       <div className={'relative ${sizeClass[size]} aspect-square bg-lingofun-primary text-white rounded-lg flex items-center justify-center overflow-hidden'}>
//   <div className="absolute inset-0 bg-gradient-to-tr from-lingofun-primary to-lingofun-primary/80"></div>

//   {/* Replacing the "L" with your logo */}

//         <img src="/lovable-uploads/lingofunlogo.jpg" alt="LinGoFun Logo" className="relative z-15 w-12 h-12 object-cover" />

//       {/* Full logo includes text */}
//       {variant === 'full' && (
//         <div className="ml-2 flex flex-col">
//           <span className="font-serif font-bold text-3xl text-lingofun-info leading-tight">
//            The LinGo<span className="text-lingofun-primary">Fun</span>
//           </span>
//           <span className="text-xs text-lingofun-dark/90 text-4xl ">Academy</span>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Logo;

import React from "react";

interface LogoProps {
  variant?: "full" | "icon";
  size?: "sm" | "md" | "lg";
  className?: string;
}

const Logo: React.FC<LogoProps> = ({
  variant = "full",
  size = "md",
  className = "",
}) => {
  const sizeClass = {
    sm: variant === "full" ? "h-8" : "h-8",
    md: variant === "full" ? "h-13" : "h-13",
    lg: variant === "full" ? "h-12" : "h-12",
  };

  return (
    <div className={`flex items-center ${className}`}>
      {/* Logo icon */}
      <div
        className={`relative ${sizeClass[size]} aspect-square bg-lingofun-primary text-white rounded-lg flex items-center justify-center overflow-hidden`}
      >
        <div className="absolute inset-0 bg-gradient-to-tr from-lingofun-primary to-lingofun-primary/80"></div>

        {/* Replacing the "L" with your logo */}
        <img
          src="\lovable-uploads\putlogo.jpg"
          alt="LinGoFun Logo"
          className="relative z-10 w-[11git 0px] h-[110px] object-cover "
          style={{ transform: "scale(1.35)" }}
        />
      </div>

      {/* Full logo includes text */}
      {variant === "full" && (
        <div className="ml-2 flex flex-col">
          <span className="font-serif font-bold text-3xl text-lingofun-info leading-tight">
            The LinGo<span className="text-lingofun-primary">Funn</span>
          </span>
          <span className="text-xs text-lingofun-dark/90 text-4xl">
            Academy
          </span>
        </div>
      )}
    </div>
  );
};

export default Logo;
