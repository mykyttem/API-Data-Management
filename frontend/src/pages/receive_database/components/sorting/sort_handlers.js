// function to change the sort order
export const handle_sort_order_change = (event, set_sort_ids) => {
    set_sort_ids(event.target.value);
};

// sort users by their id
export const sorted_users = (users, sort_ids) => {
    return [...users].sort((a, b) => {
        if (sort_ids === "asc") {
            return a.user.id - b.user.id;
        } else {
            return b.user.id - a.user.id;
        }
    });
};