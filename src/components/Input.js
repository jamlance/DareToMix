import '../App.css';
import Arrow from '../assets/arrow.svg'

function Input() {
    return (
        <div style={styles.Form}>
            <input style={styles.Input} placeholder="email address" type="text" name="name" />
            <div class="button-default button-slanted">
            <span class="button-slanted-content">
                <img style={styles.Arrow} src={Arrow} alt="Right Arrow" />
                </span>
            </div>
        </div>
    );
}

export default Input;

const styles = {
    Form: {
        display: 'flex',
        flexDirection: 'row'
    },
    Input: {
        width: '300px',
        height: '55px',
        paddingLeft: '30px',
        marginRight: '-10px',
        background: '#FFFFFF',
        boxShadow: 'none',
        border: 0,
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: '14px',
        color: '#B8B8B8',
        letterSpacing: '2px'
    },
    Arrow: {
        width: '10px'
    }
};