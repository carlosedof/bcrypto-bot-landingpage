import React from 'react';
import Jump from 'react-reveal/Jump';
import Background from '../../assets/BGgray.png';
import Hero from '../../assets/BcoinTokenHero.png';
import Window from '../../assets/window.png';

const styles = {
    container: {
        background: `url(${Background})`,
        backgroundSize: 'cover',
        display: 'flex',
        justifyContent: 'center'
    },
    img: {
        width: '30%',
        maxWidth: '300px',
        margin: '4% 2.5%'
    },
    window: {
        width: '40%',
        maxWidth: '300px',
        margin: '4% 2.5%'
    }
}

const Cover = () => {
    return <div style={styles.container}>
        <Jump>
            <div style={styles.img}>
                <img alt={'heroImg'} style={{maxWidth: '100%'}} className={'bot-image'} src={Hero} />
            </div>
        </Jump>
        <img  alt={'botImg'} style={styles.window} src={Window} />
    </div>
}

export default Cover;
