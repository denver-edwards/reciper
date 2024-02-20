# Recipe Scraper Website

## Description

This project is a web application designed to simplify the process of collecting recipes from various cooking websites. Users can input the URL of a webpage containing a recipe, and our tool will automatically extract the recipe's ingredients and instructions, presenting them in a clean, easy-to-read format. This tool is perfect for cooking enthusiasts looking to consolidate their favorite recipes without the hassle of manually copying and pasting or dealing with ads and pop-ups.

## How to Use

1. Navigate to our website.
2. Enter the URL of the webpage containing the recipe you wish to extract.
3. Hit the "Scrape" button.
4. View the extracted recipe ingredients and instructions displayed on the page.

## Installation

To set up this project locally, follow these steps:

1. Clone the repository:

    ```bash
    git clone https://github.com/denver-edwards/reciper.git
    ```

2. Navigate to the project directory:

    ```bash
    cd reciper
    ```

3. Install the necessary dependencies:

    ```bash
    npm install
    ```

4. Run the development server:

    ```bash
    npm run dev
    ```

5. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Technology Stack

- **Frontend**: Next.js 14
- **Web Scraping**: Cheerio
- **Styling**: Tailwind CSS
