import requests from "../utils/requests";
import { useRouter } from "next/router";

const Navbar = () => {
  const router=useRouter()
  return (
    <nav className="relative">
      <div className="flex px-10 sm:px-10 text-2xl whitespace-nowrap overflow-x-scroll space-x-10 sm:space-x-20 scrollbar-hide">
        {Object.entries(requests).map(([key, value]) => (
          <h2
          onClick={() => {
router.push(`/?genre=${key}`)
          }}
            className="last:pr-24 cursor-pointer transition duration-100 transform hover:scale-125 mb-2 hover:text-white active:text-red-500 select-none"
            key={key}
          >
            {value.title}
          </h2>
        ))}
      </div>
      {/* adding last element fade style */}
      <div className="absolute top-0 right-0 bg-gradient-to-r from-transparent to-[#06202A] h-10 w-1/12" />
    </nav>
  );
};

export default Navbar;
