import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "./Contact.css";
import EmailIcon from '@material-ui/icons/Email';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import CallIcon from '@material-ui/icons/Call';

const Contact = () => {
  return (
    <div id="contact">
      <h1 className="pt-3 text-center font-details-b pb-3">CONTACT ME</h1>
      <Jumbotron className="contact-jumbotron">
        <Row>
          <Col className="d-flex justify-content-center flex-wrap">
            <div className="m-2">
              <a href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&to=riyaz.itguy@gmail.com" target="_blank" rel="noopener noreferrer">
                <Button variant="outline-danger" title="riyaz.itguy@gmail.com">
                  <EmailIcon/> Email Me
                </Button>
              </a>
            </div>
            <div className="m-2">
              <a href="https://www.linkedin.com/in/riyazuddin-shaik" target="_blank" rel="noopener noreferrer">
                <Button variant="outline-primary" title="Visit my LinkenIn">
                  <LinkedInIcon/> LinkedIn
                </Button>
              </a>
            </div>
            
            <div className="m-2">
              <a href="https://github.com/ShaikRiyazuddin" target="_blank" rel="noopener noreferrer">
                <Button variant="outline-dark" title="My other projects">
                  <GitHubIcon/> GitHub
                </Button>
              </a>
            </div>
           
            <div className="m-2">
              <a href="https://twitter.com/RiyazItguy" target="_blank" rel="noopener noreferrer">
                <Button variant="outline-info" title="Tweets are welcomed!">
                  <TwitterIcon/> Twitter
                </Button>
              </a>
            </div>
            {/* <div className="m-2">
              <a href="https://www.facebook.com/shaik.riyaz.14606/" target="_blank" rel="noopener noreferrer">
                <Button variant="outline-primary" title="Say hello on FB">
                  <FacebookIcon/>FaceBook
                </Button>
              </a>
            </div> */}
          </Col>
        </Row>
        <div className = "about-desc-icon"> <EmailIcon />
      <sapn className = "about-desc-span">riyaz.itguy@gmail.com</sapn>
      </div>
        <div className = "about-desc-icon"> <CallIcon/>
      <sapn className = "about-desc-span"><a id = "telPhone" href = "tel:8500591806">+91 850 0591 806</a></sapn>
      </div>
      </Jumbotron>
    </div>
  
  );
};

export default Contact;
