# U of MN Data Analytics Bootcamp Project 3: Football Data Analysis

## Overview
This repository houses a student project for the U of MN Data Analytics & Visualization bootcamp. The purpose of this project was to practice building a database, server, and visualizations, using NFL historical football game data as our dataset of choice. 

In this repository, you will find:
- Our final presentation
- Original datasets and transformed SQLite files
- A Flask server
- Three folders housing dashboards created using HTML/CSS/JavaScript

## Instructions

1. Clone the repository:
   ```sh
   git clone https://github.com/andersonjenna/Project-3.git
   ```
2. Install all dependencies (these can be found at the top of the `app.py` file):

3. From the root folder of the cloned repo, start the server:
   ```sh
   python app.py
   ```
   Copy the URL displayed in the terminal if you wish to view the API directly in your browser.

4. Navigate to any of the dashboard folders and open the `index.html` file to view the data visualizations.
5. For the Weather Data, please open this in VS code (or your IDE of choice) and open in live server.

## Ethical Considerations

As part of the assignment, we were asked to review any ethical considerations related to our project and the ethics of data usage in general. 

Our project used a reputable data source (Kaggle) that provides a publicly available NFL dataset on historical games. Since our dataset does not contain any personal or player-specific data, there are minimal ethical concerns regarding its use.

One ethical consideration arose during our initial project planning phase when we explored different data sources. Originally, we considered obtaining data from ESPN, but ESPN does not offer a public API for fantasy football data. If we had chosen to use ESPN, we would have needed to manually explore API endpoints or web scrape data from their site.

Ultimately, we decided against this approach for several reasons:
- The time required to extract and clean the data may not have been worth it.
- The overall ethics of web scraping came into question. While ESPN’s `robots.txt` did not explicitly prohibit scraping this data, ESPN has taken clear steps to make automated data extraction difficult.
- As responsible data analysts, it is important to consider the intent of the data owner. ESPN does not want third-party applications built using their fantasy football data, which played a significant role in our decision to use a different data source.

## Data Sources
We utilized publicly available data from Kaggle, which can be found here:
[NFL Scores and Betting Data](https://www.kaggle.com/datasets/tobycrabtree/nfl-scores-and-betting-data)

Angel with the Tutoring Center and ChatGPT were used to debug code.

Links to all resources used for the index.html, weather.js, and style.css within the weather data folder are listed below:
- Link for video used to create dropdown menu: https://youtu.be/XCAUnA4FyHU?si=wVOjLIVkcH8EHa8K
- Link for font awesome used for fonts and icons: https://cdnjs.com/libraries/font-awesome https://fontawesome.com/search?ic=free
- Link for data parsing and chart creation: https://youtu.be/5-ptp9tRApM?si=w0z61DQMi1xhiYbN

Additional help for code and debugging from Thomas Bogue.

---

This project was developed as part of the U of MN Data Analytics Bootcamp.
