# Weather App

This is a version of the [Codédex weather app](https://www.codedex.io/projects/view-weather-with-html-css-js), modified to run on **Vercel** with a **serverless function**.

## Overview

- Enter a city, get the weather.
- The OpenWeather API key is stored as a **Vercel environment variable**.
- A **serverless function** handles API requests, keeping the key secure.

## Changes from Codédex

- Serverless function for weather data requests.
- Secure API key storage via Vercel environment variables.
- Deployed to Vercel.

## Deploy

1. Add your OpenWeather API key as `WEATHER_API_KEY` in Vercel.
2. Deploy the project on Vercel.

## Project Structure

- `index.html`: Main web interface.
- `script.js`: Handles the UI and fetch requests.
- `api/weather.js`: Serverless function for weather data.
