import { Carousel, IconButton } from "@material-tailwind/react";
import img1 from '../../../assets/images/banner/1.jpg'
import img2 from '../../../assets/images/banner/2.jpg'
import img3 from '../../../assets/images/banner/3.jpg'
import img4 from '../../../assets/images/banner/4.jpg'
import img5 from '../../../assets/images/banner/5.jpg'
import img6 from '../../../assets/images/banner/6.jpg'
import {BsArrowRight, BsArrowLeft} from 'react-icons/bs'

const Banner = () => {
  return (
    <div>
      <Carousel
        className="rounded-xl h-[600px]"
        autoplay={true}
        autoplayDelay={4000}
        loop={true}
        prevArrow={({ handlePrev }) => (
          <IconButton
            variant="text"
            color="white"
            size="lg"
            onClick={handlePrev}
            className="!absolute bottom-0 right-20 btn btn-circle border-none bg-[#FF3811] -translate-y-2/4"
          >
            <BsArrowLeft className="text-3xl font-bold"/>
          </IconButton>
        )}
        nextArrow={({ handleNext }) => (
          <IconButton
            variant="text"
            color="white"
            size="lg"
            onClick={handleNext}
            className="!absolute bottom-0 btn btn-circle  border-none  bg-[#FF3811] !right-4 -translate-y-2/4"
          >
            <BsArrowRight className="text-3xl font-bold"/>
          </IconButton>
        )}
      >
        <div className="relative h-full w-full ">
        <img
          src={img1}
          alt="image 1"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0  h-full w-full p-24 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] flex justify-start items-center">
            <div className="w-3/4 md:w-1/2 text-white space-y-7">
                <h1 className="text-3xl md:text-6xl font-bold">Affordable Price For Car Servicing</h1>
                <p className="">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                <div className="flex items-center gap-4">
                    <button className="btn bg-[#FF3811] text-white  hover:border  hover:bg-transparent border-[#FF3811]">Discover more</button>
                    <button className="btn btn-outline text-white border border-[#FF3811] hover:bg-[#FF3811]">Latest Project</button>
                </div>
            </div>
        </div>
        </div>
        <div className="relative h-full w-full">
        <img
          src={img2}
          alt="image 1"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0  h-full w-full p-24 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] flex justify-start items-center">
            <div className="w-3/4 md:w-1/2 text-white space-y-7">
                <h1 className="text-3xl md:text-6xl font-bold">Affordable Price For Car Servicing</h1>
                <p className="">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                <div className="flex items-center gap-4">
                    <button className="btn bg-[#FF3811] text-white  hover:border  hover:bg-transparent border-[#FF3811]">Discover more</button>
                    <button className="btn btn-outline text-white border border-[#FF3811] hover:bg-[#FF3811]">Latest Project</button>
                </div>
            </div>
        </div>
        </div>
        <div className="relative h-full w-full">
        <img
          src={img3}
          alt="image 1"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0  h-full w-full p-24 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] flex justify-start items-center">
            <div className="w-3/4 md:w-1/2 text-white space-y-7">
                <h1 className="text-3xl md:text-6xl font-bold">Affordable Price For Car Servicing</h1>
                <p className="">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                <div className="flex items-center gap-4">
                    <button className="btn bg-[#FF3811] text-white  hover:border  hover:bg-transparent border-[#FF3811]">Discover more</button>
                    <button className="btn btn-outline text-white border border-[#FF3811] hover:bg-[#FF3811]">Latest Project</button>
                </div>
            </div>
        </div>
        </div>
        <div className="relative h-full w-full">
        <img
          src={img4}
          alt="image 1"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0  h-full w-full p-24 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] flex justify-start items-center">
            <div className="w-3/4 md:w-1/2 text-white space-y-7">
                <h1 className="text-3xl md:text-6xl font-bold">Affordable Price For Car Servicing</h1>
                <p className="">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                <div className="flex items-center gap-4">
                    <button className="btn bg-[#FF3811] text-white  hover:border  hover:bg-transparent border-[#FF3811]">Discover more</button>
                    <button className="btn btn-outline text-white border border-[#FF3811] hover:bg-[#FF3811]">Latest Project</button>
                </div>
            </div>
        </div>
        </div>
        <div className="relative h-full w-full">
        <img
          src={img5}
          alt="image 1"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0  h-full w-full p-24 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] flex justify-start items-center">
            <div className="w-3/4 md:w-1/2 text-white space-y-7">
                <h1 className="text-3xl md:text-6xl font-bold">Affordable Price For Car Servicing</h1>
                <p className="">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                <div className="flex items-center gap-4">
                    <button className="btn bg-[#FF3811] text-white  hover:border  hover:bg-transparent border-[#FF3811]">Discover more</button>
                    <button className="btn btn-outline text-white border border-[#FF3811] hover:bg-[#FF3811]">Latest Project</button>
                </div>
            </div>
        </div>
        </div>
        <div className="relative h-full w-full">
        <img
          src={img6}
          alt="image 1"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0  h-full w-full p-24 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] flex justify-start items-center">
            <div className="w-3/4 md:w-1/2 text-white space-y-7">
                <h1 className="text-3xl md:text-6xl font-bold">Affordable Price For Car Servicing</h1>
                <p className="">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                <div className="flex items-center gap-4">
                    <button className="btn bg-[#FF3811] text-white  hover:border  hover:bg-transparent border-[#FF3811]">Discover more</button>
                    <button className="btn btn-outline text-white border border-[#FF3811] hover:bg-[#FF3811]">Latest Project</button>
                </div>
            </div>
        </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
