import { useLoaderData } from "react-router-dom";
import RouteBanner from "../Shared/RouteBanner/RouteBanner";
import { Button, Input, Textarea } from "@material-tailwind/react";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import swal from "sweetalert";


const CheckOut = () => {
    const {title, price, img} = useLoaderData();
    const {user} = useContext(AuthContext);
    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const service = form.service.value;
        const date = form.date.value;
        const price = form.price.value;
        const checkOut = {name, email, service, date, price, img};
        console.log(checkOut);
        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(checkOut)
        })
        .then(res => res.json())
        .then(data => {
            if(data.insertedId){
                swal('Success!',  "You booked the service successfully.", 'success');
                form.reset();
            }
        })
    }
    return (
        <div>
            <RouteBanner routeTitle={'Check Out'}/>

            <div className="bg-base-200 p-24 space-y-7">
                <form onSubmit={handleSubmit} className="space-y-7">
                <div className="">
                <Input size="lg" type="text" label="Name" name="name" className="bg-white " required />
                </div>
                <div className="flex items-center flex-col md:flex-row justify-between gap-7">
                <Input size="lg" type="email" name="email" label="Your email" value={user.email} className="bg-white"  required />
                <Input size="lg" type="text" name="service" label="Service Name" value={title} className="bg-white" required />
                </div>
                <div className="flex items-center flex-col md:flex-row justify-between gap-7">
                <Input size="lg" type="date" name="date" label="Date" className="bg-white" required />
                <Input size="lg" type="text" name="price" label="Price" value={price} className="bg-white"  required />
                </div>
                <div>
                <Textarea className="bg-white"  name="message"  rows={8} label="Message" />
                </div>
                <div>
                    <Button fullWidth  type="submit"  className="bg-[#FF3811]">Order Confirm</Button>
                </div>
                </form>
            </div>
        </div>
    );
};

export default CheckOut;