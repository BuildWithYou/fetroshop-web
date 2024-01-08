import { Transition } from '@headlessui/react';
import { Fragment } from 'react';

interface ModalSearchBrandProps {
    isOpen: boolean;
    category: string;
    searchValue: string;
    handleSearchChange: (value:string) => void;
    handleSearchClick: () => void;
}

const ModalSearchBrand: React.FC<ModalSearchBrandProps> = ({ isOpen, category, searchValue, handleSearchChange, handleSearchClick }) => {
  return (
    <Transition
      show={isOpen}
      as={Fragment}
      enter="transition ease-out duration-3000"
      enterFrom="opacity-0 -translate-y-0"
      enterTo="opacity-100 translate-y-1"
      leave="transition ease-in duration-3000"
      leaveFrom="opacity-100 translate-y-1"
      leaveTo="opacity-0 translate-y-0"
    >
      <div className={`absolute ${isOpen ? 'block':'hidden'} bg-white flex flex-col items-end p-4 rounded-xl gap-2 shadow-lg`}>
          <input
              type="text" 
              placeholder={`Cari brand dengan huruf Awal '${category}'`} 
              className='text-sm p-2 w-64 border border-slate-200 rounded-md focus:border-blue-400' 
              value={searchValue} 
              onChange={(e) => handleSearchChange(e.target.value)}
          />
          <button className='bg-red-500 w-12 text-white p-1 rounded-lg' onClick={handleSearchClick}>Cari</button>
      </div>
    </Transition>
  )
}

export default ModalSearchBrand