

import pandas as pd
import requests
import os
from pathlib import Path

# Constants
API_KEY = '9SP7NVX0Y4UUZYLP'  # Replace with your actual Alpha Vantage API key
BASE_URL = 'https://www.alphavantage.co/query'
SYMBOLS = ['AAPL', 'MSFT', 'AACG']
EXCEL_FILE_PATH = Path(r"C:\Users\ecana\OneDrive\Desktop\StockLand\Backend\StockDataBase.xlsx")

def fetch_stock_data(symbol):
    """Fetch stock data from the Alpha Vantage API."""
    params = {
        'function': 'TIME_SERIES_DAILY',
        'symbol': symbol,
        'apikey': API_KEY
    }
    response = requests.get(BASE_URL, params=params)
    if response.status_code == 200:
        data = response.json().get('Time Series (Daily)', {})
        df = pd.DataFrame(data).transpose()
        df.columns = ['Open', 'High', 'Low', 'Close', 'Volume']
        df['Symbol'] = symbol  # Add symbol column to identify stock
        return df
    else:
        print(f"Failed to fetch data for {symbol}. Status Code: {response.status_code}")
        return pd.DataFrame()

def append_to_excel(file_path, df):
    """Append data to an Excel file, creating the file if it does not exist."""
    if not df.empty:
        if file_path.exists():
            with pd.ExcelWriter(file_path, engine='openpyxl', mode='a', if_sheet_exists='replace') as writer:
                df.to_excel(writer, sheet_name='Stock Data', index=False, header=False)
        else:
            df.to_excel(file_path, sheet_name='Stock Data', index=False)

# Main
if __name__ == "__main__":
    for symbol in SYMBOLS:
        stock_data = fetch_stock_data(symbol)
        if not stock_data.empty:
            # Check if file exists and if we need to write headers
            if not EXCEL_FILE_PATH.exists():
                append_to_excel(EXCEL_FILE_PATH, stock_data)  # File doesn't exist, headers will be written by `to_excel`
            else:
                # File exists, append without headers
                with pd.ExcelWriter(EXCEL_FILE_PATH, engine='openpyxl', mode='a', if_sheet_exists='overlay') as writer:
                    book = writer.book
                    try:
                        startrow = book['Stock Data'].max_row
                    except KeyError:
                        # Sheet does not exist, will be created by to_excel
                        stock_data.to_excel(writer, sheet_name='Stock Data', index=False)
                    else:
                        # Sheet exists, append data without headers
                        stock_data.to_excel(writer, sheet_name='Stock Data', startrow=startrow, index=False, header=False)
