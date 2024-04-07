const handle_edit_button = (user, set_edit_data, set_is_editing) => {
    set_edit_data(user);
    set_is_editing(true);
};


const handle_cancel = (set_is_editing) => {
    set_is_editing(false);
};


export{ 
    handle_edit_button,
    handle_cancel, 
};