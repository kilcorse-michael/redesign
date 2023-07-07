import React from "react";
import { ParallaxBanner } from "react-scroll-parallax";
import MickPic from "../assets/mick.webp";
import { Link } from "react-router-dom";

const Reachout: React.FC = () => {
  return (
    <>
      <div className="flex justify-center flex-col h-screen w-screen">
        <ParallaxBanner
          layers={[
            { image: MickPic, speed: -15 },
            {
              speed: -15,
              children: (
                <div
                  style={{ backgroundColor: "rgba(0,0,0, 0.45)" }}
                  className="absolute inset-0 flex bg-[#00003f] text-center items-center justify-center"
                >
                  <h1 className="text-6xl relative top-0 mx-1 md:top-0 md:text-8xl text-white">
                    <span className="text-7xl md:text-9xl">Explore More </span>
                    or <span className="text-7xl md:text-9xl">Reach Out!</span>
                  </h1>
                </div>
              ),
            },
          ]}
          className="h-4/5"
        />
        <div className="flex flex-col md:flex-row gap-4 justify-center items-center w-full h-full bg-[#00003f]">
          <div className="w-4/5 md:w-2/5 h-1/4 md:my-0 border-b-4 border-r-4 p-1 text-center border-[#ff0178]">
            <h1 className="text-[#9001f5] text-4xl md:text-7xl">
              Explore my{" "}
              <span className="text-white  hover:drop-shadow-glow">
                <Link to="/portfolio">Portfolio</Link>
              </span>
            </h1>
          </div>
          <div className="w-4/5 md:w-2/5 border-b-4 border-l-4 p-1 h-1/4 text-center border-[#ff0178]">
            <h1 className="text-[#9001f5] text-4xl md:text-7xl">
              <span className="text-white hover:drop-shadow-glow">
                <Link to="/contact">Reach Out</Link>
              </span>{" "}
              and let's start a conversation!
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Reachout;
