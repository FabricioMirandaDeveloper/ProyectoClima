export const getUserLocation = (successCallback: (latitude: number, longitude: number) => void) => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                console.log(position);
                const latitude = position.coords.latitude;
                const longitude = position.coords.longitude;
                successCallback(latitude, longitude);
            }
        )
    }
}