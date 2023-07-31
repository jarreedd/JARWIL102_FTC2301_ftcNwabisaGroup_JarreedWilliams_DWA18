import React from "react";

const Season = (props) => {
    const { state, closeHandler } = props;
    const { season } = state;
    console.log(season);
    return (
        <div>
            <dialog
                className="season-dialog"
                open={state.season ? true : false}
            >
                <button className="back-to-season" onClick={closeHandler}>
                    <ion-icon name="arrow-back-outline"></ion-icon>
                </button>

                <div className="season-selected">
                    <h4>{season.season}</h4>
                    <img className="image" src={season.image} />
                    <div className="season-info">
                        <h5 className="season-title">{season.title}</h5>
                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default Season;
