import React from "react";
import "../../css/receive_database.css";


const DataDisplay = ({ data }) => {
    const format_key = (key) => {
        return key.replace(/_/g, " ").toUpperCase();
    };

    if (!data || !data.users || data.users.length === 0) {
        return <div>No data available</div>;
    }

    const excluded_keys = ["id", "user_id", "uid", "id"];

    return (
        <div className="data-display">
            <h1>Data from database</h1>
            <div className="user-grid">
                {data.users.map((user, index) => (
                    <div key={index} className="user-item">
                        <h2>User {index + 1}</h2>
                        <div className="info-blocks">
                            <div className="info-block">
                                <h3>User Info</h3>
                                <ul>
                                    {user && Object.keys(user).map((key) => {
                                        if (!excluded_keys.includes(key)) {
                                            return (
                                                <li key={key}>
                                                    <strong>{format_key(key)}:</strong> {user[key]}
                                                </li>
                                            );
                                        }
                                        return null;
                                    })}
                                    <li><strong>Avatar:</strong> <img className="avatar" src={user && user.avatar} alt="Avatar" /></li>
                                </ul>
                            </div>
                            <div className="info-block">
                                <h3>Bank Info</h3>
                                <ul>
                                    {user && user.banks && Object.keys(user.banks).map((key) => (
                                        <li key={key}>
                                            <strong>{format_key(key)}:</strong> {user.banks[key]}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="info-block">
                                <h3>Credit Card Info</h3>
                                <ul>
                                    {user && user.credit_cards && Object.keys(user.credit_cards).map((key) => (
                                        <li key={key}>
                                            <strong>{format_key(key)}:</strong> {user.credit_cards[key]}
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