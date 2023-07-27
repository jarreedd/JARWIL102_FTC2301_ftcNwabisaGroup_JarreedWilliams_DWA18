import React from "react";
import getdate from "../utilities/getdate.js";

const Preview = ({ data }) => {
    const date = new Date(data.updated);
    const updatedDate = getdate(date);

    return (
        <div className="preview">
            <img src={data.image} />

            <div className="preview--details">
                <p>seasons: {data.seasons}</p>
                <p>last update: {updatedDate}</p>
                <p>genre: </p>
            </div>
        </div>
    );
};

export default Preview;
