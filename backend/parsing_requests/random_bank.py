from .utils import make_request

async def bank():
    url = "https://random-data-api.com/api/v2/banks"
    return make_request(url)