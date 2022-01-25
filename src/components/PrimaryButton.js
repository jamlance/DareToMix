import '../App.css';
import Arrow from '../assets/arrow.svg'

const PrimaryButton = ({
    Data, Color, Color2
}) => {
    return (
        <div style={styles.Button}>
            <div style={{
                backgroundColor: Color,
                width: '180px',
                height: '57px',
                fontWeight: '600',
                letterSpacing: '2px',
                fontSize: '12px',
                color: 'white',
                display: 'flex',
            }} class=" button-slanted">
                <div class="button-slanted-content">
                    <p>{Data}</p>
                </div>
            </div>
            <div style={{
                backgroundColor: Color2,
                width: '80px',
                height: '57px',
            }} class=" button-slanted">
                <span class="button-slanted-content">
                    <img style={styles.Arrow} src={Arrow} alt="Right Arrow" />
                </span>
            </div>
        </div>
    )
}

export default PrimaryButton;

const styles = {
    Button: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: '50px'
    },
    Section1: {
        width: '180px',
        height: '57px',
        fontWeight: '600',
        letterSpacing: '2px',
        fontSize: '12px',
        color: 'white',
        display: 'flex',
    },
    Arrow: {
        width: '10px'
    },
    ButtonPrimary: {
        backgroundColor: '#201A1B',
        width: '80px',
        height: '57px',
    }
};