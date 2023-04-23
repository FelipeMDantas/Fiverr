import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import getCurrentUser from "../../utils/getCurrentUser";
import "./MyGigs.scss";
import { Link } from "react-router-dom";
import newRequest from "../../utils/newRequest";

const MyGigs = () => {
  const currentUser = getCurrentUser();
  const queryClient = useQueryClient();

  const { isLoading, error, data } = useQuery({
    queryKey: ["myGigs"],
    queryFn: () =>
      newRequest.get(`/gigs?userId=${currentUser.id}`).then((res) => {
        return res.data;
      }),
  });

  const mutation = useMutation({
    mutationFn: (id) => {
      return newRequest.delete(`/gigs/${id}`);
    },

    onSuccess: () => {
      queryClient.invalidateQueries(["myGigs"]);
    },
  });

  const handleDelete = async () => {};

  return (
    <div className="myGigs">
      {isLoading ? (
        "loading"
      ) : error ? (
        "Something went wrong."
      ) : (
        <div className="container">
          <div className="title">
            <h1>Gigs</h1>
            {currentUser.isSeller && (
              <Link to="/add">
                <button>Add New Gig</button>
              </Link>
            )}
          </div>
          <table>
            <tr>
              <th>Image</th>
              <th>Title</th>
              <th>Price</th>
              <th>Sales</th>
              <th>Action</th>
            </tr>
            <tr>
              <td>
                <img
                  src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt=""
                  className="img"
                />
              </td>
              <td>Gig1</td>
              <td>88</td>
              <td>123</td>
              <td>
                <img
                  src="/img/delete.png"
                  alt=""
                  className="delete"
                  onClick={handleDelete}
                />
              </td>
            </tr>
          </table>
        </div>
      )}
    </div>
  );
};

export default MyGigs;
