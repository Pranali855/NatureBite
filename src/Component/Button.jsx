import React from 'react';

function Button({ title, onClick }) {
  return (
    <button
      onClick={onClick}
      className="rounded-full bg-[#AEB784] text-white py-2  px-4 hover:bg-[#9CAB84]" 
    >
      {title}
    </button>
  );
}

export default Button;