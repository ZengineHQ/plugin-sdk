import React from 'react';

interface ThrobberProps {
  wrapperClass?: string
  theme?: 'primary' | 'zengine' | 'secondary' | 'success' | 'error' | 'info'
}

const Throbber: React.FC<ThrobberProps> = ({ wrapperClass, theme }) => {
  return (
    <div
      className={`throbber-container d-flex justify-content-center align-items-center ${wrapperClass}`}
      role="status"
    >
      { theme === 'zengine' ? (
        <img alt="Loading..." src="https://platform.zenginehq.com/images/ajax-loader3.gif" />
      ) : (
        <div className={`spinner-border text-${theme}`} role="status">
          <span className="sr-only">Loading...</span>
        </div>
      )}
    </div>
  );
}

Throbber.defaultProps = {
  theme: 'primary'
}

export default Throbber;
