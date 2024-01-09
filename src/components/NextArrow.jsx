import "./Arrows.css";
import RightArrow from "../assets/icons/right-arrow.svg";

const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <button
      className={`${className}`}
      style={{ ...style, border: "1.5px solid black" }}
      onClick={onClick}
    >
      <img src={RightArrow} alt="" />
    </button>
  );
};

export default NextArrow;
