import React from "react";

const AudioPlayer = (props) => {
    const { state } = props;

    // State
    const [audState, setAudState] = React.useState({
        isPlaying: false,
        episode: "",
    });

    const [duration, setDuration] = React.useState(0);

    // references
    const audioPlayer = React.useRef();

    function playPause() {
        const prevIsPlaying = audState.isPlaying;
        setAudState((prev) => ({
            ...prev,
            isPlaying: !prevIsPlaying,
        }));

        if (!prevIsPlaying) {
            audioPlayer.current.play();
        } else {
            audioPlayer.current.pause();
        }
    }

    React.useEffect(() => {
        setAudState(state);
        if (audioPlayer.current && audioPlayer.current.duration) {
            const seconds = Math.floor(audioPlayer.current.duration);
            setDuration(seconds);
        }
    }, [
        state,
        audioPlayer?.current?.loadedmetadata,
        audioPlayer?.current?.readyState,
    ]);

    return (
        <>
            {audState.episode && (
                <div className="audio-player">
                    <audio
                        ref={audioPlayer}
                        autoPlay
                        src={state.episode.file}
                        type="audio/mpeg"
                        preload="metadata"
                    ></audio>

                    <div className="progress">
                        <input type="range" className="progress-bar" />
                        <div className="time">
                            <div className="current-time">0:00</div>
                            <div className="duration">{duration}</div>
                        </div>
                    </div>

                    <div className="audio-player-controls">
                        <button className="next-prev-episode">
                            <ion-icon name="play-skip-back-outline"></ion-icon>
                        </button>
                        {/* <button>
                        <ion-icon name="play-back-outline"></ion-icon>
                        </button> */}
                        <button onClick={playPause} className="play-pause-btn">
                            {audState.isPlaying ? (
                                <ion-icon name="pause-outline"></ion-icon>
                            ) : (
                                <ion-icon name="play-outline"></ion-icon>
                            )}
                        </button>
                        {/* <button>
                        <ion-icon name="play-forward-outline"></ion-icon>
                        </button> */}
                        <button className="next-prev-episode">
                            <ion-icon name="play-skip-forward-outline"></ion-icon>
                        </button>
                    </div>

                    <button
                        onClick={() => {
                            setAudState({ isPlaying: false, episode: "" });
                        }}
                    >
                        Close
                    </button>
                </div>
            )}
        </>
    );
};

export default AudioPlayer;
