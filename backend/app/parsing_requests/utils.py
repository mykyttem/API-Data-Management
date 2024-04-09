import requests
import time

from ...logg import logger


def make_request(url):
    try:
        response = requests.get(url)
        if response.status_code == 200:
            return response.json()
        elif response.status_code == 429:
            logger.warning("Too many requests. Retrying after 2 seconds...")
            time.sleep(2)
            return make_request(url)
        else:
            raise Exception(f"Non-success status code: {response.status_code}")
    except Exception as e:
        logger.error(f"An occurred: {str(e)}")
