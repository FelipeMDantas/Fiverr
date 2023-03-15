import Featured from "../../components/featured/Featured";
import "./Home.scss";
import TrustedBy from "../../components/trustedBy/TrustedBy";

const Home = () => {
  return (
    <div className="home">
      <Featured />
      <TrustedBy />
    </div>
  );
};

export default Home;
