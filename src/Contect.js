import React, { useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Aos from 'aos';
import instagram from './instagram (5).png'
import twiter from './twitter (2).png'
import link from './linkedin (1).png'
import wp from './whatsapp (2).png'
import "aos/dist/aos.css";


export default function Aboout() {
    useEffect(() => {
        Aos.init({

            duration: 1000,
            easing: 'ease-in-sine',

        });


    }, [])

    return (
        <>
            <section >

                <Container fluid className='Contactcolourpage' id='Contact'>

                    <Row >
                        <Col>
                            <div>
                                <h2 className='contecttext'>Contact</h2>
                            </div>

                        </Col>


                    </Row>
                    <div className='Container aaaaa' >
                        <div className='col-lg-2 col-sm-0 col-md-0'>
                            
                         </div>
                        <div className="container col-lg-4 col-md-6 col-sm-12" data-aos="fade-right"  >
                            <table >
                                <h6 className='name'>Name :</h6>

                                <input className='text' type="text" name="" id="" required />
                                <br />

                                <h6 className='name'>Email :</h6>

                                <input className='text' type="email" name="" id="" required />

                                <br />

                                <h6 className='name'>Message :</h6>

                                <textarea name="" id="" cols="45" rows="5" className='text'></textarea>

                                <br /><br />

                                <button className='buttonsubmit'><h6>Submit</h6></button>
                            </table>



                        </div >

                        <div className='col-lg-2 col-sm-0 col-md-0'    >

                        </div>

                        <div className='col-lg-4 col-sm-12 col-md-6 bbbbbb ' data-aos="fade-left">
                               
                            <div >
                                <a href="https://www.instagram.com/" target='_blank' className='icone' ><img src={instagram} alt="" className='img-fluid ' /></a>

                                <a href="https://www.instagram.com/" target='_blank' className='icone' ><img src={twiter} alt="" className='img-fluid ' /></a>

                                <a href="https://in.linkedin.com/" target='_blank' className='icone' ><img src={link} alt="" className='img-fluid ' /></a>

                                <a href="https://www.whatsapp.com/" target='_blank' className='icone' ><img src={wp} alt="" className='img-fluid ' /></a>
                            </div>
                            
                            <h5 className='number'>+91 6354222768</h5>
                            
                        </div>


                    </div>
                  

                   

                </Container>



            </section>

        </>
    )

}
