from .utils import make_request

def bank():
    url = "https://random-data-api.com/api/v2/banks"
    return make_request(url)