import React from 'react'
import Navbar from '../Component/Navbar';
import Footer from '../Component/Footer';

function Vegetables() {
  return (
    <div>
      <Navbar/>
      
      <div className="min-h-screen bg-[#F6F0D7] flex flex-col md:items-center items-center pt-6">
        {/* Add your vegetables content here */}
      </div>

      <Footer />
    </div>
  )
}

export default Vegetables