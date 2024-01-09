'use client'

import styles from './styleBrands.module.css';

interface SideBarProps {
  handleModalToggle: () => void;
  modalIsOpen: boolean;
  handleChangeCategory: (category: string) => void;
  category: string;
}

const SideBar: React.FC<SideBarProps> = ({handleModalToggle, modalIsOpen, handleChangeCategory, category}) => {
  const alphabetArrayWithHash = Array.from({ length: 27 }, (_, i) => i < 26 ? String.fromCharCode(65 + i) : '#');

  return (
    <div className={`sticky top-32 w-14 h-[500px] bg-red-100 flex flex-col overflow-y-auto rounded-xl ${styles['custom-scrollbar']}`}>
        <ul className='flex flex-col items-center w-full border-r-[1px] border-slate-300'>
            <li className='text-slate-600 py-3 cursor-pointer ' onClick={handleModalToggle}>
                {modalIsOpen ? 
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                  </svg>
                  : 
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                  </svg>
                }
            </li>
            { alphabetArrayWithHash.map((alphabet) => <li key={alphabet} className={`text-lg py-1 cursor-pointer ${category ===  alphabet ? 'text-red-500' : 'text-slate-600' }`} onClick={() => handleChangeCategory(alphabet)}>{alphabet}</li>)}
        </ul>
        
    </div>
  )
}

export default SideBar