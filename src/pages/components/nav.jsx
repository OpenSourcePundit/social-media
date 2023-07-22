import "./../../utility.css";
import { useNavigate } from "react-router-dom";

export const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="white-bg">
      <div className="p-s pl-l txt-m  ">
        <h3>
          <span onClick={() => navigate("/home")} className="primary-color gen-btn">
            Social
          </span>
          <span onClick={() => navigate("/home")} className="gen-btn">
            Circle
          </span>
        </h3>
      </div>
    </nav>
  );
};
