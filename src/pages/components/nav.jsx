import "./../../utility.css";
import { useNavigate } from "react-router-dom";

export const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="white-bg">
      <div className="p-s pl-xxl txt-m ml-m ">
        <h3>
          <span onClick={() => navigate("/")} className="primary-color gen-btn">
            My
          </span>
          <span onClick={() => navigate("/")} className="gen-btn">
            Website
          </span>
        </h3>
      </div>
    </nav>
  );
};
