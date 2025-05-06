import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import ViewBar from "./ViewBar";

function Home() {
  return (
    <div>
      <div className="flex flex-row md:flex-col items-center justify-between text-center w-full mt-10">
        <div className="col-span-1 w-[35%] border-2 items-center justify-center flex flex-col">
          <p className="border-b-2 w-full">Beauty</p>
          <p className="border-b-2 w-full">Frigrancy</p>
          <p className="border-b-2 w-full">Firnature</p>
          <p className="w-full">Groceries</p>
        </div>
        <div className="col-span-2 w-[75%]">
          <Swiper navigation={true} modules={[Navigation]} autoPlay='true'>
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
      <ViewBar />
    </div>
  );
}

export default Home;
