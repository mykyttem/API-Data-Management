import axios from "axios";

export const fetchData = async (set_data_user, set_is_loading) => {
    try {
        const response = await axios.get("/receive-data");
        if (response.status === 200) {
            set_data_user(response.data);
            set_is_loading(false);
        } else {
            console.error("Non-success status code:", response.status);
        }
    } catch (error) {
        console.error("Error fetching data:", error);
    }
};