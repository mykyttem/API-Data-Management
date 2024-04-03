from .utils import make_request

# created dict for cache data
user_cache = {}

def user():
    if 'users' in user_cache:
        return user_cache['users']
    else:
        url = "https://random-data-api.com/api/v2/users"
        data = make_request(url)
        
        
        user_data = data.copy()
        keys_to_remove = ["employment", "address", "credit_card", "subscription", "password", "uid"]
        for key in keys_to_remove:
            user_data.pop(key, None)

        # save in cache
        user_cache['users'] = user_data
        

        return user_data