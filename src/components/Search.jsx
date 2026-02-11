import { BiSolidSearch } from "react-icons/bi";
import { RiCloseCircleFill } from "react-icons/ri";

const Search = ({isActiveSearch, setIsActiveSearch}) => {


    const handleClickIsActiveSearch = () => {
        setIsActiveSearch(!isActiveSearch);
    }

    return (
        <div className='flex justify-between items-center'>
            <input className={`
          min-[150px]:h-14 px-2 outline-0 border-2 border-amber-600 rounded-xl text-2xl
          transition-all duration-300 ease-in-out
          ${isActiveSearch 
            ? 'w-[270px] opacity-100' 
            : 'w-0 opacity-0 px-0 border-transparent'
          }
        `} 
        type="text" 
        placeholder={isActiveSearch ? "Поиск..." : ""} />
            <div className='w-12 h-12 flex justify-center items-center bg-black rounded-2xl cursor-pointer transition-transform hover:scale-110'  onClick={handleClickIsActiveSearch}>
                        {isActiveSearch ? 
          <RiCloseCircleFill className='size-8 text-white transition-transform rotate-0 hover:rotate-90 duration-300'/> 
          : <BiSolidSearch className='size-8 text-white'/>
        }
            </div>
        </div>
    );
};

export default Search;