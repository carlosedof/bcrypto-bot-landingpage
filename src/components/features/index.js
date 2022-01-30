import React, {useContext, useMemo} from 'react';
import {Col, Row} from "../../common";
import {getWordFromLanguage} from "../../languages/languages";
import {ApplicationContext} from "../../App";

const styles = {
    container: {
        marginTop: '50px',
        alignItems: 'center',

    },
    features: {
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        marginTop: '20px',
        marginBottom: '20px'
    },
    title: {
        fontSize: '22px',
        marginBottom: '3px',
        fontWeight: 'bolder',
        textAlign: 'center'
    },
    subtitle: {
        fontSize: '17px',
        fontWeight: '100',
        textAlign: 'center',
        marginTop: '20px',
        lineHeight: 1.5
    }
}
const Features = () => {
    const {lang, setLang} = useContext(ApplicationContext)
    const FEATS = useMemo(() => {
        return [
            {
                title: getWordFromLanguage('multiclientSupport', lang),
                subtitle: getWordFromLanguage('multiclientSupportText', lang),
                color: '#031734'
            },
            {
                title: getWordFromLanguage('discordIntegration', lang),
                subtitle: getWordFromLanguage('discordIntegrationText', lang),
                color: '#151231'
            },
            {
                title: getWordFromLanguage('severalErrorsHandlers', lang),
                subtitle: getWordFromLanguage('severalErrorsHandlersText', lang),
                color: '#031734'
            },
            {
                title: getWordFromLanguage('smartHeroManag', lang),
                subtitle: getWordFromLanguage('smartHeroManagText', lang),
                color: '#151231'
            },
            {
                title: getWordFromLanguage('antiIdle', lang),
                subtitle: getWordFromLanguage('antiIdleText', lang),
                color: '#031734'
            },
            {
                title: getWordFromLanguage('differentBrowsers', lang),
                subtitle: getWordFromLanguage('differentBrowsersText', lang),
                color: '#151231'
            },
            {
                title: getWordFromLanguage('continousUpdates', lang),
                subtitle: getWordFromLanguage('continousUpdatesText', lang),
                color: '#031734'
            },
        ];
    }, [lang]);

    // getWordFromLanguage('home', lang)
    // https://www.youtube.com/watch?v=OGGuw2dLBjk
    return <Col style={styles.container}>
        <span style={{fontSize: '24px', fontWeight: 'bolder'}}>{getWordFromLanguage('features', lang)}</span>
        <Row style={styles.features}>
            { FEATS.map((feat, i) => (
                <div className={'card'} key={i} style={{background: `linear-gradient(161deg, rgba(38,53,77,1) 0%, rgba(0,0,0,1) 22%, ${feat.color} 66%, rgba(1,1,1,1) 100%)`}}>
                    <span style={styles.title}>{feat.title}</span>
                    <span style={styles.subtitle}>{feat.subtitle}</span>
                </div>
            ))}
        </Row>
    </Col>
}

export default Features;
