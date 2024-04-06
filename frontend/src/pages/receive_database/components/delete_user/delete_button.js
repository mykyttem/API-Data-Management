import React from "react";
import { delete_user } from "../../utils/delete";
import "../../../css/buttons.css";


const ButtonDelete = ({ selected_user_id, set_is_loading, set_data }) => {
    return (
        <button className="button-delete" onClick={() => delete_user(selected_user_id, set_is_loading, set_data)}>Delete user</button>
    );
};


export default ButtonDelete;