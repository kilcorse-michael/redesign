import { Parallax } from "react-scroll-parallax";
import { useRef } from "react";
import { onScreen } from "../hooks/onScreen";

export default function AboutSlide() {
  const ref = useRef<SVGElement>(null);
  const isOnScreen = onScreen(ref);

  console.log(isOnScreen);

  return (
    <div className="flex flex-col md:flex-row items-center justify-center h-screen">
      <div className=" flex items-center justify-center w-full h-full bg-white">
        <div className="flex items-center justify-center w-full h-full ">
          <svg
            ref={ref}
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 587.35 684.73"
            className="h-4/5"
          >
            <path
              d="m261.5,1.42S38.89,79.68,448.46,113.59c0,0,55.65-11.3-12.17,29.57l-182.61,256.52s-10.43,2.35,5.22,11.17,17.39,19.26,17.39,19.26c0,0,10.43,18.87-37.39-19.26,0,0-34.78-3.35-41.74,41.87,0,0-1.74,23.48-47.83,20.87,0,0,36.52,15.19,86.96.2,0,0,40.85-1.84,36.52-28.9,0,0,14.78.61,13.04-34.04l205.22-221.61s28.7-45.22-16.52-59.13c0,0,82.61-53.04,34.78,84.35h53.04s23.48-1.02,23.48,26.45v341.38s-.87,13.04-17.39,16.52H228.46s-57.39,15.65,125.22,7.83c0,0,41.74,11.3-120.87,8.7,0,0-46.96,6.96,120,8.7,0,0-2.61,32.17,26.09,50.43,0,0,4.71,4.4,3.19,6.96-1.01,1.7-171.88,1.8-171.88,1.8,0,0,20.87-19.2,21.74-43.55,0,0-7.83-37.39-46.09-39.13l-162.61-.87s-21.74.87-21.74-21.74V234.46s3.48-20,21.74-19.13l335.65-.87-23.48,36.52-299.13.87.87,280,513.04-1.74.87-279.13-92.17-1.74,29.57-33.04"
              fill="none"
              stroke="#01008e"
              strokeWidth="1%"
              strokeMiterlimit="10"
              pathLength="1"
              className={isOnScreen ? "path" : ""}
            />
          </svg>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center w-full h-full bg-[#01008e] text-center">
        <Parallax speed={5}>
          <p className="m-10 content-center text-5xl lg:text-9xl text-white">
            I am a web designer & developer.
          </p>
          <div className="">
            <button
              type="button"
              className="bg-[#ff0178] border-black border-b-2 p-2 text-4xl w-96 rounded-md text-white"
            >
              READ MORE
            </button>
          </div>
        </Parallax>
      </div>
    </div>
  );
}
