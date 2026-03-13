import React from 'react'
import Navbar from '../Component/Navbar'
import Footer from '../Component/Footer'
import Img from '../assets/vegitable.png'

function Home() {
  return (
    <div>
      <Navbar />

      <div className="min-h-screen bg-[#F6F0D7] flex flex-col items-center pt-6">
        <div className="flex flex-col md:flex-row items-center justify-start gap-15 mt-10">
          <div className='flex item-center'>
            <img src={Img} alt="Vegetable Image" className='h-[450px]' />
          </div>
          <h1 className=" text-[3rem]! font-bold mt-8 text-#C5D89D text-center bg-#C5D89D">
            One platform for all your healthy food needs.
          </h1>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Home