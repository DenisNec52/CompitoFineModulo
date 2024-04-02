import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebookF, FaTwitter, FaGoogle, FaInstagram, FaLinkedin, FaGithub, FaGem, FaHome, FaEnvelope, FaPhone, FaPrint } from 'react-icons/fa';

const MyFooter = ({ darkTheme }) => {
  const footerClassName = `text-center text-lg-start ${darkTheme ? 'bg-dark text-light' : 'bg-light text-dark'}`;
  const socialIconClassName = `me-4 text-reset ${darkTheme ? 'text-light' : 'text-dark'}`;
  const linkClassName = `text-reset ${darkTheme ? 'text-light' : 'text-dark'}`;
  return (
    <footer className={footerClassName}>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          <a href='/' className={socialIconClassName}><FaFacebookF /></a>
          <a href='/' className={socialIconClassName}><FaTwitter /></a>
          <a href='/' className={socialIconClassName}><FaGoogle /></a>
          <a href='/' className={socialIconClassName}><FaInstagram /></a>
          <a href='/' className={socialIconClassName}><FaLinkedin /></a>
          <a href='/' className={socialIconClassName}><FaGithub /></a>
        </div>
      </section>

      <section>
        <Container className={`text-center text-md-start mt-5 ${darkTheme ? 'text-light' : 'text-dark'}`}>
          <Row className='mt-3'>
            <Col md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <FaGem className="me-3" />
                Company name
              </h6>
              <p>
                Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet,
                consectetur adipisicing elit.
              </p>
            </Col>

            <Col md="2" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Products</h6>
              <p>
                <a href='#!' className={linkClassName}>
                  Angular
                </a>
              </p>
              <p>
                <a href='#!' className={linkClassName}>
                  React
                </a>
              </p>
              <p>
                <a href='#!' className={linkClassName}>
                  Vue
                </a>
              </p>
              <p>
                <a href='#!' className={linkClassName}>
                  Laravel
                </a>
              </p>
            </Col>

            <Col md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
              <p>
                <a href='#!' className={linkClassName}>
                  Pricing
                </a>
              </p>
              <p>
                <a href='#!' className={linkClassName}>
                  Settings
                </a>
              </p>
              <p>
                <a href='#!' className={linkClassName}>
                  Orders
                </a>
              </p>
              <p>
                <a href='#!' className={linkClassName}>
                  Help
                </a>
              </p>
            </Col>

            <Col md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <FaHome className="me-2" />
                New York, NY 10012, US
              </p>
              <p>
                <FaEnvelope className="me-3" />
                info@example.com
              </p>
              <p>
                <FaPhone className="me-3" /> + 01 234 567 88
              </p>
              <p>
                <FaPrint className="me-3" /> + 01 234 567 89
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © {new Date().getFullYear()} Copyright:
        <a className={`text-reset fw-bold ${darkTheme ? 'text-light' : 'text-dark'}`} href='https://mdbootstrap.com/'>
          MDBootstrap.com
        </a>
      </div>
    </footer>
  );
}

export default MyFooter;
