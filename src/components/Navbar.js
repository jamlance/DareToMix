import { Link } from 'react-scroll'
import SecondaryButton from './SecondaryButton';

function Navbar() {
    return (
        <div  style={{ backgroundColor: '#CF3C31', display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
            <ul style={{  listStyle: 'none',  display: 'flex', flexDirection: 'row', marginLeft: '70px'}}>
                <li><Link style={styles.Font} activeClass="active" to="home" spy={true} smooth={true}>HOME</Link></li>
                <li><Link style={styles.Font} to="vote" spy={true} smooth={true}>VOTE</Link></li>
                <li><Link style={styles.Font} to="watch" spy={true} smooth={true}>WATCH LIVE</Link></li>
            </ul>
            <ul style={{  listStyle: 'none', marginRight: '100px'}}>
                <li><Link to="subscribe" spy={true} smooth={true}>
                    <SecondaryButton Data="SIGN UP" />
                </Link>
                </li>
            </ul>
        </div>
    )
}

export default Navbar;

const styles = {
    Font: {
        fontSize: '12px',
        //color: '#312829',
        fontFamily: 'Inter',
        fontWeight: '600',
        letterSpacing: '3px',
        color: 'white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: '100px',
        marginTop: '20px'
    },
}