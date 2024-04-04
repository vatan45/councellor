import React from "react";
import { Col, Button } from "react-bootstrap";

export const ProjectCard = ({ title, imgUrl, currency, receipt, amount }) => {
  const handleButtonClick = async (e) => {
    e.preventDefault();

    const response = await fetch("http://localhost:3000/order", {
      method: "POST",
      body: JSON.stringify({
        amount,
        currency,
        receipt,
      }),
      headers: {
        "Content-Type": "application/json",
      }
    });
    const order = await response.json();
    console.log(order);

    var options = {
      "key": "rzp_live_gSXoel04AVkSAb",
      "amount": amount * 100, // Amount is in currency subunits. Convert to paise if currency is not INR
      "currency": currency,
      "name": "TMCK",
      "description": "Test Transaction",
      "image": "https://example.com/your_logo",
      "order_id": order.id,
      "handler": async function (response){
          const body ={
            ...response,
          };
         const validateRes=  await fetch("https://localhost:3000/order/validate",{
          method: "POST",
          body: JSON.stringify(body),
          headers: {
            "conternt-Type" : "application/json",

          },
         });
         const jsonRes = await validateRes.json();
         console.log(jsonRes);
      },
      "prefill": {
          "name": "vatan malik",
          "email": "letsdosangharsh@gmail.com",
          "contact": "8570848937"
      },
      "notes": {
          "address": "Razorpay Corporate Office"
      },
      "theme": {
          "color": "#3399cc"
      }
    };

    var rzp1 = new window.Razorpay(options);
    
    rzp1.on('payment.failed', function (response){
      alert(response.error.code);
      alert(response.error.description);
      alert(response.error.source);
      alert(response.error.step);
      alert(response.error.reason);
      alert(response.error.metadata.order_id);
      alert(response.error.metadata.payment_id);
    });
    rzp1.open();
    e.preventDefault();

  };

  return (
    <Col xs={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt={title} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <Button onClick={handleButtonClick}>Buy Now</Button>
        </div>
      </div>
    </Col>
  );
};
