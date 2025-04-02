# Profile Map Application

## Overview
The **Profile Map Application** is a React-based web application that displays user profiles on a Google Map. Each profile contains a name, description, and location (latitude and longitude). The app integrates the Google Maps JavaScript API to visualize profiles on an interactive map.

## Features
- Display user profiles with location markers on Google Maps.
- Interactive map with zoom and pan functionality.
- Responsive design.
- Easy integration of additional profiles.

## Technologies Used
- **React.js**: Frontend framework
- **Google Maps JavaScript API**: Map rendering and location services
- **JavaScript (ES6+)**: Core logic
- **CSS**: Styling

## Prerequisites
Before running the project, ensure you have:
1. **Node.js** installed (v14+ recommended).
2. A **Google Cloud account** with **Billing enabled**.
3. A **Google Maps API Key**.




### 3️⃣ Configure Google Maps API
1. Go to [Google Cloud Console](https://console.cloud.google.com/).
2. Enable **Billing**.
3. Enable **Google Maps JavaScript API**.
4. Create an **API Key** and enable necessary services.
5. Add your API key in `src/components/ProfileMap.js`:
```tsx
<LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
```

### 4️⃣ Run the Project
```sh
 npm start
```
The application should now be accessible at `http://localhost:3000`.

## Project Structure
```
profile-map/
│── src/
│   ├── components/
│   │   ├── ProfileMap.js  # Google Maps integration
│   │   ├── ProfileList.js # Displays profile data
│   ├── App.js             # Main component
│   ├── index.js           # Entry point
│── public/
│── package.json
│── README.md
```

## Troubleshooting
### ❌ Error: `BillingNotEnabledMapError`
**Solution:**
- Ensure billing is enabled for your Google Cloud project.
- Verify that the **Google Maps JavaScript API** is enabled.
- Check if your API key is correctly added in `ProfileMap.js`.

