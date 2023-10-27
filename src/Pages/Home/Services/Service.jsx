import PropTypes from 'prop-types';
import {
    Card,
    CardHeader,
    CardBody,
  } from "@material-tailwind/react";
import {BiDollar} from 'react-icons/bi';
import {BsArrowRight} from 'react-icons/bs';
import { Link } from 'react-router-dom';


const Service = ({service}) => {
    const {title, img, price, _id} = service;
    return (
        <div>
         <Card className="">
      <CardHeader shadow={false} floated={false} className="h-60">
        <img
          src={img}
          alt="card-image"
          className="h-full w-full object-cover"
        />
      </CardHeader>
      <CardBody>
       <h2 className='text-xl font-bold text-[#444]'>{title}</h2>
       <div className='flex items-center  justify-between mt-5'>
        <p className='flex items-center font-bold text-[#FF3811]'>Price: <BiDollar/> {price}</p>
        <Link to={`/serviceDetails/${_id}`}><button className='btn btn-ghost text-2xl btn-circle text-[#FF3811]'><BsArrowRight/></button></Link>
       </div>
      </CardBody>

    </Card>
        </div>
    );
};

Service.propTypes = {
    service: PropTypes.object.isRequired,
}

export default Service;