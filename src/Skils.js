import React, { useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Html from './download.png'
import Css from './download (1).png'
import Js from './download (2).png'
import VK from './download (3).png'
import Aos from 'aos';

import "aos/dist/aos.css";
export default function Skils() {

    useEffect(() => {
        Aos.init({

            duration: 1000,
            easing: 'ease-in-sine',

        });


    }, [])



    return (
        <>
            <section>

                <Container className='Skills' fluid id='Skills' >
                    <Row>
                        <Col>
                            <div >
                                <h2 className='Abouttext'>Skills</h2>
                            </div>
                        </Col>
                    </Row>
                    <div className="container text-center">
                        <div className="row d-flex align-items-center justify-content-center  ">
                            <div data-aos="fade-up" data-aos-duration="4000" className="col-lg-3 col-md-6 col-sm-12 mt-2 p-1 ">
                                <img src={Html} alt="" className='img-fluid ' />
                                <h5 className='icon-h5'>HTML</h5>
                            </div>

                            <div data-aos="fade-up" data-aos-duration="4000" className="col-lg-3 col-md-6 col-sm-12 mt-2 p-1 ">
                                <img src={Css} alt="" className='img-fluid ' />
                                <h5 className='icon-h5'>CSS</h5>
                            </div>

                            <div data-aos="fade-up" data-aos-duration="4000" className="col-lg-3 col-md-6 col-sm-12 mt-2 p-1 ">
                                <img src={Js} alt="" className='img-fluid ' />
                                <h5 className='icon-h5'>JAVASCRIPT</h5>
                            </div>

                            <div data-aos="fade-up" data-aos-duration="4000" className="col-lg-3 col-md-6 col-sm-12 mt-2 p-1 ">
                                <img src={VK} alt="" className='img-fluid ' />
                                <h5 className='icon-h5'>REACT</h5>
                            </div>
                      



                        </div>

               
                    </div>
     




                </Container>



            </section>





        </>
    )
}
