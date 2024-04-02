from make_request import make_request


def user():
    url = "https://random-data-api.com/api/v2/users"

    data = make_request(url)
    user_data = data.copy()

    keys_to_remove = ["employment", "address", "credit_card", "subscription"]
    for key in keys_to_remove:
        user_data.pop(key, None)

    return user_data