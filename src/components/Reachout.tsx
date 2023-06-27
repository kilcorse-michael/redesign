import { ParallaxBanner } from "react-scroll-parallax";
import MickPic from "../assets/mick.png";

export default function Reachout() {
  return (
    <>
      <div className="flex justify-center flex-col  h-screen w-screen">
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
                  <h1 className="text-6xl relative -top-32 -top-m-5 md:top-0 md:text-8xl text-white">
                    Explore more or reach out!
                  </h1>
                </div>
              ),
            },
          ]}
          className="aspect-[2/1] h-4/5 w-4/5"
        />
        <div className="flex  flex-col md:flex-row space-y-10 gap-4 justify-center items-center w-full h-full bg-[#00003f]">
          <div className="w-4/5 md:w-2/5 border-b-4 border-r-4 p-1 text-center border-[#ff0178]">
            <h1 className="text-[#9001f5] text-4xl md:text-7xl">
              View my{" "}
              <span className="text-white hover:drop-shadow-glow">
                Portfolio
              </span>{" "}
              or{" "}
              <span className="text-white hover:drop-shadow-glow">
                Learn More
              </span>{" "}
              about me!
            </h1>
          </div>
          <div className="w-4/5 md:w-2/5 border-b-4 border-l-4 p-1 text-center border-[#ff0178]">
            <h1 className="text-[#9001f5] text-4xl md:text-7xl">
              Or{" "}
              <span className="text-white hover:drop-shadow-glow">
                Reach Out
              </span>{" "}
              and let's start a conversation!
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}
