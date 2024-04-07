import React from "react";

const EditFormDatabase = ({ edit_data, handle_user_input_change, handle_bank_input_change, handle_credit_card_input_change }) => {
    const format_key = (key) => {
        return key.replace(/_/g, " ").toUpperCase();
    };


    return (
        <>
            <div className="user-item">
                <h2>User</h2>
                <div className="info-blocks">
                    <div className="info-block">
                        <h3>User Info</h3>
                        <ul>
                            {Object.entries(edit_data.user).map(([key, value]) => (
                                <li key={key}>
                                    <strong>{format_key(key)}:</strong>
                                    <input  
                                        type="text"
                                        name={key}
                                        defaultValue={value} 
                                        onChange={(e) => handle_user_input_change(e, edit_data)}                                     />
                                </li>
                            ))}
                            <li><strong>Avatar:</strong> <img className="avatar" src={edit_data.user.avatar} alt="Avatar" /></li>
                        </ul>
                    </div>
                    <div className="info-block">
                        <h3>Bank Info</h3>
                        <ul>
                            {Object.entries(edit_data.bank).map(([key, value]) => (
                                <li key={key}>
                                    <strong>{format_key(key)}:</strong> 
                                    <input  
                                        type="text"
                                        name={key}
                                        defaultValue={value} 
                                        onChange={handle_bank_input_change}
                                    />
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="info-block">
                        <h3>Credit Card Info</h3>
                        <ul>
                            {Object.entries(edit_data.credit_card).map(([key, value]) => (
                                <li key={key}>
                                    <strong>{format_key(key)}:</strong> 
                                    <input  
                                        type="text"
                                        name={key}
                                        defaultValue={value} 
                                        onChange={handle_credit_card_input_change}
                                    />
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};


export default EditFormDatabase;
