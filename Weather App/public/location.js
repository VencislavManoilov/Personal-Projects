function getLocation() {
    // Check if geolocation is supported by the browser
    if ("geolocation" in navigator) {
        // Prompt user for permission to access their location
        navigator.geolocation.getCurrentPosition(
            // Success callback function
            (position) => {
                // Get the user's latitude and longitude coordinates
                const lat = position.coords.latitude;
                const lng = position.coords.longitude;
        
                getWeather(lat, lng);
            },
            // Error callback function
            (error) => {
                getWeather();
            }
        );
    } else {
        // Geolocation is not supported by the browser
        console.error("Geolocation is not supported by this browser.");
    }
}
