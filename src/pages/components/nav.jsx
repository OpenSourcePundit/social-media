import "./../../utility.css";
import { useNavigate } from "react-router-dom";

export const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="white-bg h-[172px]">
      <div className="p-s pl-l txt-m">
        <h3 className="m-0 leading-none">
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
 