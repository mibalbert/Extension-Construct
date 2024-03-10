/**
 * Hero.jsx
 */

import React from "react";
import Container from "./Container";
import Title from "./Title";
import BackgroundDesign from "./BackgroundDesign";
import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";
import { Calculator } from "lucide-react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Phone } from "lucide-react";
import { Info } from "lucide-react";

const Hero = () => {
  return (
    <section className="w-full h-[75vh] relative">
      <Image
        src={"/hero-img-2.webp"}
        fill
        className="object-cover object-center h-full w-full"
        alt="hero image"
      />
      {/* <div className="absolute top-0 left-0 w-full h-full supports-[backdrop-blur] backdrop-blur-sm "></div> */}
      <div
        className={
          "relative z-5 h-full bg-gray-900/60 backdrop-blur-sm w-full "
        }
      >
        <div className="h-full grid grid-rows-3  py-10  w-full max-w-screen-xl mx-auto ">
          <div className="row-span-2 text-center md:text-left flex flex-col px-5 justify-center space-y-3">
            <h1 className="text-5xl lg:text-[110px] leading-none font-bold  tracking-tight text-white">
              EXTENSION CONSTRUCT
            </h1>
            <p className="text-xl text-gray-100">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laboriosam placeat voluptatem itaque.asjkd nasjd 
            </p>
          </div>
          <div className="row-span-1">
            <div className="grid  grid-cols-1 lg:grid-cols-3 gap-5 h-full px-10 lg:px-0">
              <Link
                href={"/contact"}
                className="flex items-center  border relative bg-white rounded-lg w-full h-full justify-center hover:scale-105 transition-all duration-100 bg-grid-small-black/[0.2] "
              >
                <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
                <Phone className="h-4 w-4 mr-2" />
                Contact <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href={"/preturi"}
                className="flex items-center border bg-white  rounded-lg w-full h-full justify-center hover:scale-105 transition-all duration-100 bg-dot-black/[0.2] relative"
              >
                {" "}
                <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
                <Calculator className="h-4 w-4 mr-2" />
                Calculator <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href={"/blog"}
                className="flex items-center border bg-white rounded-lg  w-full h-full justify-center hover:scale-105 transition-all duration-100 bg-grid-black/[0.1]  relative"
              >
                {" "}
                <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
                <Info className="h-4 w-4 mr-2" />
                Blog <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
    // <section
    //   id="home"
    //   className="relative overflow-hidden py-20 sm:py-32 lg:pb-32 xl:pb-36 "
    // >
    //   <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-gray-900/50 to-gray-700/40 z-10  backdrop-blur-sm  supports-[backdrop-blur]" />
    //   <Container>
    //     <div className="relative z-20 mx-auto  py-10 space-y-20">
    //       <div>
    //         <Title
    //           title="Extension Construct"
    //           className="text-7xl lg:text-8xl w-full lg:whitespace-nowrap font-bold text-white  "
    //         />
    //         <Title
    //           title="Invest at the perfect time."
    //           className="text-2xl lg:text-4xl max-w-2xl text-white font-serif"
    //         />
    //         <p className="mt-6 text-md lg:text-lg text-gray-200">
    //           By leveraging insights from our network of industry insiders, you
    //           will know exactly when to buy to maximize profit, and exactly when
    //           to sell to avoid painful losses.
    //         </p>
    //       </div>
    //       <div className="space-y-4 ">
    //         <Link
    //           href={"/contact"}
    //           className="bg-white px-3 py-1.5 rounded-lg text-xl w-full max-w-xs flex items-center gap-2 "
    //         >
    //           <ArrowRightIcon className="w-5 h-5" />
    //           <span className="font-serif">Contact</span>
    //         </Link>
    //         <Link
    //           href="/preturi"
    //           className="bg-white px-3 py-1.5 rounded-lg text-xl flex items-center w-full max-w-xs gap-2 "
    //         >
    //           <Calculator className="w-5 h-5" />
    //           <span className="font-serif">Calculator</span>
    //         </Link>
    //       </div>
    //     </div>
    //     <div className="relative mt-10 ">
    //       <BackgroundDesign className="absolute left-1/4 top-4 h-[1026px] z-10 w-[1026px] -translate-x-1/4 stroke-gray-300/70 [mask-image:linear-gradient(to_bottom,white_20%,transparent_75%)] sm:top-16 sm:-translate-x-1/2 lg:-top-16 lg:ml-12 xl:-top-14 xl:ml-0" />
    //     </div>
    //   </Container>
    // </section>
  );
};

export default Hero;
