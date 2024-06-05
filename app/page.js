'use client';

import { useEffect, useState } from 'react';
import Header from './components/Header';
import Map from '@/app/components/Map';
import { usePositionStore, useResultStore } from './lib/store';

const HomePage = () => {
  const setPosition = usePositionStore((state) => state.setPosition);
  const setResult = useResultStore((state) => state.setResult);

  useEffect(() => {
    const fetchData = async () => {
      const ipRes = await fetch('https://api.ipify.org?format=json');
      const ipData = await ipRes.json();

      const res = await fetch(
        `https://geo.ipify.org/api/v2/country,city?apiKey=${process.env.NEXT_PUBLIC_GEO_API_KEY}&ipAddress=${ipData.ip}`
      );
      const data = await res.json();
      setPosition([data.location.lat, data.location.lng]);

      const result = {
        ip: data.ip,
        location: `${data.location.region}, ${data.location.city} (${data.location.country})`,
        timezone: data.location.timezone,
        isp: data.isp,
      };

      setResult(result);
    };

    fetchData();

    // if (navigator.geolocation) {
    //   navigator.geolocation.getCurrentPosition((pos) => {
    //     setPosition([pos.coords.latitude, pos.coords.longitude]);
    //   });
    // } else {
    //   alert('Geolocation not supported by this browser.');
    // }
  }, [setPosition, setResult]);

  return (
    <div>
      <Header />
      <Map />
    </div>
  );
};

export default HomePage;
