import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
    if (publicKey) {
      emailjs.init(publicKey);
    } else {
      console.error("Public key not found. Make sure it is defined in the .env file.");
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID, 
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID, 
        formData
      )
      .then(
        () => {
          setFormData({ name: "", email: "", message: "" });
        },
        (err) => {
          console.error("FAILED...", err);
          alert(`Failed to send message: ${err.text}`);
        }
      );
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col max-w-3xl mx-auto p-4 italic shadow-lg text-white text-center"
    >
      <h2 className="text-2xl mb-4">
        Please feel free to email me if you have any questions or need to send me any information.
      </h2>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Your Name"
        required
        className="p-2 mb-4 border rounded text-black"
      />
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Your Email"
        required
        className="p-2 mb-4 border rounded text-black"
      />
      <textarea
        name="message"
        value={formData.message}
        onChange={handleChange}
        placeholder="Your Message"
        required
        className="p-2 mb-4 border rounded text-black"
        rows="4"
      />
      <button type="submit" className="btn btn-neutral italic mt-5 px-8 py-3 hover:bg-blue-900 text-white rounded-full transition duration-300">
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;