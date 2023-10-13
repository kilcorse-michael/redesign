import React, { useState } from "react";
import Header from "../components/Header";
import jeffPic from "../assets/projects/jeff-mann.webp";
import kiddPic from "../assets/projects/kiddpro.webp";
import otPic from "../assets/projects/OT-pic.webp";
import malPic from "../assets/projects/maladjusted.png";
import chasersPic from "../assets/projects/chasers.png";

interface Project {
  title: string;
  description: {
    introduction: string;
    objectives: Array<string>;
    highlights: Array<string>;
    results: Array<string>;
    conclusion: string;
  };
  image: string;
}

const projects: Project[] = [
  {
    title: "Jeffrey Mann Fine Jewelers",
    description: {
      introduction:
        "The Jeffrey Mann Fine Jewelers ecommerce website project was a comprehensive undertaking aimed at revitalizing the digital presence of a well-established business in the jewelry industry. As the sole developer, designer, and digital advertiser, I was entrusted with transforming the client's online platform to enhance customer engagement, drive sales, and establish a robust marketing strategy. Over the years, I executed various tasks ranging from coding widgets, creating landing pages, writing compelling copy, designing graphics, including high-definition 3D models and renders, to setting up and managing web-based marketing campaigns.",
      objectives: [
        "Digital Transformation: The primary objective of the project was to modernize Jeffrey Mann Fine Jewelers' digital presence and create a visually appealing, user-friendly portfolio website to showcase their exquisite jewelry collections.",
        "Sales Growth: By leveraging effective digital marketing strategies and optimizing the website for conversions, the goal was to drive increased sales and revenue for the client.",
        "Infrastructure Enhancement: One of the significant challenges encountered during the project was the lack of existing infrastructure, which necessitated manual processes for various operations. The objective was to establish a streamlined infrastructure that would automate tasks and improve overall efficiency.",
      ],
      highlights: [
        "Custom Development: I coded and implemented various applications, pages, and features tailored to the client's specific needs, ensuring seamless functionality and a personalized user experience.",
        "Compelling Visuals: By employing my design skills, I crafted captivating graphics, including high-definition 3D models and renders, to showcase the jewelry collections in an enticing and realistic manner, creating an immersive browsing experience for visitors.",
        "Web-based Marketing Campaigns: As the digital advertiser, I conceptualized, executed, and managed targeted marketing campaigns across various digital channels, including search engine advertising, social media, and email marketing. These campaigns contributed to the significant growth and profitability of the client's business.",
      ],
      results: [
        "Profitability: Through the combined efforts of the digital transformation and the effective marketing campaigns, Jeffrey Mann Fine Jewelers experienced exceptional financial growth. Over the four-year period, the business more than doubled its net profit, a remarkable achievement for a mature business in the industry.",
        "Sustained Growth: The successful implementation of the portfolio website and the associated marketing strategies led to uninterrupted sustained growth for the client. Year after year, the business witnessed increasing sales and expanded its customer base.",
      ],
      conclusion:
        "The Jeffrey Mann Fine Jewelers portfolio website project was a resounding success, propelling the client's business to new heights in the digital landscape. By leveraging my skills as a developer, designer, and digital advertiser, I transformed their online presence, driving substantial sales growth and establishing a strong foundation for future success. Despite the challenges posed by the lack of infrastructure, the project showcased my ability to overcome obstacles and deliver exceptional results.",
    },
    image: jeffPic,
  },
  {
    title: "The Ottawa Tavern",
    description: {
      introduction: "The Ottawa Tavern, located in Toledo, Ohio, stands as a beacon for the city's vibrant indie/alt music scene. This bar is not just a place to grab a drink; it represents a powerful spirit of free expression and serves as a hub for music lovers in Toledo.",
      objectives: [
        "To design a website that captures the authentic essence of The Ottawa Tavern and its commitment to the indie/alt music scene.",
        "To ensure that the website remains as accessible as possible, allowing the client to easily upload it to the server without complex configurations.",
        "To create a design simple enough for future edits, making it possible for the client to adjust vital information like pricing without relying on external help."
      ],
      highlights: [
        "The website was designed to portray the venue's spirit, serving both its aesthetic and informative purposes.",
        "Despite the client's limitations, the website was built in a accessible format ensuring ease of setup and modifications.",
        "The Ottawa Tavern expressed immense satisfaction with the design, especially appreciating the straightforward approach to its deployment and future adjustments."
      ],
      results: ["The final website not only met but exceeded the client's expectations. Its blend of style and simplicity ensures that The Ottawa Tavern remains a crucial spot in Toledo's music scene, now with a digital presence to match its physical allure."],
      conclusion: "Designing for The Ottawa Tavern was a challenge given the client's specific demands. Yet, through innovative design and a focus on usability, we delivered a website that not only resonates with the venue's spirit but also promises ease of use for years to come.",
    },
    image: otPic,
},
{
  title: "Kidd.pro",
  description: {
    introduction: "Kidd.pro is not just a personal website; it's a showcase of my capabilities, a testament to my expertise in web development. This platform was conceived to be a bridge between my freelance offerings and potential clients, ensuring they witness the breadth of my skills firsthand.",
    objectives: [
      "To build a website that stands as a powerful portfolio, vividly displaying my range of expertise.",
      "To ensure the website's strong security and stability, portraying an environment where potential clients can trust my expertise.",
      "To optimize the website for SEO, ensuring maximum visibility on search engines, and to integrate it seamlessly with various ad campaigns for my outreach."
    ],
    highlights: [
      "Incorporation of cutting-edge design capabilities, such as advanced parallax scrolling, on-screen effects, and CSS key frame animations.",
      "Crafted a robust contact page, backed by a document-oriented database and a custom-built REST API to handle message deliveries, guaranteeing seamless communication with potential clients.",
      "The website not only demonstrated my prowess in web design but also became a vital tool in gathering requests and ensuring a steady stream of clients."
    ],
    results: ["Kidd.pro successfully put me on the map, drawing attention from potential clients and effectively converting many of those interactions into successful projects."],
    conclusion: "Kidd.pro was more than just a personal project. It was an embodiment of my commitment, skills, and vision as a web developer. The success it brought in connecting with potential clients reaffirmed my belief in the power of a well-crafted online presence."
  },
  image: kiddPic,
}
,{
  title: "Maladjusted Live",
  description: {
    introduction: "Maladjusted Live, originally a print publication dedicated to Arts & Culture from 2015 to 2017, sought revival in a contemporary digital format. This new chapter aimed to encapsulate the essence of relaxing with a physical magazine while offering the benefits and reach of an online publication.",
    objectives: [
      "To design an interface that provides a seamless, intuitive user experience reminiscent of flipping through a physical magazine.",
      "To develop a scalable database system that can cater to the growing volume of articles and increasing readership.",
      "To employ a system that efficiently manages vast amounts of files while ensuring the site remains fully accessible and optimized for search engines."
    ],
    highlights: [
      "Utilized the 11ty static site generation library, converting raw markdown files into stylized HTML pages. This approach resonated with the blog-like essence of Maladjusted Live, ensuring articles can be quickly added and updated.",
      "Leveraged the Nunjucks templating system to design customizable, elegant templates that mirror the refined aesthetics of a print magazine.",
      "Successfully managed the technical challenge of creating a robust directory system, which would effectively scale with the expanding collection of articles and the growing readership."
    ],
    results: ["Since its launch, Maladjusted Live has witnessed a significant surge in both contributors and readers. Articles are steadily streaming in, and the readership graph continues its upward trajectory."],
    conclusion: "Maladjusted Live's digital rebirth is a testament to the power of adaptive design and technology. By prioritizing user experience and scalability, the project successfully transitioned from print to a thriving online platform without losing its unique essence."
  },
    image: malPic,
  },{
    title: "Chasers Nightclub & College Bar",
    description: {
      introduction: "Situated on the University of Toledo's campus, Chasers Nightclub & College Bar is the hotspot for the 18+ crowd, blending the fervor of youth with the rhythm of the night. With the world gravitating more and more towards digital, the challenge was to extend the nightclub's reach beyond just the physical space and social media.",
      objectives: [
        "To discern and tap into the specific needs of the nightclub's primary demographic, optimizing their online experience.",
        "To ensure robust SEO and super-fast loading times, delivering crucial information to the users without any needless delay or interactions.",
        "To kindle excitement and anticipation for the club's grand reopening through a dynamic marketing campaign."
      ],
      highlights: [
        "Achieved a stellar rating of 96 from PageSpeed Insights, underscoring the website's performance-centric design.",
        "Executed a successful photo-shoot campaign that, when strategically released on Instagram, created a palpable buzz for the grand reopening.",
        "Despite being a campus bar, on their opening night, Chasers outperformed all other city bars for which sales data was available."
      ],
      results: ["The combination of a strategically designed website and a brilliantly executed marketing campaign resulted in a grand reopening night that not only became the talk of the town but also set a financial record."],
      conclusion: "Chasers Nightclub & College Bar's digital resurgence proved the power of targeted web design coupled with effective social media marketing. It showcased that even in an age of digital domination, the right approach can make a physical space shine brighter than ever."
    },
    image: chasersPic,  // Assuming you have a relevant image variable named "chasersPic"
}
,
];

const Portfolio: React.FC = () => {
  const [currentProject, setCurrentProject] = useState<Project | null>(
    projects[0]
  );

  const handleClick = (project: Project) => {
    setCurrentProject(project);
  };

  return (
    <>
      <Header />
      <div className="flex flex-wrap justify-center items-center">
        <div className="container text-white mx-auto py-8">
          <h1 className="text-4xl ml-3 w-2/5 font-bold border-b-2 border-[#ff0178] mb-4">
            Portfolio
          </h1>
          <div className="flex flex-wrap">
            {projects.map((project, index) => (
              <div
                key={index}
                className="w-[100%] sm:w-1/1 md:w-1/2 lg:w-1/4 xl:w-1/4 p-4"
              >
                <div
                  className=" p-4 cursor-pointer h-full"
                  onClick={() => handleClick(project)}
                >
                  <h2 className="text-xl font-semibold mb-2">
                    {project.title}
                  </h2>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="mb-2"
                  />
                  <p className="truncate">{project.description.introduction}</p>
                </div>
              </div>
            ))}
          </div>
          {currentProject && (
            <div className="w-full text-lg md:w-2/3 p-4 mt-8">
              <h2 className="text-2xl font-bold border-b-2 border-[#ff0178] mb-4">
                {currentProject.title}
              </h2>
              <img
                src={currentProject.image}
                alt={currentProject.title}
                className="mb-4"
              />
              <div className="flex flex-col">
                <p className="m-3">{currentProject.description.introduction}</p>
                <p className="m-3 font-semibold">Objectives</p>
                <ul className="list-disc mx-7">
                  {currentProject.description.objectives.map((item) => (
                    <li>{item}</li>
                  ))}
                </ul>
                <p className="m-3 font-semibold">Highlights and Achievements</p>
                <ul className="list-disc mx-7">
                  {currentProject.description.highlights.map((item) => (
                    <li>{item}</li>
                  ))}
                </ul>
                <p className="m-3 font-semibold">Results</p>
                <ul className="list-disc mx-7">
                  {currentProject.description.results.map((item) => (
                    <li>{item}</li>
                  ))}
                </ul>
                <p className="m-3 font-semibold">Conclusion</p>
                <p className="m-3">{currentProject.description.conclusion}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Portfolio;
