import React from "react";

const UserEditForm = ({ data, edit_data, set_edit_data }) => {
    return (
        <div className="userData">
            <div className="userInfo">
                {Object.entries(data).map(([key, value]) => (
                    <div key={key}>
                        <strong>{key}: </strong>
                        <input 
                            type="text"
                            value={edit_data[key]}
                            onChange={(e) => set_edit_data({ ...edit_data, [key]: e.target.value })}
                        />
                    </div>
                ))}
            </div>
            <div className="avatarContainer">
                <img className="avatar" src={data.avatar} alt="User Avatar" />
            </div>
        </div>
    );
};


export default UserEditForm;