import { Container, Row, Col, Card } from 'react-bootstrap';

const educationItems = [
  { title: "Bachelor's in Computer Science" },
  { title: "Frontend Development Course" },
  { title: "Full Stack Python" },
  { title: "Linux Adminstration" },
  { title: "React.js Training" },
  { title: "Cloud Computing Basics" },
];

const Education = () => {
  return (
    <section className="min-vh-100 d-flex align-items-center justify-content-center px-3 py-5 " style={{backgroundColor:'#edf7ed'}}>
      <Container fluid className="px-0">
        <h1 className="text-center mb-5">Education</h1>
        <Row className="g-4 justify-content-center">
          {educationItems.map((item, title) => (
            <Col key={title} sm={6} md={4}>
              <Card className="text-center shadow-sm" style={{ backgroundColor: '#2c2c2c', color: 'white' }}>
                <Card.Body className="d-flex align-items-center justify-content-center" style={{ minHeight: '120px' }}>
                  <Card.Title>{item.title}</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Education;
