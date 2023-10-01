import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIc from '@material-ui/icons/ShoppingBasket';
import { useStateValue } from './StateProvider';
function Header() {
    const [{ basket}] = useStateValue();
    return (
        <nav className='header'>
            {/*logo on the left */}
            <Link to="/">
                <img className='header__logo' src='https://logos-world.net/wp-content/uploads/2020/04/Amazon-Emblem-700x394.jpg'
                    alt='Image Not Found'
                />
            </Link>
            {/*search box */}
            <div className='header__search'>
                <input type='text' className='header__searchInput' />
                <Link>
                    <SearchIcon className="header__searchIcon" />
                </Link>
            </div>
            {/*3 Links  */}
            <div className='headerNav'>
                {/* 1st link*/}
                <Link to="/login" className='header__link'>
                    <div className='header__option'>
                        <span className='headeroptioninone'>Hello </span>
                        <span className='headeroptioninto'>sign In</span>
                    </div>
                </Link>
                {/* 2nd link*/}
                <Link to="/Checkout" className='header__link'>
                    <div className='header__option'>
                        <span className='headeroptioninone'>Return </span>
                        <span className='headeroptioninto'>& Orders</span>
                    </div>
                </Link>
                {/* 3rd link*/}
                <Link to="/login" className='header__link'>
                    <div className='header__option'>
                        <span className='headeroptioninone'>Your</span>
                        <span className='headeroptioninto'>Prime</span>
                    </div>
                </Link>
                {/* 4th link*/}
                <Link to='/checkout' className='header__link'>
                    <div className='header_optionBasket'>
                        {/* shopping basket icon*/}
                        <ShoppingBasketIc />
                        {/* Number of item in the basket*/}
                        <span className='headeroptioninto header__basketcount'>{basket?.length}</span>
                    </div>
                </Link>
            </div>
            {/* basket icoon with number  */}
        </nav>
    )
}

export default Header
