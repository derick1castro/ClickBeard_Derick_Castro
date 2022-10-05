import React, { useState } from "react";
import ComponenteModal from "./ComponenteModal";

const ModalEdit = ({ children, btnText }) => {
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
        <ComponenteModal onClose={() => setIsModalVisible(false)}>
          {children}
        </ComponenteModal>
      ) : null}
    </div>
  );
};

export default ModalEdit;
