import axios from "axios";

export const fetchData = async (set_data_user) => {
    try {
        const response = await axios.get("/receive-data");
        set_data_user(response.data);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
};