import React from 'react';
import {Col} from "../../common";
import {FaTelegram} from "react-icons/fa";

const GetStarted = () => {
    return <Col style={{alignItems: 'center', marginTop: '50px', marginBottom: '50px'}}>
        <span style={{fontSize: '24px', fontWeight: 'bolder', marginBottom: '20px'}}>Get started</span>
        <a target={'_blank'} href={'https://t.me/oliveraf'}>
            <FaTelegram style={{ backgroundColor: 'white', borderRadius: '100px'}} size={50} color={'#1d92ee'} />
        </a>
        <a target={'_blank'} href={'https://t.me/oliveraf'} style={{ color: 'white'}}>Send us a message to proceed with purchase or to get more info!</a>
    </Col>
}

export default GetStarted;
