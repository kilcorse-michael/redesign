import { Parallax } from "react-scroll-parallax";

export default function HeroHello() {
  return (
    <>
      <div className="flex justify-center items-center h-screen bg-[#00003f] ">
        <div className="ml-8 border-l-[#ff0178] drop-shadow-glow border-l-4 h-4/5 w-0" />
        <div className="h-screen ml-8 w-screen">
          <div className="absolute z-10 bottom-56 md:bottom-48">
            <Parallax speed={15}>
              <h1 className="text-[#9001f5] text-8xl lg:text-9xl m-l-1">
                Hello,
              </h1>
              <h2 className="text-[#9001f5] flex-row text-6xl lg:text-8xl m-l-1">
                my name is
              </h2>
              <h1 className="text-white flex-row text-7xl lg:text-9xl m-l-1">
                Michael Kilcorse
              </h1>
              <h3 className="text-[#9001f5] md:ml-48 flex-row text-2xl md:text-4xl lg:text-5xl m-l-1">
                [maɪ/kəl/] - [kɪl kɔrs]
              </h3>
            </Parallax>
          </div>
          <div className="absolute -left-24 transform scale-50 -top-60 sm:scale-60 md:scale-75 lg:scale-100 md:-right-80 md:-top-24 loader">
            <Parallax speed={7}>
              <svg
                id="wave"
                data-name="Layer 1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 50 38.05"
              >
                <path
                  id="Line_1"
                  data-name="Line 1"
                  d="M0.91,15L0.78,15A1,1,0,0,0,0,16v6a1,1,0,1,0,2,0s0,0,0,0V16a1,1,0,0,0-1-1H0.91Z"
                />
                <path
                  id="Line_2"
                  data-name="Line 2"
                  d="M6.91,9L6.78,9A1,1,0,0,0,6,10V28a1,1,0,1,0,2,0s0,0,0,0V10A1,1,0,0,0,7,9H6.91Z"
                />
                <path
                  id="Line_3"
                  data-name="Line 3"
                  d="M12.91,0L12.78,0A1,1,0,0,0,12,1V37a1,1,0,1,0,2,0s0,0,0,0V1a1,1,0,0,0-1-1H12.91Z"
                />
                <path
                  id="Line_4"
                  data-name="Line 4"
                  d="M18.91,10l-0.12,0A1,1,0,0,0,18,11V27a1,1,0,1,0,2,0s0,0,0,0V11a1,1,0,0,0-1-1H18.91Z"
                />
                <path
                  id="Line_5"
                  data-name="Line 5"
                  d="M24.91,15l-0.12,0A1,1,0,0,0,24,16v6a1,1,0,0,0,2,0s0,0,0,0V16a1,1,0,0,0-1-1H24.91Z"
                />
                <path
                  id="Line_6"
                  data-name="Line 6"
                  d="M30.91,10l-0.12,0A1,1,0,0,0,30,11V27a1,1,0,1,0,2,0s0,0,0,0V11a1,1,0,0,0-1-1H30.91Z"
                />
                <path
                  id="Line_7"
                  data-name="Line 7"
                  d="M36.91,0L36.78,0A1,1,0,0,0,36,1V37a1,1,0,1,0,2,0s0,0,0,0V1a1,1,0,0,0-1-1H36.91Z"
                />
                <path
                  id="Line_8"
                  data-name="Line 8"
                  d="M42.91,9L42.78,9A1,1,0,0,0,42,10V28a1,1,0,1,0,2,0s0,0,0,0V10a1,1,0,0,0-1-1H42.91Z"
                />
                <path
                  id="Line_9"
                  data-name="Line 9"
                  d="M48.91,15l-0.12,0A1,1,0,0,0,48,16v6a1,1,0,1,0,2,0s0,0,0,0V16a1,1,0,0,0-1-1H48.91Z"
                />
              </svg>
            </Parallax>
          </div>
        </div>
      </div>
    </>
  );
}