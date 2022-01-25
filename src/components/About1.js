import '../App.css';
import PrimaryButton from './PrimaryButton';
import { Link } from 'react-scroll'
import About from '../assets/about1.svg'

function About1() {
    return (
        <div style={styles.About}>
           <div style={styles.Left}>
           <img style={styles.Images} src={About} alt="Bartender1" />
           </div>
            <div style={styles.Right}>
                    <h1 style={styles.Header}>1 WINNER</h1>
                    <h1 style={styles.Header}>3 ROUNDS</h1>
                    <h1 style={styles.Header}>8 BARTENDERS</h1>
                    <p style={styles.Paragraph}>Watch live starting January 5th @ 9:30 PM</p>
                    <Link to="watch" spy={true} smooth={true}>
                        <PrimaryButton Data="WATCH NOW" Color="#EA4337" Color2="#CF3C31" />
                    </Link>
            </div>
        </div>
    )
}

export default About1;

const styles = {
    About: {
        width: '100%',
        backgroundColor: 'white',
        minHeight: '100vh',
        color: '#312829',
        //paddingTop: '100px',
        //marginBottom: '100px'
        display: 'flex',
        //flexDirection: 'row',
    },
    Images: {
        //height: '50vh',
        //width: '50px',
        //display: 'flex',
    },
    Right: {
       // marginRight: '110px',
        float: 'right',
        flexDirection: 'column',
        width: '50%',
        //marginLeft: '50px',
        justifyContent: 'center',
        //alignContent: 'center',
        //alignItems: 'center',
        display: 'flex',
    },
    Left: {
        //backgroundColor: '#FFD194',
        width: '60%',
        float: 'left',
        justifyContent: 'center',
        display: 'flex',
        //marginRight: '110px',
        //justifyContent: 'center',
        //display: 'flex',
        //backgroundColor: 'red',
    },
    Header: {
        fontSize: '48px',
        fontFamily: 'Inter',
        fontWeight: '600',
        marginBottom: '-30px',
        letterSpacing: '2px'
    },
    Paragraph: {
        fontSize: '14px',
        fontFamily: 'Inter',
        fontWeight: '600',
        marginBottom: '20px',
        letterSpacing: '2px',
        lineHeight: '30px',
        marginTop: '50px',
        marginBottom: '-20px',
        color: '#9797A1'
    },
};