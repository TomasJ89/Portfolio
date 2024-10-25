import { useEffect, useState } from "react";
import Carousel from "../components/Carousel";
import { RxArrowRight, RxArrowLeft, RxGithubLogo } from "react-icons/rx";
import { useNavigate } from "react-router-dom";
function Projects() {
  const nav = useNavigate();
  const [project, setProject] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const projectsData = [
    {
      images: [
        "/liveChat.png",
        "/liveChat3.png",
        "/liveChat2.png",
      ],
      title: "Chat App",
      content: `This app built using the MERN and Socket.IO for real-time interactions. This dynamic application allows you to: engage in real-time conversations, ensuring your messages are delivered instantly, receive instant notifications, easily see which users are currently online and ready to chat `,
      link: "https://final-task-front.onrender.com/",
      gitLink: "https://github.com/TomasJ89/final_task_back1",
    },
    {
      images: ["/cinema.png"],
      title: "Cinema",
      content: `
       This web-based application allows both users and administrators to manage cinema seat bookings efficiently.
      Admin Features: Admins can add new movies to the system, define the number of available seats, and cancel user reservations when necessary to free up seats.
      User Features: Users can easily browse the list of available movies, select their preferred seats, and manage their bookings.
      Built with JavaScript, SCSS, and HTML.
      `,
      link: "https://tomasj89.github.io/Cinemanew/",
      gitLink: "https://github.com/TomasJ89/Cinemanew",
    },
    {
      images: [
        "/recipe.png",
        "/recipe2.png",
      ],
      title: "Recipes Blog App",
      content: `This app is created using the MERN stack, offering you the opportunity to create new recipes, comment on them, and rate them. You can sort recipes by rating and filter them by ingredients, making it easy to find exactly what you’re looking for.`,
      link: "https://recipesblogapp.onrender.com/",
      gitLink: "https://github.com/TomasJ89/RecipesBlog",
    },
  ];
  const [showContent, setShowContent] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setShowContent(true);
    }, 200);
  }, []);
  const handleProjectChange = (nextProject) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setProject(nextProject);
      setIsTransitioning(false);
    }, 300);
  };
  return (
    <div
      className={`bg-gray-900 bg-opacity-85 min-h-screen transform transition-opacity duration-1000 ease-out ${
        showContent ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <header className="text-center py-6 bg-dark text-white">
        <h1 className="text-4xl font-bold">My Projects</h1>
        <p className="italic text-lg mt-2">Explore some of my work</p>
      </header>
      <div className="flex justify-around">
        <button
          className="btn btn-neutral italic mt-5 px-4 py-2 text-xs hover:bg-blue-900 text-white rounded-full transition duration-300 sm:px-8 sm:py-3 sm:text-base"
          onClick={() => handleProjectChange(project === 0 ? 2 : project - 1)}
        >
          <RxArrowLeft />
          Previous
        </button>
        <div className="text-xl lg:text-3xl text-white">
          {projectsData[project].title}
        </div>
        <button
          className="btn btn-neutral italic mt-5 px-4 py-2 text-xs hover:bg-blue-900 text-white rounded-full transition duration-300 sm:px-8 sm:py-3 sm:text-base"
          onClick={() => handleProjectChange(project === 2 ? 0 : project + 1)}
        >
          Next
          <RxArrowRight />
        </button>
      </div>
      {/* Project Content with smooth sliding effect */}
      <div
        className={`card lg:card-side text-white shadow-xl m-5 lg:h-[500px] transform transition-all duration-500 ease-in-out ${
          isTransitioning
            ? "opacity-0 -translate-x-10"
            : "opacity-100 translate-x-0"
        }`}
      >
        <figure className="lg:w-4/6">
          {/* Carousel component to display images */}
          <Carousel data={projectsData[project].images} />
        </figure>
        <div className="card-body text-justify lg:w-2/6 p-4">
          <h2 className="card-title text-2xl font-semibold mb-3">
            {projectsData[project].title}
          </h2>
          <div className="text-sm lg:text-lg leading-relaxed">
            {projectsData[project].content}
            <p
              className={`text-xs italic mt-2 ${project === 1 ? "hidden" : ""}`}
            >
              * Please note that it is deployed on Render.com’s free tier, so
              you may need to wait a bit for it to wake up after periods of
              inactivity.
            </p>
            <div className="flex items-center mt-5 gap-5">
              <a
                href={projectsData[project].link}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-neutral italic px-4 py-2 text-xs hover:bg-blue-900 text-white rounded-full transition duration-300 sm:px-8 sm:py-3 sm:text-base"
              >
                View live
              </a>
              <a
                className="hover:-translate-y-1 transition ease-in-out text-3xl"
                href={projectsData[project].gitLink}
                target="_blank"
              >
                <RxGithubLogo />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-end me-5">
        <button
          className="btn btn-neutral italic mt-5 px-4 py-2 text-xs hover:bg-blue-900 text-white rounded-full transition duration-300 sm:px-8 sm:py-3 sm:text-base"
          onClick={() => nav("/contact")}
        >
          Contact Me
        </button>
      </div>
    </div>
  );
}
export default Projects;