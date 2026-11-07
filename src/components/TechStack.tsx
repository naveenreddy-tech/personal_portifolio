import { useState } from "react";
import "./styles/TechStack.css";

interface TechItem {
  name: string;
  category: "frontend" | "backend" | "ai" | "database" | "tools";
  icon: string;
  isCustom?: boolean;
}

const techItems: TechItem[] = [
  // Frontend
  {
    name: "React.js",
    category: "frontend",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "Next.js",
    category: "frontend",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  },
  {
    name: "TypeScript",
    category: "frontend",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
  {
    name: "JavaScript",
    category: "frontend",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "Tailwind CSS",
    category: "frontend",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
  },
  {
    name: "HTML5",
    category: "frontend",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  {
    name: "CSS3",
    category: "frontend",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  {
    name: "Bootstrap",
    category: "frontend",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
  },

  // Backend
  {
    name: "Node.js",
    category: "backend",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "Express.js",
    category: "backend",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  },
  {
    name: "NestJS",
    category: "backend",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-original.svg",
  },
  {
    name: "Python",
    category: "backend",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },
  {
    name: "FastAPI",
    category: "backend",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg",
  },
  {
    name: "Socket.io",
    category: "backend",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original.svg",
  },
  {
    name: "WebSockets",
    category: "backend",
    icon: "custom-ws",
    isCustom: true,
  },

  // AI & RAG
  {
    name: "LangChain",
    category: "ai",
    icon: "https://cdn.simpleicons.org/langchain/c2a4ff",
  },
  {
    name: "Ollama",
    category: "ai",
    icon: "https://cdn.simpleicons.org/ollama/ffffff",
  },
  {
    name: "OpenAI",
    category: "ai",
    icon: "https://cdn.simpleicons.org/openai/ffffff",
  },
  {
    name: "Vector DB",
    category: "ai",
    icon: "custom-vdb",
    isCustom: true,
  },

  // Databases & Cloud
  {
    name: "MongoDB",
    category: "database",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },
  {
    name: "PostgreSQL",
    category: "database",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  },
  {
    name: "MySQL",
    category: "database",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  },
  {
    name: "Redis",
    category: "database",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg",
  },
  {
    name: "AWS",
    category: "database",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
  },
  {
    name: "Firebase",
    category: "database",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
  },

  // Tools & Dev
  {
    name: "Docker",
    category: "tools",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  },
  {
    name: "Git",
    category: "tools",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  {
    name: "GitHub",
    category: "tools",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  },
  {
    name: "Postman",
    category: "tools",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg",
  },
];

const categories = [
  { id: "all", label: "All Skills" },
  { id: "frontend", label: "Frontend" },
  { id: "backend", label: "Backend" },
  { id: "ai", label: "AI & RAG" },
  { id: "database", label: "Databases & Cloud" },
  { id: "tools", label: "DevOps & Tools" },
];

const TechStack = () => {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const filteredItems =
    activeCategory === "all"
      ? techItems
      : techItems.filter((item) => item.category === activeCategory);

  return (
    <section className="techstack-section" id="techstack">
      <div className="techstack-container">
        <div className="techstack-filters">
          {categories.map((cat) => (
            <button
              key={cat.id}
              className={`techstack-filter-btn ${
                activeCategory === cat.id ? "active" : ""
              }`}
              onClick={() => setActiveCategory(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="techstack-gallery">
          {filteredItems.map((tech) => (
            <div className="techstack-card" key={tech.name}>
              <div className="techstack-icon-wrapper">
                {tech.isCustom && tech.icon === "custom-ws" ? (
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#c2a4ff"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="5" cy="6" r="2" fill="#c2a4ff" stroke="none" />
                    <circle cx="19" cy="18" r="2" fill="#c2a4ff" stroke="none" />
                    <path d="M6 7.5 L11 10 L9 13 L15 14 L13 17 L18 18.5" />
                  </svg>
                ) : tech.isCustom && tech.icon === "custom-vdb" ? (
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#c2a4ff"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <ellipse cx="12" cy="5" rx="9" ry="3" />
                    <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
                    <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
                  </svg>
                ) : (
                  <img src={tech.icon} alt={tech.name} loading="lazy" />
                )}
              </div>
              <div className="techstack-info">
                <span className="techstack-name">{tech.name}</span>
                <span className="techstack-category-tag">{tech.category}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
