import Image from "next/image";
export const HeroMobile = () => {
  return (
    <div className="block md:hidden min-h-screen px-6">
      <div className="flex justify-center">
        <Image
          width={316}
          height={392}
          alt="myself"
          className="rounded-t-full"
          src={"/myself.png"}
        />
      </div>
      <div className="space-y-8">
        <h4 className="hidden text-[#EF6D58] font-normal">
          Crioni Eponde Babili
        </h4>
        <h2 className="font-bold text-4xl text-white">
          Fullstack web
          <br /> developer
        </h2>
        <p className="text-gray-400 mb-6">
          Highly skilled Fullstack developer with over
          <br /> 5 years of industry experience
        </p>
        <button className="text-white uppercase hover:border-2 border-[#EF6D58] hover:bg-transparent hover:text-[#EF6D58] bg-[#EF6D58] font-semibold px-6 py-2 rounded-md">
          see my work
        </button>
      </div>
    </div>
  );
};

export default HeroMobile;
