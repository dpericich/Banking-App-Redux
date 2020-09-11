import React from 'react';

const User = (props) => {
    return (
        <button style={userStyle}>{props.name}</button>
    )
};

const userStyle = {
    textAlign: 'center',
    border: "solid black 3px",
    borderRadius: "5px",
    fontSize: "30px",
    margin: "0 1px",
    padding: "10px 0",
    background: "#d3d3d3",
}

export default User;