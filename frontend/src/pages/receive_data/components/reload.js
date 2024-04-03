import { fetchData } from "./fetch_data";


export const handleReload = (set_data_user) => {
    fetchData(set_data_user);
};