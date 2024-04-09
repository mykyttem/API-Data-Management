from .utils import make_request


def credit_card():
    url = "https://random-data-api.com/api/v2/credit_cards"

    credit_card_data = make_request(url)
    credit_card_data.pop("id", None)

    return credit_card_data
