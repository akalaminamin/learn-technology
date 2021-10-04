import "./Home.css";
import { Row } from "react-bootstrap";
import SingleService from "../SingleService/SingleService";
import useServices from "../../hooks/useServices/useServices";
import { NavLink } from "react-router-dom";

const Home = () => {
  const [services] = useServices();
  return (
    <>
      <div className="hero-area">
        <div className="container">
          <h1>
            Master the Skills to <br /> Drive your Career.
          </h1>
          <p>
            Lorem dummy text of the printing and <br /> typesetting industry
            lorem ipsum has been the industry's standard dummy text.
          </p>
          <button className="hero-btn">Contact Us</button>
          <button className="hero-btn learn-btn">Learn More</button>
        </div>
      </div>
      <div className="services container">
          <span>Select Services</span>
          <h2>Explore Popular Services</h2>
        <Row xs={1} md={3} className="g-4">
          {services.slice(0, 3).map((service) => (
            <SingleService key={service.id} service={service}></SingleService>
          ))}
        </Row>
        <div className="btn-wrapper">
          <NavLink to="/services">
            <button className="btn btn-success learn-btn">
              View All Services
            </button>
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Home;
