import { fetchData } from "./fetch_data";

export const handle_save = (data, edit_data, set_data, set_is_editing) => {
    // Replace the corresponding fields in saved_data with the edited values from data
    const updated_data = {
        ...data,
        user: { ...data.user, ...edit_data.user },
        bank: { ...data.bank, ...edit_data.bank },
        credit_card: { ...data.credit_card, ...edit_data.credit_card }
    };

    // save result in cookie
    localStorage.setItem("saved_data", JSON.stringify(updated_data));
    
    // update
    set_data(updated_data);
    set_is_editing(false);
};


export const handle_cancel = (set_is_editing) => {
    set_is_editing(false);
};

export const handle_reload = (set_data_user, set_is_loading) => {
    localStorage.removeItem("savedData");
    const saved_data = JSON.parse(localStorage.getItem("saved_data"));
    fetchData(set_data_user, set_is_loading, saved_data);
};