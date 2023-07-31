import React from "react";
import { useLocation } from "react-router-dom";
const SHOW_API = "https://podcast-api.netlify.app/id/";

const Show = () => {
    const location = useLocation();
    const ID = location.state.id;

    const [state, setState] = React.useState({
        isLoading: true,
        preview: location.state,
        show: null,
    });

    React.useEffect(() => {
        fetch(`${SHOW_API}${ID}`)
            .then((res) => res.json())
            .then((data) => {
                setState((prev) => {
                    return {
                        ...prev,
                        isLoading: false,
                        show: data,
                    };
                });
                console.log(data);
            });
    }, []);

    return (
        <main className="show-main">
            {state.isLoading && <div>Loading...</div>}
            {state.show && (
                <>
                    <div className="show-info">
                        <img src={state.show.image} className="image" />
                        <h2 className="title">{state.show.title}</h2>
                        <p className="description">{state.show.description}</p>
                    </div>
                    <h3>Seasons: </h3>
                    <div className="select-season">
                        {state.show.seasons.map((season) => {
                            return (
                                <button
                                    className="season-btn"
                                    key={season.season}
                                >
                                    <h4>{season.season}</h4>
                                    <img className="image" src={season.image} />
                                    <div className="season-info">
                                        <h5 className="season-title">
                                            {season.title}
                                        </h5>
                                        <p>
                                            episodes: {season.episodes.length}
                                        </p>
                                    </div>
                                </button>
                            );
                        })}
                    </div>
                </>
            )}
        </main>
    );
};

export default Show;
