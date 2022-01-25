import React from "react";
import '../App.css';

function YoutubeEmbed() {
    return (
        <div style={styles.Video} className="video-responsive">
           <iframe width="100%" height="90%" src="https://www.youtube.com/embed/uzcXqqTH_4U" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    )
}

export default YoutubeEmbed;

const styles = {
    Video: {
       height: '100vh',
       display: 'flex',
       justifyContent: 'center'
    },
};