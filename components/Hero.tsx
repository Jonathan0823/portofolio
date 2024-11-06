"use client";
import Image from "next/image";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import { useEffect, useState } from "react";

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  const [firstEffectComplete, setFirstEffectComplete] = useState(false);

  useEffect(() => {
    // Simulate the completion of the first TextGenerateEffect
    const timer = setTimeout(() => {
      setFirstEffectComplete(true);
    }, 1000); // Adjust the duration as needed
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="pb-20">
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

      <div className="h-screen w-full bg-[#010523]  bg-grid-white/[0.05] flex items-center justify-center absolute top-0 left-0">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-[#010523] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>

      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] w-full flex items-center justify-between">
          <div className="flex flex-col">
            <TextGenerateEffect
              className="text-3xl md:text-4xl text-white lg:text-6xl tracking-tighter"
              words="Web Developer"
            ></TextGenerateEffect>
            {firstEffectComplete && (
              <>
                <TextGenerateEffect
                  className="text-2xl md:text-3xl lg:text-5xl text-blue tracking-tighter"
                  words="Eguin Jonathan"
                ></TextGenerateEffect>
              </>
            )}
            <p
              className={`transition-opacity transition-filter duration-1000 ease-in-out ${
                firstEffectComplete ? "opacity-100 blur-0" : "opacity-0 blur-lg"
              } text-white font-light text-xs md:text-sm lg:text-lg`}
            >
              a Developer based in Indonesia
            </p>
          </div>

          <div>
            <Image
              src="/hero.png"
              alt="hero"
              width={524}
              height={590}
              className={`md:w-96 w-36 object-contain transition-all duration-500 ${
                isLoaded ? "" : "blur-lg"
              }`}
              onLoad={() => setIsLoaded(true)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
