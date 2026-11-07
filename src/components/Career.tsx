import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Front end Developer</h4>
                <h5>Efestoo</h5>
              </div>
              <h3>2023</h3>
            </div>
            <p>
              Designed and developed modern, responsive web applications from UI/UX
              concepts using Next.js, React.js, JavaScript, and Tailwind CSS.
              Optimized frontend performance through server-side rendering (SSR),
              component reusability, and code splitting.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Full Stack & Python Developer</h4>
                <h5>Jaisvik Software (P) Limited</h5>
              </div>
              <h3>2024 - 2026</h3>
            </div>
            <p>
              Architected and delivered 2+ production-grade full-stack applications.
              Built real-time community chat platforms using Socket.io, production RAG
              AI chatbots, microservices with API Gateway routing, and secure Razorpay
              & PhonePe payment gateway integrations.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Full Stack Developer</h4>
                <h5>Samcint Software Solutions (CreditMitra)</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Building scalable FinTech platforms for loan aggregation and financial
              services using Node.js, NestJS, Next.js, React.js, TypeScript, PostgreSQL,
              Redis, AWS, and Azure. Designing high-performance database solutions and
              Turborepo monorepo architecture.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
