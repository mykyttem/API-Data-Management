from parsing_requests.random_user import user


async def data() -> dict:
    users = user()
    return users