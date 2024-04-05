import axios from "axios";


export const fetch_database = async (set_data, set_is_loading) => {
    try {
        const response = await axios.get("/database/get");

        set_data(response.data);
        set_is_loading(false);
    } catch (error) {
        console.error(`Error fetching data: ${error}`);
        set_is_loading(false);
    }
};