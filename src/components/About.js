import '../App.css';

function About() {
    return (
        <div style={styles.About}>
            <h1 style={styles.Header}>WHO WILL WIN <span style={{color: '#FCAD43', fontWeight: '800',}}>JMD $1,000,000 </span>CASH PRIZE?</h1>
            <p style={styles.Paragraph}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
        </div>
    )
}

export default About;

const styles = {
    About: {
        //width: '100%',
        backgroundColor: 'white',
        minHeight: '20vh',
        color: '#312829',
        justifyContent: 'center',
        display: 'flex',
        flexDirection: 'column',
        marginLeft: '200px',
        marginRight: '200px',
        marginTop: '100px'
    },
    Header: {
        fontSize: '24px',
        fontFamily: 'Inter',
        fontWeight: '600',
        marginBottom: '-5px',
        letterSpacing: '2px',
        textAlign: 'center'
    },
    Paragraph: {
        fontSize: '14px',
        fontFamily: 'Inter',
        fontWeight: '600',
        //marginBottom: '-30px',
        letterSpacing: '2px',
        textAlign: 'center',
        color:'#9797A1',
        //lineHeight: '30px',
        //width: '1000px',
        //backgroundColor: 'blue',
    }
};