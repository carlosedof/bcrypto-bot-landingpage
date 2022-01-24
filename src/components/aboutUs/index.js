import React from 'react';
import {Col, Row} from "../../common";
import {FaTelegram} from "react-icons/fa";
import {BsCodeSlash} from "react-icons/bs";
import Background from '../../assets/BGgray.png';

const AboutUs = () => {

    return <Col style={{alignItems: 'center', paddingTop: '50px', paddingBottom: '50px', background: `url(${Background})`, backgroundSize: 'cover'}}>
        <span style={{fontSize: '24px', fontWeight: 'bolder', marginBottom: '20px'}}>About us</span>
        <BsCodeSlash size={50} style={{marginBlock: '25px'}} />
        <span>Cadu Olivera</span>
        <span>developer</span>
    </Col>
}

export default AboutUs;
