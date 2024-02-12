import requests

API_KEY = '9SP7NVX0Y4UUZYLP'  # Replace with your real API key
BASE_URL = 'https://www.alphavantage.co/query'

def get_stock_data(symbol):
    params = {
        'function': 'TIME_SERIES_DAILY',
        'symbol': symbol,
        'apikey': API_KEY
    }
    response = requests.get(BASE_URL, params=params)
    if response.status_code == 200:
        return response.json()
    else:
        return {'error': 'Failed to fetch data'}

