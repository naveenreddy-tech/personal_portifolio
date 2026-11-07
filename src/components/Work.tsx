import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const projects = [
  {
    title: "NOD India",
    category: "AEC Global Marketplace (Recent Project)",
    tools: "React.js, Node.js, Express.js, MongoDB, Tailwind CSS",
    image: "/images/nodindia.png",
    link: "https://nodindia.com/",
  },
  {
    title: "Jaimax Community Hub",
    category: "Real-Time Community & Messaging",
    tools: "Node.js, Socket.io, React.js, MongoDB, JWT, Express.js",
    image: "/images/placeholder.webp",
  },
  {
    title: "Enterprise AI Chatbot",
    category: "Secure On-Premise RAG System",
    tools: "Python, Ollama, LangChain, Vector DB, Node.js, Express.js",
    image: "/images/placeholder.webp",
  },
  {
    title: "Jaimax Coin",
    category: "Cryptocurrency Platform",
    tools: "React.js, React-Bootstrap, Node.js, Tailwind CSS, RAG Chatbot, Third-Party APIs",
    image: "/images/placeholder.webp",
  },
  {
    title: "MentorConnect",
    category: "Mentee & Mentor Booking Platform",
    tools: "React.js, Node.js, Express.js, MongoDB, Firebase, Zoom API, JWT",
    image: "/images/karrivo.png",
    link: "https://karrivo.in/",
  },
  {
    title: "Distributed Backend",
    category: "Microservices Architecture with API Gateway",
    tools: "Node.js, Express.js, HTTP Proxy, JWT, REST APIs, MongoDB, PostgreSQL",
    image: "/images/placeholder.webp",
  },
];

const Work = () => {
  useGSAP(() => {
    let translateX: number = 0;

    function setTranslateX() {
      const box = document.getElementsByClassName("work-box");
      if (!box.length) return 0;
      const rectLeft = document
        .querySelector(".work-container")!
        .getBoundingClientRect().left;
      const rect = box[0].getBoundingClientRect();
      const parentWidth = box[0].parentElement!.getBoundingClientRect().width;
      let padding: number =
        parseInt(window.getComputedStyle(box[0]).padding) / 2;
      translateX = rect.width * box.length - (rectLeft + parentWidth) + padding;
      return translateX;
    }

    setTranslateX();

    let timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".work-section",
        start: "top top",
        end: () => `+=${setTranslateX()}`,
        scrub: true,
        pin: true,
        pinSpacing: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        id: "work",
      },
    });

    timeline.to(".work-flex", {
      x: () => -translateX,
      ease: "none",
    });

    return () => {
      timeline.kill();
      ScrollTrigger.getById("work")?.kill();
    };
  }, []);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          {projects.map((project, index) => (
            <div className="work-box" key={index}>
              <div className="work-info">
                <div className="work-title">
                  <h3>0{index + 1}</h3>

                  <div>
                    <h4>{project.title}</h4>
                    <p>{project.category}</p>
                  </div>
                </div>
                <h4>Tools and features</h4>
                <p>{project.tools}</p>
              </div>
              <WorkImage
                image={project.image}
                alt={project.title}
                link={project.link}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
