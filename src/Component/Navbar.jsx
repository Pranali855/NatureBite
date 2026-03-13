import React from 'react'
import { Salad as SaladIcon } from 'lucide-react';

function Navbar() {
  return (
    <nav className='bg-[#89986D] sticky top-5 w-7/14 mx-auto  gap-[-2] px-10 py-4 rounded-full flex items-center shadow-md'>
      <SaladIcon className='w-8 h-8 text-white mr-4' />
      <h4 className='text-3xl font-bold text-white'>NatureBite</h4>
    </nav>
  )
}

export default Navbar