import React from "react";
import { handle_edit_button } from "./edit/edit_button_handlers";
import { format_key } from "./format_data";


const DataDisplay = ({ data, set_edit_data, set_is_editing }) => {
    return (        
        <>
            {data.map((user, index) => (
                <div key={index} className="user-item">
                    <div className="info-blocks">
                        <div className="info-block">
                            <h3>User Info</h3>
                            <button onClick={() => handle_edit_button(user, set_edit_data, set_is_editing)}>Edit</button>

                            <ul>
                                {Object.keys(user.user).map((key) => (
                                    <li key={key}>
                                        <strong>{format_key(key)}:</strong> {user.user[key]}
                                    </li>
                                ))}
                                <li><strong>Avatar:</strong> <img className="avatar" src={user.user.avatar} alt="Avatar" /></li>
                            </ul>
                        </div>
                        <div className="info-block">
                            <h3>Bank Info</h3>
                            <ul>
                                {Object.keys(user.bank).map((key) => (
                                    <li key={key}>
                                        <strong>{format_key(key)}:</strong> {user.bank[key]}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="info-block">
                            <h3>Credit Card Info</h3>
                            <ul>
                                {Object.keys(user.credit_card).map((key) => (
                                    <li key={key}>
                                        <strong>{format_key(key)}:</strong> {user.credit_card[key]}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
};


export default DataDisplay;