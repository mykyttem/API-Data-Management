import React, { useEffect, useState } from "react";

import { fetchData } from "./components/fetch_data";
import DataDisplay from "./components/data_display";
import EditForm from "./components/edit";
import Buttons from "./components/buttons";
import { handle_save, handle_cancel, handle_reload } from "./components/button_handlers";


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

    const handle_edit = () => {
        set_is_editing(true);
    };

    const handle_edit_user = (user_data) => {
        set_edit_data({...edit_data, user: user_data});
    };
    
    const handle_bank_edit = (bank_data) => {
        set_edit_data({ ...edit_data, bank: bank_data });
    };
    
    const handle_credit_card_edit = (credit_card_data) => {
        set_edit_data({ ...edit_data, credit_card: credit_card_data });
    };

    return (
        <>
            {is_loading && <div>Loading...</div>}
            {!is_loading && data && !is_editing && <DataDisplay data={data} />}
            {!is_loading && data && is_editing && 
                <EditForm 
                    data={data} 
                    set_edit_data={set_edit_data}
                    edit_data={edit_data}
                    handle_edit_user={handle_edit_user}
                    handle_bank_edit={handle_bank_edit} 
                    handle_credit_card_edit={handle_credit_card_edit} 
                />
            }
            <Buttons
                is_loading={is_loading}
                data={data}
                is_editing={is_editing}
                handle_reload={() => handle_reload(set_data, set_is_loading)}
                handle_edit={handle_edit}
                handle_save={() => handle_save(data, edit_data, set_data, set_is_editing)}
                handle_cancel={() => handle_cancel(set_is_editing)}
            />
        </>
    );
};


export default ReceiveData;