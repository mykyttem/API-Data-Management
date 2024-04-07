import React, { useEffect, useState } from "react";

import "../css/buttons.css";
import "../css/inputs.css";
import "../css/receive_database.css";

import DataDisplay from "./components/data_display";
import SelectIdUser from "./components/delete_user/selects";
import SelectSortId from "./components/sorting/selects_sort";
import EditForm from "./components/edit/edit_form";
import ButtonsDatabase from "./components/buttons_database";

import { fetch_database } from "./utils/fetch_database";
import { handle_user_id_change } from "./components/delete_user/selects_handlers";
import { handle_sort_order_change, sorted_users } from "./components/sorting/sort_handlers";

import { handle_user_input_change, handle_bank_input_change, handle_credit_card_input_change } from "../edit_form_data/edit_input_change";


const ReceiveDataBase = () => {
    const [data, set_data] = useState(null);
    const [is_loading, set_is_loading] = useState(true);

    // sorting
    const [selected_user_id, set_selected_user_id] = useState("");
    const [sort_ids, set_sort_ids] = useState("asc");
    const [user_ids, set_user_ids] = useState([]);

    // editing
    const [is_editing, set_is_editing] = useState(false);
    const [edit_data, set_edit_data] = useState({ user: {}, bank: {}, credit_card: {} });

    useEffect(() => {
        fetch_database(set_data, set_is_loading);
    }, []);

    useEffect(() => {
        if (data && data.user) {
            const all_user_ids = data.user.map((user) => user.user.id);
            set_user_ids(all_user_ids);
        }
    }, [data]);

    return (
        <div className="data-display">
            <h1>Data from database</h1>
            <div className="user-grid">
                {is_loading && <div>Loading...</div>}
                {!is_loading && data && data.user && data.user.length > 0 ? (
                    <>
                        {!is_loading && data && is_editing && (
                            <EditForm
                                edit_data={edit_data}
                                set_edit_data={set_edit_data}
                                handle_user_input_change={(e) => handle_user_input_change(e, set_edit_data, edit_data)}
                                handle_bank_input_change={(e) => handle_bank_input_change(e, set_edit_data, edit_data)}
                                handle_credit_card_input_change={(e) => handle_credit_card_input_change(e, set_edit_data, edit_data)}
                            />
                        )}
                        {!is_editing && 
                            <DataDisplay 
                                data={sorted_users(data.user, sort_ids)} 
                                set_edit_data={set_edit_data}
                                set_is_editing={set_is_editing}
                        />}
                        <ButtonsDatabase
                            set_data={set_data}
                            edit_data={edit_data}
                            set_is_loading={set_is_loading}
                            is_editing={is_editing}
                            set_is_editing={set_is_editing}
                            selected_user_id={selected_user_id}
                        />
                        {!is_editing && (
                            <>
                                <SelectSortId 
                                    sort_ids={sort_ids} 
                                    handle_sort_order_change={(event) => handle_sort_order_change(event, set_sort_ids)} 
                                />
                                <SelectIdUser 
                                    user_ids={user_ids} 
                                    set_selected_user_id={() => set_selected_user_id} handle_user_id_change={() => handle_user_id_change(set_selected_user_id)} 
                                />
                            </>
                        )}
                    </>
                ) : (
                    <div>No user data available</div>
                )}
            </div>
        </div>
    );
};


export default ReceiveDataBase;