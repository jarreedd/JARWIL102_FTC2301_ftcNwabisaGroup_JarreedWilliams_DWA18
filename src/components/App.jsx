import React from "react";
import Header from "./Header.jsx";
import Banner from "./Banner.jsx";
import PreviewDisplay from "./PreviewDisplay.jsx";

function App() {
    return (
        <div className="app">
            <Header />
            <Banner />
            {/* <PreviewDisplay key="1" title="Recently Played" size="small" />
            <PreviewDisplay
                key="2"
                size="small"
                title="You May Be Interested In..."
            /> */}
            <PreviewDisplay key="3" title="Browse" />
        </div>
    );
}

export default App;
