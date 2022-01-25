import React from 'react';
import SmirnoffLogo from '../assets/smirnoffLogo.svg'
import Facebook from '../assets/socials/facebook.svg'
import Instagram from '../assets/socials/instagram.svg'
import Youtube from '../assets/socials/youTube.svg'

function Footer() {
    return (
        <div style={styles.Footer}>
             <img style={styles.Logo} src={SmirnoffLogo} alt="SmirnoffLogo" />
            <div style={styles.Follow}>
                <h1 style={styles.SocialsHeader}>FOLLOW US</h1>
                <div>
                    <img style={styles.Socials} src={Facebook} alt="Facebook" />
                    <img style={styles.Socials} src={Instagram} alt="Instagram" />
                    <img style={styles.Youtube} src={Youtube} alt="Youtube" />
                </div>
            </div>
        </div>
    );
}

export default Footer;

const styles = {
    Footer: {
        width: '100%',
        minHeight: '100vh',
        flexDirection: 'row',
        justifyContent: 'space-between',
        color: 'black',
        backgroundColor: '#121212',
        minHeight: '50vh',
        color: 'white',
    },
    Logo: {
        width: '500px',
        paddingLeft: '100px',
        marginTop: '100px'
    },
    Socials: {
        marginRight: '30px',
        flexDirection: 'row',
    },
    Follow: {
        marginRight: '100px',
        float: 'right',
        marginTop: '90px',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
    },
    SocialsHeader: {
        fontSize: '14px',
        fontFamily: 'Inter',
        fontWeight: '500',
        marginBottom: '30px',
        letterSpacing: '5px'
    }
};