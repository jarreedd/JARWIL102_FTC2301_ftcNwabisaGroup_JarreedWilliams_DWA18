import React from "react";
import { Outlet, Link } from "react-router-dom";
import Header from "../components/Header.jsx";
import Menu from "../components/Menu.jsx";
import AudioPlayer from "../components/AudioPlayer.jsx";

const Layout = (props) => {
    const { state } = props;
    return (
        <>
            <Header />
            <Menu />
            {state.isPlaying && <AudioPlayer state={state} />}
            <Outlet />
        </>
    );
};

export default Layout;
