import Image from "next/image";
import Link from "next/link";
import svg1 from '@/public/images/icn search .icn-xs.svg'
import svg2 from '@/public/images/icn shopping-cart .icn-xs.svg'
import svg3 from '@/public/images/icn menu .icn-xs.svg'
import svg10 from '@/public/images/Vector (1).svg'

const Contact = () => {
    return (
        <div> <div className="flex  mt-2 md:items-center md:justify-center md:justify-items-center">
        <p className="  text-[24px] font-[Montserrat] leading-[32px] sm:ml-6 font-bold">Bandage</p>
        <div className=" flex  max-sm:hidden md:flex">
        <ul className="flex lg:space-x-[20px] lg:ml-40 xl:space-x-[45px] xl:ml-72 mt-1 sm:ml-14 sm:space-x-[12px] ">
            <li className=" text-[14px] font-[Montserrat] leading-[45px] font-bold text-gray-600"> <Link href="/pp" target="_blank">Home</Link></li>
            <li  className=" text-[14px] font-[Montserrat] leading-[45px] font-bold text-gray-600">Shop</li>
            <Image
      src={svg10}
      alt="company logo"
        className="ml-1 "
    />
            <li className=" text-[14px] font-[Montserrat] leading-[45px] font-bold text-gray-600"><Link href="/plp" target="_blank">About</Link></li>
            <li className=" text-[14px] font-[Montserrat] leading-[45px] font-bold text-gray-600">Blog</li>
            <li className=" text-[14px] font-[Montserrat] leading-[45px] font-bold text-gray-600">Contact</li>
            <li className=" text-[14px] font-[Montserrat] leading-[45px] font-bold text-gray-600">Pages</li>
        </ul>
        <p className="text-[14px] leading-[22px] font-bold mt-4 text-custom5b ml-28 sm:ml-10 xl:ml-44 ">Login</p>
        <button className="w-[214px] h-[52px] bg-custom5b font-bold rounded-[5px] text-white ml-10 sm:ml-10">Become a member</button>
     </div>
        <div className="flex space-x-8 ml-[50px] sm:hidden">
        <Image
      src={svg1}
      alt="company logo"
      width={24}
      height={24}
    />
    <Image
      src={svg2}
      alt="company logo"
      width={24}
      height={24}
    />
    <Image
      src={svg3}
      alt="company logo"
      width={24}
      height={24}
    />
    </div>
     </div>
     <div className=" justify-items-center mt-16 space-y-[30px] sm:hidden">
        <ul>
            <li className=" text-[30px] font-[Montserrat] leading-[45px]  text-gray-600">Home</li>
            <li  className=" text-[30px] font-[Montserrat] leading-[45px] text-gray-600">Product</li>
            <li className=" text-[30px] font-[Montserrat] leading-[45px] text-gray-600">Pricing </li>
            <li className=" text-[30px] font-[Montserrat] leading-[45px] text-gray-600">Contact</li>
        </ul>
     </div>
</div>
    )
}
export default Contact ;