from parsing_requests.random_bank import bank

async def get_bank_data() -> dict:
    return bank()