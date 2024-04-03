import React from "react";

const Buttons = ({ is_loading, data, is_editing, handle_reload, handle_edit, handle_save }) => {
    return (
        <div className="container">
            <button className="button" onClick={handle_reload}>Reload</button>
            {!is_loading && data && !is_editing && (
                <button className="button" onClick={handle_edit}>Edit</button>
            )}
            {is_editing && (
                <button className="button" onClick={handle_save}>Save</button>
            )}
        </div>
    );
};


export default Buttons;