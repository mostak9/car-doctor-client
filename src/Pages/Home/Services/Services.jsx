import { useEffect, useState } from "react";
import Service from "./Service";
import { Spinner } from "@material-tailwind/react";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";


const Services = () => {
    // const [services, setServices] = useState([]);
    const axiosSecure = useAxiosSecure();


    const {data: services, isLoading} = useQuery({
        queryKey: ['services'],
        queryFn: async ()  => {
            const res = await axiosSecure.get('/services')
            return res.data;
        }
    })

    if(isLoading)  return <div className="flex items-center justify-center min-h-screen"><progress className="progress w-56"></progress></div>


    // useEffect(()  => {
    //     fetch('http://localhost:5000/services')
    //     .then(res =>  res.json())
    //     .then(data => {
    //         setServices(data)
    //         console.log(data);
    //     })
    // }, [])
    return (
        <div className="mt-10">
            <div className="text-center space-y-3 mb-5">
                <h3 className="text-2xl font-bold text-[#FF3811]">Service</h3>
                <h1 className="text-5xl font-bold">Our Service Area</h1>
                <p className="text-gray-500 max-w-3xl mx-auto">the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
            </div>
            {
                services.length > 0 ? <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    services.map(service => <Service key={service._id} service={service}/>)
                }
            </div>: <div className="flex items-center justify-center"><Spinner className="h-12 w-12" /></div>
            }
        </div>
    );
};

export default Services;