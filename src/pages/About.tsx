import { Parallax } from "react-scroll-parallax";
import Header from "../components/Header";
import AboutSlide from "../components/AboutSlide";

export default function About() {
  return (
    <>
      <Header />
      <div className="about-background overflow-hidden relative h-screen">
        <div className="w-screen">
          <h1 className="text-white fixed left-20 top-20 border-b-4 p-3 border-[#ff0178] text-7xl m-5">
            About
          </h1>
          <div className="text-white flex text-center items-center justify-center flex-col text-5xl">
            <div className="w-screen h-screen snap-y overflow-auto snap-mandatory">
              <section className="snap-start h-screen mx-auto w-1/2 flex items-center justify-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
                veritatis ducimus tempore fugiat quam labore, saepe repellat
                aliquid enim minus amet aut nobis, sunt rerum sed odio deserunt
                ab. Tempore!
              </section>

              <section className="snap-start h-screen w-1/2 mx-auto flex items-center justify-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
                veritatis ducimus tempore fugiat quam labore, saepe repellat
                aliquid enim minus amet aut nobis, sunt rerum sed odio deserunt
                ab. Tempore!
              </section>

              <section className="snap-start h-screen w-1/2 mx-auto flex items-center justify-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
                veritatis ducimus tempore fugiat quam labore, saepe repellat
                aliquid enim minus amet aut nobis, sunt rerum sed odio deserunt
                ab. Tempore!
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
