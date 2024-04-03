import React, { useEffect, useState } from "react";
import "./css/styles.css";
import { fetchData } from "./components/fetch_data";
import { handleReload } from "./components/reload";

const ReceiveData = () => {
    const [dataUser, setDataUser] = useState(null);

    useEffect(() => {
        fetchData(setDataUser);
    }, []);

    return (
        <div className="container">
            {dataUser && (
                <div className="userData">
                    <div className="userInfo">
                        {Object.entries(dataUser).map(([key, value]) => (
                            <div key={key}>
                                <strong>{key}: </strong> {value}
                            </div>
                        ))}
                    </div>
                    <div className="avatarContainer">
                        <img className="avatar" src={dataUser.avatar} alt="User Avatar" />
                    </div>
                </div>
            )}
            <button className="button" onClick={() => handleReload(setDataUser)}>Reload</button>
        </div>
    );
};


export default ReceiveData;