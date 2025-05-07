import { Container, Row, Col } from 'react-bootstrap';
const About = () => {
    const fileDownload = () => {
        const file = document.createElement('a');
        file.href = '/file.pdf';
        file.download='file.pdf'
        file.click();
      };
  return (
    <section className="min-vh-10 d-flex align-items-center justify-content-center px-1 py-3 " style={{backgroundColor:'#ffffff'}}>
      <Container fluid className="px-0">
        <Row className="align-items-center">
          <Col md={4}>
            <h2 className="text-md-center text-center">About Me</h2>
          </Col>
          <Col md={8}>
            <p>
            Lorem ipsum dolor sit amet. Cum incidunt aperiam in ducimus earum id maxime nisi id nihil architecto ut aspernatur internos. Eos assumenda beatae qui voluptatibus iste aut facere sint ea ullam omnis. Aut numquam officia aut iure dolorem rem adipisci nobis cum saepe sint qui voluptatibus iste. Ad nihil assumenda et laudantium quia vel quae excepturi eum temporibus porro aut dicta voluptatem.
            </p>
            <button className='btn btn-dark text-md-center text-center' onClick={fileDownload}>Download</button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
