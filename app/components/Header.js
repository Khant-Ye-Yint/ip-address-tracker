import Results from './Results';
import { FaSearch } from 'react-icons/fa';

const Header = () => {
  return (
    <div className=" min-h-[30vh] bg-pattern-mobile md:bg-pattern-desktop bg-no-repeat bg-cover flex flex-col justify-start items-center pt-8 space-y-10 lg:space-y-4">
      <h1 className="text-3xl font-bold text-white ">IP Address Tracker</h1>
      <div className="flex flex-row items-center justify-between w-2/3 overflow-hidden bg-white rounded-md md:w-2/3 lg:w-1/3">
        <input
          type="text"
          className="w-full h-10 px-3 text-xs md:h-12 md:text-sm"
          placeholder="Search for any ip address or domain"
        />
        <span className="flex items-center justify-center h-10 px-3 py-1 text-white bg-black cursor-pointer hover:bg-gray-800 md:h-12">
          <FaSearch />
        </span>
      </div>
      <Results />
    </div>
  );
};

export default Header;
