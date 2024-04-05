import axios from "axios";

export const save_data = async (data) => {
    try {
        await axios.post("/database", data);
    } catch (error) {
        console.error(`Error request data: ${error}`);
    }
};