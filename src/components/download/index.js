import React, {useContext} from 'react';
import Fade from 'react-reveal/Fade';
import {ApplicationContext} from "../../App";
import {getWordFromLanguage} from "../../languages/languages";
import {FaDownload} from "react-icons/fa";

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginBottom: '20px',
        paddingBlock: '50px',
        backgroundColor: '#001638'
    },
    priceBlock: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#050505',
        boxShadow: '1px 1px 5px gray',
        fontSize: '17px',
        borderRadius: '12px',
        position: 'relative',
        padding: '35px',
        width: '220px'
    }
}

const Download = () => {
    const {lang} = useContext(ApplicationContext)

    return <div style={styles.container}>
        <span style={{fontSize: '24px', fontWeight: 'bolder', marginBottom: '20px'}}>{getWordFromLanguage('download', lang)}</span>
        <Fade>
            <a href="https://dtdevs.s3.sa-east-1.amazonaws.com/bcryptobot.rar" target="_blank" download>
                <FaDownload style={{marginTop: '25px', cursor: 'pointer', color: 'white'}} />
            </a>
            <span style={{marginTop: '25px', textAlign: 'center', fontSize: '16px'}}>{getWordFromLanguage('downloadBot', lang)}</span>
        </Fade>
    </div>
}

export default Download;
