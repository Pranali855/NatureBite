function FeatureSection({ title, description, imgsrc }) {
  return (
    <div className="bg-[#FCFBF5] px-6 py-5 w-[300px] h-[260px] text-center  rounded-3xl shadow-md  flex flex-col items-center justify-start cursor-pointer hover:shadow-lg transition-shadow duration-300">
      <img src={imgsrc} alt={title} className="h-20 mx-auto" />
      <h3 className="text-2xl text-[#9CAB84] font-semibold mt-3">{title}</h3>
      <p className="mt-3 text-[#b4c78b]">{description}</p>
    </div>
  );
}

export default FeatureSection;