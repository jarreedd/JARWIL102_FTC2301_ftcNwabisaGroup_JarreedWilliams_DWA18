import React from "react";

const EpisodeDisplay = (props) => {
    const { episodes } = props;

    return (
        <div className="select-episode">
            <h3>Episodes: </h3>
            {episodes && (
                <div className="episodes">
                    {episodes.map((episode) => {
                        return (
                            <div className="episode">
                                <div className="episode-title">
                                    <small>{episode.episode}.</small>
                                    <h5>{episode.title}</h5>
                                </div>
                                <ion-icon name="play-outline"></ion-icon>
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
};

export default EpisodeDisplay;
