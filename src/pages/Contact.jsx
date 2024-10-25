import { useEffect, useState } from "react";
import { RxDownload, RxLinkedinLogo, RxGithubLogo } from "react-icons/rx";
import ContactForm from '../components/ContactForm'

function Contact() {
  
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowContent(true);
    }, 200); 
  }, []);

  return (
    
    <div className={`bg-gray-900 bg-opacity-85 min-h-screen transform transition-opacity duration-1000 ease-out ${
      showContent ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
    }`}>
      <header className="text-center py-6 bg-dark text-white">
        <h1 className="text-4xl font-bold">Contact Me</h1>
      </header>
      <div>
         <ContactForm />
      </div>
      <div className="flex justify-center text-white items-center cursor-pointer gap-4 p-3 text-2xl">
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
    </div>
  )
}

export default Contact
