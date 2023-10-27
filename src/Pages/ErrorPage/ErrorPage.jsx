import { Link } from "react-router-dom";
import {BiArrowBack} from 'react-icons/bi';

const ErrorPage = () => {
    return (
        <div className="h-screen flex justify-center items-center">
            <div className="text-center">
                <h1 className="text-7xl font-bold">404</h1>
                <h2  className="text-3xl font-bold">The page is not available now</h2>
                <Link className="btn btn-link flex" to={'/'}><BiArrowBack  className="text-xl"/>Back to home</Link>
            </div>
        </div>
    );
};

export default ErrorPage;