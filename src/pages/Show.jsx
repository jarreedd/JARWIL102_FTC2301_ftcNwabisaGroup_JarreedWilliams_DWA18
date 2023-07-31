import React from "react";
import { useLocation } from "react-router-dom";
import Season from "../components/Season.jsx";
import SeasonDisplay from "../components/SeasonDisplay.jsx";
const SHOW_API = "https://podcast-api.netlify.app/id/";

const Show = () => {
    const location = useLocation();
    const ID = location.state.id;

    const [state, setState] = React.useState({
        isLoading: true,
        preview: location.state,
        show: null,
        seasonView: false,
        season: "",
    });

    function openHandler(param) {
        setState((prev) => {
            return {
                ...prev,
                season: param,
            };
        });
    }

    function closeHandler() {
        setState((prev) => {
            return {
                ...prev,
                season: false,
            };
        });
    }

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
            });
    }, []);

    return (
        <main className="show-main">
            {state.isLoading && <div>Loading...</div>}
            {state.show && (
                <>
                    <Season state={{ ...state }} closeHandler={closeHandler} />
                    <div className="show-info">
                        <img src={state.show.image} className="image" />
                        <h2 className="title">{state.show.title}</h2>
                        <p className="description">{state.show.description}</p>
                    </div>

                    <SeasonDisplay
                        state={{ ...state }}
                        openHandler={openHandler}
                    />
                </>
            )}
        </main>
    );
};

export default Show;
