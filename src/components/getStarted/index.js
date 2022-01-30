import React, {useContext} from 'react';
import Fade from 'react-reveal/Fade';
import {Col} from "../../common";
import {FaTelegram} from "react-icons/fa";
import {getWordFromLanguage} from "../../languages/languages";
import {ApplicationContext} from "../../App";

const GetStarted = () => {
    const {lang} = useContext(ApplicationContext)

    return <Col style={{alignItems: 'center', marginTop: '50px', marginBottom: '50px', padding: '5px'}}>
        <span style={{fontSize: '24px', fontWeight: 'bolder', marginBottom: '20px'}}>{getWordFromLanguage('getStarted', lang)}</span>
        <Fade bottom>
            <a rel="noreferrer" target={'_blank'} href={'https://t.me/oliveraf'}>
                <FaTelegram style={{ backgroundColor: 'white', borderRadius: '100px'}} size={50} color={'#1d92ee'} className={'telegram'} />
            </a>
        </Fade>
        <Fade top>
            <a rel="noreferrer" target={'_blank'} href={'https://t.me/oliveraf'} style={{ color: 'white', textAlign: 'center'}}>{getWordFromLanguage('sendUs', lang)}</a>
        </Fade>
    </Col>
}

export default GetStarted;
