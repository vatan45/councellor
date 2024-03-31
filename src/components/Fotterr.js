import{Container, Row, Col} from "react-bootstrap";
import { MailChimpForm } from "./MailChimpForm";
import logo from "../assets/images/img/logo.svg"
import navIcon1 from "../assets/images/img/nav-icon1.svg"
import navIcon2 from "../assets/images/img/nav-icon2.svg"
import navIcon3 from "../assets/images/img/nav-icon3.svg"


export const Fotter = () => {
    return (
        <fotter className="fotter">
            <Container>
                <Row className="align-item-cener">
                    <MailChimpForm>
                        <Col sm={6}>
                            <img src{...logo} alt="Logo" />

                        </Col>
                        <Col sm={6} className="text-center text-sm-end">
                            <div className="social-icon">
                                <a href=""><img src={navIcon1}/></a>
                                <a href=""><img src={navIcon2}/></a>
                                <a href=""><img src={navIcon3}/></a>
                            </div>
                            <p>CopyRight 2024. All Right Reserved</p>
                        </Col>
                    </MailChimpForm>

                </Row>
            </Container>
        </fotter>
    )
}
export default Fotter;
