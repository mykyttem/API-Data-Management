import axios from "axios";

export const fetchData = async (set_data_user) => {
    try {
        const response = await axios.get("/receive-data");
        set_data_user(response.data.message);
         
        console.log(response.data.message);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
};