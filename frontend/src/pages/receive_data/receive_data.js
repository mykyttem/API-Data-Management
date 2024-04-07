import React, { useEffect, useState } from "react";

import "../css/receive_data.css";
import "../css/buttons.css";
import "../css/inputs.css";

import DataDisplay from "./components/data_display";
import EditForm from "./components/edit";
import Buttons from "./components/buttons/buttons";

import { fetchData } from "./utils/fetch_data";

import { handle_edit_button, handle_save_changes, handle_reload } from "./components/buttons/button_handlers";
import { handle_user_input_change, handle_bank_input_change, handle_credit_card_input_change } from "../edit_form_data/edit_input_change";
import { handle_cancel } from "../edit_form_data/edit_buttons";


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
        <div className="data">
            <div>
                {is_loading && <h2>Loading...</h2>}
                {!is_loading && data && !is_editing && <DataDisplay data={data} />}
                {!is_loading && data && is_editing && 
                    <EditForm 
                        data={data}
                        handle_user_input_change={(e) => handle_user_input_change(e, set_edit_data, edit_data)}
                        handle_bank_input_change={(e) => handle_bank_input_change(e, set_edit_data, edit_data)}
                        handle_credit_card_input_change={(e) => handle_credit_card_input_change(e, set_edit_data, edit_data)}
                    />
                }
                <Buttons
                    is_loading={is_loading}
                    data={data}
                    is_editing={is_editing}
                    handle_reload={() => handle_reload(set_data, set_is_loading)}
                    handle_edit_button={() => handle_edit_button(set_is_editing)}
                    handle_save_changes={() => handle_save_changes(data, edit_data, set_data, set_is_editing)}
                    handle_cancel={() => handle_cancel(set_is_editing)}
                    />  
            </div>
        </div>
    );
};


export default ReceiveData;