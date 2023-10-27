import person from '../../../assets/images/about_us/person.jpg'
import parts from '../../../assets/images/about_us/parts.jpg'

const About = () => {
  return (
    <div>
      <div className="hero min-h-screen">
        <div className="hero-content  flex-col lg:flex-row">
          <div className='lg:w-1/2 relative'>
          <img
            src={person}
            className="w-3/4 rounded-lg shadow-2xl "
          />
          <img src={parts} className='w-1/2 rounded-lg shadow-2xl absolute right-5 top-1/2 border-8 border-white' alt="" />
          </div>
          <div className='lg:w-1/2'>
            <h3 className='text-[#FF3811] font-bold text-2xl mb-5'>About Us</h3>
            <h1 className="text-5xl font-bold mb-7">We are qualified <br /> & of experience <br /> in this field</h1>
            <p className="pt-6 pb-3">
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
            </p>
            <p className="pb-6">
            the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable
            </p>
            <button className="btn bg-[#FF3811] text-white mt-7">Get More Info</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
