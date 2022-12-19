import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [activeUserMenu, setActiveUserMenu] = useState(false);
  const [activeBurger, setActiveBurger] = useState(false);

  const { pathname, hash, key } = useLocation();

  useEffect(() => {
    if (hash === '') {
      window.scrollTo(0, 0);
    } else {
      setTimeout(() => {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView();
        }
      }, 0);
    }
  }, [pathname, hash, key]);

  const handleToogle = e => {
    if (e.target.className.includes('user')) {
      setActiveUserMenu(prev => !prev);
    } else if (e.target.className.includes('burger')) {
      setActiveBurger(prev => !prev);
    }
  };

  return (
    <header
      className="min-[1130px]:h-[100px] min-[1130px]:flex-row min-[1130px]:justify-between min-[1130px]:items-center bg-[#7c8695]
     border-b-2 border-[#2d3746] flex-col items-start justify-start h-auto flex w-full relative">
      <Link to={'/'} className="min-[1130px]:my-0 my-[15.5px] flex items-center justify-center w-[160px] h-[67px] ml-[20px] flex-shrink-0">
        <span className="w-full font-bold text-center  text-[30px]">Movie App</span>
      </Link>
      <button id="burger" className="burger min-[1130px]:hidden absolute right-[14px] top-[30px]" onClick={handleToogle}>
        <img
          className="burger p-1 w-10 h-10"
          src={activeBurger ? '../assets/landingPage/close.svg' : '../assets/landingPage/menu.svg'}
          alt="menu"
        />
      </button>

      <li className="absolute z-50 right-[80px] top-[32px] min-[1130px]:right-[14px] min-[1130px]:top-[30px] flex items-center cursor-pointer font-semibold text-base leading-5 text-black">
        <button className="flex items-center cursor-pointer user" onClick={handleToogle} id="user">
          <img className="w-[35px] h-[35px] cursor-pointer user" src="../assets/landingPage/carbon_user-avatar.svg" alt="user" />
          <img
            className={`${activeUserMenu && 'rotate-[-180deg]'} user transition duration-[0.4s] ease w-[15px] h-[7px] cursor-pointer`}
            src="../assets/landingPage/expand_more.svg"
            alt="expand"
          />
        </button>
        <ul
          className={`${
            activeUserMenu ? 'flex' : 'hidden'
          } absolute z-50 bg-[#7c8695] border border-[#2A2A2A] cursor-default rounded w-[183px] p-[20px] flex-col items-start justify-between gap-[12px] top-[45px] right-[10px]`}>
          <li>
            <Link to={'/'} className="flex hover:underline items-center relative cursor-pointer font-medium text-sm leading-4">
              <img className="w-[20px] h-[20px] mr-[8px]" src="../assets/landingPage/carbon_user-avatar.svg" alt="user" />
              Profile
            </Link>
          </li>

          <li>
            <Link className="flex hover:underline items-center relative cursor-pointer font-medium text-sm leading-4">
              <img className="w-[20px] h-[20px] mr-[8px]" src="../assets/landingPage/payment.svg" alt="payment" />
              Paying
            </Link>
          </li>
          <li>
            <Link to={'/'} className="flex hover:underline items-center relative cursor-pointer font-medium text-sm leading-4">
              <img className="w-[20px] h-[20px] mr-[8px]" src="../assets/landingPage/outline-place.svg" alt="place" />
              Location
            </Link>
          </li>
          <div className="m-0 w-full border border-[#2d3746]"></div>
          <li className="flex items-center relative cursor-pointer font-medium text-sm leading-4">
            <button className="flex hover:underline items-center relative cursor-pointer" id="sign_out">
              <img className="w-[20px] h-[20px] mr-[8px]" src="../assets/landingPage/logout-rounded.svg" alt="logout" />
              Sign out
            </button>
          </li>
        </ul>
      </li>

      <nav
        className={`${
          activeBurger ? 'h-[264px]' : 'h-0'
        } z-40 transition-all duration-[0.35s] ease overflow-hidden absolute top-[100px] min-[1130px]:h-auto min-[1130px]:static min-[1130px]:flex min-[1130px]:flex-1
         min-[1130px]:items-center min-[1130px]:justify-center items-start w-full`}>
        <ul
          className="min-[1130px]:max-w-full min-[1130px]:flex-row min-[1130px]:w-full min-[1130px]:border-none min-[1130px]:items-center min-[1130px]:flex-1 min-[1130px]:relative bg-[#7c8695]
         flex-col p-[20px] items-start w-full flex justify-center gap-[20px]">
          <li className="min-[1130px]:ml-auto flex items-center relative cursor-pointer font-semibold text-base leading-5 text-black">
            <Link
              to={'/'}
              className="uppercase min-[1130px]:p-0 p-[10px] rounded min-[1130px]:hover:bg-[#7c8695] hover:bg-[#d8d6d6] min-[1130px]:hover:underline">
              What is App
            </Link>
          </li>
          <li className="flex items-center relative cursor-pointer font-semibold text-base leading-5 text-black">
            <Link
              to={'/'}
              className="uppercase min-[1130px]:p-0 p-[10px] rounded min-[1130px]:hover:bg-[#7c8695] hover:bg-[#d8d6d6] min-[1130px]:hover:underline">
              Working
            </Link>
          </li>
          <li className="flex items-center relative cursor-pointer font-semibold text-base leading-5 text-black">
            <Link
              to={'/'}
              className="uppercase min-[1130px]:p-0 p-[10px] rounded min-[1130px]:hover:bg-[#7c8695] hover:bg-[#d8d6d6] min-[1130px]:hover:underline">
              List Movies
            </Link>
          </li>
          <li className="min-[1130px]:mr-auto min-[1130px]:pr-[68px] flex items-center relative cursor-pointer font-semibold text-base leading-5 text-black">
            <Link
              to={'/'}
              className="uppercase min-[1130px]:p-0 p-[10px] rounded min-[1130px]:hover:bg-[#7c8695] hover:bg-[#d8d6d6] min-[1130px]:hover:underline">
              About us
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
