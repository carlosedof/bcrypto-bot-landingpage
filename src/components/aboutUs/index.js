import React, {useContext} from 'react';
import {Col, Row} from "../../common";
import {FaTelegram} from "react-icons/fa";
import {BsCodeSlash} from "react-icons/bs";
import Background from '../../assets/BGgray.png';
import {ApplicationContext} from "../../App";
import {getWordFromLanguage} from "../../languages/languages";

const AboutUs = () => {
    const {lang, setLang} = useContext(ApplicationContext)

    return <Col style={{alignItems: 'center', paddingTop: '50px', paddingBottom: '50px', background: `url(${Background})`, backgroundSize: 'cover'}}>
        <span style={{fontSize: '24px', fontWeight: 'bolder', marginBottom: '20px'}}>{getWordFromLanguage('aboutUs', lang)}</span>
        <BsCodeSlash className={'dev'} size={50} style={{marginBlock: '25px'}} />
        <span>Cadu Olivera</span>
        <span>{getWordFromLanguage('dev', lang)}</span>
    </Col>
}

export default AboutUs;
