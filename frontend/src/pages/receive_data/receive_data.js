import React, { useEffect, useState } from "react";

import "./css/styles.css";
import { fetchData } from "./components/fetch_data";
import { handleReload } from "./components/reload";


const ReceiveData = () => {
    const [data_user, set_data_user] = useState();

    useEffect(() => {
        fetchData(set_data_user);
    }, []);

    return (
        <>
            <h1>Data</h1>
            {data_user}

            <button onClick={() => handleReload(set_data_user)}>Reload</button>
        </>
    )
}


export default ReceiveData;