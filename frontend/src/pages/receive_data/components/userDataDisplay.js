import React from "react";
import "../css/styles.css";

const UserDataDisplay = ({ data }) => {
    return (
        <div className="userData">
            <div className="userInfo">
                {Object.entries(data).map(([key, value]) => (
                    <div key={key}>
                        <strong>{key}: </strong>
                        <span>{value}</span>
                    </div>
                ))}
            </div>
            <div className="avatarContainer">
                <img className="avatar" src={data.avatar} alt="User Avatar" />
            </div>
        </div>
    );
};


export default UserDataDisplay;