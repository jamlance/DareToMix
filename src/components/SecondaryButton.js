import '../App.css';

const SecondaryButton = ({  Data }) => {
    return (
        <div style={styles.SecondaryPrimary} class="button-slanted">
            <span class="button-slanted-content">
                <p style={styles.ButtonText}>{Data}</p>
            </span>
        </div>
    )
}

export default SecondaryButton;

const styles = {
    ButtonText: {
        color: 'white',
        fontWeight: '600',
        letterSpacing: '2px',
        fontSize: '12px',
    },
    SecondaryPrimary: {
        backgroundColor: '#312829',
        width: '200px',
        height: '50px',
    }
};