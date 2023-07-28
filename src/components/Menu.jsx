import React from "react";

const Menu = () => {
    const [showMore, setShowMore] = React.useState(false);

    function toggleMenu() {
        setShowMore((showMore) => !showMore);
    }

    return (
        <>
            <div
                onClick={toggleMenu}
                className={showMore ? "menu-btn close" : "menu-btn"}
            >
                <div className="btn-line"></div>
                <div className="btn-line"></div>
                <div className="btn-line"></div>
            </div>
            <nav className={showMore ? "menu show" : "menu"}>
                <ul className={showMore ? "menu-nav show" : "menu-nav"}>
                    <li className="nav-item account">
                        <div className="account--user">
                            <h2 className="user">
                                <ion-icon name="person-circle-outline"></ion-icon>
                                Guest
                            </h2>
                            <button>Login/Register</button>
                        </div>
                        <small className="notify">
                            Create an account by signing up gain access of
                            certain feathers
                        </small>
                    </li>
                    <li className="nav-item">
                        <ion-icon name="sunny-outline"></ion-icon>Appearence
                    </li>
                    <li className="nav-item">
                        <ion-icon name="bookmark-outline"></ion-icon>Favirotes
                    </li>
                    <li className="nav-item">
                        <ion-icon name="download-outline"></ion-icon>Downloads
                    </li>
                </ul>
            </nav>
            <div className={showMore ? "overlay show" : "overlay"}></div>
        </>
    );
};

export default Menu;
