import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { Spinner } from "@material-tailwind/react";
import PropTypes from 'prop-types'
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({children}) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
//   console.log(location);
  if(loading){
    return <div className="flex items-center justify-center"><Spinner className="h-16 w-16 text-gray-900/50" /></div>;
  }
  if(user?.email) {
    return children;
  }
  return <Navigate state={location.pathname} to={'/login'}/>;
};

PrivateRoute.propTypes = {
    children: PropTypes.node.isRequired
}

export default PrivateRoute;
