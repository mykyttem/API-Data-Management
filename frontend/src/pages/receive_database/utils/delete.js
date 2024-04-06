import axios from "axios";
import { fetch_database } from "./fetch_database";

export const delete_user = async (id_user, set_is_loading, set_data) => {
    try {
        await axios.post("/database/delete-user", id_user);
        fetch_database(set_data, set_is_loading);

        set_is_loading(false);
    } catch (error) {
        console.error(`Error delete user: ${error}`);
        set_is_loading(true);
    }
};