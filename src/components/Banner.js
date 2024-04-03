import {useState, useEffect} from "react";
import{Container, Row, Col} from 'react-bootstrap';
import{ArrowRightCircle} from "react-bootstrap-icons";
import headerImg from "../assets/images/img/header-img.svg";

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);


    const toRotate =[ "IIT's", "NIT's","IIIT's","DTU","NSUT","IPU"];
    const[text, setText] = useState('');
    const [delta, setDelta] = useState(300 -Math.random()*100);
    const period =100;

    useEffect(() => {
        let ticker = setInterval(()=>{
            tick();

        }, delta)

        return ()=>{clearInterval(ticker)};

    },[text])
    const tick =() => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length -1) : fullText.substring(0, text.length +1);

        setText(updatedText);

        if(isDeleting){
            setDelta(prevDelta => prevDelta/2)
        }
        if(!isDeleting && updatedText === fullText ){
            setIsDeleting(true);
            setDelta(period);
        }else if(isDeleting && updatedText === ''){
            setIsDeleting(false);
            setLoopNum(loopNum+1);
            setDelta(500);

        }
    }


    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">Choose your dream college</span>
                        <h1>{`Councelling starts at ₹19 for  `}<span className="wrap">{text}</span></h1>
                        <p>
                            we provide the best Councelling advise for choosing the college in which you gonna spend the most precious years of your life , take this decision in your hand and consult our gurus from top IIT's
                        </p>
                        <button onClick={()=> console.log('connect')}> Let's connect <ArrowRightCircle size={25}  /></button>
            
                    </Col>
                    <Col xs={12} md={6} xl={5}>
    <img src={headerImg} alt="Header Img" style={{ width: '100%', height: 'auto' }} />
</Col>

                </Row>
            </Container>
        </section>
    )
}
export default Banner;