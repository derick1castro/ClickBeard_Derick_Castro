import React, { useState } from "react";
import ComponenteModalAgenda from "./ComponenteModalAgenda";

const ModalAgenda = ({ children, btnText }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  return (
    <div>
      <button
        className="text-[#15202B] bg-platinum hover:bg-borrow duration-400 transition ease-in-out py-3 m-[20px] px-8 rounded-md text-md"
        onClick={() => setIsModalVisible(true)}
      >
        {btnText}
      </button>

      {isModalVisible ? (
        <ComponenteModalAgenda onClose={() => setIsModalVisible(false)}>
          {children}
        </ComponenteModalAgenda>
      ) : null}
    </div>
  );
};

export default ModalAgenda;
