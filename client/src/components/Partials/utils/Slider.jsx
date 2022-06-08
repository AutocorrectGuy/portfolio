import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap, faAngleDoubleLeft, faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import Slider from "react-slick";
import { schoolsData } from "../../../SchoolsData"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import StatesContext from "../../../context/StatesContext";

export default function SimpleSlider() {
  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    lazyLoad: true,
  };

  const { mode: { darkMode } } = useContext(StatesContext);

  function SliderImage({ cardData }) {
    const { color, color2, color3, imgUrl, school, course, started, finished, done, comment } = cardData;

    return (
      <div className={`${!darkMode && "translate-x-px"} flex w-full justify-between h-[500px]`}
        style={{backgroundColor: color}}>
        <div className="relative flex w-full items-center px-10">
          <div className=" flex flex-col gap-2 px-2">
            <p className="text-4xl text-neutral-700 font-bold leading-[30px]"
              style={{ color: color2 }}
            >
              {course}
            </p>
            <div className="flex gap-2 items-center" style={{ color: color3 }}>
              <FontAwesomeIcon icon={faGraduationCap} className={"w-4 h-4"} />
              <p className="text-2xl leading-8">{school}</p>
            </div>
            <div className="absolute left-2 bottom-2 flex gap-2 items-center" style={{ color: color3 }}>
              <FontAwesomeIcon icon={faAngleDoubleLeft} className={" w-4 h-4"} />
              <p className="text-lg leading-5">{`${started}`}</p>
            </div>
            <div className="absolute left-1/2 -translate-x-1/2 bottom-2 flex gap-2 items-center" style={{ color: color3 }}>
              <p className="text-lg leading-5">{`${comment}`}</p>
            </div>
            <div className="absolute right-2 bottom-2 flex gap-2 items-center" style={{ color: color3 }}>
              <p className="text-lg leading-5">{`${done ? finished : "nepabeigta"}`}</p>
              <FontAwesomeIcon icon={faAngleDoubleRight} className={" w-4 h-4"} />
            </div>
          </div>
        </div>

        <div className={`
          ${darkMode
            ? school === "Alberta koledža" ? "bg-neutral-500" : "bg-neutral-300"
            : school === "Alberta koledža" ? "bg-neutral-300" : "bg-white"} 
           flex max-w-[350px] w-full py-auto px-10`}>
          <div className="flex relative pb-[100%] max-w-[350px] w-full">
            <div className="absolute flex top-0 left-0 items-center justify-center w-full h-full">
              <img src={imgUrl} className={"max-w-[350px] w-full h-fit"} />
            </div>
          </div>

        </div>


      </div>
    )
  }

  return (
    <Slider {...settings} className="rounded-t-md overflow-hidden">
      {
        schoolsData.map((cardData, i) =>
          <SliderImage key={`slider-${i}`} cardData={cardData} />
        )
      }
    </Slider>
  );
}