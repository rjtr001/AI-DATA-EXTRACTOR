# PDF Data Extractor

This project contains a Python script that extracts specific data fields from PDF documents. The script utilizes the `pdfplumber` library to read PDF files and regular expressions to extract relevant information.

## Features

- Extracts multiple entries for the following fields:
  - Name
  - Phone Number
  - Address
  - Role

## Requirements

- Python 3.x
- pdfplumber

## Installation

1. Clone the repository or download the files.
2. Install the required library:
   ```bash
   pip install pdfplumber
   ```

## Usage

To run the extraction script, use the following command:

```bash
python extract.py <pdf_path>
```

Replace `<pdf_path>` with the path to the PDF file you want to extract data from.

## Example

```bash
python extract.py pdf_parser/sample.pdf
```

The extracted data will be printed in JSON format.

## License

This project is licensed under the MIT License.
