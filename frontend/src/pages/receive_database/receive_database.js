import { useEffect, useState } from "react";
import { fetch_database } from "./utils/fetch_database";
import DataDisplay from "./components/data_display";


const ReceiveDataBase = () => {
    const [data, set_data] = useState(null);
    const [is_loading, set_is_loading] = useState(true);

    useEffect(() => {
        fetch_database(set_data, set_is_loading);
    }, []);
    
    return (
        <>
            {is_loading && <div>Loading...</div>}
            {!is_loading && data && <DataDisplay data={data} />}
        </>
    );
};


export default ReceiveDataBase;