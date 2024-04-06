export const handle_user_id_change = (set_selected_user_id) => (event) => {
    set_selected_user_id(event.target.value);
};