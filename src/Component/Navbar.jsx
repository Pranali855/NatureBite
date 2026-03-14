import React from 'react';
import { Salad as SaladIcon } from 'lucide-react';

function Navbar() {
  return (
    <nav className="bg-[#89986D] sticky top-5 w-4/5 mx-auto px-8 py-4 rounded-full flex items-center shadow-md">
      <SaladIcon className='w-10 h-10 text-white mr-4 flex-shrink-0' />
      <h4 className="text-3xl font-bold text-white">NatureBite</h4>
    </nav>
  );
}

export default Navbar;