import { fetchData } from "./fetch_data";

export const handleReload = (set_data_user) => {
    localStorage.removeItem("savedData");
    fetchData(set_data_user);
};