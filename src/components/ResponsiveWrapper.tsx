import React, { useEffect, useState } from 'react';

interface ResponsiveWrapperProps {
  children: React.ReactNode;
}

const ResponsiveWrapper: React.FC<ResponsiveWrapperProps> = ({ children }) => {
  const [isClient, setIsClient] = useState(false);
  const [dimensions, setDimensions] = useState({
    width: 1024,
    height: 768
  });

  useEffect(() => {
    setIsClient(true);
    
    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    // Initial update
    updateDimensions();

    // Add event listeners
    window.addEventListener('resize', updateDimensions);
    window.addEventListener('orientationchange', () => {
      setTimeout(updateDimensions, 100);
    });

    // Force a reflow to ensure styles are applied
    document.body.offsetHeight;

    return () => {
      window.removeEventListener('resize', updateDimensions);
      window.removeEventListener('orientationchange', updateDimensions);
    };
  }, []);

  // Don't render until client-side hydration is complete
  if (!isClient) {
    return (
      <div className="min-h-screen bg-[#4a2c1d] text-white flex items-center justify-center">
        <div className="text-center">
          <img 
            src="/2ارتحل.png" 
            alt="Irtahil Logo" 
            className="h-16 w-16 mx-auto mb-4 object-contain animate-pulse"
          />
          <div className="text-xl font-bold text-[#a47149]">Loading...</div>
        </div>
      </div>
    );
  }

  return (
    <div 
      className="responsive-container"
      style={{
        '--screen-width': `${dimensions.width}px`,
        '--screen-height': `${dimensions.height}px`,
        '--is-mobile': dimensions.width < 768 ? '1' : '0',
        '--is-tablet': dimensions.width >= 768 && dimensions.width < 1024 ? '1' : '0',
        '--is-desktop': dimensions.width >= 1024 ? '1' : '0',
      } as React.CSSProperties}
    >
      {children}
    </div>
  );
};

export default ResponsiveWrapper;