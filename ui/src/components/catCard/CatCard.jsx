import "./CatCard.scss";
import { Link } from "react-router-dom";

const CatCard = ({ item }) => {
  return (
    <Link to="/gig/123">
      <div className="catCard">
        <div className="container"></div>
      </div>
    </Link>
  );
};

export default CatCard;
