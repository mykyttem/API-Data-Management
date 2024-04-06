import React, { useEffect, useState } from "react";

import "../css/buttons.css";
import "../css/selects.css";

import DataDisplay from "./components/data_display";
import ButtonDelete from "./components/buttons/buttons";
import SelectIdUser from "./components/selects/selects";

import { fetch_database } from "./utils/fetch_database";
import { handle_user_id_change } from "./components/selects/selects_handlers";


const ReceiveDataBase = () => {
    const [data, set_data] = useState(null);
    const [selected_user_id, set_selected_user_id] = useState("");
    const [user_ids, set_user_ids] = useState([]); 
    const [is_loading, set_is_loading] = useState(true);

    useEffect(() => {
        fetch_database(set_data, set_is_loading);
    }, []);

    useEffect(() => {
        if (data && data.user) {
            const all_user_ids = data.user.map(user => user.user.id);
            set_user_ids(all_user_ids); 
        }
    }, [data]);
    
    return (
        <>
            {is_loading && <div>Loading...</div>}
            {!is_loading && data && data.user && data.user.length > 0 ? (
                <>
                    <DataDisplay data={data} />
                    <ButtonDelete 
                        selected_user_id={selected_user_id}
                        set_is_loading={set_is_loading}
                        set_data={set_data}
                    />
                    <SelectIdUser
                        user_ids={user_ids}
                        set_selected_user_id={set_selected_user_id}
                        handle_user_id_change={handle_user_id_change(set_selected_user_id)}
                    />
                </>
            ) : (
                <div>No user data available</div>
            )}
        </>
    );
};


export default ReceiveDataBase;