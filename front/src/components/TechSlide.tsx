import JsPic from "../assets/JavaScript-logo.png";
import ReactPic from "../assets/react.jpg";
import TailwindPic from "../assets/tailwind.jpg";
import NodePic from "../assets/nodejs.png";
import StablePic from "../assets/stable.png";
import pythonPic from "../assets/Python-logo-notext.svg.png";
import postgresPic from "../assets/png-transparent-postgresql-plain-wordmark-logo-icon-thumbnail.png";
import angularPic from "../assets/angular-icon-1931x2048-bef1f3lm.png";
import djangoPic from "../assets/django.png";
import mongoPic from "../assets/mongo_logo.jpg";
import { useParallax } from "react-scroll-parallax";
import { isMobile } from "../assets/util";
import ScrollDirection from "../hooks/scrollDirection";

export default function TechSlide() {
  const parallaxMotion = useParallax<HTMLDivElement>({
    easing: "easeOutQuad",
    translateX: [0, 350],
  });

  console.log(isMobile());
  return (
    <div className="flex flex-col md:flex-row items-center justify-center h-screen">
      <div className="flex items-center justify-center text-center w-full h-full transition-colors duration-500">
        <div className="w-3/4">
          <p className="md:m-10 content-center font-semibold text-5xl lg:text-7xl text-white">
            Specializing in the ever evolving{" "}
            <span className="text-[#9001f5]">web-based</span> ecosystem to
            deliver a <span className="text-[#9001f5]">clean</span> and{" "}
            <span className="text-[#9001f5]">modern</span> user experience.
          </p>
          {isMobile() ? (
            <div ref={parallaxMotion.ref} />
          ) : (
            <div
              className="flex justify-center items-center flex-row w-4/5 md:w-1/5 gap-5"
              ref={parallaxMotion.ref}
            >
              <img className="reset hover:rise" src={pythonPic} />
              <img className="reset hover:rise" src={JsPic} />
              <img className="reset hover:rise" src={angularPic} />
              <img className="reset hover:rise" src={mongoPic} />
              <img className="reset hover:rise" src={ReactPic} />
              <img className="reset hover:rise" src={TailwindPic} />
              <img className="reset hover:rise" src={NodePic} />
              <img className="reset hover:rise" src={djangoPic} />
              <img className="reset hover:rise" src={StablePic} />
              <img className="reset hover:rise" src={postgresPic} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}