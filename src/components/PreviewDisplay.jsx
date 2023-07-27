import React from "react";
import Sort from "./Sort.jsx";
import Preview from "./Preview.jsx";
const SHOW_API = "https://podcast-api.netlify.app/shows";

const PreviewDisplay = ({ title, size }) => {
    const [shows, setShows] = React.useState([]);

    React.useEffect(() => {
        fetch(SHOW_API)
            .then((res) => res.json())
            .then((data) => {
                setShows(data);
            });
    }, []);

    const previews = shows.map((show) => <Preview key={show.id} data={show} />);

    const addTitle =
        title === "Browse" ? <Sort title="Browse" /> : <h3>{title}</h3>;
    const type = size ? `${size}--preview` : "preview";

    return (
        <section>
            {addTitle}
            <div className={type + "-display"}>{previews}</div>
        </section>
    );
};

export default PreviewDisplay;
