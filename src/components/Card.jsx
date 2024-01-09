import "../css/Card.css";

const Card = () => {
  return (
    <div className="flex flex-row flex-wrap justify-between gap-5 pt-[30px]">
      <div className="card">
        <img
          src="https://firstmentalhealth.co.uk/wp-content/uploads/2023/05/children-1.png"
          alt=""
        />
        <h5>For Children </h5>
        <p>
          Mental health support for children, therapy, counseling, self-help
          tools, and support groups available.
        </p>
        <button className="btn">Learn more </button>
      </div>
      <div className="card"></div>
      <div className="card"></div>
    </div>
  );
};

export default Card;
