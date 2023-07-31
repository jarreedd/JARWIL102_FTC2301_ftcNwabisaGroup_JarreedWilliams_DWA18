import React from "react";
import EpisodeDisplay from "./EpisodeDisplay.jsx";

const Season = (props) => {
    const { state, closeHandler } = props;
    const { season } = state;
    return (
        <div>
            <dialog
                className="season-dialog"
                open={state.season ? true : false}
            >
                <button className="back-to-season" onClick={closeHandler}>
                    <ion-icon name="arrow-back-outline"></ion-icon>
                </button>

                <div className="seasons">
                    <div className="prev-season">
                        <ion-icon name="chevron-back-outline"></ion-icon>
                    </div>
                    <button className="season-selected">
                        <h4>{season.season}</h4>
                        <img className="image" src={season.image} />
                        <div className="season-info">
                            <h5 className="season-title">{season.title}</h5>
                        </div>
                    </button>
                    <div className="next-season">
                        <ion-icon name="chevron-forward-outline"></ion-icon>
                    </div>
                </div>

                <EpisodeDisplay episodes={season.episodes} />
            </dialog>
        </div>
    );
};

export default Season;
