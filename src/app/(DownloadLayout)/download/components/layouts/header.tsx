import { basePath } from '@/next.config';
import Image from 'next/image';
import Link from 'next/link';

const HeaderDownload = () => {
  return (
    <div
      className={
        "flex w-full p-4"
    }
    >
        <Link href="/" className='lg:ml-12 w-fit'>
            <Image
              src={basePath + "/images/logo.png"}
              width={90}
              height={90}
              alt="Fetroshop Logo"
            />
          </Link>
      </div>

  )
}

export default HeaderDownload