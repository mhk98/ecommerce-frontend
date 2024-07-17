import { useStatus } from '@/context/contextStatus';
import { hostname, project_name } from '@/lib/config';
import request from '@/lib/request';
import dayjs from 'dayjs';
import { parseCookies } from 'nookies';

import { useEffect, useState } from 'react';




const PaymentSuccessful = () => {
   
    const cookie = parseCookies();

    const { setCartItems, cartItems, renderMe, orderObj } = useStatus();

    const [orderDetail, setOrderDetail] = useState({});

     const [userPhone, setUserPhone] = useState(null);

     const [orderProducts,setOrderProducts] = useState([]);

    useEffect(() => {
      setCartItems(cartItems);
    }, [renderMe]);

    useEffect(() => {
      if (cookie?.hasOwnProperty("orderObj")) {
        setOrderDetail(JSON.parse(cookie.orderObj));
        // setOrderDetail(JSON.parse(orderObj));
      }
    }, [orderObj]);

  
useEffect(() => {
  const getData = async () => {
    const res = await request(`setting/view`);
    
    setUserPhone(res?.data?.phone);
  };
  getData();
}, []);


useEffect(() => {
  if (orderDetail) {
    let getData = async () => {
      let res = await request(`order/single-order/${orderDetail?.serialId}`);
      setOrderProducts(res?.data?.products);
    };
    getData();
  }
}, [orderDetail]);


  return (
    <div className="min-h-[670px] bg-white">
      <div className="max-w-7xl sm:max-w-[40rem] xls:max-w-[22rem] xms:max-w-[22rem] xs:max-w-[16rem] mx-auto text-black">
        <div className="flex justify-center items-center pt-14 ">
          <div>
            

            <div>
            <div className="flex justify-center my-4">
                <img
                  src="./image/checked.png"
                  className="h-[100px] object-fill"
                  alt='delivery'
                />
              </div>
              <p className="font-semibold text-xl md:text-2xl mt-3 text-green-700 text-center my-4">
              Order Placed Successfully.<br/><span className=' text-base  text-black'> Our customer representative will contact you very soon.</span>
              </p>
            
              <div className="flex xls:justify-center xms:justify-center xs:justify-center bg-gray-100 border border-gray-300">
                <div className=" py-3 px-5 xls:px-2 xms:px-2 xs:px-1 border-r border-gray-300">
                  <p className="uppercase font-semibold mb-4 text-center">summary:</p>
                  <div className="xls:text-sm xms:text-sm xs:text-xs">
                    <div className="flex items-center space-x-2">
                      <div className="font-semibold">Order #</div>
                      <div>{orderDetail?.serialId}</div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="font-semibold">Order date:</div>
                      <div>
                        {dayjs(orderDetail?.createdAt).format("DD-MM-YYYY")}
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="font-semibold">Order Total:</div>
                      <div>৳ {orderDetail?.customerCharge?.TotalBill}</div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-100 py-3 px-5 xls:px-2 xms:px-2 xs:px-1 ">
                  <p className="uppercase font-semibold text-center mb-3">shipping Details:</p>
                  
                  <div className="flex items-center space-x-2">
                      <div className="font-semibold">Name:</div>
                      <div>
                      {orderDetail?.deliveryAddress?.name}
                      </div>
                    </div>
                  <div className="flex items-center space-x-2">
                      <div className="font-semibold">Mobile:</div>
                      <div>
                      {orderDetail?.deliveryAddress?.phone}
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="font-semibold">Address:</div>
                      <div>
                      {orderDetail?.deliveryAddress?.address}
                      </div>
                    </div>
                </div>
              </div>

              <div className=" text-black mt-5 xls:max-w-[24rem] xms:max-w-[22rem] xs:max-w-[19rem] mx-auto overflow-x-auto">
                <table className=" text-left w-full">
                  <thead className="text-xs  uppercase bg-gray-100">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-base uppercase">
                        items shipped
                      </th>
                      <th scope="col" className="px-6 py-3 text-base uppercase">
                        qty
                      </th>
                      <th scope="col" className="px-6 py-3 text-base uppercase">
                        price
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {orderProducts?.map((item, index) => (
                      <tr className="bg-white py-2 " key={index}>
                        <td className="px-6 xls:px-3 xms:px-3 xs:px-3 py-4 font-medium whitespace-nowrap flex space-x-2">
                          <div>
                            <img
                              src={`${hostname}/${item?.galleryImage[0]}`}
                              className="h-4 w-4 object-fill"
                            />
                          </div>
                          <div className="xls:text-sm xms:text-sm xs:text-xs">
                            {item?.name}
                          </div>
                        </td>
                        <td className=" text-center py-4">{item?.quantity}</td>
                        <td className="text-right pr-3 xls:pr-0 xms:pr-0 xs:pr-0 py-4">
                          ৳ {item?.price}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="xls:pr-3 xms:pr-7">
                <div className="flex justify-end space-x-2">
                  <div className="font-semibold">
                    Subtotal ({orderDetail?.products?.length} items)
                  </div>
                  <div>
                    ৳ {orderDetail?.customerCharge?.afterDiscountTotalPrice}
                  </div>
                </div>
                <div className="flex justify-end space-x-2">
                  <div className="font-semibold">Delivery charge</div>
                  <div>৳ {orderDetail?.customerCharge?.deliveryCharge}</div>
                </div>
                <div className="flex justify-end space-x-2">
                  <div className="font-semibold">Order Total</div>
                  <div>৳ {orderDetail?.customerCharge?.TotalBill}</div>
                </div>
              </div>
              <div className="mt-2">
                <div className="bg-primary text-white rounded-md py-2 flex  justify-center">
                  <div className="flex items-center space-x-1">
                    <svg
                      className="h-4 w-4 fill-current text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <path d="M9.36556 10.6821C10.302 12.3288 11.6712 13.698 13.3179 14.6344L14.2024 13.3961C14.4965 12.9845 15.0516 12.8573 15.4956 13.0998C16.9024 13.8683 18.4571 14.3353 20.0789 14.4637C20.599 14.5049 21 14.9389 21 15.4606V19.9234C21 20.4361 20.6122 20.8657 20.1022 20.9181C19.5723 20.9726 19.0377 21 18.5 21C9.93959 21 3 14.0604 3 5.5C3 4.96227 3.02742 4.42771 3.08189 3.89776C3.1343 3.38775 3.56394 3 4.07665 3H8.53942C9.0611 3 9.49513 3.40104 9.5363 3.92109C9.66467 5.54288 10.1317 7.09764 10.9002 8.50444C11.1427 8.9484 11.0155 9.50354 10.6039 9.79757L9.36556 10.6821ZM6.84425 10.0252L8.7442 8.66809C8.20547 7.50514 7.83628 6.27183 7.64727 5H5.00907C5.00303 5.16632 5 5.333 5 5.5C5 12.9558 11.0442 19 18.5 19C18.667 19 18.8337 18.997 19 18.9909V16.3527C17.7282 16.1637 16.4949 15.7945 15.3319 15.2558L13.9748 17.1558C13.4258 16.9425 12.8956 16.6915 12.3874 16.4061L12.3293 16.373C10.3697 15.2587 8.74134 13.6303 7.627 11.6707L7.59394 11.6126C7.30849 11.1044 7.05754 10.5742 6.84425 10.0252Z"></path>
                    </svg>
                    <div className="uppercase pr-4">call us</div>
                  </div>
                  -<div className="pl-2">{userPhone}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PaymentSuccessful 

