import { width } from 'dom-helpers';
import '../App.css';

//Components
import VoteBar from './VoteBar';

//Assets
import Bartender1 from '../assets/Bartenders/1.svg'
import Bartender2 from '../assets/Bartenders/2.svg'
import Bartender3 from '../assets/Bartenders/3.svg'
import Bartender4 from '../assets/Bartenders/4.svg'
import Bartender5 from '../assets/Bartenders/5.svg'
import Bartender6 from '../assets/Bartenders/6.svg'
import Bartender7 from '../assets/Bartenders/7.svg'
import Bartender8 from '../assets/Bartenders/8.svg'

function Bartender() {
    return (
        <div id="vote" style={styles.Middle}>
            <h1 style={styles.Header}>THE BARTENDERS</h1>
            <p style={styles.SubHeader}>Select your favourite Bartender to vote</p>
            <div style={styles.Images}>
                <div>
                <p style={styles.Name}>Davioll</p>
                    <img style={styles.Socials} src={Bartender1} alt="Bartender1" />
                    <p style={styles.Numbers}>377<span style={styles.VoteText}>votes</span></p>
                    <VoteBar Data='30px'/>
                </div>
                <div>
                <p style={styles.Name}>Joel</p>
                    <img style={styles.Socials} src={Bartender2} alt="Bartender2" />
                    <p style={styles.Numbers}>741<span style={styles.VoteText}>votes</span></p>
                    <VoteBar Data='74px'/>
                </div>
                <div>
                <p style={styles.Name}>Rasheen Gordon</p>
                    <img style={styles.Socials} src={Bartender3} alt="Bartender3" />
                    <p style={styles.Numbers}>705<span style={styles.VoteText}>votes</span></p>
                    <VoteBar Data='70px'/>
                </div>
                <div>
                <p style={styles.Name}>Julian Dixon</p>
                    <img style={styles.Socials} src={Bartender4} alt="Bartender4" />
                    <p style={styles.Numbers}>2,143<span style={styles.VoteText}>votes</span></p>
                    <VoteBar Data='214px'/>
                </div>
            </div>

            <div style={styles.Images}>
                <div>
                <p style={styles.Name}>Leighton Campbell</p>
                    <img style={styles.Socials} src={Bartender5} alt="Bartender1" />
                    <p style={styles.Numbers}>921<span style={styles.VoteText}>votes</span></p>
                    <VoteBar Data='92px'/>
                </div>
                <div>
                <p style={styles.Name}>Romaine Martin</p>
                    <img style={styles.Socials} src={Bartender6} alt="Bartender2" />
                    <p style={styles.Numbers}>284<span style={styles.VoteText}>votes</span></p>
                    <VoteBar Data='28px'/>
                </div>
                <div>
                <p style={styles.Name}>Shane Reid</p>
                    <img style={styles.Socials} src={Bartender7} alt="Bartender3" />
                    <p style={styles.Numbers}>1,984<span style={styles.VoteText}>votes</span></p>
                    <VoteBar Data='198px'/>
                </div>
                <div>
                <p style={styles.Name}>Andrew Campbell</p>
                    <img style={styles.Socials} src={Bartender8} alt="Bartender4" />
                    <p style={styles.Numbers}>250<span style={styles.VoteText}>votes</span></p>
                    <VoteBar Data='25px'/>
                </div>
            </div>
        </div>
    )
}

export default Bartender;

const styles = {
    Middle: {
        width: '100%',
        backgroundColor: '#FEFEFE',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        color: '#312829',
    },
    Images: {
        display: 'flex',
        flexDirection: 'row',
        width: '90%',
        justifyContent: 'space-around',
        marginBottom: '70px',
    },
    Header: {
        fontSize: '48px',
        fontFamily: 'Inter',
        fontWeight: '600',
        marginBottom: '0px',
        letterSpacing: '2px'
    },
    SubHeader: {
        fontSize: '14px',
        fontFamily: 'Inter',
        fontWeight: '600',
        marginBottom: '80px',
        letterSpacing: '2px',
        color: '#9797A1'
    },
    Numbers: {
        fontSize: '14px',
        fontFamily: 'Inter',
        fontWeight: '800',
        letterSpacing: '2px',
        color: '#2E2E33'
    },
    VoteText: {
        fontSize: '14px',
        fontFamily: 'Inter',
        fontWeight: '600',
        letterSpacing: '2px',
        color: '#9797A1',
        marginLeft: '10px'
    },
    Name: {
        fontSize: '12px',
        fontFamily: 'Inter',
        fontWeight: '600',
        letterSpacing: '2px',
        color: '#9797A1',
    }
};