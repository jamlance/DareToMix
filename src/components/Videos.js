import '../App.css';
import YoutubeEmbed from './YoutubeEmbed'
import SecondaryButton from './SecondaryButton';

function Videos() {
    return (
        <div id="watch" style={styles.Videos}>
            <div style={styles.VideoHeader}>
                <h1 style={styles.Header1}>WATCH LIVE</h1>
                <p style={styles.Header2}>Never miss an episode. Watch live every Wednesday or re-watch any episode you may have missed</p>
            </div>
            <YoutubeEmbed />
        </div>
    )
}

export default Videos;

const styles = {
    Videos: {
        backgroundColor: '#FEFEFE',
        paddingLeft: '100px',
        paddingRight: '100px',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        color: '#312829',
    },
    VideoHeader: {
        textAlign: 'center',
    },
    Header1: {
        fontSize: '24px',
        fontFamily: 'Inter',
        fontWeight: '800',
        marginBottom: '20px',
        marginTop: '100px',
        letterSpacing: '2px'
    },
    Header2: {
        fontSize: '14px',
        fontFamily: 'Inter',
        fontWeight: '600',
        marginBottom: '30px',
        letterSpacing: '2px',
        color: '#9797A1'
    }
};