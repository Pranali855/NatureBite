import React from 'react';
import Navbar from '../Component/Navbar';
import Footer from '../Component/Footer';
import Img from './../assets/Feactures/bg-vegitable.png';
import FeactureSection from '../Component/FeactureSection'; 
import Button from './../Component/Button';

function Home() {
  return (
    <div>
      <Navbar />

      <div className="min-h-screen bg-[#F6F0D7] flex flex-col md:items-center items-center pt-6">
        <div className="flex flex-col md:flex-row items-center justify-center gap-10 mt-10 flex-wrap">
          <div className="flex items-center justify-center">
            <img
              src={Img}
              alt="Vegetable Image"
              className="h-[450px] w-auto object-contain"
            />
          </div>

          <div className="flex flex-col items-center md:items-start text-center md:text-left max-w-lg">
            <h1 className="text-[3rem] md:text-[4rem] font-bold text-[#AEB784]">
              One platform for all your healthy food needs.
            </h1>

            <div className="mt-8">
              <Button title="Call Us" />
            </div>
          </div>
        </div>

        <FeactureSection />

      </div>

      <Footer />
    </div>
  );
}

export default Home;