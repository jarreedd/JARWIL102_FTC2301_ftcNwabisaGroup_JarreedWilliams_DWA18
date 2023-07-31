import React from "react";
import Sort from "./Sort.jsx";
import Preview from "./Preview.jsx";
const SHOWS_API = "https://podcast-api.netlify.app/shows";

const PreviewDisplay = ({ title, size }) => {
    const [state, setState] = React.useState({
        isLoading: true,
        shows: "",
    });

    React.useEffect(() => {
        fetch(SHOWS_API)
            .then((res) => res.json())
            .then((data) => {
                setState((prev) => {
                    return {
                        ...prev,
                        isLoading: false,
                        shows: data,
                    };
                });
            });
    }, []);

    const addTitle =
        title === "Browse" ? <Sort title="Browse" /> : <h3>{title}</h3>;
    const type = size ? `${size}--preview` : "preview";

    return (
        <section>
            {state.isLoading && <div>Loading...</div>}
            {state.shows && (
                <>
                    {addTitle}
                    <div className={type + "-display"}>
                        {state.shows.map((show) => (
                            <Preview key={show.id} data={show} />
                        ))}
                    </div>
                </>
            )}
        </section>
    );
};

export default PreviewDisplay;
