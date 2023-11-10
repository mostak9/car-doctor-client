import axios from "axios";
import { useContext, useEffect } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";


const axiosSecure = axios.create({
    baseURL: 'http://localhost:5000',
    withCredentials: true,
})

const useAxiosSecure = () => {
    const {logOut} = useContext(AuthContext);
    useEffect(()  => {
        axiosSecure.interceptors.response.use(response => {
            return response;
        }, error => {
            console.log(error.response);
            if(error.response.status === 401 || error.response.status === 403) {
                logOut()
                .then()
                .catch()
            }
        })
    }, [logOut])
    return axiosSecure;
};

export default useAxiosSecure;