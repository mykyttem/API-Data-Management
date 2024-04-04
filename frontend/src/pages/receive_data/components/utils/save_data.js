import axios from "axios";

export const save_data = async (data) => {
    try {
        await axios.post("/user/save", data.user);
        await axios.post("/bank/save", data.bank);
        await axios.post("/credit-card/save", data.credit_card);
    } catch (error) {
        console.error(`Error save data: ${error}`);
    }
};