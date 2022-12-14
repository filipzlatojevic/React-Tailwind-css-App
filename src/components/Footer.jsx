import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="p-4 bg-[#7c8695] sm:p-6">
      <div className="md:flex md:justify-between">
        <div className="mb-6 md:mb-0 lg:mt-[90px] lg:ml-[146px] ml-0 mt-0">
          <Link to={'/'} className="flex items-center">
            <span className="font-bold text-center text-white text-[30px] mr-3">Movie App</span>
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-2 sm:gap-6 sm:grid-cols-3">
          <div>
            <h2 className="mb-6 text-sm font-semibold text-[#FAFAFA] uppercase">Resources</h2>
            <ul className="text-[#FAFAFA]">
              <li className="mb-4">
                <Link className="hover:underline" to={'/'}>
                  Create List
                </Link>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  What is App
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Working
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  List Movies
                </a>
              </li>
              <li className="mb-4">
                <Link to={'/'} className="hover:underline">
                  About
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold text-[#FAFAFA] uppercase">Contact</h2>
            <ul className="text-[#FAFAFA]">
              <li className="mb-4">+381 60 000000</li>
              <li className="mb-4">
                <a href="mailto:ficozlatojevic@gmail.com" className="hover:underline">
                  ficozlatojevic@gmail.com
                </a>
              </li>
              <li>Kraljevo</li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold text-[#FAFAFA] uppercase">Legal</h2>
            <ul className="text-[#FAFAFA]">
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr className="my-6 border-[#FAFAFA] sm:mx-auto lg:my-8" />
      <div className="sm:flex sm:items-center sm:justify-between">
        <span className="text-sm text-[#FAFAFA] sm:text-center">Copyright 2022</span>
        <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
          <a href="#" className="text-[#FAFAFA]">
            <img className="h-[19px] w-[19px]" src="../assets/landingPage/footer/instagram.svg" alt="instagram" />
          </a>
          <a href="#" className="text-[#FAFAFA]">
            <img className="h-[19px] w-[19px]" src="../assets/landingPage/footer/facebook.svg" alt="facebook" />
          </a>
          <a href="#" className="text-[#FAFAFA]">
            <img className="h-[19px] w-[19px]" src="../assets/landingPage/footer/twitter.svg" alt="twitter" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
