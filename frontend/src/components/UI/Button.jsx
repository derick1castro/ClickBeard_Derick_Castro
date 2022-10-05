import React from 'react'

function Button(props) {
  return (
    <button className="text-white bg-[#d6a77a] hover:bg-borrow duration-400 transition ease-in-out py-3 px-8 rounded-md text-md">
      {props.children}
    </button>
  );
}

export default Button