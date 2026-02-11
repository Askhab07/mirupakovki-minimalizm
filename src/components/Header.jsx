import React, { useState } from 'react';
import Search from './Search';

const Header = () => {
        const [isActiveSearch, setIsActiveSearch] = useState(false);

    return (
        <header className='h-20 p-5 pt-14 flex justify-between items-center'>
           {
            !isActiveSearch && <h2 className={`text-3xl font-bold transition-all duration-300 ease-in-out ${isActiveSearch ? 'opacity-0 -translate-x-5 w-0 ': 'opacity-100 translate-x-0'}`}>Мир упаковки</h2>
           }
            <Search isActiveSearch={isActiveSearch} setIsActiveSearch={setIsActiveSearch} />
        </header>
    );
};

export default Header;