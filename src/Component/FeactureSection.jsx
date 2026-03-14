import IconFreshness from './../assets/Feactures/fresh.png';
import IconVegitable from './../assets/Feactures/vegetable.png';
import IconDelivery from './../assets/Feactures/food-delivery.png';
import IconFarmer from './../assets/Feactures/farmer.png';

function FeatureSection({ title, description, imgsrc }) {
  return (
    <div className="bg-[#FCFBF5] px-6 py-5 w-[300px] h-[260px] text-center rounded-3xl shadow-md flex flex-col items-center justify-start cursor-pointer hover:shadow-lg transition-shadow duration-300">
      <img src={imgsrc} alt={title} className="h-20 mx-auto" />
      <h3 className="text-2xl text-[#9CAB84] font-semibold mt-3">{title}</h3>
      <p className="mt-3 text-[#b4c78b]">{description}</p>
    </div>
  );
}

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
  },
  {
    title: "Sutible Farming",
    description: "We are committed to promoting sustainable farming practices that protect the environment and support local communities.",
    imgsrc: IconFarmer
  }
];

function FeatureCard() {
  return (
    <div className="w-full px-6 py-10">
      <p className="w-full text-[2rem] md:text-[2rem] text-[#AEB784] mt-[2rem] mb-[3rem] text-center">
        Why You Should Choose Us
      </p>

      <div className="flex flex-wrap justify-center gap-8 mt-10">
        {FEATURES_CONFIG.map((feat, index) => (
          <FeatureSection
            key={index}
            title={feat.title}
            description={feat.description}
            imgsrc={feat.imgsrc}
          />
        ))}
      </div>
    </div>
  );
}

export default FeatureCard;