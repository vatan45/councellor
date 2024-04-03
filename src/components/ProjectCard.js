import React from "react";
import { Col, Button } from "react-bootstrap";
import axios from "axios";



export const ProjectCard = ({ title, description, imgUrl, amount, onButtonClick }) => {
  const handleButtonClick = async (amount) => {
    try {
      // Fetch the Razorpay key from the server
      const { data: { key } } = await axios.get("http://localhost:4000/api/getkey");

      // Create order on the server
      const { data: { order } } = await axios.post("http://localhost:4000/api/checkout", {
        amount
      });

      // Configure Razorpay options
      const options = {
        key: key, // Use the key fetched from the server
        amount: order.amount,
        currency: "INR",
        name: "councellor",
        description: "Test Transaction",
        image: "https://example.com/your_logo",
        order_id: order.id,
        callback_url: "http://localhost:4000/api/paymentverification",
        prefill: {
          name: "Gaurav Kumar",
          email: "gaurav.kumar@example.com",
          contact: "9000090000"
        },
        notes: {
          address: "Razorpay Corporate Office"
        },
        theme: {
          color: "#3399cc"
        }
      };

      // Initialize Razorpay
    
      
      // Open Razorpay checkout on button click
      document.getElementById('rzp-button1').onclick = function(e) {
        
      };
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <Col xs={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt={title} />
        <div className="proj-txtx">
          <h4>{title}</h4>

          <Button id="rzp-button1" onClick={() => handleButtonClick(amount)}>Buy Now</Button>

          
          
          <Button onClick={handleButtonClick}>Buy Now</Button> {/* Use Button component */}
 8666e3390d8368934a5bc8b6145c6cd7aabff91c
        </div>
      </div>
    </Col>
  );
};
