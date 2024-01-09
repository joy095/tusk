import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <p className="text-center">Page Not Foundt(404)</p>
      <Link className="flex justify-center" to={"/"}>
        Return Home
      </Link>
    </div>
  );
};

export default NotFound;
