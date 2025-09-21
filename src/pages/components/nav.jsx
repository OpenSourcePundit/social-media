import "./../../utility.css";
import { useNavigate } from "react-router-dom";

export const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="dark-custom-bg-color h-[172px] w-full">
      <div className="p-s pl-l txt-m">
        <h3 className="m-0 leading-none">
          <span onClick={() => navigate("/home")} className="primary-color gen-btn">
            Social
          </span>
          <span onClick={() => navigate("/home")} className="gen-btn t-black">
            Circle
          </span>
        </h3>
      </div>
    </nav>
  );
};
 