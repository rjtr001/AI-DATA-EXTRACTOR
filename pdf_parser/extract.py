import pdfplumber
import re
import sys
import json

def extract_data_from_pdf(pdf_path):
    data = {
        'Name': [],
        'Phone Number': [],
        'Address': [],
        'Role': []
    }

    with pdfplumber.open(pdf_path) as pdf:
        for page in pdf.pages:
            text = page.extract_text()
            if text:
                # Extract all Names
                name_matches = re.findall(r'Name\s*:\s*(.*)', text)
                for match in name_matches:
                    data['Name'].append(match.strip())

                # Extract all Phone Numbers
                phone_matches = re.findall(r'Phone\s*:\s*(.*)', text)
                for match in phone_matches:
                    data['Phone Number'].append(match.strip())

                # Extract all Addresses
                address_matches = re.findall(r'Address\s*:\s*(.*)', text)
                for match in address_matches:
                    data['Address'].append(match.strip())

                # Extract all Roles
                role_matches = re.findall(r'Role\s*:\s*(.*)', text)
                for match in role_matches:
                    data['Role'].append(match.strip())

    return data

if __name__ == "__main__":
    if len(sys.argv) != 2:
        print("Usage: python extract.py <pdf_path>")
        sys.exit(1)

    pdf_path = sys.argv[1]
    extracted_data = extract_data_from_pdf(pdf_path)
    
    # Ensure the output is valid JSON
    print(json.dumps(extracted_data, indent=2))