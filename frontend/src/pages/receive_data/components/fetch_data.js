import axios from "axios";

export const fetchData = async (set_data_user) => {
    try {
        const response = await axios.get("/receive-data");
        if (response.status === 200) {
            set_data_user(response.data);
        } else {
            console.error("Non-success status code:", response.status);
        }
    } catch (error) {
        console.error("Error fetching data:", error);
    }
};