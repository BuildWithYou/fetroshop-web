import React from "react";

interface BackdropComp {
  children: React.ReactNode;
}

const Backdrop: React.FC<BackdropComp> = ({ children }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black opacity-50 z-50">
      {children}
    </div>
  );
};

export default Backdrop;
