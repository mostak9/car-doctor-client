import { Link, useLoaderData } from "react-router-dom";
import RouteBanner from "../Shared/RouteBanner/RouteBanner";
import lastImg from "../../assets/images/banner/2.jpg";
import { useEffect, useState } from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import logo from "../../assets/logo.svg";

const ServiceDetails = () => {
  const { img, title, description, facility, _id, price } = useLoaderData();
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div>
      <RouteBanner routeTitle="Service Details" />
      <div className="flex flex-col lg:flex-row-reverse gap-6 mt-32">
        {/* offer part */}
        <div className="flex-1">
          {/* navigation service types */}
          <div className=" px-6 py-10 rounded-lg bg-[#F3F3F3]">
            <h1 className="font-bold text-2xl mb-5">Services</h1>
            <div className="flex flex-col items-center gap-5">
              {services.map((service) => {
                return (
                  <Link
                    key={service._id}
                    to={`/serviceDetails/${service._id}`}
                    className={`btn btn-block flex items-center justify-between   ${
                      service._id === _id
                        ? "bg-[#FF3811] text-white"
                        : "bg-white text-black"
                    }`}
                  >
                    {service.title} <HiArrowNarrowRight className="text-2xl" />
                  </Link>
                );
              })}
            </div>
          </div>
          {/* download */}
          <div className="bg-[#151515] text-white p-10 rounded-lg mt-7 space-y-6">
            <div className="flex items-center justify-between">
              <div className=" flex items-center gap-2">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                    fill="none"
                  >
                    <path
                      d="M24.375 17.8125V14.5312C24.375 13.4124 23.9305 12.3393 23.1394 11.5481C22.3482 10.757 21.2751 10.3125 20.1562 10.3125H18.2812C17.9083 10.3125 17.5506 10.1643 17.2869 9.90062C17.0232 9.6369 16.875 9.27921 16.875 8.90625V7.03125C16.875 5.91237 16.4305 4.83931 15.6394 4.04814C14.8482 3.25697 13.7751 2.8125 12.6562 2.8125H10.3125M11.25 20.625V21.5625M15 17.8125V21.5625M18.75 15V21.5625M13.125 2.8125H7.03125C6.255 2.8125 5.625 3.4425 5.625 4.21875V25.7812C5.625 26.5575 6.255 27.1875 7.03125 27.1875H22.9688C23.745 27.1875 24.375 26.5575 24.375 25.7812V14.0625C24.375 11.0788 23.1897 8.21733 21.08 6.10755C18.9702 3.99776 16.1087 2.8125 13.125 2.8125V2.8125Z"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div>
                  <h1 className="font-xl font-semibold">Our Brochure</h1>
                  <p className="text-[#A2A2A2]">Download</p>
                </div>
              </div>
              <div>
                <button className="btn bg-[#FF3811]">
                  <HiArrowNarrowRight className="text-2xl" />
                </button>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className=" flex items-center gap-2">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                    fill="none"
                  >
                    <path
                      d="M24.375 17.8125V14.5312C24.375 13.4124 23.9305 12.3393 23.1394 11.5481C22.3482 10.757 21.2751 10.3125 20.1562 10.3125H18.2812C17.9083 10.3125 17.5506 10.1643 17.2869 9.90062C17.0232 9.6369 16.875 9.27921 16.875 8.90625V7.03125C16.875 5.91237 16.4305 4.83931 15.6394 4.04814C14.8482 3.25697 13.7751 2.8125 12.6562 2.8125H10.3125M11.25 20.625V21.5625M15 17.8125V21.5625M18.75 15V21.5625M13.125 2.8125H7.03125C6.255 2.8125 5.625 3.4425 5.625 4.21875V25.7812C5.625 26.5575 6.255 27.1875 7.03125 27.1875H22.9688C23.745 27.1875 24.375 26.5575 24.375 25.7812V14.0625C24.375 11.0788 23.1897 8.21733 21.08 6.10755C18.9702 3.99776 16.1087 2.8125 13.125 2.8125V2.8125Z"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div>
                  <h1 className="font-xl font-semibold">Company Details</h1>
                  <p className="text-[#A2A2A2]">Download</p>
                </div>
              </div>
              <div>
                <button className="btn bg-[#FF3811]">
                  <HiArrowNarrowRight className="text-2xl" />
                </button>
              </div>
            </div>
          </div>
          {/* offer box */}
          <div className="bg-[#151515] text-white p-10 rounded-lg mt-7 space-y-8">
            <div>
              <img src={logo} alt="" className="mx-auto" />
            </div>
            <p className="font-bold text-xl text-center">
              Need Help? We Are Here <br />
              To Help You
            </p>
            <div>
            <div className="px-11 pt-5 pb-10 bg-white rounded-lg text-center">
              <p className="text-black font-bold"><span className="text-[#FF3811]">Car Doctor</span> Special</p>
              <p className="text-[#737373]">Save up to <span className="text-[#FF3811]">60% off</span></p>
            </div>
            <div className="flex items-center justify-center -mt-6">
              <p className="inline px-7 py-4 text-white bg-[#FF3811] rounded-md">Get A Quote</p>
            </div>
            </div>
          </div>
          {/* price */}
          <div className='my-7 font-bold text-4xl'><p>Price: ${price}</p></div>
          {/* checkout btn */}
          <div>
            <Link to={`/services/${_id}`} className="btn bg-[#FF3811] btn-block  text-white">Proceed Checkout</Link>
          </div>
        </div>

        {/* details part */}
        <div className="lg:w-3/4">
          {/* head img */}
          <div className="h-96">
            <img src={img} className="w-full h-full rounded-lg" alt="" />
          </div>
          {/* description part */}
          <div>
            <h1 className="text-4xl font-bold mt-12 mb-7">{title}</h1>
            <p className="text-[#737373]">{description}</p>
            {/* facility section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {facility.map((fac, idx) => {
                return (
                  <div
                    key={idx}
                    className="bg-[#F3F3F3] p-10 mt-7 rounded-lg border-t-2 border-[#FF3811]"
                  >
                    <h1 className="text-xl font-bold">{fac.name}</h1>
                    <p className="text-[#737373]">{fac.details}</p>
                  </div>
                );
              })}
            </div>
            {/* description */}
            <p className="text-[#737373] mt-7">{description}</p>
            {/* 3  ways title */}
            <h1 className="text-4xl font-bold mt-12 mb-7">
              3 Simple Steps to Process
            </h1>
            {/* description */}
            <p className="text-[#737373]">{description}</p>
            {/* steps grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-9">
              <div className="px-9 py-10 rounded-lg border-2 text-center space-y-5">
                <div className="relative flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="83"
                    height="83"
                    viewBox="0 0 83 83"
                    fill="none"
                    className="mx-auto"
                  >
                    <circle
                      cx="41.5"
                      cy="41.5"
                      r="41.5"
                      fill="#FF3811"
                      fillOpacity="0.1"
                    />
                    <circle cx="41.5" cy="41.5" r="27.9795" fill="#FF3811" />
                  </svg>
                  <p className="font-bold text-xl absolute left-1/3 ml-11 md:ml-5 top-1/3 text-white">
                    01
                  </p>
                </div>
                <h1 className="text-xl font-bold uppercase">Step One</h1>
                <p className="text-[#737373]">
                  It uses a dictionary of over 200 .
                </p>
              </div>
              <div className="px-9 py-10 rounded-lg border-2 text-center space-y-5">
                <div className="relative">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="83"
                    height="83"
                    viewBox="0 0 83 83"
                    fill="none"
                    className="mx-auto"
                  >
                    <circle
                      cx="41.5"
                      cy="41.5"
                      r="41.5"
                      fill="#FF3811"
                      fillOpacity="0.1"
                    />
                    <circle cx="41.5" cy="41.5" r="27.9795" fill="#FF3811" />
                  </svg>
                  <p className="font-bold text-xl absolute left-1/3 ml-11 md:ml-5 top-1/3 text-white">
                    02
                  </p>
                </div>
                <h1 className="text-xl font-bold uppercase">Step Two</h1>
                <p className="text-[#737373]">
                  It uses a dictionary of over 200 .
                </p>
              </div>
              <div className="px-9 py-10 rounded-lg border-2 text-center space-y-5">
                <div className="relative">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="83"
                    height="83"
                    viewBox="0 0 83 83"
                    fill="none"
                    className="mx-auto"
                  >
                    <circle
                      cx="41.5"
                      cy="41.5"
                      r="41.5"
                      fill="#FF3811"
                      fillOpacity="0.1"
                    />
                    <circle cx="41.5" cy="41.5" r="27.9795" fill="#FF3811" />
                  </svg>
                  <p className="font-bold text-xl absolute left-1/3 ml-11 md:ml-5 top-1/3 text-white">
                    03
                  </p>
                </div>
                <h1 className="text-xl font-bold uppercase">Step Three</h1>
                <p className="text-[#737373]">
                  It uses a dictionary of over 200 .
                </p>
              </div>
            </div>
          </div>
          {/* last img */}
          <div className="h-96  relative">
            <img src={lastImg} className="w-full h-full rounded-lg" alt="" />
            <div className="absolute top-1/3 right-1/3 mr-12">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="126"
                height="126"
                viewBox="0 0 126 126"
                fill="none"
              >
                <path
                  d="M110.25 63C110.25 69.205 109.028 75.3492 106.653 81.0818C104.279 86.8144 100.798 92.0232 96.4108 96.4108C92.0232 100.798 86.8144 104.279 81.0818 106.653C75.3492 109.028 69.205 110.25 63 110.25C56.795 110.25 50.6508 109.028 44.9182 106.653C39.1856 104.279 33.9768 100.798 29.5892 96.4108C25.2016 92.0232 21.7212 86.8144 19.3467 81.0818C16.9722 75.3492 15.75 69.205 15.75 63C15.75 50.4685 20.7281 38.4503 29.5892 29.5892C38.4503 20.7281 50.4685 15.75 63 15.75C75.5315 15.75 87.5497 20.7281 96.4108 29.5892C105.272 38.4503 110.25 50.4685 110.25 63Z"
                  stroke="#FF3811"
                  strokeWidth="5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M83.5275 61.278C83.8349 61.4484 84.0911 61.6979 84.2695 62.0007C84.4479 62.3035 84.5419 62.6486 84.5419 63C84.5419 63.3515 84.4479 63.6965 84.2695 63.9993C84.0911 64.3021 83.8349 64.5517 83.5275 64.722L54.1118 81.0653C53.812 81.2316 53.474 81.3169 53.1312 81.3125C52.7884 81.3082 52.4527 81.2143 52.1573 81.0404C51.8618 80.8664 51.617 80.6183 51.4469 80.3207C51.2768 80.023 51.1874 79.6861 51.1875 79.3433V46.6568C51.1875 45.1553 52.7993 44.2103 54.1118 44.94L83.5275 61.278Z"
                  stroke="#FF3811"
                  strokeWidth="5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
