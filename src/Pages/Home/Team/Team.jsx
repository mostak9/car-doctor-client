import { Link } from "react-router-dom";
import person1 from "../../../assets/images/team/1.jpg";
import person2 from "../../../assets/images/team/2.jpg";
import person3 from "../../../assets/images/team/3.jpg";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Tooltip,
} from "@material-tailwind/react";
import {BsFacebook, BsTwitter,  BsInstagram, BsLinkedin} from 'react-icons/bs';

const Team = () => {
  return (
    <div className="mt-10"> 
        <div className="text-center space-y-5 mb-7">
            <h3 className="font-bold text-xl text-[#FF3811]">Team</h3>
            <h1 className="text- text-5xl font-bold">Meet Our Team</h1>
            <p className="text-gray-500 max-w-2xl mx-auto">The majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
        </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* card 1 */}
      <Card className="">
        <CardHeader floated={false} className="h-64">
          <img src={person1} alt="profile-picture" className="h-full" />
        </CardHeader>
        <CardBody className="text-center">
          <Typography variant="h4" color="blue-gray" className="mb-2">
            Car Engine Plug
          </Typography>
          <Typography color="blue-gray" className="font-medium" textGradient>
            Engine Expert
          </Typography>
        </CardBody>
        <CardFooter className="flex justify-center gap-7 pt-2 text-2xl text-black">
         <Link><BsFacebook className="text-[#395185]"/></Link>
         <Link><BsTwitter className="text-[#55ACEE]"/></Link>
         <Link><BsLinkedin className="text-[#0A66C2]"/></Link>
         <Link><BsInstagram/></Link>
        </CardFooter>
      </Card>
      {/* card 2 */}
      <Card className="">
        <CardHeader floated={false} className="h-64">
          <img src={person2} alt="profile-picture" className="h-full" />
        </CardHeader>
        <CardBody className="text-center">
          <Typography variant="h4" color="blue-gray" className="mb-2">
            Car Engine Plug
          </Typography>
          <Typography color="blue-gray" className="font-medium" textGradient>
            Engine Expert
          </Typography>
        </CardBody>
        <CardFooter className="flex justify-center gap-7 pt-2 text-2xl text-black">
         <Link><BsFacebook className="text-[#395185]"/></Link>
         <Link><BsTwitter className="text-[#55ACEE]"/></Link>
         <Link><BsLinkedin className="text-[#0A66C2]"/></Link>
         <Link><BsInstagram/></Link>
        </CardFooter>
      </Card>
      {/* card 3 */}
      <Card className="h-full">
        <CardHeader floated={false} className="h-64">
          <img src={person3} alt="profile-picture" className="h-full" />
        </CardHeader>
        <CardBody className="text-center">
          <Typography variant="h4" color="blue-gray" className="mb-2">
            Car Engine Plug
          </Typography>
          <Typography color="blue-gray" className="font-medium" textGradient>
            Engine Expert
          </Typography>
        </CardBody>
        <CardFooter className="flex justify-center gap-7 pt-2 text-2xl text-black">
         <Link><BsFacebook className="text-[#395185]"/></Link>
         <Link><BsTwitter className="text-[#55ACEE]"/></Link>
         <Link><BsLinkedin className="text-[#0A66C2]"/></Link>
         <Link><BsInstagram/></Link>
        </CardFooter>
      </Card>
      </div>
    </div>
  );
};

export default Team;
