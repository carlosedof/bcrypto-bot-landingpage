import React, {useContext} from 'react';
import Logo from "../../assets/logo.png";
import {FaBars, FaTimes} from "react-icons/fa";
import {Col, Row} from "../../common";
import AnchorLink from 'react-anchor-link-smooth-scroll'
import Br from '../../assets/br.png';
import Eua from '../../assets/eua.png';
import {ApplicationContext} from "../../App";
import {getWordFromLanguage} from "../../languages/languages";

const styles = {
    container: {

    },
    img: {
        width: '150px'
    },
    icon: {
        cursor: 'pointer',
    },
    responsiveMenuContainer: {
        position: 'relative'
    },
    responsiveMenu: {
        position: 'absolute',
        width: '180px',
        backgroundColor: 'black',
        transition: 'all 0.3s ease',
        fontSize: '16px',
        height: '250px',
        justifyContent: 'space-around',
        borderRadius: '10px',
        paddingBlock: '30px',
        paddingInline: '10px',
    },
    link: {color: 'white', textDecoration: 'none', fontWeight: 'bolder'},
    flag: {width: '40px', borderRadius: '150px', marginInline: '10px', cursor: 'pointer'}
}
const Header = ({setIsResponsiveMenuVisible, isResponsiveMenuVisible}) => {
    const {lang, setLang} = useContext(ApplicationContext)
    return (<div style={styles.container} className={'header'}>
        <img style={styles.img} src={Logo} />
        <Row>
            <img onClick={() => setLang('pt')} src={Br} style={{...styles.flag, opacity: lang === 'pt' ? 1 : 0.5}} />
            <img onClick={() => setLang('en')} src={Eua} style={{...styles.flag, opacity: lang === 'en' ? 1 : 0.5}} />
        </Row>
        <Row className={'common-menu'}>
            <AnchorLink style={styles.link} href={'#Header'}>{getWordFromLanguage('home', lang)}</AnchorLink>
            <AnchorLink style={styles.link} href={'#Features'}>{getWordFromLanguage('features', lang)}</AnchorLink>
            <AnchorLink style={styles.link} href={'#Prices'}>{getWordFromLanguage('prices', lang)}</AnchorLink>
            <AnchorLink style={styles.link} href={'#GetStarted'}>{getWordFromLanguage('getStarted', lang)}</AnchorLink>
            <AnchorLink style={styles.link} href={'#AboutUs'}>{getWordFromLanguage('aboutUs', lang)}</AnchorLink>
        </Row>
        <Col className={'resp-menu'} style={styles.responsiveMenuContainer}>
            {
                isResponsiveMenuVisible ?
                <FaTimes style={styles.icon} onClick={() => setIsResponsiveMenuVisible(s => !s)} /> :
                <FaBars style={styles.icon} onClick={() => setIsResponsiveMenuVisible(s => !s)} />
            }
            <Col style={{...styles.responsiveMenu, right: -50, top: !isResponsiveMenuVisible ? -350 : 35}}>
                <AnchorLink style={styles.link} onClick={() => setIsResponsiveMenuVisible(false)} href={'#Header'}>Home</AnchorLink>
                <AnchorLink style={styles.link} onClick={() => setIsResponsiveMenuVisible(false)} href={'#Features'}>Features</AnchorLink>
                <AnchorLink style={styles.link} onClick={() => setIsResponsiveMenuVisible(false)} href={'#Prices'}>Prices</AnchorLink>
                <AnchorLink style={styles.link} onClick={() => setIsResponsiveMenuVisible(false)} href={'#GetStarted'}>Get Started</AnchorLink>
                <AnchorLink style={styles.link} onClick={() => setIsResponsiveMenuVisible(false)} href={'#AboutUs'}>About us</AnchorLink>
            </Col>
        </Col>
    </div>)
}

export default Header;
