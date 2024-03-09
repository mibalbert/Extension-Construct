import React from "react";
import Container from "./Container";
import Title from "./Title";
import Image from "next/image";
import Button from "./Button";
import { BsPlayCircle } from "react-icons/bs";
import playStore from "@/images/playStore.png";
import ExtraLogos from "./ExtraLogos";
import BackgroundDesign from "./BackgroundDesign";
import PhoneFrame from "./PhoneFrame";
import AppFeature from "./AppFeature";
import Link from "next/link";
import { PhoneCallIcon } from "lucide-react";
import { PhoneIcon } from "lucide-react";
import { ArrowRightIcon } from "lucide-react";
import { Calculator } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative overflow-hidden py-20 sm:py-32 lg:pb-32 xl:pb-36 bg-[url('/hero-img.webp')] bg-cover   bg-right-bottom "
    >
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-gray-900/50 to-gray-700/40 z-10  backdrop-blur-sm  supports-[backdrop-blur]" />
      <Container>
        <div className="lg:grid lg:grid-cols-12 lg:gap-x-8 lg:gap-y-20 ">
          {/* Right side */}
          <div className="relative z-20 mx-auto  lg:col-span-7 lg:max-w-none lg:pt-6 xl:col-span-6">
            <Title
              title="Extension Construct"
              className="text-7xl lg:text-8xl w-full lg:whitespace-nowrap font-bold text-white  "
            />
            <Title
              title="Invest at the perfect time."
              className="text-2xl lg:text-4xl max-w-2xl text-gray-100 font-serif"
            />
            <p className="mt-6 text-md lg:text-lg text-gray-200">
              By leveraging insights from our network of industry insiders, you
              will know exactly when to buy to maximize profit, and exactly when
              to sell to avoid painful losses.
            </p>
            <div className="mt-8 space-y-6 gap-4">
              {/* <Image className="w-32 h-auto" src={playStore} alt="playImg" />
              <Button variant="outline" href="https://youtu.be/vviFia-Stqk">
                <BsPlayCircle className="text-xl" />
                <span className="ml-2.5">Watch the video</span>
              </Button> */}
              <Link
                href={"/contact"}
                className="bg-white px-3 py-1.5 rounded-lg text-2xl w-full max-w-xs flex items-center gap-2 "
              >
                <ArrowRightIcon className="w-6 h-6" />
                <span className="font-serif">Contact</span>
              </Link>
              <Link
                href="/preturi"
                className="bg-white px-3 py-1.5 rounded-lg text-2xl flex items-center w-full max-w-xs gap-2 "
              >
                <Calculator className="w-6 h-6" />
                <span className="font-serif">Calculator</span>
              </Link>
            </div>
          </div>
          {/* Left side */}
          <div className="relative mt-10 sm:mt-20 lg:col-span-5 lg:row-span-2 lg:mt-0 xl:col-span-6">
            <BackgroundDesign className="absolute left-1/4 top-4 h-[1026px] z-10 w-[1026px] -translate-x-1/4 stroke-gray-300/70 [mask-image:linear-gradient(to_bottom,white_20%,transparent_75%)] sm:top-16 sm:-translate-x-1/2 lg:-top-16 lg:ml-12 xl:-top-14 xl:ml-0" />
            {/* <div className="-mx-4 h-[448px] px-9  [mask-image:linear-gradient(to_bottom,white_60%,white)] sm:mx-0 lg:absolute lg:-inset-x-10 lg:-bottom-20 lg:-top-10 lg:h-auto lg:px-0 lg:pt-10 xl:-bottom-32">
            <PhoneFrame className="max-w-[366px] mx-auto">
              <AppFeature />
            </PhoneFrame>
            </div> */}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
