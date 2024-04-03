from parsing_requests.random_credit_card import credit_card

async def get_credit_card_data() -> dict:
    return credit_card()