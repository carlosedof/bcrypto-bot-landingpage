import React from 'react';
import Background from '../../assets/BGgray.png';
import Hero from '../../assets/BcoinTokenHero.webp';
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
        <img style={styles.img} src={Hero} />
        <img style={styles.window} src={Window} />
    </div>
}

export default Cover;
