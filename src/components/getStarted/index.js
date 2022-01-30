import React, {useContext} from 'react';
import {Col} from "../../common";
import {FaTelegram} from "react-icons/fa";
import {getWordFromLanguage} from "../../languages/languages";
import {ApplicationContext} from "../../App";

const GetStarted = () => {
    const {lang, setLang} = useContext(ApplicationContext)

    return <Col style={{alignItems: 'center', marginTop: '50px', marginBottom: '50px', padding: '5px'}}>
        <span style={{fontSize: '24px', fontWeight: 'bolder', marginBottom: '20px'}}>{getWordFromLanguage('getStarted', lang)}</span>
        <a target={'_blank'} href={'https://t.me/oliveraf'}>
            <FaTelegram style={{ backgroundColor: 'white', borderRadius: '100px'}} size={50} color={'#1d92ee'} className={'telegram'} />
        </a>
        <a target={'_blank'} href={'https://t.me/oliveraf'} style={{ color: 'white', textAlign: 'center'}}>{getWordFromLanguage('sendUs', lang)}</a>
    </Col>
}

export default GetStarted;
