import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloudSun, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
const Header = () => {
  return (
    <>
        <header className=" h-14 mx-auto bg-[#313050] flex items-center justify-center text-white">
          <nav className='w-11/12 flex gap-5 justify-center items-center'>
            <div className="flex items-center gap-x-2">
            <FontAwesomeIcon className='h-6' icon={faCloudSun} />
            <h1 className='font-bold text-xl'>EL CLIMA</h1>
            </div>
            <div className='relative text-[#313050]'>
            <input type="text" className='w-full p-2 rounded-lg' placeholder='Buscar ciudad'/>
            <FontAwesomeIcon className='absolute right-2 top-1/2 transform -translate-y-1/2' icon={faMagnifyingGlass} />
            </div>
          </nav>

        </header>
    </>
  );
};

export default Header
