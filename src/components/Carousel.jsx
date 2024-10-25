import { useEffect, useState } from "react";

/* eslint-disable react/prop-types */
function Carousel({ data }) {
  const [currentSlide, setCurrentSlide] = useState(0); 

  useEffect(() => {
    setCurrentSlide(0);
  }, [data]);


  const nextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === data.length - 1 ? 0 : prevSlide + 1
    );
  };


  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? data.length - 1 : prevSlide - 1
    );
  };

  return (
    <div className="relative overflow-hidden w-full h-full">
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {data.map((image, i) => (
          <div
            className="carousel-item w-full flex-shrink-0 lg:h-[500px] md:h-[400px] h-[300px]"
            key={i}
          >
            <img
              src={image}
              className="w-full h-full object-contain"
              alt={`Slide ${i}`}
            />
          </div>
        ))}
      </div>

      {/* Navigation buttons */}
      <div
        className={`${
          data.length <= 1 ? "hidden" : ""
        } absolute left-5 right-5 top-1/2 flex -translate-y-1/2 justify-between`}
      >
        <button onClick={prevSlide} className="btn btn-neutral text-xs hover:bg-blue-900 text-white  transition duration-300 ">
          ❮
        </button>
        <button onClick={nextSlide}
                      className="btn btn-neutral text-xs hover:bg-blue-900 text-white  transition duration-300 "
         >
          ❯
        </button>
      </div>
    </div>
  );
}

export default Carousel;
