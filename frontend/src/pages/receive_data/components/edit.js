import React from "react";

/**
 * component displays input fields for editing user, bank, and credit card information.
*/

const EditForm = ({ data, set_edit_data, edit_data, handle_edit_user, handle_edit_bank, handle_edit_credit_card }) => {
    // handlers for input change
    const handle_user_input_change = (e) => {
        const { name, value } = e.target;
        const updated_user_data = { ...edit_data.user, [name]: value };
        handle_edit_user(updated_user_data, set_edit_data); 
    };    

    const handle_bank_input_change = (e) => {
        const { name, value } = e.target;
        const updated_bank_data = { ...edit_data.bank, [name]: value };
        handle_edit_bank(updated_bank_data, set_edit_data); 
    };

    const handle_credit_card_input_change = (e) => {
        const { name, value } = e.target;
        const updated_credit_card_data = { ...edit_data.credit_card, [name]: value };
        handle_edit_credit_card(updated_credit_card_data, set_edit_data); 
    };

    return (
        <div className="data">
            <div>
                <h2>User Information</h2>
                {data.user && Object.keys(data.user).map(key => (
                    <div key={key} className="input-container">
                        <strong>{key}: </strong>
                        <input  
                            type="text"
                            name={key}
                            defaultValue={data.user[key]} 
                            onChange={handle_user_input_change}
                        />
                    </div>
                ))}
                <div className="avatarContainer">
                    <img className="avatar" src={data.user.avatar} alt="User Avatar" />
                </div>
            </div>
            <div>
                <h2>Bank Information</h2>
                {data.bank && Object.keys(data.bank).map(key => (
                    <div key={key} className="input-container">
                        <strong>{key}: </strong>
                        <input 
                            type="text"
                            name={key}
                            defaultValue={data.bank[key]}
                            onChange={handle_bank_input_change}
                        />
                    </div>
                ))}
            </div>
            <div>
                <h2>Credit Card Information</h2>
                {data.credit_card && Object.keys(data.credit_card).map(key => (
                    <div key={key} className="input-container">
                        <strong>{key}: </strong>
                        <input 
                            type="text"
                            name={key}
                            defaultValue={data.credit_card[key]}
                            onChange={handle_credit_card_input_change}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};


export default EditForm;