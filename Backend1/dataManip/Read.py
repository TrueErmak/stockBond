import pandas as pd

def convert_csv_to_excel(csv_file_path, excel_file_path):
    # Load the CSV file
    df = pd.read_csv(csv_file_path)

    # Save the DataFrame to an Excel file
    df.to_excel(excel_file_path, index=False)

    print("Converted CSV to Excel successfully.")

def print_csv_structure(file_path):
    # Load the CSV file
    df = pd.read_csv(file_path)

    # Print the structure of the data
    print("Columns in the CSV file:")
    print(df.columns.tolist())

    print("\nFirst few rows of the data:")
    print(df.head())

    print("\nData types of each column:")
    print(df.dtypes)

if __name__ == "__main__":
    csv_file_path = 'listing_status.csv'  # Update this path to your CSV file's location
    excel_file_path = 'StockDataBase.xlsx'  # Define the path for the output Excel file

    # Print the structure of the CSV file
    print_csv_structure(csv_file_path)

    # Convert the CSV file to an Excel file
    convert_csv_to_excel(csv_file_path, excel_file_path)
