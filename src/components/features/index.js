import React from 'react';
import {Col, Row} from "../../common";

const FEATS = [
    {
        title: 'Multiclient support',
        subtitle: 'Supports as many accounts you want to run, just open the desired number of windows and go do something else ;)'
    },
    {
        title: 'Discord integration',
        subtitle: 'Sends to your through discord a screenshot every X minutes (you choose how often you are going to receive it)'
    },
    {
        title: 'Several errors handlers',
        subtitle: 'Checks for errors at screen, doesn\'t stop no matter what happens, if anything works, refreshes screen and start all over again. Prevents you to waste time with bot not working.'
    },
    {
        title: 'Smart hero management',
        subtitle: 'Only 3 heroes works at same time, so you have a better efficiency and better farming. But doesn\'t ever let full heroes idle.'
    },
    {
        title: 'Anti idle system',
        subtitle: 'Refreshes heroes position so you don\'t ever get disconnected.'
    },
    {
        title: 'Different browsers support',
        subtitle: 'Supports Google Chrome, Mozilla Firefox and Opera!'
    },
    {
        title: 'Continuous updates and improvements',
        subtitle: 'Bcrypto bot is always getting better, continuous updates, new features and after every game updates quick fixes'
    },
]


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
    https://www.youtube.com/watch?v=OGGuw2dLBjk
    return <Col style={styles.container}>
        <span style={{fontSize: '24px', fontWeight: 'bolder'}}>Features</span>
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
