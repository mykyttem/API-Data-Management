from parsing_requests.random_user import user

async def get_user_data() -> dict:
    return user()