import React from "react";
import { delete_user } from "../utils/delete";
import { update_user } from "../utils/update_database";
import { handle_cancel } from "../../edit_form_data/edit_buttons";
import { download_csv } from "../utils/save_csv"; 

const ButtonsDatabase = ({ data, set_data, edit_data, set_is_loading, is_editing, set_is_editing, selected_user_id }) => {
    return (
        <>
        {console.log(selected_user_id)}
            {!is_editing && (
                <>
                    <button className="button-delete" onClick={() => delete_user(selected_user_id, set_is_loading, set_data)}>Delete user</button>
                    <button className="button-save-csv" onClick={() => download_csv(data)}>Save csv</button> 
                </>
            )}
            {is_editing && (
                <div className="button-container">
                    <button onClick={() => update_user(edit_data, set_data, set_is_editing, set_is_loading)}>Save changes</button>
                    <button onClick={()  => handle_cancel(set_is_editing)}>Cancel</button>
                </div>
            )}
        </>
    );
};


export default ButtonsDatabase;