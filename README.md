## Weather App 1.0

## Description
Weather App 1.0 is a web application that allows users to search for the current weather and forecasts of any city. It provides real-time weather information using the weatherapi.com API. The app is built with Next.js, Tailwind CSS for styling, and utilizes Context API for global state management. Additional dependencies used include React Loading for loading animations, Axios for making API requests, React Icons for icons, lodash.debounce for debouncing the search function to prevent multiple API requests, and localstorage for storing the last selected city.

## Features
- Search any city and find the current weather and forecasts for the next 3 days.
- The last selected city is stored in localstorage, so users can easily retrieve the weather information for that city upon revisiting the app.
- Debounce functionality is implemented to delay API requests and prevent excessive requests to the weatherapi.com server.
- The app provides a clean and user-friendly interface with intuitive design elements.

## Technologies Used
- Next.js: A React framework for building server-side rendered and statically generated applications.
- Tailwind CSS: A utility-first CSS framework for rapidly building custom user interfaces.
- Context API: A state management solution for sharing and accessing data across components.
- Weatherapi.com: An API service for retrieving weather data.
- React Loading: A library for displaying loading animations in React applications.
- Axios: A promise-based HTTP client for making API requests.
- React Icons: A library for including popular icons in React applications.
- lodash.debounce: A utility library for implementing debouncing functionality.
- localstorage: A web API for storing data in the browser's local storage.

## Installation

Clone the repository: git clone https://github.com/suhaybkaofficial/weatherapp.git

- Navigate to the project directory: cd weatherapp
- Install the dependencies: npm install
- Set up your Weatherapi.com API key by creating a .env.local file in the project root directory and adding the following line: API_KEY=your-api-key
Start the development server: npm run dev
Open your browser and visit: http://localhost:3000

## Usage
- Enter the name of a city in the search bar and press Enter or click the search button.
- The app will display the current weather and forecasts for the next 3 days for the selected city.
- The last selected city will be automatically loaded when revisiting the app.

## License
This project is licensed under the MIT License.

## Acknowledgements
- Next.js
- Tailwind CSS
- Context API
- weatherapi.com
- React Loading
- Axios
- React Icons
- lodash.debounce
- localstorage


## Credits
This app was developed by [Suhaybka](https://www.suhaybka.me).