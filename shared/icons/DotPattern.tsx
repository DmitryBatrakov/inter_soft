
// import { SVGProps } from "react"

// const DotPattern = (props: SVGProps<SVGSVGElement>) => (
//   <svg xmlns="http://www.w3.org/2000/svg" width={200} height={200} {...props}>
//     <defs>
//       <pattern
//         id="a"
//         width={20}
//         height={20}
//         x={0}
//         y={0}
//         patternUnits="userSpaceOnUse"
//       >
//         <circle cx={3} cy={3} r={3} />
//       </pattern>
//     </defs>
//     <path fill="url(#a)" d="M0 0h100v100H0z" />
//   </svg>
// )
// export default DotPattern

import React from 'react';

interface DotGridProps {
  size?: number; // общий размер SVG
  dotColor?: string;
  dotRadius?: number;
  className?: string;
}

const DotPattern: React.FC<DotGridProps> = ({ 
  size = 150, 
  dotColor = "currentColor", 
  dotRadius,
  className
}) => {
  const cellSize = size / 6; // рассчитываем шаг сетки

  return (
    <svg 
      width={size} 
      height={size} 
      viewBox={`0 0 ${size} ${size}`} 
      xmlns="http://www.w3.org"
      className={className}
    >
      <defs>
        <pattern 
          id="dotGrid6x6" 
          x="0" 
          y="0" 
          width={cellSize} 
          height={cellSize} 
          patternUnits="userSpaceOnUse"
        >
          <circle 
            cx={cellSize / 2} 
            cy={cellSize / 2} 
            r={dotRadius} 
            fill={dotColor} 
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#dotGrid6x6)" />
    </svg>
  );
};

export default DotPattern;
