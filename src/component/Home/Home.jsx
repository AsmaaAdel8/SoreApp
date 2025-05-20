import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import ViewBar from "./ViewBar";
import { AiOutlineArrowDown } from "react-icons/ai";
import "../../App.css";

function Home() {
  return (
    <div className="relative">
      <div className="w-full grid xl:grid-cols-3 grid-cols-1 gap-4 xl:mt-10 h-[50%] mt-[-15%]">
        <div className="col-span-1 border-2 items-center justify-center flex flex-col h-[50%] mt-[40%] text-center">
          <p className="border-b-2 w-full">Beauty</p>
          <p className="border-b-2 w-full">Frigrancy</p>
          <p className="border-b-2 w-full">Firnature</p>
          <p className="w-full">Groceries</p>
        </div>
        <div className="col-span-2">
          <Swiper navigation={true} modules={[Navigation]} autoPlay={true}>
            <SwiperSlide>
              <img
                src="items/1.jpg"
                alt="show image 1"
                draggable="false"
                width={750}
                height={400}
                className="rounded-lg"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="items/2.jpg"
                alt="show image 2"
                draggable="false"
                width={750}
                height={400}
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="items/3.jpg"
                alt="show image 3"
                draggable="false"
                width={750}
                height={400}
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="items/4.jpg"
                alt="show image 4"
                draggable="false"
                width={750}
                height={400}
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <svg
        id="scro"
        className="size-10 animate-bounce bg-amber-600 rounded-4xl text-2xl right-0 top-[95vh] fixed"
      >
        <AiOutlineArrowDown className="m-auto" />
      </svg>
      <ViewBar />
    </div>
  );
}

export default Home;
