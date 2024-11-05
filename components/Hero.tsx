import { Spotlight } from "./ui/Spotlight";

const Hero = () => {
  return (
    <div className="pb-20 pt-36">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="top-10 left-full h-[80vh] w-[50vw]"
          fill="purple"
        />
        <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue" />
      </div>
      <div>
        <div className="h-screen w-full bg-[#010523]  bg-grid-white/[0.3] relative flex items-center justify-center">
          <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-[#010523] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"/>

          <div className="flex justify-center relative my-20 z-10">
            <div className=" max-w-[89vw] md:max-w-2xl lg:max-w-[60vw items-center justify-center]"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
