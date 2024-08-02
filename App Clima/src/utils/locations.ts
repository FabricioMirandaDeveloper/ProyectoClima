export const getUserLocation = (successCallback: (latitude: number, longitude: number) => void) => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const latitude = position.coords.latitude;
                const longitude = position.coords.longitude;
                successCallback(latitude, longitude);
            }
        )
    }
}