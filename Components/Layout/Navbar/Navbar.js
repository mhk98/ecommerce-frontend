// import { useStatus } from "@/context/contextStatus";
// import {hostname} from "@/lib/config";
// import postRequest from "@/lib/postRequest";
// import request from "@/lib/request";
// import { Menu, Transition } from "@headlessui/react";
// import Image from "next/image";
// import Link from "next/link";
// import { useRouter } from "next/router";
// import { destroyCookie, parseCookies } from "nookies";
// import { Fragment, useEffect, useRef, useState } from "react";
// import { BiSearch } from "react-icons/bi";
// import { BsCart3, BsCart4 } from "react-icons/bs";
// import { GiHamburgerMenu } from "react-icons/gi";
// import { RxCross2 } from "react-icons/rx";
// import { toast } from "react-toastify";

// const Navbar = () => {
//   const {
//     token,
//     setToken,
//     setUserData,
//     cartItems,
//     image,
//     setImage,
//     isAlive,
//     flag,
//     setFlag,
//     setSideCategory,
//     shakeAnimation,
//     wishCall,
//     wishData,
//     setWishData,
//     userPhone
//   } = useStatus();
//   const cookie = parseCookies();

//   const wrapperRef = useRef(null);

//   const [searchKey, setsearchKey] = useState("");
//   const { isCartOpen, setIsCartOpen } = useStatus();
//   const [searchData, setsearchData] = useState([]);
//   const [userProfileData, setUserProfileData] = useState({});
//   const [data,setData] = useState({});

//   const router = useRouter();

//     const [serachboxOpen, setSearchboxOpen] = useState(false);

//   const handleClick = () => {
//     setFlag(true);
//   };
//   useEffect(()=>{

//     const getData = async() =>{
//           const res = await request(`setting/view`);

//           setData(res?.data);
//     }
//     getData();

//   },[])
//   useEffect(() => {
//     if(token){
//       const getData = async () => {
//         let res = await request(`customer/wishlist/fetch`);

//         if (res?.success) {
//           setWishData(res?.data);
//         }
//       };
//       getData();

//     }

//   }, [wishCall]);

//   useEffect(() => {
//     function handleClickOutside() {
//       setFlag(false);
//       if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
//         setsearchData([]);
//       }
//     }
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, [wrapperRef]);

//   useEffect(() => {
//     if(token){
//       const getData = async () => {
//         let res = await request(`customer/profile-view/${cookie?.userId}`);
//         setUserProfileData(res?.data);
//       };
//       getData();

//     }

//   }, [isAlive, cookie?.userId]);

//   useEffect(() => {
//     setImage(userProfileData?.image);
//   }, [userProfileData]);

//   const handleCart = () => {

//     setIsCartOpen(!isCartOpen);

//   };

//   const search = async (val) => {
//     setsearchKey(val);
//     const data = {
//       value: val,
//     };
//     let res = await postRequest(
//       "product/search-by-sku-or-name?page=1&limit=6&userType=CUSTOMER",
//       data
//     );
//     if (res?.success) {
//       setsearchData(res?.data);
//     }
//   };

//   const handleProfile = () => {
//     router.push(`/profile`);
//   };

//   const handleLogout = () => {
//     toast("Successfully logged out!");

//     setToken(null);
//     setUserData(null);
//     destroyCookie({}, "token", {
//       path: "/",
//     });
//     destroyCookie({}, "user", {
//       path: "/",
//     });
//     destroyCookie({}, "userId", {
//       path: "/",
//     });

//     router.push("/");
//   };

//   const handleRoute = (item) =>{
//     router.replace(`/products/${item?.slug}`);
//   }

//   const handleSearchClick = () => {
//     setSearchboxOpen(!serachboxOpen);
//   };

//   const handleWishRoute = () =>{
//      if(token){
//         router?.push(`/wishlist`);

//      } else {
//         toast.error(`You need to login first`);
//      }
//   }

//   return (
//     <div className="fixed w-full z-20 top-0 bg-white shadow py-4 sm:py-1 xls:py-0 xms:py-0 xs:py-0">
//       <div className="max-w-7xl xls:max-w-[25rem] xs:max-w-[20rem] md:max-w-[62rem] xxl:max-w-[110rem] mx-auto">
//         <div className="flex items-center justify-between sm:hidden xls:hidden xms:hidden xs:hidden ">
//           <Link href={`/`}>
//             <div className="flex justify-center lg:w-auto lg:flex-1">
//               <p className="text-4xl font-semibold text-primary"> <img
//                     className="w-56  object-contain  max-h-[40px]"
//                     src={`${hostname}/${data?.logoImg}`}
//                     alt="logo"
//                   /></p>
//             </div>
//           </Link>
//           <div>
//             {/* <div className="flex items-center bg-gray-200  rounded-md"> */}
//             <div className="flex items-center bg-white  border-2 border-primary rounded-full pl-2">
//               <div className="relative">
//                 <div>
//                   <input
//                     placeholder="Looking for something? ...."
//                     className={`${
//                       token ? "w-[525px]" : "w-[525px]"
//                     }  md:w-[450px] sm:w-[480px] xls:w-[210px] xms:w-[190px] xs:w-[130px] px-3 bg-white outline-none placeholder:text-sm`}
//                     onClick={handleClick}
//                     onChange={(e) => search(e.target.value)}
//                     type="text"
//                     value={searchKey}
//                   />
//                 </div>

//                 {flag && (
//                   <div
//                     className="bg-white xxl:w-full xl:w-full lg:w-full md:w-full sm:w-full mx-auto h-[400px] xls:w-[290px] xms:w-[280px] xs:w-[287px] absolute z-20 xs:left-[-78px] overflow-y-auto top-[35px] xs:top-[33px] shadow-md drop-shadow-md"
//                     ref={wrapperRef}
//                   >
//                     {!searchKey && (
//                       <div>
//                         <div className="h-40 w-40 mx-auto mt-6">
//                           <img src="/image/coding.png" />
//                         </div>
//                         <p className="text-gray-400 text-center pt-4">
//                           Start typing to search
//                         </p>
//                       </div>
//                     )}
//                   </div>
//                 )}
//                 {searchData?.length ? (
//                   <div
//                     className="bg-white xxl:w-full xl:w-full lg:w-full md:w-full sm:w-full mx-auto h-[400px] xls:w-[290px] xms:w-[280px] xs:w-[287px] absolute z-20 xs:left-[-78px] xs:top-[33px] overflow-y-auto"
//                     ref={wrapperRef}
//                   >
//                     {searchData?.map((item, index) => (
//                       <div onClick={() => handleRoute(item)} key={index}>
//                         <div
//                           onClick={() => {
//                             setsearchData([]);
//                             setsearchKey("");
//                           }}
//                           key={index}
//                           className="m-2 flex items-center justify-start border-[1px] cursor-pointer hover:border-primary"
//                         >
//                           <div className="w-[70px] h-[70px] relative mr-10">
//                             <Image
//                               alt=""
//                               fill
//                               src={`${hostname}/${item?.galleryImage[0]}`}
//                             />
//                           </div>
//                           <div>
//                             <span className="mr-10 text-black text-sm">
//                               {item?.name?.slice(0, 50)}
//                             </span>
//                             <div className="flex space-x-2 items-center text-xs">
//                               {item?.isFlashDeal ? (
//                                 <>
//                                   {item?.isVariant == false ? (
//                                     <>
//                                       {" "}
//                                       <p className="text-[14px] xs:text-xs xms:text-xs font-semibold text-red-600 text-center">
//                                         ৳ {item?.nonVariation?.flashPrice}
//                                       </p>{" "}
//                                       <p className="text-[12px] xs:text-xs xms:text-xs font-semibold text-green-700 text-center line-through">
//                                         TK. {item?.nonVariation?.regularPrice}
//                                       </p>{" "}
//                                     </>
//                                   ) : (
//                                     <>
//                                       {" "}
//                                       <p className="text-[14px] xs:text-xs xms:text-xs font-semibold text-red-600 text-center">
//                                         ৳ {item?.variations[0]?.flashPrice}
//                                       </p>
//                                       <p className="text-[12px] xs:text-xs xms:text-xs font-semibold text-green-700 text-center line-through">
//                                         TK. {item?.variations[0]?.regularPrice}
//                                       </p>
//                                     </>
//                                   )}
//                                 </>
//                               ) : (
//                                 <>
//                                   {item?.isVariant == false ? (
//                                     <>
//                                       <p className="text-[14px] xs:text-xs xms:text-xs font-semibold text-red-600 text-center">
//                                         ৳ {item?.nonVariation?.sellingPrice}
//                                       </p>
//                                       <>
//                                         {item?.nonVariation?.sellingPrice ==
//                                         item?.nonVariation
//                                           ?.regularPrice ? null : (
//                                           <p className="text-[12px] xs:text-xs xms:text-xs font-semibold text-green-700 text-center line-through">
//                                             TK.{" "}
//                                             {item?.nonVariation?.regularPrice}
//                                           </p>
//                                         )}
//                                       </>
//                                     </>
//                                   ) : (
//                                     <>
//                                       <p className="text-[14px] xs:text-xs xms:text-xs font-semibold text-red-600 text-center">
//                                         ৳ {item?.variations[0]?.sellingPrice}
//                                       </p>

//                                       <>
//                                         {item?.variations[0]?.sellingPrice ==
//                                         item?.variations[0]
//                                           ?.regularPrice ? null : (
//                                           <p className="text-[12px] xs:text-xs xms:text-xs font-semibold text-green-700 text-center line-through">
//                                             TK.{" "}
//                                             {item?.variations[0]?.regularPrice}
//                                           </p>
//                                         )}
//                                       </>
//                                     </>
//                                   )}
//                                 </>
//                               )}
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 ) : null}
//               </div>

//               <div
//                 className="flex items-center  rounded-r-full py-2 px-4 cursor-pointer z-30"
//                 onClick={() => search(searchKey)}
//               >
//                 <p className="block">
//                   <svg
//                     className="fill-current text-primary h-5 w-5"
//                     xmlns="http://www.w3.org/2000/svg"
//                     viewBox="0 0 24 24"
//                   >
//                     <path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z"></path>
//                   </svg>
//                 </p>
//               </div>
//             </div>
//           </div>
//           <div className="flex items-center space-x-2 font-medium text-lg text-black">
//             <div>
//               <svg
//                 className="h-6 w-6"
//                 xmlns="http://www.w3.org/2000/svg"
//                 viewBox="0 0 24 24"
//               >
//                 <path d="M9.36556 10.6821C10.302 12.3288 11.6712 13.698 13.3179 14.6344L14.2024 13.3961C14.4965 12.9845 15.0516 12.8573 15.4956 13.0998C16.9024 13.8683 18.4571 14.3353 20.0789 14.4637C20.599 14.5049 21 14.9389 21 15.4606V19.9234C21 20.4361 20.6122 20.8657 20.1022 20.9181C19.5723 20.9726 19.0377 21 18.5 21C9.93959 21 3 14.0604 3 5.5C3 4.96227 3.02742 4.42771 3.08189 3.89776C3.1343 3.38775 3.56394 3 4.07665 3H8.53942C9.0611 3 9.49513 3.40104 9.5363 3.92109C9.66467 5.54288 10.1317 7.09764 10.9002 8.50444C11.1427 8.9484 11.0155 9.50354 10.6039 9.79757L9.36556 10.6821ZM6.84425 10.0252L8.7442 8.66809C8.20547 7.50514 7.83628 6.27183 7.64727 5H5.00907C5.00303 5.16632 5 5.333 5 5.5C5 12.9558 11.0442 19 18.5 19C18.667 19 18.8337 18.997 19 18.9909V16.3527C17.7282 16.1637 16.4949 15.7945 15.3319 15.2558L13.9748 17.1558C13.4258 16.9425 12.8956 16.6915 12.3874 16.4061L12.3293 16.373C10.3697 15.2587 8.74134 13.6303 7.627 11.6707L7.59394 11.6126C7.30849 11.1044 7.05754 10.5742 6.84425 10.0252Z"></path>
//               </svg>
//             </div>
//             <Link href={`tel:${userPhone}`} target="_blank">
//               <p>{userPhone}</p>
//             </Link>
//           </div>
//           <div className="flex items-center space-x-10 justify-between">
//             {token ? (
//               <div
//                 className="relative cursor-pointer"
//                 onClick={() => handleWishRoute()}
//               >
//                 <svg
//                   className="h-7 w-7"
//                   xmlns="http://www.w3.org/2000/svg"
//                   viewBox="0 0 24 24"
//                 >
//                   <path d="M12.001 4.52853C14.35 2.42 17.98 2.49 20.2426 4.75736C22.5053 7.02472 22.583 10.637 20.4786 12.993L11.9999 21.485L3.52138 12.993C1.41705 10.637 1.49571 7.01901 3.75736 4.75736C6.02157 2.49315 9.64519 2.41687 12.001 4.52853ZM18.827 6.1701C17.3279 4.66794 14.9076 4.60701 13.337 6.01687L12.0019 7.21524L10.6661 6.01781C9.09098 4.60597 6.67506 4.66808 5.17157 6.17157C3.68183 7.66131 3.60704 10.0473 4.97993 11.6232L11.9999 18.6543L19.0201 11.6232C20.3935 10.0467 20.319 7.66525 18.827 6.1701Z"></path>
//                 </svg>
//                 <div className="bg-red-500 rounded-full h-4 w-4 flex justify-center items-center absolute top-[-4px] right-[-8px]">
//                   <p className="text-white text-xs">{wishData?.length}</p>
//                 </div>
//               </div>
//             ) : null}

//             {/* <Link href="/auth">
//               <div className="flex items-center justify-between">
//                 <div className="px-1">
//                   <FaRegUser color="#000" size={20} />
//                 </div>
//                 <span>User sign</span>
//               </div>
//             </Link> */}
//             <Menu
//               as="div"
//               className="ml-3 relative sm:hidden xls:hidden xms:hidden xs:hidden"
//             >
//               {({ open }) => (
//                 <Fragment>
//                   <div>
//                     <Menu.Button className="max-w-xs bg-white flex items-center text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:myblue-500">
//                       <span className="sr-only">Open user menu</span>
//                       {token ? (
//                         <>
//                           {image ? (
//                             <img
//                               src={`${hostname}/${image}`}
//                               className="object-cover h-10 w-10 rounded-full"
//                             />
//                           ) : (
//                             <div className="h-9 w-9 rounded-full border border-gray-300 flex justify-center items-center">
//                               <svg
//                                 className="fill-current text-black h-5 w-5"
//                                 xmlns="http://www.w3.org/2000/svg"
//                                 viewBox="0 0 24 24"
//                                 width="24"
//                                 height="24"
//                               >
//                                 <path fill="none" d="M0 0h24v24H0z" />
//                                 <path d="M4 22a8 8 0 1 1 16 0h-2a6 6 0 1 0-12 0H4zm8-9c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6zm0-2c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4z" />
//                               </svg>
//                             </div>
//                           )}
//                         </>
//                       ) : (
//                         <Link href={`/auth`}>
//                           <div className="h-9 w-9 rounded-full border border-gray-300 flex justify-center items-center">
//                             <svg
//                               className="fill-current text-black h-5 w-5"
//                               xmlns="http://www.w3.org/2000/svg"
//                               viewBox="0 0 24 24"
//                               width="24"
//                               height="24"
//                             >
//                               <path fill="none" d="M0 0h24v24H0z" />
//                               <path d="M4 22a8 8 0 1 1 16 0h-2a6 6 0 1 0-12 0H4zm8-9c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6zm0-2c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4z" />
//                             </svg>
//                           </div>
//                         </Link>
//                       )}
//                     </Menu.Button>
//                   </div>
//                   {!token ? null : (
//                     <Transition
//                       show={open}
//                       as={Fragment}
//                       enter="transition ease-out duration-100"
//                       enterFrom="transform opacity-0 scale-95"
//                       enterTo="transform opacity-100 scale-100"
//                       leave="transition ease-in duration-75"
//                       leaveFrom="transform opacity-100 scale-100"
//                       leaveTo="transform opacity-0 scale-95"
//                     >
//                       <Menu.Items className="origin-top-right absolute z-40 static right-0 mt-4 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
//                         <Menu.Item>
//                           {({ active }) => (
//                             <div
//                               className="hover:bg-primary hover:text-white block px-4 py-2 text-sm text-gray-700 cursor-pointer"
//                               onClick={() => handleProfile()}
//                             >
//                               Profile
//                             </div>
//                           )}
//                         </Menu.Item>

//                         <Menu.Item>
//                           {({ active }) => (
//                             <div
//                               className="hover:bg-primary hover:text-white block px-4 py-2 text-sm text-gray-700 cursor-pointer"
//                               onClick={handleLogout}
//                             >
//                               Sign Out
//                             </div>
//                           )}
//                         </Menu.Item>
//                       </Menu.Items>
//                     </Transition>
//                   )}
//                 </Fragment>
//               )}
//             </Menu>
//           </div>
//         </div>

//         <div className={`xls:block xms:block xs:block sm:block hidden`}>
//           <div className="relative">
//             <div className="flex justify-between items-center px-3 bg-white py-2">
//               <div
//                 onClick={() => {
//                   setSideCategory(true);
//                 }}
//               >
//                 <GiHamburgerMenu size={20} color="#000" />
//               </div>

//               <Link href={`/`}>
//                 <div className="flex justify-center lg:w-auto lg:flex-1">
//                   <p className="text-3xl font-extrabold text-primary">
//                   <img
//                      src={`${hostname}/${data?.logoImg}`}
//                      className="object-cover h-10 w-15"
//                      alt="logo"
//                     />
//                   </p>
//                 </div>
//               </Link>

//               <div className="flex items-center space-x-4">
//                 <div>
//                   {serachboxOpen ? (
//                     <div onClick={handleSearchClick} className="cursor-pointer">
//                       <RxCross2 size={25} color="#000" />
//                     </div>
//                   ) : (
//                     <div onClick={handleSearchClick} className="cursor-pointer">
//                       <BiSearch size={25} color="#000" />
//                     </div>
//                   )}
//                 </div>
//                 <div
//                   className={`relative ${
//                     shakeAnimation ? "shake-animation" : ""
//                   } cursor-pointer`}
//                   onClick={() => handleCart()}
//                 >
//                   <BsCart4 color="#000" size={25} />
//                   <p className="absolute top-[-10px] left-[18px] text-xs text-white flex justify-center items-center bg-red-600 rounded-full h-4 w-4">
//                     {cartItems?.length}
//                   </p>
//                 </div>
//               </div>
//             </div>
//             {serachboxOpen && (
//               <div className="absolute top-1 sm:w-[400px] xls:w-[270px] xms:w-[250px] xs:w-[200px] left-10 sm:left-40  border-[#d1d5db] mt-[5px]">
//                 <div>
//                   <input
//                     className="w-full py-[6px] px-2 rounded-lg border border-primary outline-none placeholder-black bg-white"
//                     placeholder="Search products...."
//                     onClick={handleClick}
//                     onChange={(e) => search(e.target.value)}
//                     type="text"
//                     value={searchKey}
//                   />

//                   {searchData?.length ? (
//                     <div
//                       className="bg-white xxl:w-full xl:w-full lg:w-full md:w-full sm:w-full mx-auto h-[400px]  xls:w-[350px] xms:w-[320px] xs:w-[287px] absolute z-20 xs:left-[18px]  overflow-y-auto shadow-lg drop-shadow-md"
//                       ref={wrapperRef}
//                     >
//                       {searchData?.map((item, index) => (
//                         <div onClick={() => handleRoute(item)} key={index}>
//                           <div
//                             onClick={() => {
//                               setsearchData([]);
//                               setsearchKey("");
//                             }}
//                             key={index}
//                             className="m-2 flex items-center justify-start border-[1px] cursor-pointer hover:border-primary"
//                           >
//                             <div className="w-[70px] h-[70px] relative mr-10">
//                               <Image
//                                 alt=""
//                                 fill
//                                 src={`${hostname}/${item?.galleryImage[0]}`}
//                               />
//                             </div>
//                             <div>
//                               <span className="mr-10 text-black text-sm">
//                                 {item?.name?.slice(0, 50)}
//                               </span>
//                               <div className="flex space-x-2 items-center text-xs">
//                                 {item?.isFlashDeal ? (
//                                   <>
//                                     {item?.isVariant == false ? (
//                                       <>
//                                         {" "}
//                                         <p className="text-[14px] xs:text-xs xms:text-xs font-semibold text-red-600 text-center">
//                                           ৳ {item?.nonVariation?.flashPrice}
//                                         </p>{" "}
//                                         <p className="text-[12px] xs:text-xs xms:text-xs font-semibold text-green-700 text-center line-through">
//                                           TK. {item?.nonVariation?.regularPrice}
//                                         </p>{" "}
//                                       </>
//                                     ) : (
//                                       <>
//                                         {" "}
//                                         <p className="text-[14px] xs:text-xs xms:text-xs font-semibold text-red-600 text-center">
//                                           ৳ {item?.variations[0]?.flashPrice}
//                                         </p>
//                                         <p className="text-[12px] xs:text-xs xms:text-xs font-semibold text-green-700 text-center line-through">
//                                           TK.{" "}
//                                           {item?.variations[0]?.regularPrice}
//                                         </p>
//                                       </>
//                                     )}
//                                   </>
//                                 ) : (
//                                   <>
//                                     {item?.isVariant == false ? (
//                                       <>
//                                         <p className="text-[14px] xs:text-xs xms:text-xs font-semibold text-red-600 text-center">
//                                           ৳ {item?.nonVariation?.sellingPrice}
//                                         </p>
//                                         <>
//                                           {item?.nonVariation?.sellingPrice ==
//                                           item?.nonVariation
//                                             ?.regularPrice ? null : (
//                                             <p className="text-[12px] xs:text-xs xms:text-xs font-semibold text-green-700 text-center line-through">
//                                               TK.{" "}
//                                               {item?.nonVariation?.regularPrice}
//                                             </p>
//                                           )}
//                                         </>
//                                       </>
//                                     ) : (
//                                       <>
//                                         <p className="text-[14px] xs:text-xs xms:text-xs font-semibold text-red-600 text-center">
//                                           ৳ {item?.variations[0]?.sellingPrice}
//                                         </p>

//                                         <>
//                                           {item?.variations[0]?.sellingPrice ==
//                                           item?.variations[0]
//                                             ?.regularPrice ? null : (
//                                             <p className="text-[12px] xs:text-xs xms:text-xs font-semibold text-green-700 text-center line-through">
//                                               TK.{" "}
//                                               {
//                                                 item?.variations[0]
//                                                   ?.regularPrice
//                                               }
//                                             </p>
//                                           )}
//                                         </>
//                                       </>
//                                     )}
//                                   </>
//                                 )}
//                               </div>
//                             </div>
//                           </div>
//                         </div>
//                       ))}
//                     </div>
//                   ) : null}
//                   {/* <div className="w-full mt-2">
//                     <button className="bg-primary text-white py-2 w-full text-center">
//                       Search
//                     </button>
//                   </div> */}
//                 </div>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;

import React from "react";
import { BsCart3, BsCart4 } from "react-icons/bs";
import { FaBars, FaRegUser } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="bg-white ">
      <nav className="pt-4 hidden lg:flex justify-between items-center mx-auto max-w-screen-xl px-12">
        <div className="flex justify-between items-center w-28 md:w-auto mb-2 md:mb-0">
          <div className="text-4xl font-extrabold text-black">evaly</div>
        </div>
        <div className="flex items-center" style={{ width: "800px" }}>
          <div className="flex-grow md:flex-grow-0">
            <input
              type="text"
              placeholder="Search in Evaly"
              className="bg-gray-200 rounded-l-lg px-4 py-3 w-full md:w-96"
            />
          </div>
          <button className="bg-gray-800 text-white px-4 py-3 rounded-r-lg">
            Search
          </button>
        </div>
        <div className="flex items-center gap-5 space-x-4 mt-2 md:mt-0">
          <div className="text-xl">
            <BsCart3 size={25} />
          </div>
          <div className="text-xl">
            <a
              href="#"
              className="btn flex items-center gap-2 p-2 border rounded"
            >
              <FaRegUser /> Sign in
            </a>
          </div>
        </div>
      </nav>

      <nav className="shadow-md p-4 lg:hidden flex-col md:flex-row justify-between items-center mx-4 md:mx-16 gap-4 md:gap-12">
        <div className="flex items-center mb-2">
          <div className="flex justify-between items-center w-full md:w-auto mb-2 md:mb-0">
            <div className="text-4xl font-extrabold text-black">evaly</div>
          </div>
          <div className="flex items-center w-full md:w-auto mt-2 md:mt-0 gap-5">
            <div className="text-xl">
              <BsCart3 size={25} />
            </div>
            <div className="text-xl">
              <a
                href=""
                className="btn flex items-center gap-2 p-2 border rounded"
              >
                <FaRegUser /> Sign in
              </a>
            </div>
          </div>
        </div>
        <div className="flex items-center w-full md:w-auto">
          <div className="flex-grow md:flex-grow-0">
            <input
              type="text"
              placeholder="Search in Evaly"
              className="bg-gray-200 rounded-l-lg px-4 py-3 w-full md:w-96 focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <button className="bg-gray-800 text-white px-4 py-3 rounded-r-lg">
            Search
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
