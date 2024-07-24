// import {hostname} from '@/lib/config';
// import request from '@/lib/request';
// import Link from 'next/link';
// import { useEffect, useState } from 'react';
// import { BsFacebook } from "react-icons/bs";
// import { FcLike } from 'react-icons/fc';
// import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
// import MessengerCustomerChat from "react-messenger-customer-chat";
// import { project_name, company_name, link, company_link } from "@/lib/config";
// import { useStatus } from '@/context/contextStatus';

// const Footer = () => {

//   const [data,setData] = useState({});
//   const [loading,setLoading] = useState(true);

//   const {setOrderBtn, setCartBtn, setNamePlaceHolder, setAddressPlaceHolder, setMobilePlaceHolder, setCustomerNotesPlaceholder} = useStatus();

//   useEffect(()=>{

//     const getData = async() =>{
//           const res = await request(`setting/view`);

//           setOrderBtn(res?.data?.orderBtn);
//           setCartBtn(res?.data?.cartBtn);
//           setNamePlaceHolder(res?.data?.customerNamePlaceholder);
//           setAddressPlaceHolder(res?.data?.customerAddressPlaceholder);
//           setMobilePlaceHolder(res?.data?.customerMobilePlaceholder);
//           setCustomerNotesPlaceholder(res?.data?.customerNotesPlaceholder);
//           setLoading(false);
//           setData(res?.data);
//     }
//     getData();

//   },[])

//   return (
//     <div>
//       <div className="bg-secondary hidden sm:block xls:block xms:block xs:block sm:bock">
//         <div className="w-full pb-20 xls:pb-16 xms:pb-16 xs:pb-16 xls:max-w-[25rem] xms:max-w-[21rem] xs:max-w-[20rem] mx-auto">
//           <div className="pt-3">
//             <div className="flex items-center justify-center space-x-2 xms:space-x-2 xs:hidden">
//               <p className="text-white text-[12px] ">
//                 <Link href="/about-us">About-us</Link>
//               </p>

//               <p className="text-white text-[12px] ">
//                 <Link href="/terms-and-conditions">Terms & Conditions</Link>
//               </p>

//               <p className="text-white text-[12px] ">
//                 <Link href="/privacy-policy">Privacy-policy</Link>
//               </p>

//               <p className="text-white text-[12px] ">
//                 <Link href="/return">Return & refund</Link>
//               </p>
//               {/* <p className="text-white text-[12px] ">
//                 <Link href="/refund">Refund policy</Link>
//               </p> */}
//             </div>
//             <div className="xms:hidden xls:hidden xs:block">
//               <div className="flex justify-center items-center space-x-2">
//                 <p className="text-white text-[12px]">
//                   <Link href="/about-us">About-us</Link>
//                 </p>

//                 <p className="text-white text-[12px] ">
//                   <Link href="/terms-and-conditions">Terms & Conditions</Link>
//                 </p>

//                 <p className="text-white text-[12px] ">
//                   <Link href="/privacy-policy">Privacy-policy</Link>
//                 </p>
//               </div>

//               <div className="flex items-center justify-center space-x-2">
//                 <p className="text-white text-[12px] ">
//                   <Link href="/return">Return & refund</Link>
//                 </p>
//                 {/* <p className="text-white text-[12px] ">
//                   <Link href="/refund">Refund policy</Link>
//                 </p> */}
//               </div>
//             </div>
//           </div>
//           <div className="text-white text-xs flex xls:space-x-1 xls:pt-3 xms:pt-2 xs:pt-2 items-center justify-center">
//             <p>
//               Copyright © 2023 <span className="text-orange-500">{link}</span> ~
//               Developed by
//             </p>
//             <div className="xs:pl-1 xms:pl-1 xls:pl-1 sm:pl-1">
//               <Link
//                 className="hover:underline text-blue-500 font-semibold flex items-center xls:space-x-1 tracking-wider"
//                 href={company_link}
//                 target="_blank"
//               >
//                 <p className="text-xs text-orange-500">{company_name}</p>{" "}
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="bg-secondary w-full py-20 xls:hidden sm:hidden xms:hidden xs:hidden">
//         <div className="grid grid-cols-4 sm:grid-cols-3 xls:grid-cols-1 xms:grid-cols-1 xs:grid-cols-1 gap-x-10 xls:gap-4 xms:gap-4 xs:gap-4  max-w-[85rem] md:max-w-[62rem] xls:max-w-[22rem] xms:max-w-[20rem] xs:max-w-[18rem] mx-auto">
//           {loading ? (
//             <SkeletonTheme
//               baseColor="#fff"
//               highlightColor="#444"
//               borderRadius="0.1rem"
//             >
//               <p>
//                 <Skeleton count={3} />
//               </p>
//               <p>
//                 <Skeleton count={3} />
//               </p>
//             </SkeletonTheme>
//           ) : (
//             <>
//               <div>
//                 <div className="xls:grid xms:grid xs:grid justify-center">
//                   <img
//                     className="h-20 w-56  object-contain"
//                     src={`${hostname}/${data?.logoImg}`}
//                     alt="logo"
//                   />
//                 </div>
//                 <p className="text-white xls:pl-0 xms:pl-0 xs:pl-0 mt-2 text-sm">
//                   {data?.subTitle}
//                 </p>
//               </div>
//               <div>
//                 <p className="text-white uppercase tracking-wider text-xl font-semibold">
//                   Address
//                 </p>
//                 <p className="text-white text-sm py-3">
//                    {data?.address?.house}
//                   {/* exiting feature
//                    Road {data?.address?.road},{" "}
//                   {data?.address?.union}, {data?.address?.district} -{" "}
//                   {data?.address?.zipCode}
//                   */}
//                 </p>
//                 <div className="space-y-2">
//                   <p className="text-white font-semibold text-sm">Email:</p>
//                   <Link
//                     href={`https://mail.google.com/mail/u/0/#search/${data?.email}`}
//                     target="_blank"
//                   >
//                     <p className="text-white text-xs">{data?.email}</p>
//                   </Link>

//                   <p className="text-white font-semibold text-sm">Phone:</p>
//                   <Link href={`tel:${data?.phone}`} target="_blank">
//                     <p className="text-white text-xs">+88{data?.phone}</p>
//                   </Link>
//                 </div>
//               </div>
//             </>
//           )}

//           <div>
//             <p className="text-white text-xl tracking-wider uppercase font-semibold">
//               Information
//             </p>
//             <div className="py-3 space-y-2">
//               <p className="text-white text-sm">
//                 <Link href="/about-us">About-us</Link>
//               </p>

//               <p className="text-white text-sm">
//                 <Link href="/terms-and-conditions">Terms & Conditions</Link>
//               </p>

//               <p className="text-white text-sm">
//                 <Link href="/privacy-policy">Privacy-policy</Link>
//               </p>

//               <p className="text-white text-sm">
//                 <Link href="/return">Return & refund</Link>
//               </p>
//               {/* <p className="text-white text-sm">
//                 <Link href="/refund">Refund policy</Link>
//               </p> */}
//             </div>
//           </div>

//           <div className="pl-[0px] sm:pl-[45px] sm:pt-[10px] ">
//             <p className="text-white text-xl tracking-wider uppercase  font-semibold">
//               Social links
//             </p>
//             <div className="flex space-x-3 py-3">
//               <Link href={`https://wa.me/${data?.phone}`} target="_blank">
//                 {/* <BsWhatsapp size={25} color="#5FFC7B" /> */}
//                 <div className="h-10 w-10 relative">
//                   <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-600 opacity-75"></span>
//                   <div className="h-10 w-10 absolute rounded-full bg-green-500  flex justify-center items-center">
//                     <svg
//                       className="fill-current text-white absolute h-6 w-6"
//                       xmlns="http://www.w3.org/2000/svg"
//                       viewBox="0 0 24 24"
//                       width="24"
//                       height="24"
//                     >
//                       <path fill="none" d="M0 0h24v24H0z" />
//                       <path d="M7.253 18.494l.724.423A7.953 7.953 0 0 0 12 20a8 8 0 1 0-8-8c0 1.436.377 2.813 1.084 4.024l.422.724-.653 2.401 2.4-.655zM2.004 22l1.352-4.968A9.954 9.954 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10a9.954 9.954 0 0 1-5.03-1.355L2.004 22zM8.391 7.308c.134-.01.269-.01.403-.004.054.004.108.01.162.016.159.018.334.115.393.249.298.676.588 1.357.868 2.04.062.152.025.347-.093.537a4.38 4.38 0 0 1-.263.372c-.113.145-.356.411-.356.411s-.099.118-.061.265c.014.056.06.137.102.205l.059.095c.256.427.6.86 1.02 1.268.12.116.237.235.363.346.468.413.998.75 1.57 1l.005.002c.085.037.128.057.252.11.062.026.126.049.191.066a.35.35 0 0 0 .367-.13c.724-.877.79-.934.796-.934v.002a.482.482 0 0 1 .378-.127c.06.004.121.015.177.04.531.243 1.4.622 1.4.622l.582.261c.098.047.187.158.19.265.004.067.01.175-.013.373-.032.259-.11.57-.188.733a1.155 1.155 0 0 1-.21.302 2.378 2.378 0 0 1-.33.288 3.71 3.71 0 0 1-.125.09 5.024 5.024 0 0 1-.383.22 1.99 1.99 0 0 1-.833.23c-.185.01-.37.024-.556.014-.008 0-.568-.087-.568-.087a9.448 9.448 0 0 1-3.84-2.046c-.226-.199-.435-.413-.649-.626-.89-.885-1.562-1.84-1.97-2.742A3.47 3.47 0 0 1 6.9 9.62a2.729 2.729 0 0 1 .564-1.68c.073-.094.142-.192.261-.305.127-.12.207-.184.294-.228a.961.961 0 0 1 .371-.1z" />
//                     </svg>
//                   </div>
//                 </div>
//               </Link>

//               <Link href={`${data?.socialLinks?.facebook}`} target="_blank">
//                 <div className="mt-2">
//                   <BsFacebook size={25} color="#fff" />
//                 </div>
//               </Link>
//             </div>
//           </div>

//           <div>{/* <MessengerCustomerChat pageId="103424579277922" /> */}</div>
//         </div>
//       </div>
//       <div className="bg-white xls:hidden xms:hidden xs:hidden sm:hidden">
//         <div className=" flex items-center justify-between max-w-[85rem] md:max-w-[62rem] xls:max-w-[22rem] xms:max-w-[20rem] xs:max-w-[18rem] mx-auto py-2">
//           <p className="text-black text-xs">Copyright © 2023, {link}</p>

//           <div className="text-black text-xs flex space-x-2 items-center">
//             <p>Developed by</p>
//             <div>
//               <Link
//                 className="hover:underline text-blue-500 font-semibold flex items-center space-x-1 tracking-wider"
//                 href={company_link}
//                 target="_blank"
//               >
//                 <p className="text-sm">{company_name}</p>
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Footer

// src/components/Footer.js
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 mt-4">
      <div className="container mx-auto px-4 hidden lg:flex justify-between gap-8">
        <div className="w-72">
          <h2 className="text-2xl font-bold mb-2">
            <span className="text-white">evaly</span>
          </h2>
          <small className="mt-2">
            Largest product search engine, maximum categorized online shopping
            mall and quickest home delivery system.
          </small>
          <div className="flex space-x-4 mt-4">
            <span>Follow Us</span>
            <a href="#" aria-label="Facebook">
              <svg
                className="w-5 h-5 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M22 12C22 5.373 16.627 0 10 0S-2 5.373-2 12c0 6.065 4.388 11.076 10.125 11.92v-8.428h-3.047v-3.491h3.047v-2.659c0-3.035 1.793-4.722 4.533-4.722 1.313 0 2.684.236 2.684.236v2.947h-1.513c-1.491 0-1.957.927-1.957 1.877v2.321h3.331l-.532 3.491h-2.799v8.428C17.613 23.075 22 18.065 22 12z" />
              </svg>
            </a>
            <a href="#" aria-label="Instagram">
              <svg
                className="w-5 h-5 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.054 1.95.24 2.404.392a4.923 4.923 0 011.786 1.057 4.923 4.923 0 011.057 1.786c.152.454.338 1.234.392 2.404.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.054 1.17-.24 1.95-.392 2.404a4.923 4.923 0 01-1.057 1.786 4.923 4.923 0 01-1.786 1.057c-.454.152-1.234.338-2.404.392-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.054-1.95-.24-2.404-.392a4.923 4.923 0 01-1.786-1.057 4.923 4.923 0 01-1.057-1.786c-.152-.454-.338-1.234-.392-2.404-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.054-1.17.24-1.95.392-2.404a4.923 4.923 0 011.057-1.786 4.923 4.923 0 011.786-1.057c.454-.152 1.234-.338 2.404-.392 1.266-.058 1.646-.07 4.85-.07zm0-2.163C8.756 0 8.36 0 7.091.07 5.819.139 4.872.304 4.124.528 3.356.759 2.682 1.072 2.071 1.682c-.61.61-.923 1.284-1.154 2.053-.224.748-.389 1.695-.458 2.967C.001 8.36 0 8.756 0 12s.001 3.64.07 4.909c.069 1.272.234 2.219.458 2.967.231.769.544 1.443 1.154 2.053.61.61 1.284.923 2.053 1.154.748.224 1.695.389 2.967.458 1.27.069 1.666.07 4.909.07s3.64-.001 4.909-.07c1.272-.069 2.219-.234 2.967-.458.769-.231 1.443-.544 2.053-1.154.61-.61.923-1.284 1.154-2.053.224-.748.389-1.695.458-2.967.069-1.27.07-1.666.07-4.909s-.001-3.64-.07-4.909c-.069-1.272-.234-2.219-.458-2.967-.231-.769-.544-1.443-1.154-2.053-.61-.61-1.284-.923-2.053-1.154-.748-.224-1.695-.389-2.967-.458C15.64.001 15.244 0 12 0z" />
                <path d="M12 5.838c-3.404 0-6.162 2.758-6.162 6.162s2.758 6.162 6.162 6.162 6.162-2.758 6.162-6.162-2.758-6.162-6.162-6.162zm0 10.325a4.163 4.163 0 110-8.325 4.163 4.163 0 010 8.325zM18.406 4.594a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z" />
              </svg>
            </a>
            <a href="#" aria-label="YouTube">
              <svg
                className="w-5 h-5 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M19.615 3.184c-2.634-.392-13.596-.392-16.23 0C1.928 3.421.93 4.411.703 6.225c-.223 1.75-.223 5.435-.223 5.435s0 3.684.223 5.435c.227 1.814 1.225 2.804 2.682 3.041 2.634.392 13.596.392 16.23 0 1.457-.237 2.455-1.227 2.682-3.041.223-1.75.223-5.435.223-5.435s0-3.684-.223-5.435c-.227-1.814-1.225-2.804-2.682-3.041zm-11.964 8.641V8.164l5.494 1.831-5.494 1.83z" />
              </svg>
            </a>
          </div>
        </div>
        <div>
          <h3 className="font-semibold mb-2">
            <span className="text-white">Contact Us</span>
          </h3>
          <small>House #8, Road #14,</small>
          <br />
          <small>Dhanmondi, Dhaka-1209.</small>
          <br />
          <small>Email: support@e-valy.com</small>
        </div>
        <div>
          <h3 className="font-semibold mb-2">
            <span className="text-white">Let Us Help You</span>
          </h3>
          <ul>
            <li className="list-none">
              <a href="#" className="hover:underline">
                <small>Your Account</small>
              </a>
            </li>
            <li className="list-none">
              <a href="#" className="hover:underline">
                <small>Your Order</small>
              </a>
            </li>
            <li className="list-none">
              <a href="#" className="hover:underline">
                <small>Terms & Conditions</small>
              </a>
            </li>
            <li className="list-none">
              <a href="#" className="hover:underline">
                <small>Return & Refund Policy</small>
              </a>
            </li>
            <li className="list-none">
              <a href="#" className="hover:underline">
                <small>FAQ</small>
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-2">
            <span className="text-white">Get Evaly App</span>
          </h3>
          <div className=" ">
            <div>
              <a href="#" aria-label="Google Play Store">
                <img
                  src="path/to/google-play.png"
                  alt="Get it on Google Play"
                  className="h-12"
                />
              </a>
            </div>
            <div>
              <a href="#" aria-label="Apple App Store">
                <img
                  src="path/to/app-store.png"
                  alt="Download on the App Store"
                  className="h-12"
                />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="container  lg:hidden gap-8">
        <p>
          House #8, Road #14, Dhanmondi, Dhaka-1209. Email: support@e-valy.com.
          Mobile:+8801454512112
        </p>
      </div>
      <div className="text-center mt-8 text-gray-400">
        <small>© 2024 E-valy.com Limited. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
