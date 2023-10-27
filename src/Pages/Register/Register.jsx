import { Link, useLocation, useNavigate } from 'react-router-dom';
import img from '../../assets/images/login/login.svg'
import { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import swal from 'sweetalert';

const Register = () => {
    const {createUser}  = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password);
        createUser(email, password)
        .then(res => {
            console.log(res.user);
            swal('Succes!', 'User created successfully.', 'success');
            navigate(location?.state || '/');
        })
        .catch(err => console.error(err.message))
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
            <h1 className="text-2xl font-bold">Register</h1>
            <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name='name'
                  placeholder="name"
                  className="input input-bordered"
                  required
                />
              </div>
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
                  <span className="label-text">Confirm Password</span>
                </label>
                <input
                  type="password"
                  name='password'
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                
              </div>
              <div className="form-control mt-6">
                <button type='submit' className="btn bg-[#FF3811] text-white hover:text-black">Register</button>
              </div>
              <p>Already have an account? <Link to={'/login'} className='font-semibold text-[#FF3811]'>Login</Link></p>
            </form>
            
          </div>
        </div>
      </div>
        </div>
    );
};

export default Register;