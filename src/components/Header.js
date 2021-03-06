import React from 'react';
import Link from 'next/link';

import Image from 'next/image';
import mypic from '../public/assets/img.png';
import Button from './Button';

const Header = (props) => {
    return (
        <div className='header_main'>
            <div className='container'>
                <Image src={mypic}
                    alt="Tsuki"
                    width={65}
                    height={50} />
                <h2>{props.title}</h2>
            </div>

            <nav className='header_nav'>
                <ul className='nav_list'>
                    <li className='nav_item'>
                        <Link href="/">
                            <a className='nav_link'>Home</a>
                        </Link>
                    </li>
                    <li className='nav_item'>
                        <Link href="/about">
                            <a className='nav_link'>About</a>
                        </Link>
                    </li>
                    <li className='nav_item'>
                        <Link href="/shop">
                            <a className='nav_link'>Shop</a>
                        </Link>
                    </li>
                    <li className='nav_item'>
                        <Link href="/cart">
                            <a className='nav_link'>Cart</a>
                        </Link>
                    </li>
                    <li className='nav_item'>
                        <Button type="button" classes="btn btn__color-white" function={() => console.log("islogged")} title="login" />
                    </li>
                </ul>
            </nav>

        </div>
    );
}

export default Header;
