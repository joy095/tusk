import LeftArrow from "../assets/icons/left-arrow.svg";
import "./Arrows.css";

const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <button
      className={`${className}`}
      style={{ ...style, border: "1.5px solid black" }}
      onClick={onClick}
    >
      <img src={LeftArrow} alt="" />
    </button>
  );
};

export default PrevArrow;
