import React from "react";
import { Link } from "react-router-dom";
import getdate from "../utilities/getdate.js";

const Preview = ({ data }) => {
    const date = new Date(data.updated);
    const updatedDate = getdate(date);

    console.log(data.id);

    return (
        <div>
            <Link to="/show">Show</Link>
            <button className="preview" id={data.id}>
                <img src={data.image} className="preview--image" />
                <p className="preview--title">{data.title}</p>
                <div className="preview--details">
                    <p>Seasons: {data.seasons}</p>
                    <p>Last update: {updatedDate}</p>
                    <p>Genre: </p>
                </div>
            </button>
        </div>
    );
};

export default Preview;
