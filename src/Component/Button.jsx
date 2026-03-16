import React from 'react';

const BUTTON_VARIANTS = {
  primary: 'bg-[#AEB784] text-white hover:bg-[#9CAB84]',
  secondary: 'bg-[#AEB784] text-white hover:bg-[#9CAB84]',
  Tertiary: 'bg-transparent border border-[#AEB784] text-[#AEB784] hover:bg-[#AEB784] hover:text-white',
};

const BUTTON_SIZES = {
  large: "text-2xl",
  medium: "text-xl",
  small: "text-sm"
};

function Button({ title, onClick = () => {}, varient = 'primary', size = "medium" }) {
  return (
    <button
      onClick={onClick}
      className={`flex justify-start rounded-full ${BUTTON_VARIANTS[varient]} ${BUTTON_SIZES[size]} py-2 px-4 cursor-pointer mr-4`}
    >
      {title}
    </button>
  );
}

export default Button;