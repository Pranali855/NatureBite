import React from 'react';
import Navbar from '../Component/Navbar';
import Footer from '../Component/Footer';
import Img from './../assets/Feactures/bg-vegitable.png';
import IconFreshness from './../assets/Feactures/fresh.png';
import IconVegitable from './../assets/Feactures/vegetable.png';
import IconDelivery from './../assets/Feactures/food-delivery.png';

const FEATURES_CONFIG = [
  {
    title: "Fresh and Organic",
    description: "We source our vegetables from local farms to ensure freshness and support sustainable agriculture.",
    imgsrc: IconFreshness
  },
  {
    title: "Wide Variety",
    description: "Our platform offers a diverse selection of vegetables, catering to different tastes and dietary preferences.",
    imgsrc: IconVegitable
  },
  {
    title: "Convenient Delivery",
    description: "Enjoy the convenience of having fresh vegetables delivered right to your doorstep, saving you time and effort.",
    imgsrc: IconDelivery
  }
];

function Home() {
  return (
    <div>
      <Navbar />

      <div className="min-h-screen bg-[#F6F0D7] flex flex-col items-center pt-6">
        <div className="flex flex-col md:flex-row items-center justify-start gap-15 mt-10">
          
          <div className="flex items-center">
            <img src={Img} alt="Vegetable Image" className="h-[450px]" />
          </div>

          <h1 className="text-[3rem] font-bold mt-8 text-[#AEB784] text-center">
            One platform for all your healthy food needs.
          </h1>

        </div>

        <h2 className="text-[2rem] text-[#C5D89D] mt-8  mr-6 text-center justify-center">
          Why you should choose us?
        </h2>
        

          {FEATURES_CONFIG.map((feat, index) => {
            const { title, description, imgsrc } = feat;
            return(
            <img
            key={index}
            src={imgsrc}
            alt={title}
            className="h-[100px] mx-auto mt-10"
           />
      
            );
          })}
</div>
      <Footer />
    </div>
  );
}

export default Home;