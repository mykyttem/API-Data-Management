import React from "react";
import { save_data } from "../../utils/save_data"


const Buttons = ({ is_loading, data, is_editing, handle_reload, handle_edit_button, handle_save_changes, handle_cancel }) => {
    return (
        <div className="container">
            <button className="button" onClick={handle_reload}>Reload</button>
            {!is_loading && data && !is_editing && (
                <>
                    <button className="button" onClick={() => save_data(data)}>Save</button>
                    <button className="button" onClick={handle_edit_button}>Edit</button>
                </>
            )}
            {is_editing && (
                <>
                    <button className="button" onClick={handle_save_changes}>Save changes</button>
                    <button className="button" onClick={handle_cancel}>Cancel</button>
                </>
            )}
        </div>
    );
};


export default Buttons;