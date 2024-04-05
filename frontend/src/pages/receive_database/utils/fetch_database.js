import axios from "axios";


/**
 * formats the data, into a desired structure.
 * it sets the fetched data and loading state accordingly. 
 * If an error occurs during the fetching process, it logs the error and sets the loading state to false.
*/

const format_user_data = (user_data) => {
    return {
        first_name: user_data.first_name,
        last_name: user_data.last_name,
        username: user_data.username,
        email: user_data.email,
        avatar: user_data.avatar,
        gender: user_data.gender,
        phone_number: user_data.phone_number,
        password: user_data.password,
        address: user_data.address,
        social_insurance_number: user_data.social_insurance_number,
        date_of_birth: user_data.date_of_birth
    };
};

const format_bank_data = (user_data) => {
    return {
        bank_name: user_data.bank_name,
        account_number: user_data.account_number,
        iban: user_data.iban,
        routing_number: user_data.routing_number,
        swift_bic: user_data.swift_bic
    };
};

const format_credit_card_data = (user_data) => {
    return {
        credit_card_number: user_data.credit_card_number,
        credit_card_expiry_date: user_data.credit_card_expiry_date,
        credit_card_type: user_data.credit_card_type
    };
};

export const fetch_database = async (set_data, set_is_loading) => {
    try {
        const response = await axios.get("/database/get");
        const user_data = response.data;

        const formatted_users = user_data.users.map((user) => {
            const bank_data = format_bank_data(user);
            const credit_card_data = format_credit_card_data(user);
            const user_data = format_user_data(user)

            return {user: user_data, bank: bank_data, credit_card: credit_card_data };
        });

        set_data({ user: formatted_users });
        set_is_loading(false);
    } catch (error) {
        console.error(`Error fetching data: ${error}`);
        set_is_loading(false);
    }
};