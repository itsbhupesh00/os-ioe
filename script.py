import fitz
from pathlib import Path

pdfs = [
    "file1.pdf",
    "file2.pdf",
    "file3.pdf"
]

output = ""

for pdf in pdfs:
    doc = fitz.open(pdf)

    output += f"\n\n===== {pdf} =====\n\n"

    for page_num, page in enumerate(doc, start=1):
        output += f"\n--- Page {page_num} ---\n"
        output += page.get_text()

    doc.close()

Path("extracted.txt").write_text(output, encoding="utf-8")