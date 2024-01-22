import { basePath } from '@/next.config'
import Image from 'next/image'
import React from 'react'
import './styleDownload.css'
import Link from 'next/link'

const DownloadPage = () => {
  return (
    <div className='w-full'>
      <div className="linear-gradient-download-banner h-fit lg:h-[70vh] w-full px-4 lg:px-16 m-0 flex flex-col lg:flex-row items-center lg:items-start justify-between relative">
        <Image
          src={basePath + "/images/downloadPage/app-download.png"}
          alt="banner image"
          width={300}
          height={300}
          className='mb-4 mt-10 lg:mt-4 md:mb-0 md:mr-4 w-[90vw] md:w-full lg:w-[1000px]'
        />
        <div className='w-full text-light text-left lg:text-right mt-8 mb-8 lg:mb-0'>
          <h2 className='text-xl lg:text-3xl font-medium leading-relaxed'>
            Download Alfagift dan Nikmati Berbagai Fiturnya.
          </h2>
          <p className='text-sm leading-tight font-regular mt-6'>
            Nikmati kemudahan berbelanja, mengumpulkan poin, dan hadiah menarik lainnya hanya dalam satu genggaman.
          </p>
          <p className='text-md lg:text-lg text-center lg:text-right font-bold mt-6'>
            Segera Download Aplikasinya.
          </p>

          <div className='flex justify-center lg:justify-end gap-4 mt-4'>
            <Image
              src={basePath + "/images/downloadPage/downloadpage_qr_code.png"}
              alt='qr_code_image'
              width={140}
              height={140}
              className='rounded-lg hidden lg:block'
            ></Image>
            <div className='flex flex-col justify-center gap-2'>
              <Link href='#'>
                <Image
                  src={basePath + "/images/downloadPage/play-store-btn.png"}
                  alt='qr_code_image'
                  width={150}
                  height={150}
                  className='rounded-lg'
                ></Image>
              </Link>
              <Link href='#'>
                <Image
                  src={basePath + "/images/downloadPage/app-store-btn.png"}
                  alt='qr_code_image'
                  width={150}
                  height={150}
                  className='rounded-lg'
                ></Image>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className='mt-28 lg:mt-32'>
        <div className='lg:w-[600px] mx-4 md:mx-8 lg:mx-auto mb-12'>
          <div className='flex gap-4 lg:gap-8 w-full justify-center'>
            <div className='w-1/3 lg:w-fit'>
              <Image
                src={basePath + '/images/downloadPage/benefit/Gratis-ongkir-tanpa-syarat_web-icon.png'}
                width={80}
                height={80}
                alt='free delivery icon'
                className='w-[30vw] md:w-[20vw] lg:w-40 h-fit'
              ></Image>
            </div>
            <div className='text-slate-600 w-2/3 lg:w-96 flex flex-col justify-center gap-4'>
              <h3 className='text-2xl font-bold'>Gratis Ongkir Tanpa Syarat</h3>
              <p className='text-md font-normal'>Belanja berapa pun, gratis biaya pengiriman tanpa batas maksimal</p>
            </div>
          </div>
        </div>
        <div className='lg:w-[600px] mx-4 md:mx-8 lg:mx-auto mb-12'>
          <div className='flex gap-4 lg:gap-8 w-full justify-center flex-row-reverse'>
            <div className='w-1/3 lg:w-fit'>
              <Image
                src={basePath + '/images/downloadPage/benefit/Sameday-delivery_web-icon.png'}
                width={80}
                height={80}
                alt='free delivery icon'
                className='w-[30vw] md:w-[20vw] lg:w-40 h-fit'
              ></Image>
            </div>
            <div className='text-slate-600 w-2/3 lg:w-96 flex flex-col justify-center gap-4 text-right'>
              <h3 className='text-2xl font-bold'>Sameday Delivery</h3>
              <div>
                <p className='text-md font-normal'>Pesanan diantar lebih cepat karena diantar dari toko Alfamart terdekat*</p>
                <p className='text-xs font-light'>*untuk seluruh produk bertanda <span className='font-semibold italic'>stok dari toko</span> </p>
              </div>
            </div>
          </div>
        </div>
        <div className='lg:w-[600px] mx-4 md:mx-8 lg:mx-auto mb-12'>
          <div className='flex gap-4 lg:gap-8 w-full justify-center'>
            <div className='w-1/3 lg:w-fit'>
              <Image
                src={basePath + '/images/downloadPage/benefit/Poin_web-icon.png'}
                width={80}
                height={80}
                alt='free delivery icon'
                className='w-[30vw] md:w-[20vw] lg:w-40 h-fit'
              ></Image>
            </div>
            <div className='text-slate-600 w-2/3 lg:w-96 flex flex-col justify-center gap-4'>
              <h3 className='text-2xl font-bold'>Poin Terintegrasi</h3>
              <p className='text-md font-normal'>Dapatkan poin untuk setiap pembelanjaan di Alfagift atau toko Alfamart</p>
            </div>
          </div>
        </div>
        <div className='lg:w-[600px] mx-4 md:mx-8 lg:mx-auto mb-24'>
          <div className='flex gap-4 lg:gap-8 w-full justify-center flex-row-reverse'>
            <div className='w-1/3 lg:w-fit'>
              <Image
                src={basePath + '/images/downloadPage/benefit/Produk-lengkap_web-icon.png'}
                width={80}
                height={80}
                alt='free delivery icon'
                className='w-[30vw] md:w-[20vw] lg:w-40 h-fit'
              ></Image>
            </div>
            <div className='text-slate-600 w-2/3 lg:w-96 flex flex-col justify-center gap-4 text-right'>
              <h3 className='text-2xl font-bold'>Produk Lebih Lengkap</h3>
              <p className='text-md font-normal'>Lebih lengkap dengan produk premium, kemasan besar, dan kebutuhan lainnya</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DownloadPage
