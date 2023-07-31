import React from "react";
import { useLocation } from "react-router-dom";

const Show = () => {
    const location = useLocation();
    const data = location.state;

    return (
        <main className="show-main">
            <div className="show-info">
                <img src={data.image} className="preview--image" />
                <h2 className="preview--title">{data.title}</h2>
            </div>
        </main>
    );
};

export default Show;
