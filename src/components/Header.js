import '../App.css';
import React from 'react';
import PrimaryButton from './PrimaryButton';
import { Link } from 'react-scroll'
import Hero from '../assets/Hero2.svg'

function Header() {
    return (
        <div id="home" style={styles.HeaderScreen}>
            <div style={styles.Left}>
                <p style={styles.SubHeader}>BEYOND THE BAR</p>
                <h1 style={styles.Header}>DARE TO <span style={{color: '#FCAD43'}}>MIX</span></h1>
                <p style={styles.SubHeader2}>BARTENDER MIXOLOGY COMPETITION</p>
                <p style={styles.SubHeader2}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                <Link to="watch" spy={true} smooth={true}>
                    <PrimaryButton Data="WATCH NOW" Color="#312829" Color2="#121212" />
                </Link>
            </div>
            <div style={styles.Right}>
            <img style={styles.Images} src={Hero} alt="Bartender1" />
            </div>
        </div>
    );
}

export default Header;

const styles = {
    HeaderScreen: {
        paddingLeft: '110px',
        //paddingRight: '110px',
        //width: '100%',
        backgroundColor: '#CF3C31',
        minHeight: '100vh',
        color: 'white',
        display: 'flex',
        //flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    Right: {
        //marginRight: '200px',
        float: 'right',
        //backgroundColor: 'black',
        //width: '50%',
        height: '100%'
        //marginTop: '50px'
        //justifyContent: 'center',
        //position: 'absolute',
        //alignContent: 'center',
        //alignItems: 'center',
        //display: 'flex',
    },
    Left: {
        //backgroundColor: '#FFD194',
       // width: '50%',
        float: 'left',
        width: '50%',
        //marginLeft: '100px',
        //justifyContent: 'center',
        //display: 'flex',
        //flexDirection: 'column',
        //backgroundColor: 'red',
    },
    Header: {
        fontSize: '64px',
        fontFamily: 'Inter',
        fontWeight: '800',
        marginTop: '-10px',
        marginBottom: '-10px',
        letterSpacing: '2px',
        fontStyle: 'Italic'
    },
    Header2: {
        fontSize: '48px',
        fontFamily: 'Inter',
        fontWeight: '600',
        marginBottom: '-10px',
        letterSpacing: '2px',
        textAlign: 'left',
        width: '50%'
    },
    SubHeader: {
        fontSize: '18px',
        fontFamily: 'Inter',
        fontWeight: '600',
        letterSpacing: '2px',
        marginBottom: '-10px',
        lineHeight: '30px',
    },
    SubHeader2: {
        fontSize: '14px',
        fontFamily: 'Inter',
        fontWeight: '600',
        letterSpacing: '2px',
        marginBottom: '10px',
        width: '80%'
    },
};

/**
 *  <div className="App">
      <header className="App-header">
      </header>
      <section className="App-section">
      </section>
      <section className="App-subscription"></section>
      <footer className="App-footer">
      </footer>
    </div>

                

 */