import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import "./App.css";
import { IoMdCall } from "react-icons/io";
import { FaGlobe } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";

const Resume = () => {
  return (
    <Container
    fluid
    className=" border border-dark custom-container bg-light"
    style={{
      paddingLeft: 0,
      paddingRight: 0,
    }}
  >
      
      <Row
        className=" d-flex justify-content-center "
        style={{ paddingLeft: "60px" }}
      >
        <Col md={4} className="position-relative  ">
          <div className="half-background"></div>
          <Image
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShZ75KKy6w0Rw_ExGPMO1ZcccgpjXaK-xKgQ&s"
            style={{
              width: "210px",
              height: "290px",
              position: "relative",
              zIndex: 1,
              paddingTop: "60px",
            }}
          />
        </Col>
        <Col md={4} style={{paddingTop:'40px'}}>
          <h1 className="font-weight-bold">
            CLIFF <br /> <span className="fw-bold fs-1">HANGER</span>
          </h1>
          <h5 className="text-secondary mt-4 fs-5">Digital Marketing Manager</h5>
        </Col>
      </Row>

      <Row className="mt-4 d-flex  justify-content-center">
        
        <Col md={4}>
          <div className="mb-4 ps-4 ps-md-0">
            
            <h4
              className="font-weight-bold "
              style={{ position: "relative", zIndex: "1" }}
            >
               <span
              className="px-1"
                style={{
                  width: "40px",
                  height: "40px",
                  zIndex: "0",
                  borderRadius: "30px",
                  background: "gray",
                 
                }}
              >
                PR
              </span>
              OFILE SUMMARY
            </h4>
            <p className="fs-6">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.lorem Lorem
              ipsum dolor sit amet, Praesentium
              commodi beatae error minima quidem libero nihil, fuga amet illo,
              fugiat deleniti  aut impedit blanditiis
              labore obcaecati.
            </p>
          </div>
        </Col>

        {/* Professional Skills */}
        <Col md={4}>
          <div className="mb-4 ps-4 ps-md-0">
            <h4 className="font-weight-bold">
              {" "}
              <span
              className="px-1"
                style={{
                  width: "40px",
                  height: "40px",
                  zIndex: "0",
                  borderRadius: "30px",
                  background: "gray",
                 
                }}
              >
                PR
              </span>
              OFESSIONAL SKILLS
            </h4>
            <ul className="list-unstyled">
              <li>SEO and Marketing Analytics</li>
              <li>Social media strategy</li>
              <li>Marketing</li>
              <li>Web content development</li>
              <li>Copywriting</li>
              <li>Corporate blogging</li>
              <li>Project management</li>
              <li>Layout design</li>
              <li>Photo editing</li>
              <li>Market research</li>
            </ul>
          </div>
        </Col>
      </Row>

      <Row className=" d-flex  justify-content-center ps-4 ps-md-0">
       
        <Col md={4}>
          <div className="mb-4">
            <h4 className="font-weight-bold"> <span
              className="px-1"
                style={{
                  width: "40px",
                  height: "40px",
                  zIndex: "0",
                  borderRadius: "30px",
                  background: "gray",
                 
                }}
              >
                ED
              </span>UCATION</h4>
            <p>
              <strong>UNIVERSITY NAME</strong> <br />
              Enter Your Degree (Year Of Graduation)
            </p>
            <p className="text-muted">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.jhgngbhjv njnbhnbui njmiijhuuij
            </p>

            <p>
              <strong>UNIVERSITY NAME</strong> <br />
              Enter Your Degree (Year Of Graduation)
            </p>
            <p className="text-muted">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.bjhklbhjl uibliuh njoiun
            </p>

            <p>
              <strong>UNIVERSITY NAME</strong> <br />
              Enter Your Degree (Year Of Graduation)
            </p>
            <p className="text-muted">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.kjhihjj jkni buibuubi
            </p>
          </div>
        </Col>

       
        <Col md={4}>
          <div className="mb-4 ps-md-4 ps-0">
            <h4 className="font-weight-bold"> <span
              className="px-1"
                style={{
                  width: "40px",
                  height: "40px",
                  zIndex: "0",
                  borderRadius: "30px",
                  background: "gray",
                 
                }}
              >
                PE
              </span>RSONAL SKILLS</h4>
            <ul className="list-unstyled">
              <li>Creative spirit</li>
              <li>Reliable and professional</li>
              <li>Organized</li>
              <li>Time management</li>
              <li>Team player</li>
              <li>Fast learner</li>
              <li>Motivated</li>
            </ul>
          </div>

          

          <h4 className="font-weight-bold ps-md-4 ps-0"> <span
              className="px-1"
                style={{
                  width: "40px",
                  height: "40px",
                  zIndex: "0",
                  borderRadius: "30px",
                  background: "gray",
                 
                }}
              >
                CO
              </span>NTACT</h4>
          <ul className="list-unstyled">
            <li><IoMdCall />
            +91 6372304687</li>
            <li><FaGlobe />
            www.websitename.com</li>
            <li><IoIosMail />
            jagatjyotidash2@mail.com</li>
            <li><FaLocationDot />
            445, patia Eden \,india  751015</li>
          </ul>
        </Col>
      </Row>
      
    </Container>
  );
};

export default Resume;
