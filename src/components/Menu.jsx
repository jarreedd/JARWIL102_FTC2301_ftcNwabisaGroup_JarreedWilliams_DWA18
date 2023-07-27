import React from "react";

const Menu = () => {
    const [showMore, setShowMore] = React.useState(false);

    function toggleMenu() {
        setShowMore((showMore) => !showMore);
        console.log(showMore);
    }

    return (
        <div
            onClick={toggleMenu}
            className={showMore ? "menu-btn" : "menu-btn close"}
        >
            <div className="btn-line"></div>
            <div className="btn-line"></div>
            <div className="btn-line"></div>
        </div>
    );
};

export default Menu;

// if (!showMore) {
//     menuBtn.classList.add("close");

//     // Set Menu State
//     showMore = true;
// } else {
//     menuBtn.classList.remove("close");
//     // Set Menu State
//     showMore = false;
// }
