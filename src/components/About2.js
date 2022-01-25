import '../App.css';
import About from '../assets/about2.svg'
import { Link } from 'react-scroll'
import PrimaryButton from './PrimaryButton';

function About2() {
    return (
        <div style={styles.About}>
            <div style={styles.Left}>
                <h1 style={styles.Header}>Vote for your </h1>
                <h1 style={styles.Header2}>favourite Bartender</h1>
                <p style={styles.Paragraph2}>Sign up and click on the bartender image to vote for your<span style={{color: '#2E2E33', fontWeight: '800'}}> FAVOURITE </span>contestant.</p>
                <p style={styles.Paragraph}>The contestant with the most votes will win the popular vote prize of JMD <span style={{color: '#2E2E33', fontWeight: '800'}}> $100,000</span></p>
            </div>
            <div style={styles.Right}>
            <img style={styles.Images} src={About} alt="Bartender1" />
            </div>
            
        </div>
    )
}

export default About2;

const styles = {
    About: {
        width: '100%',
        //backgroundColor: 'white',
        //backgroundColor: '#EFEEEE',
        backgroundColor: '#CF3C31',
        minHeight: '100vh',
        color: 'white',
        display: 'flex',
        flexDirection: 'row',
        //marginBottom: '100px',
        //paddingLeft: '100px',
        //position: 'relative',
        //marginTop: '200px',
    },
    Images: {
        //width: '50px',
        //paddingRight: '100px',
       // display: 'flex',
        
    },
    Right: {
        //backgroundColor: '#FFD194',
        //width: '100%',
        //width: '50%',
        //height: '500px',
        //float: 'right',
        //marginLeft: '110px'
        justifyContent: 'center',
        display: 'flex',
    },
    Left: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        marginLeft: '110px',
        width: '50%'
        //position: 'absolute'
    },
    Header: {
        fontSize: '64px',
        fontFamily: 'Inter',
        fontWeight: '600',
        marginBottom: '-30px',
        letterSpacing: '2px',
        color: 'white'
    },
    Header2: {
        fontSize: '64px',
        fontFamily: 'Inter',
        fontWeight: '600',
        marginBottom: '20px',
        letterSpacing: '2px',
        color: 'white'
    },
    Paragraph: {
        fontSize: '14px',
        fontFamily: 'Inter',
        fontWeight: '500',
        marginBottom: '20px',
        letterSpacing: '2px',
        //lineHeight: '30px',
    },
    Paragraph2: {
        fontSize: '14px',
        fontFamily: 'Inter',
        fontWeight: '500',
        marginBottom: '-10px',
        letterSpacing: '2px',
        //lineHeight: '30px'
    },
};