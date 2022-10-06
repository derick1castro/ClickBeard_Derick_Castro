import React from "react";

const ComponenteModalAgenda = ({ id = "modal", onClose = () => {}, children }) => {
  const handleOutSideClick = (e) => {
    if (e.target.id === id) onClose();
  };
  return (
    // modal
    <div
      className="w-full h-screen absolute top-0 left-0 z-50 bg-[rgba(0,0,0,0.40)] flex justify-center items-center "
      id={id}
      onClick={handleOutSideClick}
    >
      {/* container */}
      <div className="rounded-lg bg-[#fff] text-[rgba(0,0,0,0.40)] w-[40%] h-[75%] flex justify-center items-center ">
        {/* content */}
        <div className="flex flex-col w-full pb-[40px]">{children}</div>
      </div>
    </div>
  );
};

export default ComponenteModalAgenda;
