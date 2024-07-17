import AddressSection from '@/Components/CheckoutSection/AddressSection';
import CartoverviewSection from '@/Components/CheckoutSection/CartoverviewSection';
import PaymentSection from '@/Components/CheckoutSection/PaymentSection';
import PromocodoSection from '@/Components/CheckoutSection/PromocodoSection';
import BreadCrumbs from '@/Components/Common/BreadCrumbs';
import { useStatus } from '@/context/contextStatus';
import postRequest from '@/lib/postRequest';
import request from '@/lib/request';
import { RadioGroup } from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/solid";
import jwtDecode from "jwt-decode";
import Head from 'next/head';
import { useRouter } from 'next/router';
import { destroyCookie, setCookie } from 'nookies';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { project_name } from "@/lib/config";

const Checkout = () => {

    const {
      cartItems,
      setCartItems,
      renderMe,
      setIsRenderMe,
      deliveryType,
      setDeliveryType,
      inside,
      outside,
      subside,
      promoDiscount,
      setPromoDiscount,
      token,
      setInside,
      setOutside,
      setOrderObj,
      namePlaceHolder,
      addressPlaceHolder,
      mobilePlaceHolder,
      customerNotesPlaceholder,
    } = useStatus();

     const [total, setTotal] = useState(null);
     const [promo, setPromo] = useState(null);
     const [promoOrder,setPromoOrder] = useState(null);
      const [name, setName] = useState("");
      const [phone, setPhone] = useState("");
      const [address, setAddress] = useState("");
      const [customerId,setCustomerId] = useState(null);
      const [selectedValue, setSelectedValue] = useState(null);
      const [deliveryOption, setDeliveryOption] = useState("outside");
      const [isLoading, setIsLoading] = useState(false);
      const [customerNotes, setCustomerNotes] = useState('')

      const router = useRouter()

      const options = [
        {
          value: "option1",
          label: "Cash on Delivery",
          imageUrl: "/image/checkout/cash.png",
        },
        {
          value: "option2",
          label: "Online Payment",
          imageUrl: "/image/checkout/card.png",
        },
        // Add more options as needed
      ];

      useEffect(()=>{
          setSelectedValue(options[0]?.value)
      },[])

      useEffect(()=>{
          const getData = async() =>{
              let res = await request(`setting/view`);
           
              setInside(res?.data?.deliveryCharge?.inside?.amount);
              setCookie(
                null,
                "INSIDE",
                res?.data?.deliveryCharge?.inside?.amount,
                {
                  maxAge: 30 * 24 * 60 * 60,
                  path: "/",
                }
              );
              setCookie(
                null,
                "OUTSIDE",
                res?.data?.deliveryCharge?.outside?.amount,
                {
                  maxAge: 30 * 24 * 60 * 60,
                  path: "/",
                }
              );
              setOutside(
                res?.data?.deliveryCharge?.outside?.amount
              );
          }
          getData()
      },[])


      useEffect(() => {
        if (deliveryOption == 'inside') {
            setDeliveryType("INSIDE");
            setCookie(null, "deliveryType", "INSIDE", {
              maxAge: 30 * 24 * 60 * 60,
              path: "/",
            });
        } else {
          setDeliveryType("OUTSIDE");
          setCookie(null, "deliveryType", "OUTSIDE", {
            maxAge: 30 * 24 * 60 * 60,
            path: "/",
          });
        }
      }, [deliveryOption]);

       let arr = [];

       cartItems?.map((item, index) => {
         arr.push({
           productId: item?._id,
           isVariant: item?.isVariant,
           quantity: item?.quantity,
           price: item?.sellingPrice,
           variationId: item?.variation == null ? "" : item?.variation?._id,

           variationName:
             item?.variation == null
               ? ""
               : item?.variation?.attributeOpts?.map((i) => i?.name).join("-"),
         });
       });

       let deliveryFee = 0;

       if (deliveryType == "INSIDE") {
         deliveryFee = inside;
       } else if (deliveryType == "OUTSIDE") {
         deliveryFee = outside;
       } else {
         deliveryFee = 0;
       }

    const handleOrder = async () =>{

      let validate = false;

      if(cartItems?.length == 0){
         toast.error("you must have to add atleast 1 product");
         return;

      }

       if (name == "" || name == undefined) {
         toast.error("name is required");
         return;
       }

       if (phone == "" || phone == undefined) {
         toast.error("Phone number is required");
         return;
       }
       
       if(phone){
         var bdMobilePattern = /^(\+)?(88)?01[3-9]\d{8}$/;
         if (bdMobilePattern.test(phone)) {
          
         } else {
           toast.error("Not a valid phone number");
        
           return;
         }
       }

        if (address == "" || address == undefined) {
          toast.error("Address details is required");
          return;
        }
  
        if (validate == false) {
           setIsLoading(true);
          const res = await postRequest(`order/create-customer-order`, {
            customerId: customerId ? customerId : "",
            products: arr,
            promo: promoOrder ? promoOrder : "",
            payment: {
              paymentType: "Cod",
              amount: 0,
              details: "",
              documentImg: "",
            },
            insideDhaka: deliveryType == "INSIDE" ? true : false,
            customerCharge: {
              totalProductPrice: Number(total),
              discountPrice: promoDiscount ? Number(promoDiscount) : 0,
              deliveryCharge: Number(deliveryFee),
              totalPayTk: 0,
            },
            deliveryAddress: {
              name: name,
              phone: phone,
              address: address,
              customerNotes
            },
          });

          if (res?.success) {
            
            destroyCookie([], "lazmaCart", {
              path: "/",
            });
            destroyCookie([], "promoDiscount", {
              path: "/",
            });
             setOrderObj(res?.data);
             setCookie(null, "orderObj", JSON.stringify(res?.data), {
               maxAge: 30 * 24 * 60 * 60,
               path: "/",
             });
            toast(res?.message);
            setIsLoading(false);
            setCartItems([]);
            setPromoDiscount("");
            setIsRenderMe(!renderMe);
            router.push(`/payment-successful`);
          } else {
            toast.error(res?.message);
            setIsLoading(false);
          }
        }
    }

    useEffect(()=>{
        setCartItems(cartItems);
    },[renderMe])


  useEffect(() => {
    const totalPrice = cartItems?.reduce(
      (a, b) =>
        a +
        (b?.sellingPrice
          ? b?.sellingPrice * b?.quantity
          : b?.sellingPrice * b?.quantity),
      0
    );
    setTotal(totalPrice);
  }, [cartItems, renderMe]);

  const handleChange = (value) => {
    setPromo(value);
  };

  const handlePromo = async () => {
    const res = await postRequest(`promo/verify-promo`, {
      promo: promo,
      totalProductsPrice: total,
    });
    
    if (res?.success) {
      toast(res?.message);
      setPromoOrder(promo)
      setPromoDiscount(res?.data);
      setCookie(null, "promoDiscount", res?.data, {
        maxAge: 30 * 24 * 60 * 60,
        path: "/",
      });
    } else {
      toast.error(res?.message);
    }
  };


  useEffect(()=>{
    if(token){
      const decoded = jwtDecode(token);
      setCustomerId(decoded?.data?._id);
    }
  },[token])

 

 
  const breadCumbs = [
    { name: "Home", url: "/" },
    { name: `checkout`, url: `/checkout` },
  ];




  return (
    <>
      <Head>
        <title>{project_name}/checkout</title>
        <meta name="description" content={project_name} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={`${cartItems?.length == 1 ? 'min-h-[670px]' : 'min-h-[600px]'}  bg-[#ddd] pt-12 sm:pt-14 xls:pt-6 xms:pt-6 xs:pt-6`}>
        <div className="max-w-7xl md:max-w-[62rem] sm:max-w-[46rem] xls:max-w-[25rem] xms:max-w-[22rem] xs:max-w-[19rem] mx-auto">
          {/* <BreadCrumbs breadCumbs={breadCumbs} /> */}
          <div className="grid grid-cols-12 gap-x-7 mb-3 md:gap-x-3 sm:grid-cols-1 xls:grid-cols-1 xms:grid-cols-1 xs:grid-cols-1">
            <div className="col-span-6 hidden sm:block xls:block xms:block xs:block">
              <CartoverviewSection
                cartItems={cartItems}
                setCartItems={setCartItems}
                renderMe={renderMe}
                setIsRenderMe={setIsRenderMe}
                deliveryType={deliveryType}
                inside={inside}
                outside={outside}
                subside={subside}
                promoDiscount={promoDiscount}
                setPromoDiscount={setPromoDiscount}
                handleChange={handleChange}
                handlePromo={handlePromo}
              />

              <PromocodoSection
                handleChange={handleChange}
                handlePromo={handlePromo}
              />

              <PaymentSection
                cartItems={cartItems}
                deliveryType={deliveryType}
                inside={inside}
                outside={outside}
                subside={subside}
                promoDiscount={promoDiscount}
                renderMe={renderMe}
              />
            </div>
            <div className="col-span-6">
              <AddressSection
                name={name}
                setName={setName}
                phone={phone}
                setPhone={setPhone}
                address={address}
                setAddress={setAddress}
                deliveryOption={deliveryOption}
                setDeliveryOption={setDeliveryOption}
                customerNotes= {customerNotes}
                setCustomerNotes={setCustomerNotes}
                namePlaceHolder={namePlaceHolder}
                addressPlaceHolder={addressPlaceHolder}
                mobilePlaceHolder= {mobilePlaceHolder}
                customerNotesPlaceholder={customerNotesPlaceholder}
              />

              <div className="bg-white px-4 pb-1 mt-2 rounded-md">
                <label className="text-xs text-black">
                  Select payment method <span style={{ color: "red" }}>*</span>
                </label>
                <RadioGroup value={selectedValue} onChange={setSelectedValue}>
                  <div className="flex items-center space-x-4 mt-1">
                    {options.map((option) => (
                      <RadioGroup.Option
                        key={option.value}
                        value={option.value}
                        className={({ active, checked }) =>
                          `relative px-2 py-2 xms:px-1 xms:py-1 xs:px-1 xs:py-1  h-[130px] xls:h-[50px] xms:h-[45px] xs:h-[40px] w-[200px] rounded-md cursor-pointer flex items-center ${
                            active ? " text-white bg-gray-200" : "bg-gray-200"
                          } ${checked ? "" : ""}`
                        }
                      >
                        {({ checked }) => (
                          <>
                            <div>
                              <div className="absolute top-2 right-2">
                                {checked && (
                                  <div className="ml-2 w-6 h-6 xms:h-4 xms:w-4 xs:w-4 xs:h-4 bg-green-500 rounded-full flex justify-center  items-center">
                                    <CheckIcon className="w-4 h-4 xms:w-3 xms:h-3 xs:w-3 xs:h-3 text-white  font-semibold" />
                                  </div>
                                )}
                              </div>
                              <div className="xls:pl-[20px] xms:pl-[15px] xs:pl-[10px]">
                                <div className='block xls:hidden xms:hidden xs:hidden'>
                                  <img
                                    src={option.imageUrl}
                                    alt={option.label}
                                    className={`w-[160px] xls:w-[100px]  xls:h-[60px] h-[100px] xms:w-[90px] xms:h-[50px] xs:w-[90px] xs:h-[50px] object-contain ${
                                      checked ? "" : ""
                                    }`}
                                  />
                                </div>

                                <div>
                                  <RadioGroup.Label
                                    as="p"
                                    className="font-medium text-black text-center xls:text-sm xms:text-sm xs:text-xs"
                                  >
                                    {option.label}
                                  </RadioGroup.Label>
                                </div>
                              </div>
                            </div>
                          </>
                        )}
                      </RadioGroup.Option>
                    ))}
                  </div>
                </RadioGroup>
                <div className="py-3 xxl:hidden xl:hidden lg:hidden md:hidden block">
                  {cartItems?.length == 0 ? (
                    <p className="font-semibold text-center text-black tracking-wider">
                      Your total payable amount is ৳ 0
                    </p>
                  ) : (
                    <>
                      {promoDiscount == null || promoDiscount == 0 ? (
                        <p className="font-semibold text-center text-black tracking-wider">
                          Your total payable amount is ৳
                          {total + Number(deliveryFee)}
                        </p>
                      ) : (
                        <p className="font-semibold text-center text-black tracking-wider">
                          Your total payable amount is ৳
                          {total + Number(deliveryFee) - Number(promoDiscount)}
                        </p>
                      )}
                    </>
                  )}
                </div>
                <div className="flex justify-center mb-4 xls:mt-0 xms:mt-0 xs:mt-0 mt-3">
                  {isLoading == true ? (
                    <button className="bg-primary  text-white hover:bg-orange-500 px-8 py-1 rounded-md cursor-pointer flex space-x-1 disabled">
                      <svg
                        className="fill-current text-white animate-spin h-5 w-5"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2C12.5523 2 13 2.44772 13 3V6C13 6.55228 12.5523 7 12 7C11.4477 7 11 6.55228 11 6V3C11 2.44772 11.4477 2 12 2ZM12 17C12.5523 17 13 17.4477 13 18V21C13 21.5523 12.5523 22 12 22C11.4477 22 11 21.5523 11 21V18C11 17.4477 11.4477 17 12 17ZM22 12C22 12.5523 21.5523 13 21 13H18C17.4477 13 17 12.5523 17 12C17 11.4477 17.4477 11 18 11H21C21.5523 11 22 11.4477 22 12ZM7 12C7 12.5523 6.55228 13 6 13H3C2.44772 13 2 12.5523 2 12C2 11.4477 2.44772 11 3 11H6C6.55228 11 7 11.4477 7 12ZM19.0711 19.0711C18.6805 19.4616 18.0474 19.4616 17.6569 19.0711L15.5355 16.9497C15.145 16.5592 15.145 15.9261 15.5355 15.5355C15.9261 15.145 16.5592 15.145 16.9497 15.5355L19.0711 17.6569C19.4616 18.0474 19.4616 18.6805 19.0711 19.0711ZM8.46447 8.46447C8.07394 8.85499 7.44078 8.85499 7.05025 8.46447L4.92893 6.34315C4.53841 5.95262 4.53841 5.31946 4.92893 4.92893C5.31946 4.53841 5.95262 4.53841 6.34315 4.92893L8.46447 7.05025C8.85499 7.44078 8.85499 8.07394 8.46447 8.46447ZM4.92893 19.0711C4.53841 18.6805 4.53841 18.0474 4.92893 17.6569L7.05025 15.5355C7.44078 15.145 8.07394 15.145 8.46447 15.5355C8.85499 15.9261 8.85499 16.5592 8.46447 16.9497L6.34315 19.0711C5.95262 19.4616 5.31946 19.4616 4.92893 19.0711ZM15.5355 8.46447C15.145 8.07394 15.145 7.44078 15.5355 7.05025L17.6569 4.92893C18.0474 4.53841 18.6805 4.53841 19.0711 4.92893C19.4616 5.31946 19.4616 5.95262 19.0711 6.34315L16.9497 8.46447C16.5592 8.85499 15.9261 8.85499 15.5355 8.46447Z"></path>
                      </svg>
                      <p>ordering...</p>
                    </button>
                  ) : (
                    <button
                      className="bg-primary  text-white hover:bg-orange-500 px-8 py-2 rounded-md cursor-pointer"
                      onClick={() => handleOrder()}
                    >
                      Confirm order
                    </button>
                  )}
                </div>
              </div>
            </div>

            <div className="col-span-6  block sm:hidden xls:hidden xms:hidden xs:hidden">
              <CartoverviewSection
                cartItems={cartItems}
                setCartItems={setCartItems}
                renderMe={renderMe}
                setIsRenderMe={setIsRenderMe}
                deliveryType={deliveryType}
                inside={inside}
                outside={outside}
                subside={subside}
                promoDiscount={promoDiscount}
                setPromoDiscount={setPromoDiscount}
              />

              <PromocodoSection
                handleChange={handleChange}
                handlePromo={handlePromo}
              />

              <PaymentSection
                cartItems={cartItems}
                deliveryType={deliveryType}
                inside={inside}
                outside={outside}
                subside={subside}
                promoDiscount={promoDiscount}
                renderMe={renderMe}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Checkout 