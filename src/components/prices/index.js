import React, {useContext} from 'react';
import {ApplicationContext} from "../../App";
import {getWordFromLanguage} from "../../languages/languages";

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: '20px',
        marginBottom: '20px',
        paddingBlock: '50px',
        backgroundColor: 'black',
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

const Prices = () => {
    const {lang, setLang} = useContext(ApplicationContext)

    return <div style={styles.container}>
        <span style={{fontSize: '24px', fontWeight: 'bolder', marginBottom: '20px'}}>{getWordFromLanguage('prices', lang)}</span>
        <div style={styles.priceBlock}>
            <span className={'tag'} style={{position: 'absolute', zIndex: 2, top: 5, left: -25, transform: 'rotate(320deg)', backgroundColor: '#931f1f', borderRadius: '25px', padding: '6px 15px', fontWeight: 'bolder'}}>best offer</span>
            <span>{getWordFromLanguage('basicPlan', lang)}</span>
            <ul>
                <li>{getWordFromLanguage('multiWindow', lang)}</li>
                <li>{getWordFromLanguage('discordIntegration', lang)}</li>
                <li>{getWordFromLanguage('supportResponse', lang)}</li>
                <li>{getWordFromLanguage('manyMore', lang)}</li>
            </ul>
            <span>{getWordFromLanguage('promotional', lang)}</span>
            <span>{getWordFromLanguage('price', lang)}</span>
        </div>
        <span style={{marginTop: '25px', textAlign: 'center'}}>{getWordFromLanguage('bringFriend', lang)}</span>

    </div>
}

export default Prices;
