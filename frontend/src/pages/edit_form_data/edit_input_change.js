import { handle_edit_user, handle_edit_bank, handle_edit_credit_card } from "../edit_form_data/edit_handlers";


const handle_user_input_change = (e, set_edit_data, edit_data) => {
    const { name, value } = e.target;

    const updated_user_data = { ...edit_data.user, [name]: value };
    handle_edit_user(edit_data, set_edit_data, updated_user_data);
};

const handle_bank_input_change = (e, set_edit_data, edit_data) => {
    const { name, value } = e.target;
    
    const updated_bank_data = { ...edit_data.bank, [name]: value };
    handle_edit_bank(edit_data, set_edit_data, updated_bank_data);
};

const handle_credit_card_input_change = (e, set_edit_data, edit_data) => {
    const { name, value } = e.target;
    
    const updated_credit_card_data = { ...edit_data.credit_card, [name]: value };
    handle_edit_credit_card(edit_data, set_edit_data, updated_credit_card_data);
};

export{
    handle_user_input_change,
    handle_bank_input_change,
    handle_credit_card_input_change 
};