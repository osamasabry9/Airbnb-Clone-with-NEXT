# Airbnb Clone

Welcome to the Airbnb Clone website! This project is built with Next.js and styled with Tailwind CSS, providing a modern, responsive web application that replicates Airbnb’s core features. Users can search for listings, view location details on a map, and explore various properties.

## Live Demo

You can view the live demo of the project [here](https://airbnb-clone-with-next-psi.vercel.app/).

## Features

- **Responsive Design**: Optimized for both mobile and desktop devices.
- **Dynamic Menu**: Users can search for properties with an interactive search bar.
- **Map Integration**: View property locations with Mapbox integration.
- **Location-based Listings**: See nearby listings based on geolocation.
- **Header and Banner Sections**: Provides intuitive navigation and a welcoming homepage.

## Branches

The development workflow includes the following branches:

- **developer**: Main development branch.
- **Header**: Implements the header and navigation bar.
- **Header-searchBar**: Adds search bar functionality.
- **Home/Banner**: Develops the homepage and banner section.
- **Home/Explore**: Includes explore functionality and featured listings.
- **Home/Footer**: Manages the footer section.
- **Home/Greatest**: Adds special features or promotional sections.
- **Home/Live**: Implements live functionalities or real-time features.
- **SearchPage**: Handles the main search page and its components.
- **SearchPage-mapbox**: Adds Mapbox features to the search page.


## Technologies Used

- **Next.js**: The core framework for building a fast, server-rendered React app.
- **Tailwind CSS**: For responsive and modern UI styling.
- **React Map GL**: To render the interactive map with property locations.
- **Geolib**: For location-based functionalities.
- **Heroicons**: Icon library for UI components.
- **Mapbox**: To provide map views for properties.
- **React Date Range**: For date selection in the search bar.
- **Next.js Toploader**: Adds a loading indicator at the top of the page.

## Dependencies
   The project uses the following dependencies:
   ```
      "dependencies": {
          "@heroicons/react": "^1.0.6",
          "@types/react-date-range": "^1.4.9",
          "geolib": "^3.3.4",
          "mapbox-gl": "^3.7.0",
          "next": "15.0.1",
          "nextjs-toploader": "^3.7.15",
          "react": "19.0.0-rc-69d4b800-20241021",
          "react-date-range": "^2.0.1",
          "react-dom": "19.0.0-rc-69d4b800-20241021",
          "react-map-gl": "^7.1.7"
      }
   ```

## Getting Started

To run the project locally, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/osamasabry9/Airbnb-Clone-with-NEXT.git
   cd airbnb-clone

2. **Install dependencies**:
   ```bash
   npm install
3. **Run the application**:
   ```bash
   npm start
This will start the development server, and you can view the app in your browser at http://localhost:3000.


## Folder Structure
```
gericht-restaurant/
├── public/
│   ├── index.html
├── src/
│   ├── app/
│          ├── page.tsx
│          ├── layout.tsx
│          ├── globals.css
│          ├── Search
│          ├── fonts
│   └── App.css
│   ├── types/
│   ├── utils/
│   ├── components/
├── package.json
├── next.config.ts
├── tailwind.config.ts
└── README.md
```
