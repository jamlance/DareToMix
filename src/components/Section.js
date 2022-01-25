import { width } from 'dom-helpers';
import '../App.css';

//Assets
import footerLogo from '../assets/footerLogo.svg'
import Facebook from '../assets/socials/facebook.svg'
import Instagram from '../assets/socials/instagram.svg'
import Youtube from '../assets/socials/youTube.svg'

function Section() {
    return (
        <>
            <header id="home" className="App-header">
            </header>
            <section id="about" className="App-section">
            </section>
            <section id="contact" className="App-subscription"></section>

            <footer style={styles.Footer}>
            </footer>
        </>
    )
}

export default Section;

const styles = {
    Footer: {
        paddingLeft: '110px',
        paddingRight: '110px',
        backgroundColor: '#121212',
        minHeight: '50vh',
        color: 'white',
    },
    Socials: {
        //display: 'flex',
       // flexDirection: 'column',
        //float: 'right',
    },
    Logo: {
        //width: '50%'
        //float: 'left',
    }
};