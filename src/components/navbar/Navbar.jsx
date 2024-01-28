import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";
import "primeicons/primeicons.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <Sidebar />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        ></motion.span>
        <div className="social">
          <a href="mailto:raghav18122000@gmail.com">
            <i
              className="pi pi-envelope"
              style={{
                fontSize: "1rem",
                display: "flex",
                alignItems: "center",
              }}
            ></i>
          </a>
          <a href="tel:+918555984068">
            <i
              style={{
                fontSize: "1rem",
                display: "flex",
                alignItems: "center",
              }}
              className="pi pi-phone"
            ></i>
          </a>
          <a href="#">
            <i
              className="pi pi-linkedin flex items-end "
              style={{ fontSize: "1rem" }}
            ></i>
          </a>
          <a>
            <i className="pi pi-github" style={{ fontSize: "1rem" }}></i>
          </a>
          <a>
            <i className="pi pi-instagram" style={{ fontSize: "1rem" }}></i>
          </a>
          <a>
            <i className="pi pi-download" style={{ fontSize: "1rem" }}></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
