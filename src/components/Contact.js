import { useState } from "react"
import {Container, Row, Col} from "react-bootstrap"
import contactImg from "../assets/images/img/contact-img.svg"


export const Contact = () =>{
    const formInitialDetails = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
    }
    const [formDetails, setFormDetails] = useState(formInitialDetails);
    const [buttonText, setButtontext] = useState('Send');
    const [status, setStatus] = useState({});
    const onFormUpdate =(category, value) => {
        setFormDetails({
            ...formDetails,
            [category]: value
        })
    }
    

    const handleSubmit = async (e) => {
        e.preventDefault();
        setButtontext('sending...');
        let response = await fetch("http://localhost:8080/contact")({
            method: "POST",
            headers: {
                "content-type":"Application/json;charset=utf-8", 
            },
            body: JSON.stringify(formDetails),
        })
        setButtontext("send");
        let result = response.json();
        setFormDetails(formInitialDetails);
        if(result.code === 200){
            setStatus({success: true, message: 'Message send sunccessfully'});
        }else{
            setStatus({success: false, message:'something went wrong , please try again later'})
        }

    }

    return (
        <section className="Contact" id ="connect">
            <Container>
                <Row className = "align-items-center">
                    <Col md={6}>
                    <img src={contactImg} alt="Contact Us" style={{ width: '100%', height: 'auto' }} />

                    </Col>
                    <Col md={6}>
                        <h2>Get In Touch</h2>
                        <form onSubmit={handleSubmit}>
                            <Row>
                                <Col sm={6} className="px-1">
                                    <input type="text" value={formDetails.firstName} placeholder="FirstName" onChange={(e) => onFormUpdate('firstName' ,e.target.value)} />
                                </Col>
                                <Col sm={6} className="px-1">
                                    <input type="text" value={formDetails.lastName} placeholder="LastName" onChange={(e) => onFormUpdate('lastName' ,e.target.value)} />
                                </Col>
                                <Col sm={6} className="px-1">
                                    <input type="email" value={formDetails.email} placeholder="Email Address" onChange={(e) => onFormUpdate('email' ,e.target.value)} />
                                </Col>
                                <Col sm={6} className="px-1">
                                    <input type="tel" value={formDetails.phone} placeholder="Phone No." onChange={(e) => onFormUpdate('phone' ,e.target.value)} />
                                </Col>
                                <Col>
                                <textarea row="6" cvalue={formDetails.message} placeholder="Message" onChange={(e) => onFormUpdate('message', e.target.value)} />
                                <button type="submit"> <span>{buttonText}</span></button>
                                </Col>
                                {
                                    status.message &&
                                    <Col>
                                        <p className={status.success === false ? "danger" : "success"}>
                                            {status.message}

                                        </p>
                                    </Col>
                                }
                                
                            </Row>
                        </form>
                    </Col>
                </Row>
            </Container>
        </section>

    )
}