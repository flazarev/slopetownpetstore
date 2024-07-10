import React from 'react';

interface LinkProps {
  href: string;
  className?: string; 
  children: React.ReactNode; 
}

const LinkComponent: React.FC<LinkProps> = ({ href, className, children }) => {
  return (
    <a href={href} className={`text-white hover:text-gray-300 ${className ?? ''}`}>
      {children}
    </a>
  );
}

export default LinkComponent; 
