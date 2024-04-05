import axios from "axios";

/**
 * Fetches user, credit card, and bank information from the server.
 * @param {function} set_data - Function to update the component's state with fetched data
 * @param {function} set_is_loading - Function to update the loading state
*/

export const fetchData = async (set_data, set_is_loading) => {
    try {
        // Fetch data
        const [user, credit_card, bank] = await Promise.all([
            axios.get("/user"),
            axios.get("/credit-card"),
            axios.get("/bank")
        ]);

        // Extract data from response and set it in the component's state
        set_data({
            user: user.data,
            credit_card: credit_card.data,
            bank: bank.data
        });

        set_is_loading(false);
    } catch (error) {
        console.error(`Error fetching data: ${error}`);
        set_is_loading(false);
    }
};