import React from 'react';
import Navbar from '../Component/Navbar';
import Footer from '../Component/Footer';
import Img from './../assets/Feactures/bg-vegitable.png';
import FeactureSection from '../Component/FeactureSection'; // Updated import

function Home() {
  return (
    <div>
      <Navbar />

      <div className="min-h-screen bg-[#F6F0D7] flex flex-col md:items-center items-center pt-6">
        <div className="flex flex-col md:flex-row items-center justify-start gap-10 mt-10">
          <div className="flex items-center">
            <img 
              src={Img} 
              alt="Vegetable Image" 
              className="h-[450px] w-auto object-contain" 
            />
          </div>
          <h1 className="text-[4rem] font-bold mt-8 text-[#AEB784] text-center md:text-[4rem]">
            One platform for all your healthy food needs.
          </h1>
        </div>

        {/* Feature Section */}
        <FeactureSection />

      </div>

      <Footer />
    </div>
  );
}

export default Home;