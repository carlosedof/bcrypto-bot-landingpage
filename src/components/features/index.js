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
        fontSize: '17px',
        marginBottom: '20px',
        fontWeight: 'bolder',
        textAlign: 'center'
    },
    subtitle: {
        fontSize: '12px',
        fontWeight: 'bolder',
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
                subtitle: getWordFromLanguage('multiclientSupportText', lang)
            },
            {
                title: getWordFromLanguage('discordIntegration', lang),
                subtitle: getWordFromLanguage('discordIntegrationText', lang)
            },
            {
                title: getWordFromLanguage('severalErrorsHandlers', lang),
                subtitle: getWordFromLanguage('severalErrorsHandlersText', lang)
            },
            {
                title: getWordFromLanguage('smartHeroManag', lang),
                subtitle: getWordFromLanguage('smartHeroManagText', lang)
            },
            {
                title: getWordFromLanguage('antiIdle', lang),
                subtitle: getWordFromLanguage('antiIdleText', lang)
            },
            {
                title: getWordFromLanguage('differentBrowsers', lang),
                subtitle: getWordFromLanguage('differentBrowsersText', lang)
            },
            {
                title: getWordFromLanguage('continousUpdates', lang),
                subtitle: getWordFromLanguage('continousUpdatesText', lang)
            },
        ];
    }, [lang]);

    // getWordFromLanguage('home', lang)
    https://www.youtube.com/watch?v=OGGuw2dLBjk
    return <Col style={styles.container}>
        <span style={{fontSize: '24px', fontWeight: 'bolder'}}>{getWordFromLanguage('features', lang)}</span>
        <Row style={styles.features}>
            { FEATS.map((feat, i) => (
                <div className={'card'}>
                    <span style={styles.title}>{feat.title}</span>
                    <span style={styles.subtitle}>{feat.subtitle}</span>
                </div>
            ))}

        </Row>
    </Col>
}

export default Features;
