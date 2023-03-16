import Featured from "../../components/featured/Featured";
import "./Home.scss";
import TrustedBy from "../../components/trustedBy/TrustedBy";
import Slide from "../../components/slide/Slide";

const Home = () => {
  return (
    <div className="home">
      <Featured />
      <TrustedBy />
      <Slide />
    </div>
  );
};

export default Home;
