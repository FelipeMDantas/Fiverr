import "./Slide.scss";
import Slider from "infinite-react-carousel";
import CatCard from "../catCard/CatCard";
import { cards } from "../../data";

const Slide = () => {
  return (
    <div className="slide">
      <div className="container">
        <Slider slidesToShow={5} arrowsScroll={4}>
          {cards.map((card) => (
            <CatCard item={card} key={card.id} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Slide;
