import { Container , Row, Col  } from 'react-bootstrap';
const Hero = () => {
    return (
      <section className="min-vh-100 d-flex align-items-center justify-content-center px-0 py-1 " style={{backgroundColor:'#edf7ed'}}>
      <Container fluid className="px-0">
          <Row className="align-items-center justify-content-center min-vh-50">
            <Col className="text-center text-md-center p-3">
              <h1 className="display-3">Asmaa Tarek</h1>
              <p className="fs-5">Full Stack Python Developer</p>
              <button>Contact Me</button>
            </Col>
              <Col className="text-center text-md-center p-4">
              <img
                src="/python-dev-og.png"
                className="img-fluid"
                style={{ maxWidth: '350px' }}/>
            </Col>
          </Row>
        </Container>
      </section>
    );
  };
export default Hero;