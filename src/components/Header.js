import React from 'react';

const Header = () => {
    return(
    <h1 style={headerStyle}>Bank of North Central New Delaware</h1>
    )
};

const headerStyle = {
    borderBottom: "solid black 2px",
    borderRadius: "5px",
    background: "#d3cabb",
}

export default Header;