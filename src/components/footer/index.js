import React, {useContext} from 'react';
import {Row} from "../../common";
import {getWordFromLanguage} from "../../languages/languages";
import {ApplicationContext} from "../../App";

const Footer = () => {
    const {lang, setLang} = useContext(ApplicationContext)
    return <Row style={{justifyContent: 'center', backgroundColor: '#001f5f', padding: '15px'}}>
        <span style={{fontSize: '14px', fontWeight: 'bolder'}}>{`Bcrypto bot - ${getWordFromLanguage('copyright', lang)} 2022 ©`}</span>
    </Row>
}

export default Footer;
