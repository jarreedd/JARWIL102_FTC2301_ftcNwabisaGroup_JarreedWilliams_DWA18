import React from "react";

const Sort = ({ title }) => {
    const [sort, setSort] = React.useState("all");
    const [filterOpen, setFilterOpen] = React.useState(false);

    function formHandler(event) {
        event.preventDefault();
    }

    function activeSort(event) {
        setSort(event.target.name);
    }

    return (
        <div className="browse--filters">
            <form className="filter--form" onSubmit={formHandler}>
                <h3>{title}</h3>
                <div className="sort-btn-container">
                    {/* <div className="left-arrow">
                        <ion-icon name="chevron-back-outline"></ion-icon>
                    </div> */}
                    <div className="sort-list" onClick={activeSort}>
                        <button
                            className={
                                sort === "all" ? "sort-btn active" : "sort-btn"
                            }
                            name="all"
                        >
                            All
                        </button>
                        <button
                            className={
                                sort === "a-z" ? "sort-btn active" : "sort-btn"
                            }
                            name="a-z"
                        >
                            A-Z
                        </button>
                        <button
                            className={
                                sort === "z-a" ? "sort-btn active" : "sort-btn"
                            }
                            name="z-a"
                        >
                            Z-A
                        </button>
                        <button
                            className={
                                sort === "most-recent"
                                    ? "sort-btn active"
                                    : "sort-btn"
                            }
                            name="most-recent"
                        >
                            Most Recent
                        </button>
                        <button
                            className={
                                sort === "least-recent"
                                    ? "sort-btn active"
                                    : "sort-btn"
                            }
                            name="least-recent"
                        >
                            Least Recent
                        </button>
                    </div>
                    {/* <div className="right-arrow active">
                        <ion-icon name="chevron-forward-outline"></ion-icon>
                    </div> */}
                </div>
                <button
                    type="button"
                    className="filters--btn"
                    onClick={() => setFilterOpen((prev) => !prev)}
                >
                    filters
                </button>
                <dialog className="filter--dialog" open={filterOpen}>
                    <button
                        type="button"
                        onClick={() => setFilterOpen((prev) => !prev)}
                    >
                        Close
                    </button>
                </dialog>
                <div className={filterOpen ? "overlay show" : "overlay"}></div>
            </form>
        </div>
    );
};

export default Sort;
