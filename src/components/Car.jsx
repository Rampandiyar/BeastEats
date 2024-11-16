import hero1 from "../assets/hero1.jpg";
import hero2 from "../assets/hero2.jpg";
import hero3 from "../assets/hero3.jpg";

import { TECarousel, TECarouselItem } from "tw-elements-react";

export default function Car() {
  return (
    <>
      <div className="max-w-full mx-auto p-4 ">
        <div className="max-h-[500px] relative">
          <TECarousel showControls showIndicators ride="carousel">
            <div className="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
              <TECarouselItem
                itemID={1}
                className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
              >
                <img
                  src={hero1}
                  className="block rounded-xl w-full max-h-[200px] md:max-h-[300px] sm:max-h-[400px] lg:max-h-[600px] object-cover"
                  alt="..."
                />
                <div className="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-white md:block">
                  <h5 className="text-xl">First slide label</h5>
                  <p>
                    Some representative placeholder content for the first slide.
                  </p>
                </div>
              </TECarouselItem>
              <TECarouselItem
                itemID={2}
                className="relative float-left hidden -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
              >
                <img
                  src={hero2}
                  className="block w-full rounded-xl max-h-[200px] md:max-h-[300px] sm:max-h-[400px] lg:max-h-[600px] object-cover"
                  alt="..."
                />
                <div className="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-white md:block">
                  <h5 className="text-xl">Second slide label</h5>
                  <p>
                    Some representative placeholder content for the second
                    slide.
                  </p>
                </div>
              </TECarouselItem>
              <TECarouselItem
                itemID={3}
                className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
              >
                <img
                  src={hero3}
                  className="block w-full rounded-xl max-h-[200px] md:max-h-[300px] sm:max-h-[400px] lg:max-h-[600px] object-cover"
                  alt="..."
                />
                <div className="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-white md:block">
                  <h5 className="text-xl">Third slide label</h5>
                  <p>
                    Some representative placeholder content for the third slide.
                  </p>
                </div>
              </TECarouselItem>
            </div>
          </TECarousel>
        </div>
      </div>
    </>
  );
}
