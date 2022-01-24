import React from 'react';

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
        width: '220px',
        backgroundColor: '#050505',
        boxShadow: '1px 1px 5px gray',
        fontSize: '17px',
        padding: '20px',
        borderRadius: '12px',
        position: 'relative'
    }
}

const Prices = () => {

    return <div style={styles.container}>
        <span style={{fontSize: '24px', fontWeight: 'bolder', marginBottom: '20px'}}>Prices</span>
        <div style={styles.priceBlock}>
            <span style={{position: 'absolute', top: 5, left: -20, transform: 'rotate(320deg)', backgroundColor: '#931f1f', borderRadius: '25px', padding: '6px', fontWeight: 'bolder'}}>best offer</span>
            <span>Basic plan</span>
            <ul>
                <li>multiple window support</li>
                <li>discord integration</li>
                <li>support response up to 4hs</li>
                <li>many more...</li>
            </ul>
            <span>promotional price</span>
            <span>8 bcoin/month</span>
        </div>
        <span style={{marginTop: '25px'}}>Bring a friend to Bcrypto bot and get extra 15 days in your registration key expiration date!</span>

    </div>
}

export default Prices;
