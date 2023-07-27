import React from "react";

const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
];

const Preview = ({ data }) => {
    const date = new Date(data.updated);
    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    const updatedDate = `${day} ${month} ${year}`;

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
