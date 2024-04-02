import requests


def make_request(url):
    response = requests.get(url)
    if response.status_code == 200:
        return response.json()
    else:
        raise Exception(f"Non-success status code: {response.status_code}")