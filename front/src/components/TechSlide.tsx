import JsPic from "../assets/javaScript_logo.webp";
import ReactPic from "../assets/react_logo.webp";
import TailwindPic from "../assets/tailwind_logo.webp";
import NodePic from "../assets/nodejs_logo.webp";
import StablePic from "../assets/stable_logo.webp";
import pythonPic from "../assets/python_logo.webp";
import postgresPic from "../assets/postgres_logo.webp";
import angularPic from "../assets/angular_logo.webp";
import djangoPic from "../assets/django_logo.webp";
import mongoPic from "../assets/mongo_logo.webp";
import { useParallax } from "react-scroll-parallax";
import { isMobile } from "../assets/util";

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
              <img
                className="reset hover:rise"
                alt="Python Logo"
                src={pythonPic}
              />
              <img className="reset hover:rise" alt="Python Logo" src={JsPic} />
              <img
                className="reset hover:rise"
                alt="Angular Logo"
                src={angularPic}
              />
              <img
                className="reset hover:rise"
                alt="Mongo Logo"
                src={mongoPic}
              />
              <img
                className="reset hover:rise"
                alt="React Logo"
                src={ReactPic}
              />
              <img
                className="reset hover:rise"
                alt="Tailwind Logo"
                src={TailwindPic}
              />
              <img
                className="reset hover:rise"
                alt="Nodejs Logo"
                src={NodePic}
              />
              <img
                className="reset hover:rise"
                alt="Django Logo"
                src={djangoPic}
              />
              <img
                className="reset hover:rise"
                alt="Stable Diffusion Logo"
                src={StablePic}
              />
              <img
                className="reset hover:rise"
                alt="Postgres Logo"
                src={postgresPic}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
