import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { RxDownload, RxLinkedinLogo, RxGithubLogo } from "react-icons/rx";
function Home() {
  const nav = useNavigate();
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowContent(true);
    }, 100); 
  }, []);

  return (
    <div
      className={`h-screen text-white flex flex-col md:flex-row transition-opacity duration-1000 delay-200 ease-out ${
        showContent ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="flex-1 flex flex-col justify-center items-center text-center md:items-centerd">
        <div
          className={`text-7xl font-extralight transition-transform duration-1000 delay-300 ease-out ${
            showContent ? "translate-y-0" : "-translate-y-20"
          }`}
        >
          Tomas
        </div>
        <div
          className={`text-7xl font-bold tracking-widest transition-transform  duration-1000 delay-600 ease-out ${
            showContent ? "translate-x-0" : "translate-x-full"
          }`}
        >
          Jarutis
        </div>
        <p
          className={`text-3xl italic pt-4  transition-transform  duration-1000 delay-600 ease-out ${
            showContent ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          Junior Front-End Developer
        </p>
        <div className="flex items-center cursor-pointer gap-4 p-3 text-2xl">
          <a
            className="hover:-translate-y-1 transition ease-in-out"
            href="https://www.linkedin.com/in/tomas-jarutis/"
            target="_blank"
          >
            <RxLinkedinLogo />
          </a>
          <a
            className="hover:-translate-y-1 transition ease-in-out"
            href="https://github.com/TomasJ89"
            target="_blank"
          >
            <RxGithubLogo />
          </a>
          <a
            href="https://drive.google.com/file/d/1GemRmEOSUncAOVF6EbEldz9GaOq5z4Nf/view?usp=sharing"
            className="flex items-center hover:-translate-y-1 transition ease-in-out"
            target="_blank"
          >
            CV
            <RxDownload />
          </a>
        </div>
        <button
          className={`btn btn-neutral italic mt-5 px-8 py-3 text-white rounded-full
            transition-transform duration-1000 ease-out 
            hover:bg-blue-900 hover:transition-colors hover:duration-300 
            ${showContent ? "translate-y-0" : "translate-y-20"}`}
          onClick={() => nav("/about")}
        >
          About Me
        </button>
      </div>
      <div
        className={`flex-1 flex justify-center items-center lg:justify-start  md:mt-0`}
      >
        <div className="relative w-80 h-80">
          <img
            className="rounded-full w-full h-full object-cover opacity-70 hover:opacity-100 hover:scale-105 transition-transform duration-300"
            src="/src/assets/profile2.JPG"
            alt="Profile"
          />
         
        </div>
      </div>
    </div>
  );
}

export default Home;
