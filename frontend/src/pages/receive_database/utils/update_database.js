import axios from "axios";
import { fetch_database } from "./fetch_database";


export const update_user = async (edit_data, set_data, set_is_editing, set_is_loading) => {
    try {
        const data_update = { id: edit_data.user.id, ...edit_data };        
        await axios.post("/database/update-user", data_update);

        
        // Update the component status after a successful update on the server
        fetch_database(set_data, set_is_loading);
        set_is_editing(false);
        set_is_loading(false);
    } catch (error) {
        console.error(`Error update user: ${error}`);
        set_is_loading(true);
    }
};