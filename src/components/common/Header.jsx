<<<<<<< HEAD
﻿
import styles from "../../style";
import logo from "../../assets/logo.svg"
import SearchBar from './SearchBar';
import SelectLanguage from './SelectLanguage';
import Nav from './Nav';
import { Link } from 'react-router-dom';
import CartIcon from '../common/Icons/CartIcon';
import LoginIcon from '../common/Icons/LogInIcon';


const Header = () => {

  return (
    <header className=' w-full '>
      <div className='bg-main pt-[44px]'>
        <div className={`${styles.paddingX} ${styles.boxWidth} mx-auto justify-between flex py-5`}>

          <Link to='/'>
            <img src={logo} alt="BookShop" className=' w-[180px] h-[80px]' />
          </Link>

          <div className=' hidden md:flex md:flex-col md:items-center md:justify-center relative'>
            <SearchBar />
          </div>

          <div className=' flex md:items-center md:justify-center'>

            <div className=" hidden md:flex  h-12">
              <SelectLanguage />
            </div>

            <div className="flex items-center justify-center">
              <CartIcon/>
              <LoginIcon/>
            </div>

=======
﻿import { useLocation, Link } from 'react-router-dom';
import styles from "../../style";
import logo from "../../assets/logo.svg";
import SearchBar from './SearchBar';
import SelectLanguage from './SelectLanguage';
import Nav from './Nav';
import CartIcon from '../common/Icons/CartIcon';
import LoginIcon from '../common/Icons/LogInIcon';

const Header = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <header className='w-full'>
      <div className='bg-main pt-[44px]'>
        <div className={`${styles.paddingX} ${styles.boxWidth} mx-auto justify-between flex py-5`}>
          {isHomePage ? (
            <img src={logo} alt="BookShop" className='w-[180px] h-[80px]' />
          ) : (
            <Link to='/'>
              <img src={logo} alt="BookShop" className='w-[180px] h-[80px]' />
            </Link>
          )}

          <div className='hidden md:flex md:flex-col md:items-center md:justify-center relative'>
            <SearchBar />
          </div>

          <div className='flex md:items-center md:justify-center'>
            <div className="hidden md:flex h-12">
              <SelectLanguage />
            </div>
            <div className="flex items-center justify-center">
              <CartIcon />
              <LoginIcon />
            </div>
>>>>>>> dd4605baa5658e0dc84ecec4f7e1351e7b253354
          </div>
        </div>
      </div>

      <div className="bg-secondary">
        <Nav />
      </div>
<<<<<<< HEAD

    </header>
  )
}

export default Header
=======
    </header>
  );
};

export default Header;
>>>>>>> dd4605baa5658e0dc84ecec4f7e1351e7b253354
