import { Link, useLocation, useNavigate } from 'react-router-dom';
import img from '../../assets/images/login/login.svg'
import { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import swal from 'sweetalert';

const Login = () => {
  const {userLogin} = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation()
  // console.log(location);
    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        userLogin(email, password)
        .then(res => {
          console.log(res.user);
          navigate(location.state || '/');
          swal({
            title: "Success!",
            text: "You logged in successfully!",
            icon: "success",
            button: "ok",
          });
          
        })
        .catch(err => console.error(err))
    }
  return (
    <div>
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row">
          <div className="w-1/2 mr-14">
            <img src={img} alt="" />
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
         
            <form onSubmit={handleSubmit} className="card-body">
            <h1 className="text-2xl font-bold">Login</h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name='email'
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name='password'
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button type='submit' className="btn bg-[#FF3811] text-white hover:text-black">Login</button>
              </div>
              <p>Don't have account? <Link to={'/register'} className='font-semibold text-[#FF3811]'>Register</Link></p>
            </form>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
