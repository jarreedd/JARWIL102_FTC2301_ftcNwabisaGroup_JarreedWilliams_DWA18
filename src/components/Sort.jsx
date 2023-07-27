import React from "react";

const Sort = ({ title }) => {
    return (
        <div className="browse--filters">
            <form className="filter--form">
                <h3>{title}</h3>
                <button className="active">All</button>
                <button>A-Z</button>
                <button>Z-A</button>
                <button>Most Recant</button>
                <button>Least Recant</button>
            </form>
        </div>
    );
};

export default Sort;
