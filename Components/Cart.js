import { useStatus } from '@/context/contextStatus';
import {hostname} from '@/lib/config';
import Lottie from "lottie-react";
import { useRouter } from 'next/router';
import { setCookie } from 'nookies';
import { useEffect, useRef, useState } from 'react';
import { BiMinus, BiPlus } from 'react-icons/bi';
import { TiDeleteOutline } from "react-icons/ti";
import { toast } from 'react-toastify';
import EmprtyCart from '../Components/EmptyCart.json';


const Cart = ({ cartItems, setCartItems }) => {
    

   
  const { isCartOpen, setIsCartOpen,renderMe,setIsRenderMe,token } = useStatus();

  const wrapperRef = useRef(null);

  const router = useRouter();
  const [count, setCount] = useState(1);

  const handleClick = () => {
    setIsCartOpen(false);
  };

  useEffect(() => {
     setCartItems(cartItems);
  }, [renderMe]);

  const handleRoute = () => {
      router.push(`/checkout`);
      setIsCartOpen(false); 

  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setIsCartOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [wrapperRef, isCartOpen]);

  const AddCart = (index) => {
    if (cartItems[index]?.quantity < cartItems[index]?.stock) {
        
      cartItems[index].quantity += count;
      setCartItems(cartItems);
      setCookie(null, "lazmaCart", JSON.stringify(cartItems), {
        maxAge: 30 * 24 * 60 * 60,
        path: "/",
      });
      setIsRenderMe(!renderMe);
    } else {
      toast.error(`You cant add more product`);
    }
  };

  const SubCart = (index) =>{
             if(cartItems[index]?.quantity > 0){
                 cartItems[index].quantity -= count
                   setCartItems(cartItems);
                  setCookie(null, "lazmaCart", JSON.stringify(cartItems), {
                    maxAge: 30 * 24 * 60 * 60,
                    path: "/",
                  });
                } 
               if(cartItems[index]?.quantity === 0){
                cartItems?.splice(index,1);
                setCartItems(cartItems);
                  setCookie(null, "lazmaCart", JSON.stringify(cartItems), {
                    maxAge: 30 * 24 * 60 * 60,
                    path: "/",
                  });

                  toast(`product removed successfully`);
            
                }  
                setIsRenderMe(!renderMe);
  }
 
  const DeleteItem = (index) =>{
         cartItems?.splice(index, 1);
         setCartItems(cartItems);
         setCookie(null, "lazmaCart", JSON.stringify(cartItems), {
           maxAge: 30 * 24 * 60 * 60,
           path: "/",
         });

         toast(`product removed successfully`);
        setIsRenderMe(!renderMe);
  }




  return (
    <div
      className={`${
        isCartOpen
          ? "translate-x-[16px] duration-500 z-20 fixed top-[70px] sm:top-[50px] xls:top-[50px] xms:top-[50px] xs:top-[50px] bottom-0 bg-white w-[340px] xs:w-[320px] right-[15px]  shadow-lg"
          : "translate-x-96 duration-500 z-20 fixed top-[70px] sm:top-[50px] xls:top-[50px] xms:top-[50px] xs:top-[50px] bottom-0 bg-white w-[340px] xs:w-[320px]  right-[15px] shadow-lg"
      } `}
      ref={wrapperRef}
    >
      {/* <div className="relative h-full top-[0px] left-0 right-0 bottom-[90px] border border-red-500">

      </div> */}
      <div className="relative h-full top-[0px] left-0 right-0 bottom-0">
        <div className="bg-gray-700 flex justify-between items-center py-2 px-4 absolute w-full top-0 h-[40px]">
          <div onClick={() => handleClick()} className="cursor-pointer">
            <svg
              className="fill-current text-white"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
            >
              <path fill="none" d="M0 0h24v24H0z" />
              <path d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z" />
            </svg>
          </div>
          <p className="text-white flex justify-center font-semibold tracking-wider">
            Cart ({cartItems?.length})
          </p>
        </div>
        {cartItems?.length > 0 ? (
          <div className="absolute overflow-y-auto top-[40px] bottom-[60px] w-full">
            <div className="mt-4 space-y-4">
              {cartItems?.map((item, index) => (
                <div className="px-2" key={index}>
                  <p className="tracking-wider text-xs dark:text-black">
                    {item?.name}
                    {item?.variation  == null ? null : (
                      <span className="font-semibold text-black text-xs tracking-wider lowercase">
                        (
                        {item?.variation?.attributeOpts?.map(
                          (val, idx, arr) =>
                            val.name + (idx != arr.length - 1 ? "-" : "")
                        )}
                        )
                      </span>
                    )}
                  </p>

                  <div className="flex items-center space-x-4">
                    <div className="h-12 w-12">
                      {typeof item?.image == "string" ? (
                        <img
                          src={`${hostname}/${item?.image}`}
                          className="h-full w-full object-contain"
                        />
                      ) : item?.image?.length > 0 ? (
                        <img
                          src={`${hostname}/${item?.image[0]}`}
                          className="h-full w-full object-contain"
                        />
                      ) : (
                        <img
                          src="/image/placeholder_image.png"
                          className="h-full w-full object-contain"
                        />
                      )}
                    </div>

                    <div className="flex items-center justify-between mt-2">
                      <div className="flex items-center">
                        <div
                          className="bg-gray-100 px-3 py-2 cursor-pointer"
                          onClick={() => SubCart(index)}
                        >
                          <BiMinus
                            size={15}
                            color="#000"
                            className="font-semibold"
                          />
                        </div>
                        <input
                          value={item?.quantity}
                          style={{ outline: "none" }}
                          className="border-2 border-gray-100 p-[1px] w-[50px] text-center text-black dark:bg-white"
                        />
                        <div
                          className="bg-gray-100 px-3 py-2 cursor-pointer"
                          onClick={() => AddCart(index)}
                        >
                          <BiPlus
                            size={15}
                            color="#000"
                            className="font-semibold"
                          />
                        </div>
                      </div>
                    </div>
                    <h2 className="font-semibold text-lg ">
                      <span className="text-sm dark:text-black">
                        ৳ {Number(item?.sellingPrice) * Number(item?.quantity)}
                      </span>
                    </h2>
                    <div
                      className="cursor-pointer"
                      onClick={() => DeleteItem(index)}
                    >
                      <TiDeleteOutline
                        size={25}
                        className="font-semibold text-red-500"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="w-60  flex mx-auto h-full items-center">
            <Lottie loop={true} animationData={EmprtyCart} />
          </div>
        )}
        <div className="absolute h-[50px] bottom-0 left-0 w-full bg-white border-t border-gray-300">
          <div className="grid grid-cols-2 w-full">
            <div>
              <p className="text-black text-center">Cart</p>
              <p className="text-black text-center">
                ৳{" "}
                {cartItems?.reduce(
                  (a, b) =>
                    a +
                    (b?.sellingPrice
                      ? b?.sellingPrice * b?.quantity
                      : b?.sellingPrice * b?.quantity),
                  0
                )}
              </p>
            </div>

            <p
              className="bg-primary text-center py-2 text-white cursor-pointer"
              onClick={() => handleRoute()}
            >
              Checkout
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;


