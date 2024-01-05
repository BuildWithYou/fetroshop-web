import React from "react";

interface BackdropComp {
  children: React.ReactNode;
  open: boolean;
}

const Backdrop: React.FC<BackdropComp> = ({ children, open }) => {
  return (
    <React.Fragment>
      {open && (
        <div className="fixed top-0 left-0 w-full h-full bg-black opacity-50 z-50">
          {children}
        </div>
      )}
    </React.Fragment>
  );
};

export default Backdrop;
