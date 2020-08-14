import React from 'react';

interface ThrobberProps {
  className?: string
}

const Throbber: React.FC<ThrobberProps> = ({ className }) => {
  return (
    <div className={`throbber-container d-flex justify-content-center align-items-center ${className}`}>
      <img alt="Loading..." src='https://platform.zenginehq.com/images/ajax-loader3.gif' />
    </div>
  );
}

export default Throbber;
