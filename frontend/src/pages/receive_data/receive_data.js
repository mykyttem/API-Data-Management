import React, { useEffect, useState } from "react";

import { fetchData } from "./components/fetch_data";
import DataDisplay from "./components/data_display";
import EditForm from "./components/edit";
import Buttons from "./components/buttons";
import { handle_save, handle_cancel, handle_reload } from "./components/button_handlers";
import { handle_edit_button, handle_edit_user, handle_edit_bank, handle_edit_credit_card } from "./components/handlers_edit";

/**
 * Component responsible for fetching, displaying, editing, and saving user data.
 * It includes sub-components for displaying user data, editing, and buttons.
*/

const ReceiveData = () => {
    // State variables
    const [data, set_data] = useState(null);
    const [is_loading, set_is_loading] = useState(true);
    const [is_editing, set_is_editing] = useState(false);
    const [edit_data, set_edit_data] = useState({ user: {}, bank: {}, credit_card: {}});

    useEffect(() => {
        const saved_data = JSON.parse(localStorage.getItem("saved_data"));
        if (saved_data) {
            set_data(saved_data);
            set_is_loading(false);  
        } else {
            fetchData(set_data, set_is_loading);
        }
    }, []);


    return (
        <>
            {is_loading && <div>Loading...</div>}
            {!is_loading && data && !is_editing && <DataDisplay data={data} />}
            {!is_loading && data && is_editing && 
                <EditForm 
                    data={data} 
                    set_edit_data={set_edit_data}
                    edit_data={edit_data}
                    handle_edit_user={(userEditData) => handle_edit_user(edit_data, set_edit_data, userEditData)}
                    handle_edit_bank={(bankEditData) => handle_edit_bank(edit_data, set_edit_data, bankEditData)} 
                    handle_edit_credit_card={(creditCardEditData) => handle_edit_credit_card(edit_data, set_edit_data, creditCardEditData)} 
                />
            }
            <Buttons
                is_loading={is_loading}
                data={data}
                is_editing={is_editing}
                handle_reload={() => handle_reload(set_data, set_is_loading)}
                handle_edit_button={() => handle_edit_button(set_is_editing)}
                handle_save={() => handle_save(data, edit_data, set_data, set_is_editing)}
                handle_cancel={() => handle_cancel(set_is_editing)}
            />  
        </>
    );
};


export default ReceiveData;