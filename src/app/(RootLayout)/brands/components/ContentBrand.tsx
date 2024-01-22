import Image from 'next/image';

import { basePath } from '@/next.config';

interface ContentBrandProps {
    category: string;
    dataBrands: Array<string>;
}

const ContentBrand: React.FC<ContentBrandProps> = ({category, dataBrands}) => {

  const filteredBrands = dataBrands;
  return (
    <div className="pl-8 w-full">
        <div className="flex items-center mt-1 w-full">
            <div className="rounded-full border-[1px] border-slate-300 w-2 h-2"></div>
            <div className="h-px border-dashed border-b-[1px] border-slate-300 flex-grow"></div>
            <p className="rounded-full border-[1px] border-slate-300 px-2 text-xl">{category}</p>
        </div>
        {filteredBrands.length > 0 ? 
            <ul className="grid md:grid-cols-4 grid-cols-2 gap-4 w-full">
                {filteredBrands.map((brand) => <li key={brand} className='cursor-pointer text-blue-600'>{brand}</li>)}
            </ul>
            : 
            <div className='w-full flex flex-col justify-center items-center mt-12 gap-8'>
                <Image
                    src={basePath + "/images/emptySearch.png"}
                    width={400}
                    height={400}
                    alt="Empty Data"
                />
                <p className='text-sm text-slate-600'>Tidak ada brand ditemukan</p>
            </div>
        }

    </div>
  )
}

export default ContentBrand