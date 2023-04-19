import { useQuery } from "@tanstack/react-query";
import "./Orders.scss";
import { Link } from "react-router-dom";
import newRequest from "../../utils/newRequest";

const Orders = () => {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  const { isLoading, error, data } = useQuery({
    queryKey: ["orders"],
    queryFn: () =>
      newRequest.get(`/orders`).then((res) => {
        return res.data;
      }),
  });

  return (
    <div className="orders">
      {isLoading ? (
        "loading"
      ) : error ? (
        "Something went wrong."
      ) : (
        <div className="container">
          <div className="title">
            <h1>Orders</h1>
            <Link to="/add">
              <button>Add New Gig</button>
            </Link>
          </div>
          <table>
            <tr>
              <th>Image</th>
              <th>Title</th>
              <th>Price</th>
              <th>Contact</th>
            </tr>
            {data.map((order) => (
              <tr key={order._id}>
                <td>
                  <img src={order.img} alt="" className="img" />
                </td>
                <td>{order.title}</td>
                <td>{order.price}</td>
                <td>
                  <img src="/img/message.png" alt="" className="delete" />
                </td>
              </tr>
            ))}
          </table>
        </div>
      )}
    </div>
  );
};

export default Orders;
