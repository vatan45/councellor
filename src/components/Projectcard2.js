import React from "react";
import { Col, Button } from "react-bootstrap";




 const ProjectCard2 = ({ title, description, imgUrl, amount, onButtonClick }) => {
  const handleButtonClick = async (amount) => {
    
  };

  return (
    <Col xs={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt={title} />
        <div className="proj-txtx">
          <h4>{title}</h4>

          <Button id="rzp-button1" onClick={() => handleButtonClick(amount)}>Buy Now</Button>

          
          
          

        </div>
      </div>
    </Col>
  );
};
export default ProjectCard2;

