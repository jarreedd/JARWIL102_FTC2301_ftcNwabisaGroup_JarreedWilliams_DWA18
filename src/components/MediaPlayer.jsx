import React from "react";

const MediaPlayer = (props) => {
    const { state } = props;
    console.log(state.episode.file);

    return (
        <dialog className="media-player" open={state.isPlaying}>
            <audio controls autoplay>
                <source src={state.episode.file} type="audio/mpeg" />
                Your browser does not support the audio element.
            </audio>
        </dialog>
    );
};

export default MediaPlayer;
