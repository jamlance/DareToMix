import '../App.css';
import { Link } from 'react-scroll'

//Assets
import RoundsPic1 from '../assets/Bartenders/roundsPic1.svg'
import RoundsPic from '../assets/Bartenders/roundsPic.svg'
import PrimaryButton from './PrimaryButton';

function Round() {
    return (
        <div style={styles.Middle}>
            <div>
                <p style={styles.SubHeader}>UP NEXT</p>
                <h1 style={styles.Header}>ROUND 4</h1>
                <p style={styles.Paragraph}>Watch Davioll and Romaine go head to head for the
                    ultimate title of Jamaica’s #1 Bartender</p>
                <img style={styles.Images} src={RoundsPic1} alt="Bartender1" />
                <p style={styles.Name}>Davioll</p>
            </div>
            <h1 style={styles.Versus}>vs.</h1>
            <div>
                <img style={styles.Images} src={RoundsPic} alt="Bartender6" />
                <p style={styles.Name}>Romaine</p>
                <p style={styles.Paragraph2}>Who will win this round? Vote now for your favourite Bartender</p>  
                    <Link to="vote" spy={true} smooth={true}>
                        <PrimaryButton Data="VOTE NOW" Color="#323232" Color2="#201A1B"/>
                        </Link>
            </div>
        </div>
    )
}

export default Round;

const styles = {
    Middle: {
        width: '100%',
        //backgroundColor: 'white',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        color: '#312829',
        marginBottom: '100px',
        marginTop: '100px'
    },
    SubHeader: {
        fontSize: '14px',
        fontFamily: 'Inter',
        fontStyle: 'Italic',
        fontWeight: '800',
        marginBottom: '-30px',
        letterSpacing: '2px',
        color: '#FCAD43'
    },
    Header: {
        fontSize: '48px',
        fontFamily: 'Inter',
        fontWeight: '600',
        marginBottom: '0px',
        letterSpacing: '2px'
    },
    Paragraph: {
        fontSize: '14px',
        fontFamily: 'Inter',
        fontWeight: '600',
        marginBottom: '20px',
        letterSpacing: '2px',
        width: '580px',
        color: '#9797A1'
        //lineHeight: '30px'
    },
    Paragraph2: {
        fontSize: '14px',
        fontFamily: 'Inter',
        fontWeight: '600',
        marginTop: '50px',
        marginBottom: '-30px',
        letterSpacing: '2px',
        width: '580px',
        color: '#9797A1'
        //lineHeight: '30px'
    },
    Name: {
        fontSize: '12px',
        fontFamily: 'Inter',
        fontWeight: '600',
        letterSpacing: '2px',
        color: '#9797A1',
    },
    Versus: {
        fontSize: '24px',
        fontFamily: 'Inter',
        fontWeight: '800',
        fontStyle: 'Italic',
        marginLeft: '20px',
        marginRight: '20px'
    },
};