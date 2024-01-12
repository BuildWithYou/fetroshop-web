import { basePath } from "@/next.config"
import Image from "next/image"
import Link from "next/link"

const FooterDownload = () => {
  return (
    <div className="flex justify-between w-full border-t-[1px] border-t-slate-300 py-4 px-4 lg:px-16">
        <p className="text-slate-400 text-sm">
            &copy; 2024, PT. Fetroshop Indonesia
        </p>
        <div className="flex">
            <Link href="#">
                <Image
                src={basePath + '/images/downloadPage/socmed/facebook.png'}
                width={25}
                height={20}
                alt="facebook icon"
                >
                </Image>
            </Link>
            <Link href="#">
                <Image
                src={basePath + '/images/downloadPage/socmed/twitter.png'}
                width={25}
                height={20}
                alt="twitter icon"
                >
                </Image>
            </Link>
            <Link href="#">
                <Image
                src={basePath + '/images/downloadPage/socmed/instagram.png'}
                width={25}
                height={20}
                alt="instagram icon"
                >
                </Image>
            </Link>
        </div>
    </div>
  )
}

export default FooterDownload