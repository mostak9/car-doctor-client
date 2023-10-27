import { useContext, useEffect, useState } from "react";
import RouteBanner from "../Shared/RouteBanner/RouteBanner";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import swal from "sweetalert";

const Bookings = () => {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);
  const [state, setState] = useState(false);
  useEffect(() => {
    fetch(`http://localhost:5000/bookings?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setBookings(data));
  }, [user, state]);

  const handleDelete = (_id) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this imaginary file!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        fetch(`http://localhost:5000/bookings/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount) {
              swal("Success!", "Product deleted successfully", "success");
              const remaining = bookings.filter(booking => booking._id !== _id);
              setBookings(remaining);
            }
          });
      } else {
        swal("Delete cancelled!");
      }
    });
  };

  const handleState = _id => {
    fetch(`http://localhost:5000/bookings/${_id}`,{
      method: "PATCH",
      headers: {
        'content-type' : 'application/json'
      },
      body: JSON.stringify({state: true})
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      if(data.modifiedCount) {
        setState(true);
        swal("Success!", "Product approved successfully", "success");
      }
    })
  }

  return (
    <div>
      <RouteBanner routeTitle="My Bookings" />
      {
        bookings.length > 0 ? <div className="mt-7">
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Service</th>
                <th>Price</th>
                <th>Date</th>
                <th>State</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map((booking) => (
                <tr key={booking._id}>
                  <th>
                    <button
                      onClick={() => handleDelete(booking._id)}
                      className="btn btn-circle"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </th>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="w-24 rounded">
                          <img src={booking.img} />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{booking.service}</div>
                      </div>
                    </div>
                  </td>
                  <td>${booking.price}</td>
                  <td>{booking.date}</td>
                  <th>
                    {booking?.state ? <button className="btn  btn-xs btn-outline text-green-600 border-green-600 ">
                      Approved
                    </button> : <button onClick={() => handleState(booking._id)} className="btn  btn-xs bg-[#FF3811] text-white ">
                      Pending
                    </button>}
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>:
      <div className="text-4xl font-bold text-center mt-7">No bookings yet....</div>
      }
    </div>
  );
};

export default Bookings;
