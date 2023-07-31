import React from "react";
import { Link } from "react-router-dom";
import getdate from "../utilities/getdate.js";
const GENRES = {
    1: "Personal Growth ",
    2: "True Crime and Investigative Journalism  ",
    3: "History  ",
    4: "Comedy  ",
    5: "Entertainment  ",
    6: "Business  ",
    7: "Fiction  ",
    8: "News  ",
    9: "Kids and Family  ",
};

const Preview = ({ data }) => {
    const date = new Date(data.updated);
    const updatedDate = getdate(date);
    const genre = data.genres.map((item) => GENRES[item]);

    return (
        <Link to="show" state={data}>
            <div className="preview">
                <img src={data.image} className="preview--image" />
                <p className="preview--title">{data.title}</p>
                <div className="preview--details">
                    <p>Seasons: {data.seasons}</p>
                    <p>last updated: {updatedDate}</p>
                    <p>genres: {genre}</p>
                </div>
            </div>
        </Link>
    );
};

export default Preview;
