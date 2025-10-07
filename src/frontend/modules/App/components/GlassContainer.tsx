import React, { CSSProperties } from 'react';

interface GlassContainerProps {
  children: React.ReactNode;
  hoverOpacity?: number; 
  className?: string;
  size?: 'small' | 'medium' | 'large';
}

const GlassContainer: React.FC<GlassContainerProps> = ({
  children,
  className = '',
  size = 'small',
}) => {
  let paddingClass = 'p-2';
  if (size === 'medium') paddingClass = 'p-4';
  if (size === 'large') paddingClass = 'p-6';

  const style: CSSProperties = {
    transition: 'box-shadow 0.3s ease',
  };

  return (
    <div
      className={`
        backdrop-blur-md
        bg-white/10
        border
        border-white/20
        rounded-2xl
        shadow-md
        ${paddingClass}
        ${className}
        hover:shadow-[0_0_30px_15px_rgba(255,255,255,0.05)]
        transition-shadow
        duration-300
      `}
      style={style}
    >
      {children}
    </div>
  );
};

export default GlassContainer;
