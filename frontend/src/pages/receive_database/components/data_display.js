import React from "react";
import "../../css/receive_database.css";


const DataDisplay = ({ data }) => {
    const format_key = (key) => {
        return key.replace(/_/g, " ").toUpperCase();
    };


    return (
        <div className="data-display">
            <h1>Data from database</h1>

            <div className="user-grid">
                {data.user.map((user, index) => (
                    <div key={index} className="user-item">
                        <h2>User {index + 1}</h2>
                        
                        <div className="info-blocks">
                            <div className="info-block">
                                <h3>User Info</h3>
                                <ul>
                                    {user && Object.keys(user.user).map((key) => {
                                        return (
                                            <li key={key}>
                                                <strong>{format_key(key)}:</strong> {user.user[key]}
                                            </li>
                                        );
                                    })}
                                    <li><strong>Avatar:</strong> <img className="avatar" src={user && user.user.avatar} alt="Avatar" /></li>
                                </ul>
                            </div>
                            <div className="info-block">
                                <h3>Bank Info</h3>
                                <ul>
                                    {user && user.bank && Object.keys(user.bank).map((key) => (
                                        <li key={key}>
                                            <strong>{format_key(key)}:</strong> {user.bank[key]}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="info-block">
                                <h3>Credit Card Info</h3>
                                <ul>
                                    {user && user.credit_card && Object.keys(user.credit_card).map((key) => (
                                        <li key={key}>
                                            <strong>{format_key(key)}:</strong> {user.credit_card[key]}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};


export default DataDisplay;