import About from "../About/About";
import Banner from "../Banner/Banner";
import DateLocation from "../DateLocation/DateLocation";
import Services from "../Services/Services";
import Team from "../Team/Team";


const Home = () => {
    return (
        <div>
            <Banner/>
            <About/>
            <Services/>
            <DateLocation/>
            <Team/>
        </div>
    );
};

export default Home;