import React, {useContext} from 'react';
import Jello from 'react-reveal/Jello';
import {Col} from "../../common";
import {BsCodeSlash} from "react-icons/bs";
import Background from '../../assets/BGgray.png';
import {ApplicationContext} from "../../App";
import {getWordFromLanguage} from "../../languages/languages";

const AboutUs = () => {
    const {lang} = useContext(ApplicationContext)

    return <Col style={{alignItems: 'center', paddingTop: '50px', paddingBottom: '50px', background: `url(${Background})`, backgroundSize: 'cover'}}>
        <span style={{fontSize: '24px', fontWeight: 'bolder', marginBottom: '20px'}}>{getWordFromLanguage('aboutUs', lang)}</span>
        <BsCodeSlash className={'dev'} size={50} style={{marginBlock: '25px'}} />
        <Jello>
            <span>Cadu Olivera</span>
            <span>{getWordFromLanguage('dev', lang)}</span>
        </Jello>
    </Col>
}

export default AboutUs;
