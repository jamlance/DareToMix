import '../App.css';
import React from 'react';
import Input from './Input'

function Subscription() {
    return (
        <div id="subscribe" style={styles.Subscription}>
            <p style={styles.InputLabel}>Subscribe for the latest updates</p>
            <Input />
        </div>
    );
}

export default Subscription;

const styles = {
    Subscription: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        backgroundColor: '#EFEEEE',
        minHeight: '40vh',
        color: '#9797A1'
    },
    InputLabel: {
        fontSize: '14px',
        fontFamily: 'Inter',
        fontWeight: '600',
        marginBottom: '30px',
        letterSpacing: '3px',
        color: '#9797A1'
    }
};