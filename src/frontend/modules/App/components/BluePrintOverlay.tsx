import React from 'react';

interface BluePrintOverlayProps {
  children: React.ReactNode;
  darken?: number; 
}

const BluePrintOverlay: React.FC<BluePrintOverlayProps> = ({ children, darken = 0 }) => {
  const opacity = Math.max(0, Math.min(1, darken));

  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 to-blue-700">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.07)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.07)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
      </div>

      {opacity > 0 && (
        <div
          className="absolute inset-0 bg-black"
          style={{ opacity }}
        />
      )}

      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center p-4">
        {children}
      </div>
    </div>
  );
};

export default BluePrintOverlay;
