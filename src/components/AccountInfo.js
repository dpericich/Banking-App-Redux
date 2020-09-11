import React from 'react';

const AccountInfo = () => {
    return(
        <section style={accountInfoStyle}>
            <h2>User's Name</h2>
        </section>
    )
};

const accountInfoStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start"
}

export default AccountInfo;