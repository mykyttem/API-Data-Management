import React, { useEffect, useState } from "react";
import "./css/styles.css";

import { fetchData } from "./components/fetch_data";
import { handleReload } from "./components/reload";
import UserDataDisplay from "./components/userDataDisplay";
import UserEditForm from "./components/edit";
import Buttons from "./components/buttons";


const ReceiveData = () => {
    /**
     * fetches and displays user data, allows editing, and handles saving.
     * It comprises sub-components for displaying user data, editing, and buttons.
    */

    const [data_user, set_data_user] = useState(null);
    const [is_loading, set_is_loading] = useState(true);
    const [is_editing, set_is_editing] = useState(false);
    const [edit_data, set_edit_data] = useState(null);

    useEffect(() => {
        const savedData = JSON.parse(localStorage.getItem("savedData"));
        if (savedData) {
            set_data_user(savedData);
            set_is_loading(false);
        } else {
            fetchData(set_data_user, set_is_loading);
        }
    }, []);

    const handle_edit = () => {
        set_edit_data({ ...data_user });
        set_is_editing(true);
    };

    const handle_save = () => {
        localStorage.setItem("savedData", JSON.stringify(edit_data));
        set_data_user(edit_data);
        set_is_editing(false);
    };


    return (
        <>
            {is_loading && <div>Loading...</div>}
            {!is_loading && data_user && !is_editing && <UserDataDisplay data={data_user} />}
            {!is_loading && data_user && is_editing && 
                <UserEditForm data={data_user} 
                edit_data={edit_data} 
                set_edit_data={set_edit_data} />
            }
            <Buttons
                is_loading={is_loading}
                data={data_user}
                is_editing={is_editing}
                handle_reload={() => handleReload(set_data_user, set_is_loading)}
                handle_edit={handle_edit}
                handle_save={handle_save}
            />
        </>
    );
};


export default ReceiveData;