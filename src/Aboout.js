import React, { useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import leftImg from './340147-PAM5AX-984-removebg-preview.52712eb488afacedc4c1.png'
import Aos from 'aos';

import "aos/dist/aos.css";

export default function Aboout() {
    useEffect(() => {
        Aos.init({
            
            duration: 1000,
            easing: 'ease-in-sine',
            
        });


    },[])
    return (

        <>
            <section >
                <Container id='About' className='About' fluid  >
                    <Row>
                        <Col >
                            
                            
                            <div >
                                <h2 className='Abouttext'>About</h2>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={{ span: 2, offset: 2}}>
                            <div className='text-center'>
                                <img data-aos="fade-right" src={leftImg} alt="" className='img-fluid imgcop'  />
                            </div>
                        </Col>
                        
                        <Col lg={{ span: 4, offset: 3}} >
                            <div data-aos="fade-left">
                                <h5>
                                    <br />
                                    <br />
                                    At Web Developer Vishal Kachhadiya Design Studio, we believe in the transformative power of exceptional design and its ability to elevate your brand and captivate your audience. Our passion for creative expression drives our commitment to delivering unique, visually stunning, and user-centric websites that leave a lasting impression.</h5>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

          
        </>
    )
}

