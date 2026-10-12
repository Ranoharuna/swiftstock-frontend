# SwiftStock - Small Business Inventory & Invoice Manager

## Live Application
You can access the live working prototype here: [https://ranoharuna.github.io/swiftstock-frontend/](https://ranoharuna.github.io/swiftstock-frontend/)

## Overview
SwiftStock is a frontend web application designed for small and medium-sized enterprises (SMEs) to track inventory, monitor stock levels, and generate professional customer invoices digitally.

## Features
- **Inventory Management:** Add, view, and delete product items with live stock tracking.
- **Low-Stock Alerts:** Automatically flags items with low quantities.
- **Invoice & POS Generator:** Select items, calculate totals automatically, and print/save invoices using browser-native tools.
- **Data Persistence:** Uses browser `localStorage` to retain data across sessions.

## Technologies Used
- HTML5, CSS3, JavaScript (Vanilla ES6)
- Version Control: GitHub
- Deployment: GitHub Pages

## Setup and Usage Instructions
1. Open the live deployment link provided above.
2. Navigate to the **Inventory** tab to add products.
3. Switch to the **Create Invoice** tab to select products, build a bill, and click **Print / Save Invoice**.

## Known Limitations
- Data is stored locally in the browser (`localStorage`) and will not sync across different devices without a backend database.
