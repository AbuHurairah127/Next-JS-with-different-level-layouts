import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="h-28 bg-white text-black text-center">Header</div>
      {children}
    </>
  );
};

export default layout;
