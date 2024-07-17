/* eslint-disable @next/next/no-html-link-for-pages */
import Image from "next/image";
import Link from "next/link";
import styles from "./BottomNavbar.module.css";
import { useStatus } from "@/context/contextStatus";
import { AiFillHeart, AiFillHome, AiOutlineHome } from "react-icons/ai";
import request from "@/lib/request";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import { RiMessengerLine } from "react-icons/ri";
import { IoLogoFacebook } from "react-icons/io5";
import { BsFillHeartFill, BsMessenger, BsTelephone, BsTelephoneFill } from "react-icons/bs";
import { FaUser } from "react-icons/fa";


export default function BottomNavbar() {

  const { setProfileMenu, wishData, token, isScrolled } = useStatus();


  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  const router = useRouter();

  useEffect(() => {
    const getData = async () => {
      const res = await request(`setting/view`);
  
      setLoading(false);
      setData(res?.data);
    };
    getData();
  }, []);
   
const handleWishRoute = () =>{
  if (token) {
    router?.push(`/wishlist`);
  } else {
    toast.error(`You need to login first`);
  }

}

const handleProfileRoute = () =>{
    if(!token){
       router.push(`/auth`)
    } else {
       router.push(`/profile`);
    }
}
  
 

 
  return (
    <div
      className={`bg-white ${isScrolled ? 'xls:fixed xms:fixed xs:fixed xxl:hidden xl:hidden lg:hidden md:hidden sm:hidden' : 'hidden'} fixed bottom-0 w-full z-10 border border-[#d1d5db] p-[8px] shadow-lg filter drop-shadow-lg`}
    >
      <div className={styles.icons}>
        <Link href={`${data?.socialLinks?.facebook}`} target="_blank">
          <span>
            <BsMessenger size={16} className="fill-current text-gray-500" />
          </span>
          <span className="text-[10px] text-gray-500 capitalize">Message</span>
        </Link>
        <Link href={`tel:${data?.phone}`} target="_blank">
          <span>
            <BsTelephoneFill size={18} className="fill-current text-gray-500" />
          </span>
          <span className="text-[10px] text-gray-500 capitalize">Call</span>
        </Link>

        <Link href="/">
          <span>
            <AiFillHome size={20} className="fill-current text-gray-500" />
          </span>
          <span className="text-[10px] text-gray-500 capitalize ">Home</span>
        </Link>
        <Link href="/facebook-page">
          <span>
            <IoLogoFacebook size={20} className="fill-current text-gray-500" />
          </span>
          <span className="text-[10px] text-gray-500 capitalize ">Page</span>
        </Link>

        {/* <div
          className="relative cursor-pointer"
          onClick={() => handleWishRoute()}
        >
          <div className="flex justify-center">
            <BsFillHeartFill
              size={17}
              className="fill-current text-gray-500 "
            />
          </div>

          <div className="bg-red-500 rounded-full h-3 w-3 flex justify-center items-center absolute top-[-4px] right-[18px]">
            <p className="text-white text-[10px]">{wishData?.length}</p>
          </div>
          <span className="text-[10px] text-gray-500 capitalize">
            Wishlists
          </span>
        </div> */}

        <div onClick={() => handleProfileRoute()}>
          <span>
            <FaUser size={16} className="fill-current text-gray-500" />
          </span>
          <span className="text-[10px] text-gray-500 capitalize">profile</span>
        </div>

        {/* </Link> */}

        {/* <span
          onClick={() => {
            setSideCategory(true);
          }}
        >
          <Image
            priority={true}
            height={25}
            width={25}
            src="/assets/images/icons/menu-line.png"
            alt="category"
          />
        </span> */}
      </div>
    </div>
  );
}
