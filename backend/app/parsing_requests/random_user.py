from .utils import make_request


def user():
    url = "https://random-data-api.com/api/v2/users"
    user_data = make_request(url)

    keys_to_remove = ["employment", "address", "credit_card", "subscription", "id"]
    for key in keys_to_remove:
        user_data.pop(key, None)

    return user_data
