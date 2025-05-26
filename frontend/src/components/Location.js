import React, { useEffect, useState } from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';
import axios from 'axios';

const Location = () => {
  const [location, setLocation] = useState("Fetching location...");

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(async (position) => {
        const { latitude, longitude } = position.coords;
        try {
          const response = await axios.get(
            `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latitude}&lon=${longitude}`
          );
          const address = response.data.address;
          const city = address.city || address.town || address.village || "";
          const state = address.state || "";
          const country = address.country || "";
          setLocation(`${city}, ${state}, ${country}`);
        } catch (error) {
          setLocation("Location unavailable");
          console.error("Error fetching location:", error);
        }
      }, () => {
        setLocation("Permission denied");
      });
    } else {
      setLocation("Geolocation not supported");
    }
  }, []);

  return (
    <div className="flex items-center gap-1 text-gray-600 mb-2 sm:mb-0">
      <FaMapMarkerAlt />
      <span>{location}</span>
    </div>
  );
};

export default Location;
