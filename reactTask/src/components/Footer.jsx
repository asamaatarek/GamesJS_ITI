import { Container, Row, Col, Button } from 'react-bootstrap';
import { FaEnvelope, FaPhone, FaLinkedin, FaFacebook, FaTwitter} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-dark text-white d-flex align-items-center justify-content-center mt-auto py-4">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={4} className="text-center text-md-start mb-3 mb-md-0">
            <h6>GET IN TOUCH</h6>
            <p className="mb-1"><FaEnvelope className="me-2" /> kr12@hotmail.com</p>
            <p className="mb-0"><FaPhone className="me-2" /> 717-555-1234</p>
          </Col>
          <Col xs={12} md={4} className="text-center mb-3 mb-md-0">
            <Button variant="outline-light">CONTACT ME</Button>
          </Col>
          <Col xs={12} md={4} className="text-center text-md-end">
            <div className="mb-2">
              <FaLinkedin className="me-3" />
              <FaFacebook className="me-3" />
              <FaTwitter />
            </div>
            <small>Copyright © 2019 KR</small>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
