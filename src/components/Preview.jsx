import React from "react";
import { Link } from "react-router-dom";
import getdate from "../utilities/getdate.js";

const Preview = ({ data }) => {
    const date = new Date(data.updated);
    const updatedDate = getdate(date);

    return (
        <Link to="show" state={data}>
            <div className="preview">
                <img src={data.image} className="preview--image" />
                <p className="preview--title">{data.title}</p>
                <div className="preview--details">
                    <p>Seasons: {data.seasons}</p>
                    <p>Last update: {updatedDate}</p>
                    <p>Genre: </p>
                </div>
            </div>
        </Link>
    );
};

export default Preview;
