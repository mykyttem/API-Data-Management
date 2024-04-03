import React, { useEffect, useState } from "react";
import "./css/styles.css";
import { fetchData } from "./components/fetch_data";
import { handleReload } from "./components/reload";

const ReceiveData = () => {
    const [data_user, set_data_user] = useState(null);
    const [is_loading, set_is_loading] = useState(true);

    useEffect(() => {
        fetchData(set_data_user, set_is_loading);
    }, []);

    return (
        <div className="container">
            {is_loading && <div>Loading...</div>}
            {!is_loading && data_user && (
                <div className="userData">
                    <div className="userInfo">
                        {Object.entries(data_user).map(([key, value]) => (
                            <div key={key}>
                                <strong>{key}: </strong> {value}
                            </div>
                        ))}
                    </div>
                    <div className="avatarContainer">
                        <img className="avatar" src={data_user.avatar} alt="User Avatar" />
                    </div>
                </div>
            )}
            <button className="button" onClick={() => handleReload(set_data_user)}>Reload</button>
        </div>
    );
};


export default ReceiveData;