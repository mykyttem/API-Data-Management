from .utils import make_request

def bank():
    url = "https://random-data-api.com/api/v2/banks"
    
    bank_data = make_request(url)
    bank_data.pop("id", None)

    return bank_data