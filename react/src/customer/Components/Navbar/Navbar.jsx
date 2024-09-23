import { Fragment, useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isNavigation, setIsNavigation] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const handleShowMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <Fragment>
      {/* Navigation bar */}
      <nav className="bg-blue-700 text-white border-b border-gray-200 lg:px-20 px-2">
        <div className="mx-auto px-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link to="/" className="flex items-center py-6">
              <img
                src="data:image/png;base64,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"
                alt="Lets Shop"
                className="h-8 w-8 mr-2"
              />
              <span className="font-bold text-white text-lg">
                Maker Market
              </span>
            </Link>

            {/* Navigation menu */}
            <ul className="hidden md:flex items-center space-x-4">
              <li>
                <Link
                  to="/potters art"
                  className="font-medium text-white hover:text-black"
                >
                  Potters Art
                </Link>
              </li>
              <li>
                <Link
                  to="/jewelery"
                  className="font-medium text-white hover:text-black"
                >
                Jewelery
                </Link>
              </li>
              <li>
                <Link
                  to="/kids"
                  className="font-medium text-white hover:text-black"
                >
                  Kids
                </Link>
              </li>
              <li>
                <Link
                  to="/home-living"
                  className="font-medium text-white hover:text-black"
                >
                  Home & Living
                </Link>
              </li>
              <li>
                <Link
                  to="/beauty"
                  className="font-medium text-white hover:text-black"
                >
                  Beauty
                </Link>
              </li>
              <li>
                <Link
                  to="/offers"
                  className="font-medium text-white hover:text-black"
                >
                  Offers
                </Link>
              </li>
            </ul>

            {/* Search bar */}
            <form className="hidden md:block flex-grow max-w-sm">
              <div className="relative w-full">
                <input
                  type="search"
                  className="block w-full border border-gray-300 rounded-md py-2 pl-10 pr-3 leading-5 placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500 focus:text-gray-900 sm:text-sm"
                  placeholder="Search"
                />
                <div className="absolute inset-y-0 left-0 flex items-center justify-center pl-3">
                  <svg
                    className="h-5 w-5 text-gray-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.716 14.966A7.25 7.25 0 1114.35 8.33a7.25 7.25 0 01-6.634 6.635zM15.5 9.75a5.75 5.75 0 10-11.5 0 5.75 5.75 0 0011.5 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
            </form>

            <div className="flex">
              <span className="px-2">User</span>
              <span className="px-2">Cart</span>
            </div>

            {/* Mobile navigation menu */}
            <div className="md:hidden flex items-center">
              <button onClick={handleShowMenu} className="text-white p-2">
                <svg
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile navigation menu */}
      {showMenu && (
        <div className="md:hidden bg-white">
          <ul className="flex flex-col py-4 space-y-2 px-5">
            <li>
              <Link
                to="/men"
                className="font-medium text-white hover:text-black"
              >
                Men
              </Link>
            </li>
            <li>
              <Link
                to="/women"
                className="font-medium text-white hover:text-black"
              >
                Women
              </Link>
            </li>
            <li>
              <Link
                to="/kids"
                className="font-medium text-white hover:text-black"
              >
                Kids
              </Link>
            </li>
            <li>
              <Link
                to="/home-living"
                className="font-medium text-white hover:text-black"
              >
                Home & Living
              </Link>
            </li>
            <li>
              <Link
                to="/beauty"
                className="font-medium text-white hover:text-black"
              >
                Beauty
              </Link>
            </li>
            <li>
              <Link
                to="/offers"
                className="font-medium text-white hover:text-black"
              >
                Offers
              </Link>
            </li>
          </ul>
        </div>
      )}
    </Fragment>
  );
}
export default Navbar;
