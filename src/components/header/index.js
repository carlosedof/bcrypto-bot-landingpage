import React, {useContext} from 'react';
import Fade from 'react-reveal/Fade'
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
        width: '220px',
        backgroundColor: 'black',
        transition: 'all 0.3s ease',
        fontSize: '16px',
        height: '320px',
        justifyContent: 'space-around',
        borderRadius: '10px',
        paddingBlock: '30px',
        paddingInline: '30px',
        zIndex: 2
    },
    link: {color: 'white', textDecoration: 'none', fontWeight: 'bolder'},
    flag: {width: '40px', borderRadius: '150px', marginInline: '10px', cursor: 'pointer'}
}
const Header = ({setIsResponsiveMenuVisible, isResponsiveMenuVisible}) => {
    const {lang, setLang} = useContext(ApplicationContext)
    return (<div style={styles.container} className={'header'}>
        <img alt={'logo'} style={styles.img} src={Logo} />
        <Row>
            <img onClick={() => setLang('pt')}
                alt={'brFlag'}
                src={Br}
                style={{...styles.flag, opacity: lang === 'pt' ? 1 : 0.5}} />
            <img onClick={() => setLang('en')}
                alt={'usaFlag'}
                src={Eua}
                style={{...styles.flag, opacity: lang === 'en' ? 1 : 0.5}} />
        </Row>
        <Row className={'common-menu'}>
            <Fade top cascade>
                <ul style={{display: 'flex', listStyleType: 'none', margin: 0}}>
                    <li>
                        <AnchorLink style={styles.link} href={'#Header'}>{getWordFromLanguage('home', lang)}</AnchorLink>
                    </li>
                    <li>
                        <AnchorLink style={styles.link} href={'#Features'}>{getWordFromLanguage('features', lang)}</AnchorLink>
                    </li>
                    <li>
                        <AnchorLink style={styles.link} href={'#Prices'}>{getWordFromLanguage('prices', lang)}</AnchorLink>
                    </li>
                    <li>
                        <AnchorLink style={styles.link} href={'#Download'}>{getWordFromLanguage('download', lang)}</AnchorLink>
                    </li>
                    <li>
                        <AnchorLink style={styles.link} href={'#GetStarted'}>{getWordFromLanguage('getStarted', lang)}</AnchorLink>
                    </li>
                    <li>
                        <AnchorLink style={styles.link} href={'#AboutUs'}>{getWordFromLanguage('aboutUs', lang)}</AnchorLink>
                    </li>
                </ul>
            </Fade>
        </Row>
        <Col className={'resp-menu'} style={styles.responsiveMenuContainer}>
            {
                !isResponsiveMenuVisible &&
                <FaBars style={styles.icon} size={30} onClick={() => setIsResponsiveMenuVisible(s => !s)} />
            }
            <Col style={{...styles.responsiveMenu, right: 0, top: !isResponsiveMenuVisible ? -450 : -50}}>
                <Row style={{justifyContent: 'flex-end', paddingRight: '10px'}}>
                    <FaTimes style={styles.icon} onClick={() => setIsResponsiveMenuVisible(s => !s)} />
                </Row>
                <AnchorLink style={styles.link} onClick={() => setIsResponsiveMenuVisible(false)} href={'#Header'}>{getWordFromLanguage('home', lang)}</AnchorLink>
                <AnchorLink style={styles.link} onClick={() => setIsResponsiveMenuVisible(false)} href={'#Features'}>{getWordFromLanguage('features', lang)}</AnchorLink>
                <AnchorLink style={styles.link} onClick={() => setIsResponsiveMenuVisible(false)} href={'#Prices'}>{getWordFromLanguage('prices', lang)}</AnchorLink>
                <AnchorLink style={styles.link} onClick={() => setIsResponsiveMenuVisible(false)} href={'#Download'}>{getWordFromLanguage('download', lang)}</AnchorLink>
                <AnchorLink style={styles.link} onClick={() => setIsResponsiveMenuVisible(false)} href={'#GetStarted'}>{getWordFromLanguage('getStarted', lang)}</AnchorLink>
                <AnchorLink style={styles.link} onClick={() => setIsResponsiveMenuVisible(false)} href={'#AboutUs'}>{getWordFromLanguage('aboutUs', lang)}</AnchorLink>
            </Col>
        </Col>
    </div>)
}

export default Header;
