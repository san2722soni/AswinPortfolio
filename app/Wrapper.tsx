import React from 'react';

interface WrapperProps {
  children: React.ReactNode;
}

const Wrapper: React.FC<WrapperProps> = ({ children }) => {
  return (
    <div style={{ overflowX: 'hidden' }}>
      {children}
    </div>
  );
};

export default Wrapper;