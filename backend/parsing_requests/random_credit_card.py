from make_request import make_request


def credit_card():
    url = "https://random-data-api.com/api/v2/credit_cards"
    return make_request(url)