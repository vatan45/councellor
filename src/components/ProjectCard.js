import React from "react";
import { Col, Button } from "react-bootstrap"; // Import Button from react-bootstrap

export const ProjectCard = ({ title, description, imgUrl, price, onButtonClick }) => {
  const handleButtonClick = () => {
    // Call the onButtonClick function passed from the parent
    onButtonClick(title);
  };

  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt={title} /> {/* Add alt attribute */}
        <div className="proj-txtx">
          <h4>{title}</h4>
          
          
          <Button onClick={handleButtonClick}>Buy Now</Button> {/* Use Button component */}
        </div>
      </div>
    </Col>
  );
};
