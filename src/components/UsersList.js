import React from 'react';

import User from './User';

const users = ["Steve Rodgers", "Bruce Banner", "Peter Parker", "Tony Stark"]

const UsersList = () => {
    return(
        <section style={usersListStyle}>
            {users.map(name => (
                <User name={name} />
            ))
            }}
        </section>

    )
};

const usersListStyle = {
    background: "#4169e1",
    width: "20%",
    height: "100vh",
    borderRight: "solid black 2px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center"
}

export default UsersList;