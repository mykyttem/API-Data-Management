import React from "react";

const SelectIdUser = ({ user_ids, selected_user_id, handle_user_id_change }) => {
    return (
        <div>
            <select className="select" value={selected_user_id} onChange={handle_user_id_change}>
                <option value="">Select User ID</option>
                {user_ids.map(user_id => (
                    <option key={user_id} value={user_id}>{user_id}</option>
                ))}
            </select>
        </div>
    );
};


export default SelectIdUser;