import Header from "../components/Header";

export default function About() {
  return (
    <>
      <Header />
      <div className="about-background overflow-hidden relative h-screen">
        <div className="w-screen">
          <div className="fixed left-20 top-20">
            <h1 className="text-white border-b-4 p-3 border-[#ff0178] text-7xl m-5">
              About
            </h1>
            <a href="./resume.pdf" download>
              <button
                type="button"
                className="bg-[#ff0178] border-black border-b-2 p-2 text-4xl w-96 rounded-md text-white"
              >
                Download Resume
              </button>
            </a>
          </div>
          <div className="text-white flex text-center items-center justify-center flex-col text-5xl">
            <div className="w-screen h-screen snap-y overflow-auto snap-mandatory">
              <section className="snap-start h-screen mx-auto w-1/2 flex items-center justify-center">
                <div className="flex-col">
                  <div className="border-b-4 shrink border-[#ff0178]">Bio:</div>
                  <div className="text-3xl m-3">
                    I'm Michael Kilcorse, a passionate web developer
                    specializing in creating exceptional websites that
                    seamlessly blend captivating design with robust
                    functionality. With a background in graphic design and
                    online marketing, I bring a unique blend of creativity and
                    technical expertise to each project. Proficient in
                    JavaScript-based frameworks like React, SQL and NoSQL
                    databases, and experienced with Python and Django, I have
                    the skills to bring your digital vision to life. Combining
                    my design prowess with a deep understanding of user
                    experience, I craft visually stunning and intuitive websites
                    that leave a lasting impression.{" "}
                  </div>
                </div>
              </section>

              <section className="snap-start h-screen mx-auto w-1/2 flex items-center justify-center">
                <div className="flex-col">
                  <div className="border-b-4 shrink border-[#ff0178]">
                    Tech Stack:
                  </div>
                  <div className="grid  grid-cols-1  text-3xl md:grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-5">
                    <div className="p-4  flex items-center justify-center">
                      Javascript Typescript
                    </div>
                    <div className="p-4  flex items-center justify-center">
                      HTML5
                    </div>
                    <div className="p-4  flex items-center justify-center">
                      CSS3
                    </div>
                    <div className="p-4  flex items-center justify-center">
                      ReactJs
                    </div>
                    <div className="p-4  flex items-center justify-center">
                      React Native
                    </div>
                    <div className="p-4  flex items-center justify-center">
                      Angular
                    </div>
                    <div className="p-4  flex items-center justify-center">
                      NextJS
                    </div>
                    <div className="p-4  flex items-center justify-center">
                      Tailwind
                    </div>
                    <div className="p-4  flex items-center justify-center">
                      Bootstrap
                    </div>
                    <div className="p-4  flex items-center justify-center">
                      Pug
                    </div>
                    <div className="p-4  flex items-center justify-center">
                      SQL/NoSQL
                    </div>
                    <div className="p-4  flex items-center justify-center">
                      MongoDB
                    </div>
                    <div className="p-4  flex items-center justify-center">
                      Python
                    </div>
                    <div className="p-4  flex items-center justify-center">
                      Django
                    </div>
                  </div>
                </div>
              </section>

              <section className="snap-start h-screen w-1/2 mx-auto flex items-center justify-center">
                <div className="flex-col">
                  <div className="flex-col">
                    <div className="border-b-4 shrink border-[#ff0178]">
                      Design Stack:
                    </div>
                    <div className="grid  grid-cols-1  text-3xl md:grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-5">
                      <div className="p-4  flex items-center justify-center">
                        Blender
                      </div>
                      <div className="p-4  flex items-center justify-center">
                        Photoshop
                      </div>
                      <div className="p-4  flex items-center justify-center">
                        Illustrator
                      </div>
                      <div className="p-4  flex items-center justify-center">
                        Premier Pro
                      </div>
                      <div className="p-4  flex items-center justify-center">
                        Animate
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <section className="text-8xl text-white"></section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
