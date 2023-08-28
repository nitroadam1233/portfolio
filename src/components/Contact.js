import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { db } from "../config/firebase";
import { collection, addDoc } from 'firebase/firestore';

export const Contact = () => {
  const [buttonText, setButtonText] = useState('Send');
  const [status, setStatus] = useState({});

  //recruiter states
  const[firstName, setFirstName] = useState("");
  const[lastName, setLastName] = useState("");
  const[email, setEmail] = useState("");
  const[phoneNumber, setPhoneNumber] = useState("");
  const[message, setMessage] = useState("");
  
  //db ref
  const recruitersCollectionRef = collection(db, "recruiters");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Sending...");
    try {
      await addDoc(recruitersCollectionRef, {
        firstName: firstName,
        lastName: lastName,
        email: email,
        phoneNumber: phoneNumber,
        message: message,
      });
  
      setStatus({ success: true, message: "Message sent successfully" });
      setButtonText("Send");
    }
    catch (error) {
      console.error("Error adding data to Firebase: ", error);
      setStatus({
        success: false,
        message: "Something went wrong, please try again later.",
      });
      setButtonText("Send");
    }
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us"/>
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <h2>Get In Touch</h2>
                <form>
                  <Row>
                    <Col size={12} sm={6} className="px-1">
                      <input 
                        type="text"  
                        placeholder="First Name"
                        onChange={(e) => setFirstName(e.target.value)}  
                      />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input 
                        type="text"  
                        placeholder="Last Name"
                        onChange={(e) => setLastName(e.target.value)} 
                      />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input 
                        type="email" 
                        placeholder="Email Address"  
                        onChange={(e) => setEmail(e.target.value)} 
                      />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input 
                        type="tel" 
                        placeholder="Phone No."
                        onChange={(e) => setPhoneNumber(e.target.value)} 
                      />
                    </Col>
                    <Col size={12} className="px-1">
                      <textarea 
                        rows="6" 
                        placeholder="Message" 
                        onChange={(e) => setMessage(e.target.value)} 
                      ></textarea>
                      <button type="submit" onClick={handleSubmit}><span>{buttonText}</span></button>
                    </Col>
                    {
                      status.message &&
                      <Col>
                        <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                      </Col>
                    }
                  </Row>
                </form>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
