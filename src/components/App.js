import React from 'react';
import '../App.css'

import UsersList from './UsersList';
import Header from './Header';
import AccountInfo from './AccountInfo';

const App = () => {
    return (
        <div className="main-container" style={mainContainerStyle}>
            <UsersList />
            <div className="banking-info" style={bankingInfoStyle}>
                <Header />
                <AccountInfo />
            </div>
        </div>
    )
};

const mainContainerStyle = {
    display: "flex",
    flexDirecton: "row",
}

const bankingInfoStyle = {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    textAlign: 'center',
}

export default App;