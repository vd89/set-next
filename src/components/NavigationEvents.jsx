'use client'
import { useEffect, useState } from "react";
function NavigationEvents() {
  const [countryName, setCountryName] = useState({ latitude: null, longitude: null });
  const showCity = async position => {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    setCountryName({ latitude: latitude, longitude: longitude });
    localStorage.setItem("latLong", JSON.stringify({latitude,longitude}))
  };

  const getUserLocation = () => {
    navigator.geolocation.getCurrentPosition(showCity);
    return;
  };

  useEffect(() => {
    if (navigator.geolocation) {
      getUserLocation();
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }, []);


  return null;
}

export default NavigationEvents;