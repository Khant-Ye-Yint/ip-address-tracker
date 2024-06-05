'use client';

import Results from './Results';
import { FaSearch } from 'react-icons/fa';
import { useRef } from 'react';
import { useResultStore, usePositionStore } from '../lib/store';

const Header = () => {
  const inputRef = useRef();
  const setResult = useResultStore((state) => state.setResult);
  const setPosition = usePositionStore((state) => state.setPosition);

  const submitHandler = async (e) => {
    e.preventDefault();

    const res = await fetch(
      `https://geo.ipify.org/api/v2/country,city?apiKey=${process.env.NEXT_PUBLIC_GEO_API_KEY}&ipAddress=${inputRef.current.value}`
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

    inputRef.current.value = '';
  };

  return (
    <div className=" min-h-[30vh] bg-pattern-mobile md:bg-pattern-desktop bg-no-repeat bg-cover flex flex-col justify-start items-center pt-8 space-y-10 md:space-y-4 ">
      <h1 className="text-3xl font-bold text-white">IP Address Tracker</h1>
      <form
        className="flex flex-row items-center justify-between w-3/4 overflow-hidden bg-white rounded-md md:w-2/3 lg:w-1/3"
        onSubmit={submitHandler}
      >
        <input
          type="text"
          className="w-full h-10 px-3 text-xs bg-transparent md:h-12 md:text-sm"
          placeholder="Search for any ip address or domain"
          ref={inputRef}
        />
        <button className="flex items-center justify-center h-10 px-3 py-1 text-white bg-black cursor-pointer hover:bg-gray-800 md:h-12">
          <FaSearch />
        </button>
      </form>
      <Results />
    </div>
  );
};

export default Header;
