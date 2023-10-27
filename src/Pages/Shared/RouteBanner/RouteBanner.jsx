import img from "../../../assets/images/checkout/checkout.png";
import PropTypes from 'prop-types';

const RouteBanner = ({ routeTitle }) => {
  return (
    <div
      className="my-8 h-72  bg-cover bg-center bg-no-repeat  rounded-xl mb-7"
      style={{ backgroundImage: `url(${img})` }}
    >
      {/* <img src={img} className='w-full h-full' alt="" /> */}
      <div className="px-28 rounded-lg relative flex items-center justify-start  w-full h-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
        <h1 className="text-5xl font-bold text-white">{routeTitle}</h1>
        <div className="absolute bottom-0  md:left-1/3">

        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="296"
          height="50"
          viewBox="0 0 296 50"
          fill="none"
          className="relative"
        >
          <path d="M296 49.3H0L27.8 0H268.3L296 49.3Z" fill="#FF3811" />
        </svg>
        <p className="absolute left-1/3  top-1/3 text-white">{routeTitle}</p>
        </div>
      </div>
    </div>
  );
};

RouteBanner.propTypes = {
    routeTitle: PropTypes.string.isRequired,
}

export default RouteBanner;
