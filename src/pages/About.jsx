import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function About() {
  const nav = useNavigate();
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowContent(true);
    }, 200); 
  }, []);

  return (
    <div className="flex justify-center items-center  bg-gray-900 bg-opacity-85 p-4">
      <div
        className={`card lg:card-side text-white shadow-xl lg:max-w-4xl w-full transform transition-opacity duration-1000 ease-out ${
          showContent ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <figure className="lg:w-full w-full lg:h-auto h-72 overflow-hidden opacity-65 hover:opacity-100 transition duration-500 ease-in-out">
          <img
            src="/src/assets/profile.JPG"
            alt="Profile"
            className="object-cover w-full h-full"
          />
        </figure>
        <div className="card-body p-8 lg:p-6 flex flex-col justify-between">
          <h2
            className={`card-title text-center lg:text-left font-bold text-4xl italic transition-transform duration-1000 ease-out ${
              showContent ? "translate-x-0" : "-translate-x-36"
            }`}
          >
            About Me!
          </h2>
          <p
            className={`italic text-center lg:text-left mt-4 transition-opacity duration-1000 delay-200 ease-out ${
              showContent ? "opacity-100" : "opacity-0"
            }`}
          >
            I am a 35-year-old experienced sales manager with a strong
            background in communication and problem-solving. After deciding to
            change my career path, I completed a 1064-hour Junior Front-end
            TypeScript Developer program at{" "}
            <a
              href="https://codeacademy.lt/en/"
              target="_blank"
              className="underline text-blue-400 hover:text-blue-300"
            >
              CodeAcademy
            </a>
            . I would be glad to have the opportunity to continue my journey in
            the field of front-end development.
          </p>
          <div className="text-2xl mt-6">Tech Skills:</div>
          <div
            className={`grid grid-cols-3 lg:grid-cols-4 gap-6 mt-4 transition-transform duration-1000 delay-300 ease-out ${
              showContent ? "translate-y-0" : "translate-y-20"
            }`}
          >
            {[
              { src: "/src/assets/react-origina.png", label: "React" },
              { src: "/src/assets/JS.png", label: "JavaScript" },
              { src: "/src/assets/html.png", label: "HTML" },
              { src: "/src/assets/node.png", label: "Node.js" },
              { src: "/src/assets/socket-io.png", label: "Socket.io" },
              { src: "/src/assets/mogodb.png", label: "MongoDb" },
              { src: "/src/assets/css-logo.png", label: "CSS" },
              { src: "/src/assets/express-js.png", label: "Express.js" },
              { src: "/src/assets/tailwind.png", label: "Tailwind" },
            ].map((tech) => (
              <div
                key={tech.label}
                className="text-center p-4 hover:scale-150 transition"
              >
                <img
                  className="h-10 md:h-20 mx-auto mb-2"
                  src={tech.src}
                  alt={tech.label}
                />
                <p>{tech.label}</p>
              </div>
            ))}
          </div>
          <button
            className="btn btn-neutral italic mt-5 px-8 py-3 hover:bg-blue-900 text-white rounded-full transition duration-300"
            onClick={() => nav("/projects")}
          >
            My projects
          </button>
        </div>
      </div>
    </div>
  );
}

export default About;
