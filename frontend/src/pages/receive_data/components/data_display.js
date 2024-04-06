import React from "react";
import "../../css/receive_data.css";
import "../../css/buttons.css";

const DataDisplay = ({data}) => {
    return (
        <div className="data">
            <div>
                <h2>User Information</h2>
                {Object.entries(data.user).map(([key, value]) => (
                    <div key={key}>
                        <strong>{key}: </strong>
                        <span>{value}</span>
                    </div>
                ))}
                <div className="avatarContainer">
                    <img className="avatar" src={data.user.avatar} alt="User Avatar" />
                </div>
            </div>

            <div>
                <h2>Bank Information</h2>
                {Object.entries(data.bank).map(([key, value]) => (
                    <div key={key}>
                        <strong>{key}: </strong>
                        <span>{value}</span>
                    </div>
                ))}
            </div>

            <div>
                <h2>Credit Card Information</h2>
                {Object.entries(data.credit_card).map(([key, value]) => (
                    <div key={key}>
                        <strong>{key}: </strong>
                        <span>{value}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};


export default DataDisplay;