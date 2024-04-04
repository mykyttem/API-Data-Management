const handle_edit_button = (set_is_editing) => {
    set_is_editing(true);
};

const handle_edit_user = (edit_data, set_edit_data, user_edit_data) => {
    const updated_user_data = { ...edit_data.user, ...user_edit_data };
    set_edit_data({ ...edit_data, user: updated_user_data });
};

const handle_edit_bank = (edit_data, set_edit_data, bank_edit_data) => {
    const updated_bank_data = { ...edit_data.bank, ...bank_edit_data };
    set_edit_data({ ...edit_data, bank: updated_bank_data });
};

const handle_edit_credit_card = (edit_data, set_edit_data, credit_card_edit_data) => {
    const updated_credit_card_data = { ...edit_data.credit_card, ...credit_card_edit_data };
    set_edit_data({ ...edit_data, credit_card: updated_credit_card_data });
};


export{ 
    handle_edit_button, 
    handle_edit_user, 
    handle_edit_bank, 
    handle_edit_credit_card 
};